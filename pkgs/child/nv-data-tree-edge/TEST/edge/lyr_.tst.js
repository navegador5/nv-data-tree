const assert = require("assert");
const {
    $height_,
    $gen_des_lyr,
    $des_lyr,
    $lst_des_lyr_,
    $some_des_lyrs,
    $own_lyr_,
    $plyr_,
    $breadth_,
    $pbreadth_,
    $rel_own_lyr,
    $rel_plyr,
    $rel_breadth,
    $rel_pbreadth,
    $bfs_,
    $des_bfs_,
    $rel_bpl,
    $bpl_,
    $get_with_bpl,
} = require("../../edge");


var max_size= 4096
var vertexes = new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
var eary = [
      2,  4099,  4100,
  12293, 12294,     7,
  24584, 24585, 24586,
  36875, 36876, 36877,
  36878, 36879, 36880
]


assert($height_(max_size,eary,vertexes,1)===4)
assert($height_(max_size,eary,vertexes,2)===3)
assert($height_(max_size,eary,vertexes,3)===1)
assert($height_(max_size,eary,vertexes,4)===2)
assert($height_(max_size,eary,vertexes,5)===1)
assert($height_(max_size,eary,vertexes,6)===1)
assert($height_(max_size,eary,vertexes,7)===3)
assert($height_(max_size,eary,vertexes,8)===1)
assert($height_(max_size,eary,vertexes,9)===1)
assert($height_(max_size,eary,vertexes,10)===2)
assert($height_(max_size,eary,vertexes,11)===1)
assert($height_(max_size,eary,vertexes,12)===1)
assert($height_(max_size,eary,vertexes,13)===1)
assert($height_(max_size,eary,vertexes,14)===1)
assert($height_(max_size,eary,vertexes,15)===1)
assert($height_(max_size,eary,vertexes,16)===1)

assert.deepStrictEqual(
    Array.from($gen_des_lyr(max_size,eary,vertexes,1)),
[
  [ 1 ],
  [ 2, 7 ],
  [ 3, 4, 8, 9, 10 ],
  [
     5,  6, 11, 12,
    13, 14, 15, 16
  ]
]
)

assert.deepStrictEqual(
    $some_des_lyrs(max_size,eary,vertexes,1,[1,3]),
    [
        [ 2, 7 ],
        [ 5,  6, 11, 12,13, 14, 15, 16]
    ]
)


assert.deepStrictEqual(
    $lst_des_lyr_(max_size,eary,vertexes,2),
    [5,6]
)


assert.deepStrictEqual(
    $des_lyr(max_size,eary,vertexes,7,1),
    [8,9,10]
)

assert.deepStrictEqual(
    $des_lyr(max_size,eary,vertexes,7,2),
    [11,12,13,14,15,16]
)

assert.deepStrictEqual(
    $own_lyr_(max_size,eary,vertexes,3),
    [3,4,8,9,10]
)

assert.deepStrictEqual(
    $plyr_(max_size,eary,vertexes,11),
    [3,4,8,9,10]
)


assert.deepStrictEqual(
    $breadth_(max_size,eary,vertexes,13),
    4 
)

assert.deepStrictEqual(
    $pbreadth_(max_size,eary,vertexes,12),
    4
)



assert.deepStrictEqual(
    $rel_own_lyr(max_size,eary,vertexes,11,1),
    [ 5,6,11, 12, 13, 14, 15, 16 ]
)

assert.deepStrictEqual(
    $rel_own_lyr(max_size,eary,vertexes,11,7),
    [ 11, 12, 13, 14, 15, 16 ]
)

assert.deepStrictEqual(
    $rel_plyr(max_size,eary,vertexes,11,7),
    [ 8,9,10]
)


assert.deepStrictEqual(
    $rel_breadth(max_size,eary,vertexes,11,7),
    0
)


assert.deepStrictEqual(
    $rel_breadth(max_size,eary,vertexes,11,1),
    2
)


assert.deepStrictEqual(
    $bfs_(max_size,eary,vertexes,1),
[
   1,  2,  7,  3,  4,  8,
   9, 10,  5,  6, 11, 12,
  13, 14, 15, 16
]
)

assert.deepStrictEqual(
    $des_bfs_(max_size,eary,vertexes,2),
    [ 2, 3, 4, 5, 6 ]
)

assert.deepStrictEqual($bpl_(max_size,eary,vertexes,1),[])
assert.deepStrictEqual($bpl_(max_size,eary,vertexes,2),[0])
assert.deepStrictEqual($bpl_(max_size,eary,vertexes,3),[0,0])
assert.deepStrictEqual($bpl_(max_size,eary,vertexes,9),[1,3])
assert.deepStrictEqual($bpl_(max_size,eary,vertexes,12),[1,4,3])

assert.deepStrictEqual($rel_bpl(max_size,eary,vertexes,3,2),[0])
assert.deepStrictEqual($rel_bpl(max_size,eary,vertexes,12,7),[2,1])


assert.deepStrictEqual($get_with_bpl(max_size,eary,vertexes,7,[2,1]),12)


