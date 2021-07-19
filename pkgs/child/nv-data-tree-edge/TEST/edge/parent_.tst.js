const assert = require("assert");
const {
    $root_,
    $parent_,
    $luncle_,
    $runcle_,
    $gen_ance,
    $ance,
    $some_ances,
    $ances_,
    $plance,
    $some_plances,
    $plances_,
    $depth_,
    $ance_dist,
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

for(let id of vertexes) {assert($root_ (max_size,eary,vertexes,id) === 1)}



assert($parent_ (max_size,eary,vertexes,1) === 0)
assert($parent_ (max_size,eary,vertexes,2) === 1)
assert($parent_ (max_size,eary,vertexes,3) === 2)
assert($parent_ (max_size,eary,vertexes,4) === 2)
assert($parent_ (max_size,eary,vertexes,5) === 4)
assert($parent_ (max_size,eary,vertexes,6) === 4)
assert($parent_ (max_size,eary,vertexes,7) === 1)
assert($parent_ (max_size,eary,vertexes,8) === 7)
assert($parent_ (max_size,eary,vertexes,9) === 7)
assert($parent_ (max_size,eary,vertexes,10) === 7)
assert($parent_ (max_size,eary,vertexes,11) === 10)
assert($parent_ (max_size,eary,vertexes,12) === 10)
assert($parent_ (max_size,eary,vertexes,13) === 10)
assert($parent_ (max_size,eary,vertexes,14) === 10)
assert($parent_ (max_size,eary,vertexes,15) === 10)
assert($parent_ (max_size,eary,vertexes,16) === 10)

assert($ance_dist(max_size,eary,vertexes,16,10),1)
assert($ance_dist(max_size,eary,vertexes,16,7),2)
assert($ance_dist(max_size,eary,vertexes,16,1),3)



var ances= Array.from($gen_ance(max_size,eary,vertexes,16))
assert.deepStrictEqual(ances,[ 10, 7, 1 ])
var ances= Array.from($gen_ance(max_size,eary,vertexes,6))
assert.deepStrictEqual(ances,[ 4,2,1 ])
var ances= Array.from($gen_ance(max_size,eary,vertexes,3))
assert.deepStrictEqual(ances,[ 2,1 ])
var ances= Array.from($gen_ance(max_size,eary,vertexes,1))
assert.deepStrictEqual(ances,[ ])


assert($ance(max_size,eary,vertexes,16,0)===10)
assert($ance(max_size,eary,vertexes,16,1)===7)
assert($ance(max_size,eary,vertexes,16,2)===1)
assert($ance(max_size,eary,vertexes,16,3)===0)
assert($ance(max_size,eary,vertexes,1,0)===0)

var plances = $plances_(max_size,eary,vertexes,16)
assert.deepStrictEqual(plances,[1,7,10,16])

assert($luncle_(max_size,eary,vertexes,16)===9)
assert($runcle_(max_size,eary,vertexes,4)===7)

