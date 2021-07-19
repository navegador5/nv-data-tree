const assert = require("assert");
const {
    $gen_edfs_next,
    $edfs_next_,
    $gen_edfs_prev,
    $edfs_prev_,
    $edfs_,
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


var edfs= Array.from($gen_edfs_next(max_size,eary,vertexes,1))

assert.deepStrictEqual(edfs,
    [
     3,  5,  6,  4,  2,  8,
     9, 11, 12, 13, 14, 15,
    16, 10,  7,  1
  ]
);

var edfs = Array.from($gen_edfs_prev(max_size,eary,vertexes,8))

assert.deepStrictEqual(edfs,
    [ 8, 2, 4, 6, 5, 3 ]
);



