namespace SpriteKind {
    export const Ending = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    errortrigger = 1
    music.play(music.createSoundEffect(WaveShape.Noise, 3900, 3500, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
info.onCountdownEnd(function () {
    game.setGameOverPlayable(false, music.melodyPlayable(music.sonar), false)
    music.stopAllSounds()
    music.play(music.createSong(assets.song`Loss`), music.PlaybackMode.LoopingInBackground)
    game.gameOver(false)
})
let errortrigger = 0
errortrigger = 0
music.stopAllSounds()
music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
music.play(music.createSong(assets.song`Loss`), music.PlaybackMode.LoopingInBackground)
game.splash("Press A to return to reality.")
music.stopAllSounds()
music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
music.play(music.createSong(assets.song`Ressurect`), music.PlaybackMode.UntilDone)
music.stopAllSounds()
music.play(music.createSong(assets.song`maintheme`), music.PlaybackMode.LoopingInBackground)
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
let mySprite5 = 1
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
        if (errortrigger == 1) {
            scene.setBackgroundImage(assets.image`empty`)
            tiles.setCurrentTilemap(tilemap`blank`)
            sprites.destroy(mySprite3, effects.ashes, 5000)
            info.stopCountdown()
            music.play(music.createSoundEffect(WaveShape.Noise, 1246, 1246, 0, 219, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            color.clearFadeEffect()
            color.setPalette(
            color.Black
            )
            sprites.destroy(mySprite4)
            music.stopAllSounds()
            pause(5000)
            color.setPalette(
            color.GrayScale
            )
            music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
            game.showLongText("Error - Your game has experienced a fatal error and cannot continue functioning. Please Reboot your console.", DialogLayout.Full)
            color.setPalette(
            color.Black
            )
            pause(5000)
            tiles.setCurrentTilemap(tilemap`whyamihere`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
            color.startFade(color.Black, color.originalPalette)
            music.play(music.createSoundEffect(WaveShape.Noise, 1, 1, 255, 255, 9999, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.LoopingInBackground)
        } else {
            game.setGameOverEffect(true, effects.starField)
            game.setGameOverPlayable(true, music.melodyPlayable(music.sonar), false)
            info.stopCountdown()
            music.stopAllSounds()
            music.play(music.createSong(assets.song`win`), music.PlaybackMode.LoopingInBackground)
            game.gameOver(true)
            game.reset()
        }
    }
})
forever(function () {
	
})
forever(function () {
    if (controller.B.isPressed()) {
        Render.moveWithController(5, 4, 2)
    } else {
        Render.moveWithController(3, 3, 1)
    }
})
