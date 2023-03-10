controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 9 c . . . . . . 
        . . . . c c c 1 1 c c c . . . . 
        . . c c b c 1 1 1 1 c c c c . . 
        . c b b 1 b 1 1 1 1 b 1 b b c . 
        . c b 1 1 b b 1 1 b b 1 1 b c . 
        . . f 1 1 1 b b b b 1 1 1 c . . 
        . . f f 1 1 1 1 1 1 1 1 f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . e e f f f f f f e e . . . 
        . . e b c b 1 b b 1 b f b e . . 
        . . e e f 9 1 1 1 1 9 f e e . . 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
        . . . . . . . c c . . . . . . . 
        . . . . . . c 9 c . . . . . . . 
        . . . . c c 1 1 1 c c c . . . . 
        . . c c c c 1 1 1 1 c b c c . . 
        . c b b 1 b 1 1 1 1 b 1 b b c . 
        . c b 1 1 b b 1 1 b b 1 1 b c . 
        . . c 1 1 1 b b b b 1 1 1 f . . 
        . . . f 1 1 1 1 1 1 1 1 f f . . 
        . . . . f e e e f b e e f f . . 
        . . . . f e b b f 1 b f f f . . 
        . . . . f b b b b b b f f . . . 
        . . . . . f e e e e f e e . . . 
        . . . . . f 1 b b e b b e . . . 
        . . . . f 9 1 1 1 e b b e . . . 
        . . . . c b 1 1 1 1 e e . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Hebel1`, function (sprite, location) {
    game.showLongText("Da ist irgendwas passiert glaube ich...", DialogLayout.Top)
    player1.y += 10
    tiles.setWallAt(tiles.getTileLocation(9, 24), false)
    tiles.setWallAt(tiles.getTileLocation(10, 24), false)
    tiles.setWallAt(tiles.getTileLocation(10, 25), false)
    tiles.setWallAt(tiles.getTileLocation(9, 25), false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Hebel2`, function (sprite, location) {
    game.showLongText("Da ist irgendwas passiert glaube ich...", DialogLayout.Top)
    player1.y += 10
    tiles.setWallAt(tiles.getTileLocation(1, 24), false)
    tiles.setWallAt(tiles.getTileLocation(1, 23), false)
    tiles.setWallAt(tiles.getTileLocation(2, 24), false)
    tiles.setWallAt(tiles.getTileLocation(9, 23), false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(a, sprites.dungeon.floorLight5)
    tiles.placeOnRandomTile(s, sprites.dungeon.floorLight4)
    tiles.placeOnRandomTile(t, sprites.dungeon.floorLightMoss)
    tiles.placeOnRandomTile(u, sprites.dungeon.floorLight1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 9 c . . . . . . 
        . . . . c c c 1 1 c c c . . . . 
        . . c c b c 1 1 1 1 c c c c . . 
        . c b b 1 b 1 1 1 1 b 1 b b c . 
        . c b 1 1 b b 1 1 b b 1 1 b c . 
        . . f 1 1 1 b b b b 1 1 1 c . . 
        . . f f 1 1 1 1 1 1 1 1 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b c b 1 b b 1 b f b e . . 
        . . e e f 9 1 1 1 1 9 f e e . . 
        . . . . c b 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
        . . . . . . . c c . . . . . . . 
        . . . . . . . c 9 c . . . . . . 
        . . . . c c c 1 1 1 c c . . . . 
        . . c c b c 1 1 1 1 c c c c . . 
        . c b b 1 b 1 1 1 1 b 1 b b c . 
        . c b 1 1 b b 1 1 b b 1 1 b c . 
        . . f 1 1 1 b b b b 1 1 1 c . . 
        . . f f 1 1 1 1 1 1 1 1 f . . . 
        . . f f e e b f e e e f . . . . 
        . . f f f b 1 f b b e f . . . . 
        . . . f f b b b b b b f . . . . 
        . . . e e f e e e e f . . . . . 
        . . . e b b e b b 1 f . . . . . 
        . . . e b b e 1 1 1 9 f . . . . 
        . . . . e e 1 1 1 1 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Hebel3`, function (sprite, location) {
    game.showLongText("Da ist irgendwas passiert glaube ich...", DialogLayout.Top)
    player1.y += 10
    tiles.setWallAt(tiles.getTileLocation(9, 24), false)
    tiles.setWallAt(tiles.getTileLocation(10, 24), false)
    tiles.setWallAt(tiles.getTileLocation(10, 25), false)
    tiles.setWallAt(tiles.getTileLocation(9, 25), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Level4`)
    tiles.placeOnRandomTile(player1, sprites.dungeon.floorLight3)
})
let u: Sprite = null
let t: Sprite = null
let s: Sprite = null
let a: Sprite = null
let player1: Sprite = null
tiles.setCurrentTilemap(tilemap`Level1`)
player1 = sprites.create(img`
    . . . . . . . c c c . . . . . . 
    . . . . . . c b 9 c . . . . . . 
    . . . . c c c 1 1 c c c . . . . 
    . . c c b c 1 1 1 1 c c c c . . 
    . c b b 1 b 1 1 1 1 b 1 b b c . 
    . c b 1 1 b b 1 1 b b 1 1 b c . 
    . . f 1 1 1 b b b b 1 1 1 c . . 
    . . f f 1 1 1 1 1 1 1 1 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b c b 1 b b 1 b f b e . . 
    . . e e f 9 1 1 1 1 9 f e e . . 
    . . . . c b 1 1 1 1 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(player1, sprites.dungeon.floorLight3)
player1.setVelocity(45, 45)
controller.moveSprite(player1)
a = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111ffff.....
    ......fffcdb1bc111cf....
    ....fc111cbfbf1b1b1f....
    ....f1b1b1ffffbfbfbf....
    ....fbfbfffffff.........
    .........fffff..........
    ..........fff...........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(s, sprites.dungeon.floorLight5)
a.follow(player1, 40)
s = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .....fffc1111111f.......
    ...fc111cd1111111f......
    ...f1b1b1b1111dddf......
    ...fbfbffcf11fcddf......
    ......fcf111111bbf......
    .......ccbdb1b1fcf......
    .......fffbfbfdff.......
    ........ffffffff........
    ........fffffffffff.....
    .........fffffc111cf....
    .........fffff1b1b1f....
    ..........ffffbfbfbf....
    ...........ffff.........
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(s, sprites.dungeon.floorLight1)
s.follow(player1, 40)
t = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(t, sprites.dungeon.floorLightMoss)
t.follow(player1, 40)
u = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd111111111f......
    ......fd11111111df......
    ......fd11111111df......
    ......fcdd1111ddcff.....
    .......fbcf11fcbfbbf....
    .......ffbdb1bdffff.....
    ........fcbfbfdf........
    ........ffffffff........
    ......ffffffffff........
    .....fcb1bcffff.........
    ......ffbff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(u, sprites.dungeon.floorLight4)
u.follow(player1, 40)
forever(function () {
    scene.cameraFollowSprite(player1)
})
