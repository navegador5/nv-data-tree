const assert = require("assert");
const {
    $sedfs_next,
    $gen_sedfs_next,
    $sedfs_prev,
    $gen_sedfs_prev,
    $sedfs_,
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


var sedfs= Array.from($sedfs_(max_size,eary,vertexes,1))


assert.deepStrictEqual(sedfs,
[
  [ 1, 0 ],  [ 2, 0 ],  [ 3, 0 ],
  [ 3, 1 ],  [ 4, 0 ],  [ 5, 0 ],
  [ 5, 1 ],  [ 6, 0 ],  [ 6, 1 ],
  [ 4, 1 ],  [ 2, 1 ],  [ 7, 0 ],
  [ 8, 0 ],  [ 8, 1 ],  [ 9, 0 ],
  [ 9, 1 ],  [ 10, 0 ], [ 11, 0 ],
  [ 11, 1 ], [ 12, 0 ], [ 12, 1 ],
  [ 13, 0 ], [ 13, 1 ], [ 14, 0 ],
  [ 14, 1 ], [ 15, 0 ], [ 15, 1 ],
  [ 16, 0 ], [ 16, 1 ], [ 10, 1 ],
  [ 7, 1 ],  [ 1, 1 ]
]
);

