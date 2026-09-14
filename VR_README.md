# RayMaze VR

An unnecessary WebXR port of the original MakeCode Arcade RayMaze.

## Modes

- **WebXR**: real stereoscopic headset rendering through `immersive-vr`.
- **FakeVR**: desktop side-by-side stereo with mouse head-look.
- **Flat Debug**: normal single-camera desktop mode.

## Controls

### WebXR
- Left stick: move
- Right stick: 30-degree snap turn
- Trigger / grip: sprint
- Headset: look around

### FakeVR / Flat
- WASD: move
- Mouse: look
- Shift: sprint
- Q / E: 30-degree snap turn
- F: toggle side-by-side stereo
- R: recenter view (or restart after game over)
- Esc: return to menu

## Gameplay

The build uses the wall layout from the original 64x64 MakeCode tilemap. The timer starts at 5 minutes. The cyan clock adds 10 minutes. Reach the green marker at the original ending coordinate `(63, 62)` to escape.

## Running it

WebXR requires a secure context. GitHub Pages works. Open:

`https://metamysteries8.github.io/RayMaze/vr/`

For local testing, serve the repository over localhost rather than opening the HTML file directly.

This VR build is self-contained: no third-party JS libraries or CDNs.
