let mySprite = sprites.create(img`
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
music.play(music.stringPlayable("E B C5 A B G A F ", 400), music.PlaybackMode.LoopingInBackground)
