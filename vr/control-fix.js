(() => {
  "use strict";

  // The original VR prototype had extra desktop bindings (Q/E/F) that made
  // FakeVR feel needlessly complicated. Block them before the main game's
  // key handler sees them; mouse-look already handles turning and FakeVR is
  // intentionally always stereo.
  window.addEventListener("keydown", event => {
    if (event.code === "KeyQ" || event.code === "KeyE" || event.code === "KeyF") {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);

  // The first prototype treated trigger/grip as sprint. Remap the values the
  // game reads so sprint is driven only by the LEFT thumbstick click instead.
  if (typeof XRInputSource === "undefined") return;

  const gamepadDescriptor = Object.getOwnPropertyDescriptor(XRInputSource.prototype, "gamepad");
  if (!gamepadDescriptor || typeof gamepadDescriptor.get !== "function" || !gamepadDescriptor.configurable) return;

  const nativeGetGamepad = gamepadDescriptor.get;
  const proxyCache = new WeakMap();

  function buttonCopy(button, pressed = button && button.pressed) {
    if (!button) return { pressed: !!pressed, touched: !!pressed, value: pressed ? 1 : 0 };
    return {
      pressed: !!pressed,
      touched: !!button.touched,
      value: pressed ? Math.max(1, Number(button.value) || 0) : 0
    };
  }

  Object.defineProperty(XRInputSource.prototype, "gamepad", {
    configurable: true,
    enumerable: gamepadDescriptor.enumerable,
    get() {
      const nativeGamepad = nativeGetGamepad.call(this);
      if (!nativeGamepad) return nativeGamepad;

      let perHand = proxyCache.get(nativeGamepad);
      if (!perHand) {
        perHand = Object.create(null);
        proxyCache.set(nativeGamepad, perHand);
      }

      const hand = this.handedness || "none";
      if (perHand[hand]) return perHand[hand];

      perHand[hand] = new Proxy(nativeGamepad, {
        get(target, prop) {
          if (prop === "buttons") {
            const nativeButtons = target.buttons || [];
            const buttons = Array.from(nativeButtons);

            // raymaze-vr.js only checks buttons 0/1 for sprint. Feed the left
            // stick-click state (WebXR standard mapping button 3) into slot 0,
            // and force the old trigger/grip slot 1 off.
            const stickClick = hand === "left" ? nativeButtons[3] : null;
            buttons[0] = buttonCopy(nativeButtons[0], !!stickClick?.pressed);
            buttons[1] = buttonCopy(nativeButtons[1], false);
            return buttons;
          }

          const value = Reflect.get(target, prop, target);
          return typeof value === "function" ? value.bind(target) : value;
        }
      });

      return perHand[hand];
    }
  });
})();
