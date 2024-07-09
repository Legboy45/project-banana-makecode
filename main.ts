scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e f f . . . 
        . . f f e f e e e e e e f f . . 
        . . f f f e e e e e e e e f . . 
        . . f f f e e e e e e f e f . . 
        . . f f f f e e e e f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e f f f f f f f f e . . . 
        . . e 4 f b b b b b b f 4 e . . 
        . . 4 d f d d d d d d c d 4 . . 
        . . 4 4 f 6 6 6 6 6 6 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e f f . . . 
        . . f f e f e e e e e e f f . . 
        . . f f f e e e e e e e e f . . 
        . . f f f e e e e e e f e f . . 
        . . f f f f e e e e f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e f f f f f f f f e . . . 
        . . e 4 f b b b b b b f 4 e . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e f f . . . 
        . . f f e f e e e e e e f f . . 
        . . f f f e e e e e e e e f . . 
        . . f f f e e e e e e f e f . . 
        . . f f f f e e e e f f f f . . 
        . . f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e e e e e f f . . . 
        . . f f e f e e e e e e f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    50,
    false
    )
    timer.after(300, function () {
        tiles.setTileAt(location, assets.tile`myTile1`)
        CurrentFloor = CurrentFloor + 1
        blockSettings.writeNumber("CurrentFloor", CurrentFloor)
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CurrentThing == "Title Screen") {
        if (!(Title_Menu_On)) {
            Title_Menu_On = true
            if (CurrentFloor == 0) {
                Title_Menu = miniMenu.createMenu(
                miniMenu.createMenuItem("New Run", img`
                    f f f f f b b b b b b b b b b b 
                    e e e e f b b b b b b b b b b b 
                    e e e e f b b b b b b b b b b b 
                    e e e e f b b b b b f f f b b b 
                    e e e e f b b b b f 1 1 1 f b b 
                    e e e e f b b b b f 1 1 1 f b b 
                    e e e e f b b b b f 1 1 1 f b b 
                    e e f e f b b b b b f f f b e b 
                    e e f e f b b b b f b f b f b b 
                    e e e e f b b b f b b f e b b b 
                    e e e e f b b b f b b e b b b b 
                    e e e e f b b b f b e f b b b b 
                    e e e e f b b b b f b f b b b b 
                    e e e e f b 4 4 e b f b f b b b 
                    e e e e f b 4 5 4 b f b f b b b 
                    e e e e f b b 4 4 b f b f b b b 
                    `)
                )
                Title_Menu.setFrame(img`
                    . . . f f f f f f f f f . . . 
                    . f f e e e e e e e e e f f . 
                    . f e e e e e e e e e e e f . 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    . f e e e e e e e e e e e f . 
                    . f f e e e e e e e e e f f . 
                    . . . f f f f f f f f f . . . 
                    `)
                Title_Menu.setPosition(38, 75)
            } else {
                Title_Menu = miniMenu.createMenu(
                miniMenu.createMenuItem("Continue", img`
                    c c c c c c c e c c c c c c c c 
                    c c c c c c e c c c f f f c c c 
                    c c c c c e f c c f 1 1 1 f c c 
                    c c 4 4 e c c f c f 1 1 1 f c c 
                    c c 4 5 4 c c c f f 1 1 1 f c c 
                    c c c 4 4 c c c c f f f f c c c 
                    c c c c c c c c f c c f c c c c 
                    f c c f c c f f c c c c f c c c 
                    f f c c f f c f c c f f c c c c 
                    f f f c c c c c f c c c c c c c 
                    f f f f c c c c f c c c c c c c 
                    f f f f f c c f c c c c c c c c 
                    f f f f f f c c c c c c c c c c 
                    f f f f f f f c c c c c c c c c 
                    f f f f f f f f c c c c c c c c 
                    f f f f f f f f f c c c c c c c 
                    `),
                miniMenu.createMenuItem("New Run", img`
                    f f f f f b b b b b b b b b b b 
                    e e e e f b b b b b b b b b b b 
                    e e e e f b b b b b b b b b b b 
                    e e e e f b b b b b f f f b b b 
                    e e e e f b b b b f 1 1 1 f b b 
                    e e e e f b b b b f 1 1 1 f b b 
                    e e e e f b b b b f 1 1 1 f b b 
                    e e f e f b b b b b f f f b b b 
                    e e f e f b b b f f b f b f f b 
                    e e e e f b b f b b b f b b b f 
                    e e e e f b b b b b b f b b b b 
                    e e e e f b b b b b b f b b b b 
                    e e e e f b b b b b b f b b b b 
                    e e e e f b b b b b b f f b b b 
                    e e e e f b b b b f f b b f b b 
                    e e e e f b b b b b b b b f b b 
                    `)
                )
                Title_Menu.setFrame(img`
                    . . . f f f f f f f f f . . . 
                    . f f e e e e e e e e e f f . 
                    . f e e e e e e e e e e e f . 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    f e e e e e e e e e e e e e f 
                    . f e e e e e e e e e e e f . 
                    . f f e e e e e e e e e f f . 
                    . . . f f f f f f f f f . . . 
                    `)
                Title_Menu.setPosition(38, 75)
            }
        }
    }
})
function HUD () {
	
}
let Title_Menu: miniMenu.MenuSprite = null
let Title_Menu_On = false
let CurrentFloor = 0
let CurrentThing = ""
scroller.scrollBackgroundWithSpeed(15, 0, scroller.BackgroundLayer.Layer0)
scroller.setLayerImage(scroller.BackgroundLayer.Layer4, img`
    ............................................................................................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ............................................................................................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ............................................................................................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ............................................................................................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ......ffffffffff..fffff.........ffffffffff...fffffffff...fffff...fffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffffffffff..fffff........fffffffffff..fffffffffff..fffff...fffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffffffffff..fffff........fffffffffff..fffffffffff..ffffff..fffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffffffffff..fffff........fffffffffff..fffffffffff..fffffff.fffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffffffffff..fffff........fffffffffff..fffffffffff..fffffffffffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffff........fffff........fffff........fffff.fffff..fffffffffffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffff........fffff........ffffffffff...fffff.fffff..fffffffffffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffff........fffff........ffffffffff...fffffffffff..fffffffffffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffff........fffff........ffffffffff...fffffffffff..fffffffffffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffff........fffff........ffffffffff...fffffffffff..fffff.fffffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffff........fffff........ffffffffff...fffffffffff..fffff..ffffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffff........fffff........fffff........fffffffffff..fffff...fffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffffffffff..fffffffffff..fffffffffff..fffff.fffff..fffff...fffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffffffffff..fffffffffff..fffffffffff..fffff.fffff..fffff...fffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffffffffff..fffffffffff..fffffffffff..fffff.fffff..fffff...fffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .....fffffffffff..fffffffffff..fffffffffff..fffff.fffff..fffff...fffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ......ffffffffff...ffffffffff...ffffffffff..fffff.fffff..fffff...fffff......................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ............................................................................................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ............................................................................................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ..............ffffffffff...ffffff...ffffff.............fffff.fffff..ffffffffff..............................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............fffffffffff..fffffff...fffffff............fffff.fffff..fffffffffff.............................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............fffffffffff..ffffffff.ffffffff............fffff.fffff..fffffffffff.............................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............fffffffffff..ffffffff.ffffffff............fffff.fffff..fffffffffff.............................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............fffffffffff..fffffffffffffffff............fffff.fffff..fffffffffff.............................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............fffff........fffffffffffffffff............fffff.fffff..fffff.fffff.............................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............ffffffffff...fffff.fffff.fffff............fffff.fffff..fffffffffff.............................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............ffffffffff...fffff.fffff.fffff..ffffffff..fffff.fffff..fffffffffff.............................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............ffffffffff...fffff..fff..fffff..ffffffff..fffff.fffff..fffffffffff.............................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............ffffffffff...fffff..fff..fffff..ffffffff..fffff.fffff..fffffffffff.............................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............ffffffffff...fffff.......fffff............fffff.fffff..ffffffffff..............................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............fffff........fffff.......fffff............fffff.fffff..fffff...................................fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............fffffffffff..fffff.......fffff............fffffffffff..fffff......................6............fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............fffffffffff..fffff.......fffff...........6fffffffffff..fffff.....................66............fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............fffffffffff..fffff.......fffff...........6fffffffffff..fffff.....................66............fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............fffffffffff..fffff.......fffff..........66fffffffffff..fffff....................6666...........fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ...........666ffffffffff..fffff.......fffff........66666fffffffff...fffff..................66666............fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .............666.....................................666.....................................666............fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ............66666...................................66666...................................66666...........fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ............6666666.................................6666666.................................6666666.........fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ...........666666..................................666666..................................666666...........fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .........666666666...............................666666666...............................666666666..........fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ...........66666666................................66666666................................66666666.........fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ..........6666666.................................6666666.................................6666666...........fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ............666666......6...........................666666......6...........................666666......6...fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ..........666666666.....6.........................666666666.....6.........................666666666.....6...fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .........66666666666...66........................66666666666...66........................66666666666...66...fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .......66666666666......66.....................66666666666......66.....................66666666666......66..fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .........666666666.....66........................666666666.....66........................666666666.....66...fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .........6666666......6666.......................6666666......6666.......................6666666......6666..fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ........66966666666..666666.....................66.66666666..666666.....................66966666666..666666.fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ..........6666666666...66...........6.............6666666666...66...........6.............6666666666...66...fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ........66666666666..666666.........6...........66666666666..666666.........6...........66666666666..666666.fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ...6...666666666666.66666666.......666.....6...666666666666.66666666.......666.....6...666666666666.66666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ...66.....6666666666666666..........66.....66.....6666666666666666..........66.....66.....6666666666666666..fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ..66....66666666666666666666.......66.....66....66666666666666666666.......66.....66....66666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ...66..6666666666666666666666.....6666.....66..6666666666666666666666.....6666.....66..666666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ..6666666666666666666666666........6666...6666666666666666666666666........6666...6666666666666666666666666.fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ...66666666666666666666666666.....6666.....66666666666666666666666666.....6666.....6666666666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ...666666666666666666666666666...666666....666666666666666666666666666...666666....6666666666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ..66666666666666666666666666......6666....66666666666666666666666666......6666....66666666666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    .66666666666666666666666666666..6666666..66666666666666666666666666666..6666666..666666666666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ..66666666666666666666666666666..6666666..66666666666666666666666666666..6666666..66666666666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ..6666666666666666666666666666..66666666..6666666666666666666666666666..66666666..66666666666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6666666666666666666666666666666.666666666666666666666666666666666666666.666666666666666666666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666ffffffffff66ffffffffff66fffffffffff6fffffffffff6fffffffffff6666fffffffff666666666666666666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666fffffffffff6fffffffffff6fffffffffff6fffffffffff6fffffffffff666fffffffffff66666666666666666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666fffffffffff6fffffffffff6fffffffffff6fffffffffff6fffffffffff666fffffffffff66666666666666666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666fffffffffff6fffffffffff6fffffffffff6fffffffffff6fffffffffff666fffffffffff66666666666666666666666666666666fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666fffffffffff6fffffffffff6fffffffffff6fffffffffff6fffffffffff666fffffffffff66666666666666666666666666666666fffeeefffffffffffffffffffffffffffffffffeeeeeeeeeeeee
    666fffff6fffff6fffff6fffff6fffff6666666fffff6666666fffff666666666fffff6fffff66666666666666666666666666666666fffeeefffffffffffffffffffffffffffffffffeeeeeeeeeeeee
    666fffffffffff6fffffffffff6ffffffffff66fffffffffff6fffffffffff666fffff6fffff66666666666666666666666666666666fffeeefffffffffffffffffffffffffffffffffeeeeeeeeeeeee
    666fffffffffff6fffffffffff6ffffffffff66fffffffffff6fffffffffff666fffffffffff66666666666666666666666666666666fffeeefffeeeeeeeeeeeefffeeeeeeeeeeeefffeeeeeeeeeeeee
    666fffffffffff6fffffffffff6ffffffffff66fffffffffff6fffffffffff666fffffffffff66666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666fffffffffff6fffffffffff6ffffffffff66fffffffffff6fffffffffff666fffffffffff66666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666ffffffffff66ffffffffff66ffffffffff66fffffffffff6fffffffffff666fffffffffff66666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666fffff6666666fffffffff666fffff6666666666666fffff6666666fffff666fffffffffff66666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666fffff6666666fffffffffff6fffffffffff6fffffffffff6fffffffffff666fffff6fffff66666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666fffff6666666fffffffffff6fffffffffff6fffffffffff6fffffffffff666fffff6fffff66666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666fffff6666666fffffffffff6fffffffffff6fffffffffff6fffffffffff666fffff6fffff66666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666fffff6666666fffff6fffff6fffffffffff6fffffffffff6fffffffffff666fffff6fffff66666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666fffff6666666fffff6fffff6fffffffffff6fffffffffff6fffffffffff666fffff6fffff66666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffeeeeeeeeeeeefffeeeeeeeeeeeefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffeeeeeeeefffefffefffeeeeeeeefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffeeeeeeeefffefffefffeeeeeeeefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffeeeeeeeefffefffefffeeeeeeeefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffeeeeeeeeeeeefffeeeeeeeeeeeefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffecccceeccccefffecccceeccccefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffeeefffeeeeeeeeeeeefffeeeeeeeeeeeefffeeeeeeeeeeeee
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    66666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    6666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    66666666666666666666666666666666666666666666666666666666666666666666666666666ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    6666666666666666666666666666666666666666666666666666666666666666666666666666ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    666666666666666666666666666666666666666666666666666666666666666666666666666ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    66666666666666666666666666666666666666666666666666666666666666666666666666ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    6666666666666666666666666666666666666666666666666666666666666666666666666ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    666666666666666666666666666666666666666666666666666666666666666666666666ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999991111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999991111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999991111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999991111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999991111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999991111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999111111111991111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999911111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111199999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111119999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111119999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111119999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111119999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111199999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111199999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111199999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111199999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111119999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111199999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111199999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111111199999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111199999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
CurrentThing = "Title Screen"
if (blockSettings.readNumber("CurrentFloor") != 0) {
    CurrentFloor = blockSettings.readNumber("CurrentFloor")
} else {
    blockSettings.writeNumber("CurrentFloor", 0)
    CurrentFloor = blockSettings.readNumber("CurrentFloor")
}
game.onUpdate(function () {
	
})
game.onUpdate(function () {
    if (CurrentThing == "Title Screen") {
        if (Title_Menu_On) {
            Title_Menu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            	
            })
        }
    }
})
