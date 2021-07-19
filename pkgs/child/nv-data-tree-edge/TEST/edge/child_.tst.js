const assert = require("assert");
const {
  $fstch_,
  $lstch_,
  $gen_child_from_fst,
  $gen_child_from_lst,
  $child,
  $some_children,
  $children_,
  $children_count_
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


assert($fstch_ (max_size,eary,vertexes,1) === 2)
assert($fstch_ (max_size,eary,vertexes,2) === 3)
assert($fstch_ (max_size,eary,vertexes,3) === 0)
assert($fstch_ (max_size,eary,vertexes,4) === 5)
assert($fstch_ (max_size,eary,vertexes,5) === 0)
assert($fstch_ (max_size,eary,vertexes,6) === 0)
assert($fstch_ (max_size,eary,vertexes,7) === 8)
assert($fstch_ (max_size,eary,vertexes,8) === 0)
assert($fstch_ (max_size,eary,vertexes,9) === 0)
assert($fstch_ (max_size,eary,vertexes,10) === 11)
assert($fstch_ (max_size,eary,vertexes,11) === 0)
assert($fstch_ (max_size,eary,vertexes,12) === 0)
assert($fstch_ (max_size,eary,vertexes,13) === 0)
assert($fstch_ (max_size,eary,vertexes,14) === 0)
assert($fstch_ (max_size,eary,vertexes,15) === 0)
assert($fstch_ (max_size,eary,vertexes,16) === 0)



assert($lstch_ (max_size,eary,vertexes,1) === 7)
assert($lstch_ (max_size,eary,vertexes,2) === 4)
assert($lstch_ (max_size,eary,vertexes,3) === 0)
assert($lstch_ (max_size,eary,vertexes,4) === 6)
assert($lstch_ (max_size,eary,vertexes,5) === 0)
assert($lstch_ (max_size,eary,vertexes,6) === 0)
assert($lstch_ (max_size,eary,vertexes,7) === 10)
assert($lstch_ (max_size,eary,vertexes,8) === 0)
assert($lstch_ (max_size,eary,vertexes,9) === 0)
assert($lstch_ (max_size,eary,vertexes,10) === 16)
assert($lstch_ (max_size,eary,vertexes,11) === 0)
assert($lstch_ (max_size,eary,vertexes,12) === 0)
assert($lstch_ (max_size,eary,vertexes,13) === 0)
assert($lstch_ (max_size,eary,vertexes,14) === 0)
assert($lstch_ (max_size,eary,vertexes,15) === 0)
assert($lstch_ (max_size,eary,vertexes,16) === 0)


var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,1))
assert.deepStrictEqual(children,[2,7])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,2))
assert.deepStrictEqual(children,[3,4])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,3))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,4))
assert.deepStrictEqual(children,[5,6])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,5))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,6))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,7))
assert.deepStrictEqual(children,[8,9,10])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,8))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,9))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,10))
assert.deepStrictEqual(children,[11,12,13,14,15,16])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,11))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,12))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,13))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,14))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,15))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_fst(max_size,eary,vertexes,16))
assert.deepStrictEqual(children,[ ])


var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,1))
assert.deepStrictEqual(children,[7,2])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,2))
assert.deepStrictEqual(children,[4,3])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,3))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,4))
assert.deepStrictEqual(children,[6,5])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,5))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,6))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,7))
assert.deepStrictEqual(children,[10,9,8])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,8))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,9))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,10))
assert.deepStrictEqual(children,[16,15,14,13,12,11])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,11))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,12))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,13))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,14))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,15))
assert.deepStrictEqual(children,[ ])
var children= Array.from($gen_child_from_lst(max_size,eary,vertexes,16))
assert.deepStrictEqual(children,[ ])


assert($child(max_size,eary,vertexes,1,0)===2)
assert($child(max_size,eary,vertexes,1,1)===7)
assert($child(max_size,eary,vertexes,1,2)===0)



var children= Array.from($some_children(max_size,eary,vertexes,1,[0]))
assert.deepStrictEqual(children,[2])
var children= Array.from($some_children(max_size,eary,vertexes,1,[1]))
assert.deepStrictEqual(children,[7])
var children= Array.from($some_children(max_size,eary,vertexes,1,[2]))
assert.deepStrictEqual(children,[])
var children= Array.from($some_children(max_size,eary,vertexes,3,[0]))
assert.deepStrictEqual(children,[ ])



var children= Array.from($children_(max_size,eary,vertexes,1))
assert.deepStrictEqual(children,[2,7])
var children= Array.from($children_(max_size,eary,vertexes,2))
assert.deepStrictEqual(children,[3,4])
var children= Array.from($children_(max_size,eary,vertexes,3))
assert.deepStrictEqual(children,[ ])
var children= Array.from($children_(max_size,eary,vertexes,4))
assert.deepStrictEqual(children,[5,6])
var children= Array.from($children_(max_size,eary,vertexes,5))
assert.deepStrictEqual(children,[ ])
var children= Array.from($children_(max_size,eary,vertexes,6))
assert.deepStrictEqual(children,[ ])
var children= Array.from($children_(max_size,eary,vertexes,7))
assert.deepStrictEqual(children,[8,9,10])
var children= Array.from($children_(max_size,eary,vertexes,8))
assert.deepStrictEqual(children,[ ])
var children= Array.from($children_(max_size,eary,vertexes,9))
assert.deepStrictEqual(children,[ ])
var children= Array.from($children_(max_size,eary,vertexes,10))
assert.deepStrictEqual(children,[11,12,13,14,15,16])
var children= Array.from($children_(max_size,eary,vertexes,11))
assert.deepStrictEqual(children,[ ])
var children= Array.from($children_(max_size,eary,vertexes,12))
assert.deepStrictEqual(children,[ ])
var children= Array.from($children_(max_size,eary,vertexes,13))
assert.deepStrictEqual(children,[ ])
var children= Array.from($children_(max_size,eary,vertexes,14))
assert.deepStrictEqual(children,[ ])
var children= Array.from($children_(max_size,eary,vertexes,15))
assert.deepStrictEqual(children,[ ])
var children= Array.from($children_(max_size,eary,vertexes,16))
assert.deepStrictEqual(children,[ ])



assert($children_count_ (max_size,eary,vertexes,1) === 2)
assert($children_count_ (max_size,eary,vertexes,2) === 2)
assert($children_count_ (max_size,eary,vertexes,3) === 0)
assert($children_count_ (max_size,eary,vertexes,4) === 2)
assert($children_count_ (max_size,eary,vertexes,5) === 0)
assert($children_count_ (max_size,eary,vertexes,6) === 0)
assert($children_count_ (max_size,eary,vertexes,7) === 3)
assert($children_count_ (max_size,eary,vertexes,8) === 0)
assert($children_count_ (max_size,eary,vertexes,9) === 0)
assert($children_count_ (max_size,eary,vertexes,10) === 6)
assert($children_count_ (max_size,eary,vertexes,11) === 0)
assert($children_count_ (max_size,eary,vertexes,12) === 0)
assert($children_count_ (max_size,eary,vertexes,13) === 0)
assert($children_count_ (max_size,eary,vertexes,14) === 0)
assert($children_count_ (max_size,eary,vertexes,15) === 0)
assert($children_count_ (max_size,eary,vertexes,16) === 0)



