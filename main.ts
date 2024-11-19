namespace SpriteKind {
    export const Ending = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.gameOver(false)
})
music.play(music.createSong(hex`0078000408040206001c00010a006400f4016400000400000000000000000000000000000000028a0000000400012504000800012908000c0001250c001000012c10001400012514001800012918001c0001251c002000012720002400012528002c00012c30003400012538003c00012740004400012544004800012c48004c00012550005400012554005800012958005c00012c5c006000012560006400012568006c00012770007400012478007c00012509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80066000000010001000800090001011000110001001800190001012000210001002800290001013000310001003800390001014000410001004800490001015000510001005800590001016000610001006800690001017000710001007800790001017c007d000100`), music.PlaybackMode.LoopingInBackground)
game.splash("Controls:", "Up and down to move.")
game.splash("Left and Right to Turn", "Hold B to Sprint")
game.splash("You Get 5 Minutes to Start.", "Find The Clock To Get an extra 10 minutes")
game.splash("Good Luck!")
tiles.setCurrentTilemap(tilemap`level`)
scene.setBackgroundImage(assets.image`myImage2`)
let mySprite = Render.getRenderSpriteVariable()
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(assets.image`myImage3`, SpriteKind.Ending)
let mySprite4 = sprites.create(assets.image`myImage4`, SpriteKind.Food)
mySprite2.setFlag(SpriteFlag.RelativeToCamera, true)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
tiles.placeOnTile(mySprite3, tiles.getTileLocation(63, 62))
tiles.placeOnRandomTile(mySprite4, assets.tile`End`)
Render.setViewMode(ViewMode.raycastingView)
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
        info.stopCountdown()
        game.gameOver(true)
        game.reset()
    }
})
forever(function () {
    if (mySprite.overlapsWith(mySprite3)) {
        info.stopCountdown()
        game.gameOver(true)
        game.reset()
    }
})
forever(function () {
    if (controller.B.isPressed()) {
        Render.moveWithController(5, 3, 2)
    } else {
        Render.moveWithController(3, 2, 1)
    }
})
