let variables = sprites.create(img`
    .......ffffffffffffffffff.......
    ......ffeeeeeeeeeeeeeeeeff......
    .....ffeeeeeeeeeeeeeeeeeeff.....
    ....ffeeeeeeeeeeeeeeeeeeeeff....
    ...ffeeeeeeeeeeeeeeeeeeeeeeff...
    ..ffeeeeeeeeeeeeeeeeeeeeeeeeff..
    .ffeeeeeeeeeeeeeeeeeeeeeeeeeeff.
    .feeeeeeeeeeeeeeeeeeeeeeeeeeeef.
    .f2e2eee2e22e2eeee2e22e2eee2e2f.
    .f2ee222ef22ee2222ee22fe222ee2f.
    .f22eeeeffe22eeeeee22effeeee22f.
    .ff222fffefe22222222efefff222ff.
    ..fffeeeeeffe222222effeeeeefff..
    ..feeee22e2fffeeeefff2e22eeeef..
    ..feeee22e2fffeeeefff2e22eeeef..
    ..f22e22e2effeeeeeeffe2e22e22e..
    .e22e22e22fffeeeeeefff22e22e22e.
    .eee22222fffeeeeeeeefff22222eee.
    .e22222effffeeeeeeeeffffe22222e.
    ..ffeffffffeeeeeeeeeeffffffeff..
    ..f2eefffffeeeeeeeeeefffffee2f..
    ..f222ffffeeeeeeeeeeeeffff222f..
    .eeeeeffffbbbddddddbbbffffeeeee.
    .e22222ffbbddddddddddbbff22222e.
    ee22222efbddddddddddddbfe22222ee
    e22e2e22ebbddddddddddbbe22e2e22e
    eeeeeeeebbbbbddddddbbbbbeeeeeeee
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    cccccccccccccccccccccccccccccccc
    .cccccccccccccccccccccccccccccc.
    ..cccccccccccccccccccccccccccc..
    `, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
music.play(music.stringPlayable("E B C5 A B G A F ", 40), music.PlaybackMode.LoopingInBackground)
music.play(music.createSoundEffect(
WaveShape.Sine,
5000,
1,
255,
0,
200,
SoundExpressionEffect.None,
InterpolationCurve.Linear
), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundColor(7)
info.changeScoreBy(2)
controller.player2.moveSprite(variables, 0, 100)
