namespace SpriteKind {
    export const Ending = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.setGameOverPlayable(false, music.melodyPlayable(music.sonar), false)
    game.gameOver(false)
})
let mySprite5 = 0
game.splash("Controls:", "Up and down to move.")
game.splash("Left and Right to Turn", "Hold B to Sprint")
game.splash("You Get 5 Minutes to Start.", "Find The Clock To Get an extra 10 minutes")
game.splash("Good Luck!")
tiles.setCurrentTilemap(tilemap`level`)
scene.setBackgroundImage(assets.image`myImage2`)
let mySprite = Render.getRenderSpriteVariable()
let mySprite2 = sprites.create(assets.image`center`, SpriteKind.Player)
let mySprite3 = sprites.create(assets.image`myImage3`, SpriteKind.Ending)
let mySprite4 = sprites.create(assets.image`myImage4`, SpriteKind.Food)
mySprite2.setFlag(SpriteFlag.RelativeToCamera, true)
tiles.placeOnRandomTile(mySprite, assets.tile`spawnpoint`)
tiles.placeOnTile(mySprite3, tiles.getTileLocation(63, 62))
tiles.placeOnRandomTile(mySprite4, assets.tile`End`)
Render.setViewMode(ViewMode.raycastingView)
Render.setViewAngleInDegree(100)
info.startCountdown(300)
game.setGameOverEffect(false, effects.slash)
game.setGameOverMessage(true, "Escape Successful")
game.setGameOverMessage(false, "You Ran Out Of Time...")
game.onUpdate(function () {
    if (mySprite5 == 1) {
        Render.setSpriteAttribute(mySprite4, RCSpriteAttribute.ZPosition, 0)
        mySprite4.scale = 0.5
        if (mySprite.overlapsWith(mySprite4)) {
            music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 192, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
            info.changeCountdownBy(600)
            mySprite5 = 0
            sprites.destroy(mySprite4)
        }
    }
})
game.onUpdate(function () {
    if (mySprite.overlapsWith(mySprite3)) {
        game.setGameOverEffect(true, effects.starField)
        game.setGameOverPlayable(true, music.melodyPlayable(music.sonar), false)
        info.stopCountdown()
        music.stopAllSounds()
        game.gameOver(true)
        game.reset()
    }
})
forever(function () {
    if (controller.B.isPressed()) {
        Render.moveWithController(5, 4, 2)
    } else {
        Render.moveWithController(3, 3, 1)
    }
})
