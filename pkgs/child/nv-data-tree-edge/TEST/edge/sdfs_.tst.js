const assert = require("assert");
const {
    $gen_sdfs_next,
    $gen_sdfs_next_leaf,
    $gen_sdfs_next_nonleaf,
    $sdfs_rel_index,
    $sdfs_rel_leaf_index,
    $sdfs_rel_nonleaf_index,
    $length_,
    $width_,
    $nonleaf_length_,
    $sdfs_prev_,
    $sdfs_next_srch_action_list_,
    $sdfs_next_build_action_list_,
    $gen_sdfs_prev,
    $gen_sdfs_prev_srch_action,
    $sdfs_prev_srch_action_list_,
    $sdfs_prev_build_action_list_,
    $offset_,
    $rel_offset,
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


var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,1))
assert.deepStrictEqual(sdfs,[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15, 16
])

var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,2))
assert.deepStrictEqual(sdfs,[2,3,4,5,6])

var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,3))
assert.deepStrictEqual(sdfs,[3])

var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,4))
assert.deepStrictEqual(sdfs,[4,5,6])

var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,5))
assert.deepStrictEqual(sdfs,[5])

var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,6))
assert.deepStrictEqual(sdfs,[6])


var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,7))
assert.deepStrictEqual(sdfs,[7,8,9,10,11,12,13,14,15,16])


var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,8))
assert.deepStrictEqual(sdfs,[8])

var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,9))
assert.deepStrictEqual(sdfs,[9])

var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,10))
assert.deepStrictEqual(sdfs,[10,11,12,13,14,15,16])

var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,11))
assert.deepStrictEqual(sdfs,[11])

var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,12))
assert.deepStrictEqual(sdfs,[12])

var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,13))
assert.deepStrictEqual(sdfs,[13])


var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,14))
assert.deepStrictEqual(sdfs,[14])


var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,15))
assert.deepStrictEqual(sdfs,[15])


var sdfs= Array.from($gen_sdfs_next(max_size,eary,vertexes,16))
assert.deepStrictEqual(sdfs,[16])

var leafs = Array.from($gen_sdfs_next_leaf(max_size,eary,vertexes,1))
assert.deepStrictEqual(leafs,[3,5,6,8,9,11,12,13,14,15,16])

var nonleafs = Array.from($gen_sdfs_next_nonleaf(max_size,eary,vertexes,1))
assert.deepStrictEqual(nonleafs,[1,2,4,7,10])


assert($sdfs_rel_index(max_size,eary,vertexes,1,1)===0)
assert($sdfs_rel_index(max_size,eary,vertexes,1,2)===-1)
assert($sdfs_rel_index(max_size,eary,vertexes,2,1)===1)
assert($sdfs_rel_index(max_size,eary,vertexes,3,1)===2)
assert($sdfs_rel_index(max_size,eary,vertexes,3,2)===1)
assert($sdfs_rel_index(max_size,eary,vertexes,7,1)===6)
assert($sdfs_rel_index(max_size,eary,vertexes,10,7)===3)
assert($sdfs_rel_index(max_size,eary,vertexes,16,10)===6)

assert($sdfs_rel_leaf_index(max_size,eary,vertexes,1,1)===-1)
assert($sdfs_rel_leaf_index(max_size,eary,vertexes,2,2)===-1)
assert($sdfs_rel_leaf_index(max_size,eary,vertexes,2,1)===-1)
assert($sdfs_rel_leaf_index(max_size,eary,vertexes,3,2)===0)
assert($sdfs_rel_leaf_index(max_size,eary,vertexes,4,2)===-1)
assert($sdfs_rel_leaf_index(max_size,eary,vertexes,5,2)===1)
assert($sdfs_rel_leaf_index(max_size,eary,vertexes,7,1)===-1)
assert($sdfs_rel_leaf_index(max_size,eary,vertexes,10,7)===-1)
assert($sdfs_rel_leaf_index(max_size,eary,vertexes,16,10)===5)

assert($sdfs_rel_nonleaf_index(max_size,eary,vertexes,1,1)===0)
assert($sdfs_rel_nonleaf_index(max_size,eary,vertexes,2,2)===0)
assert($sdfs_rel_nonleaf_index(max_size,eary,vertexes,2,1)===1)
assert($sdfs_rel_nonleaf_index(max_size,eary,vertexes,3,2)===-1)
assert($sdfs_rel_nonleaf_index(max_size,eary,vertexes,4,2)===1)
assert($sdfs_rel_nonleaf_index(max_size,eary,vertexes,5,2)===-1)
assert($sdfs_rel_nonleaf_index(max_size,eary,vertexes,7,1)===3)
assert($sdfs_rel_nonleaf_index(max_size,eary,vertexes,10,7)===1)
assert($sdfs_rel_nonleaf_index(max_size,eary,vertexes,16,10)===-1)


assert($length_(max_size,eary,vertexes,1)===16)
assert($width_(max_size,eary,vertexes,1)===11)
assert($nonleaf_length_(max_size,eary,vertexes,1)===5)


assert($sdfs_prev_(max_size,eary,vertexes,16)===15)
assert($sdfs_prev_(max_size,eary,vertexes,15)===14)
assert($sdfs_prev_(max_size,eary,vertexes,14)===13)
assert($sdfs_prev_(max_size,eary,vertexes,13)===12)
assert($sdfs_prev_(max_size,eary,vertexes,12)===11)
assert($sdfs_prev_(max_size,eary,vertexes,11)===10)
assert($sdfs_prev_(max_size,eary,vertexes,10)===9)
assert($sdfs_prev_(max_size,eary,vertexes,9)===8)
assert($sdfs_prev_(max_size,eary,vertexes,8)===7)
assert($sdfs_prev_(max_size,eary,vertexes,7)===6)
assert($sdfs_prev_(max_size,eary,vertexes,6)===5)
assert($sdfs_prev_(max_size,eary,vertexes,5)===4)
assert($sdfs_prev_(max_size,eary,vertexes,4)===3)
assert($sdfs_prev_(max_size,eary,vertexes,3)===2)
assert($sdfs_prev_(max_size,eary,vertexes,2)===1)
assert($sdfs_prev_(max_size,eary,vertexes,1)===0)




assert.deepStrictEqual(
    $sdfs_next_srch_action_list_(max_size,eary,vertexes,1),
[
  { k: '$self_', d: 0 },
  { k: '$fstch_', d: 0 },
  { k: '$fstch_', d: 0 },
  { k: '$rsib_', d: 1 },
  { k: '$fstch_', d: 0 },
  { k: '$rsib_', d: 1 },
  { k: '$parent_', d: 2 },
  { k: '$parent_', d: 2 },
  { k: '$rsib_', d: 1 },
  { k: '$fstch_', d: 0 },
  { k: '$rsib_', d: 1 },
  { k: '$rsib_', d: 1 },
  { k: '$fstch_', d: 0 },
  { k: '$rsib_', d: 1 },
  { k: '$rsib_', d: 1 },
  { k: '$rsib_', d: 1 },
  { k: '$rsib_', d: 1 },
  { k: '$rsib_', d: 1 }
])


assert.deepStrictEqual(
    $sdfs_next_srch_action_list_(max_size,eary,vertexes,2),
[
  { k: '$self_', d: 0 },    //1->2
  { k: '$fstch_', d: 0 },   //2->3
  { k: '$rsib_', d: 1 },    //3->4
  { k: '$fstch_', d: 0 },   //4->5
  { k: '$rsib_', d: 1 },    //5->6
])



assert.deepStrictEqual(
    $sdfs_next_build_action_list_(max_size,eary,vertexes,1),
[
  { k: '$new', d: 0 },
  { k: '$prepend_child', d: 0 },
  { k: '$prepend_child', d: 0 },
  { k: '$add_rsib', d: 1 },
  { k: '$prepend_child', d: 0 },
  { k: '$add_rsib', d: 1 },
  { k: '$parent_', d: 2 },
  { k: '$parent_', d: 2 },
  { k: '$add_rsib', d: 1 },
  { k: '$prepend_child', d: 0 },
  { k: '$add_rsib', d: 1 },
  { k: '$add_rsib', d: 1 },
  { k: '$prepend_child', d: 0 },
  { k: '$add_rsib', d: 1 },
  { k: '$add_rsib', d: 1 },
  { k: '$add_rsib', d: 1 },
  { k: '$add_rsib', d: 1 },
  { k: '$add_rsib', d: 1 }
])


assert.deepStrictEqual(
    Array.from($gen_sdfs_prev(max_size,eary,vertexes,16)),
    [
       16, 15, 14, 13, 12, 11,
       10,  9,  8,  7,  6,  5,
       4,  3,  2,  1
    ]
)

assert.deepStrictEqual(
    Array.from($gen_sdfs_prev(max_size,eary,vertexes,7)),
    [7,6,5,4,3,2,1]
)

assert.deepStrictEqual(
    $sdfs_prev_srch_action_list_(max_size,eary,vertexes,16),
[
  { k: '$self_', d: 3 },
  { k: '$lsib_', d: 3 },
  { k: '$lsib_', d: 3 },
  { k: '$lsib_', d: 3 },
  { k: '$lsib_', d: 3 },
  { k: '$lsib_', d: 3 },
  { k: '$parent_', d: 2 },
  { k: '$lsib_', d: 3 },
  { k: '$lsib_', d: 3 },
  { k: '$parent_', d: 2 },
  { k: '$lsib_', d: 3 },
  { k: '$lstch_', d: 0 },
  { k: '$lstch_', d: 0 },
  { k: '$lsib_', d: 3 },
  { k: '$parent_', d: 2 },
  { k: '$lsib_', d: 3 },
  { k: '$parent_', d: 2 },
  { k: '$parent_', d: 2 }
]
)

assert.deepStrictEqual(
    $sdfs_prev_build_action_list_(max_size,eary,vertexes,16),
[
  { k: '$new', d: 3 },
  { k: '$add_lsib', d: 3 },
  { k: '$add_lsib', d: 3 },
  { k: '$add_lsib', d: 3 },
  { k: '$add_lsib', d: 3 },
  { k: '$add_lsib', d: 3 },
  { k: '$parent_', d: 2 },
  { k: '$add_lsib', d: 3 },
  { k: '$add_lsib', d: 3 },
  { k: '$parent_', d: 2 },
  { k: '$add_lsib', d: 3 },
  { k: '$append_child', d: 0 },
  { k: '$append_child', d: 0 },
  { k: '$add_lsib', d: 3 },
  { k: '$parent_', d: 2 },
  { k: '$add_lsib', d: 3 },
  { k: '$parent_', d: 2 },
  { k: '$parent_', d: 2 }
]
)


assert.deepStrictEqual($offset_(max_size,eary,vertexes,1),0)
assert.deepStrictEqual($offset_(max_size,eary,vertexes,2),0)
assert.deepStrictEqual($offset_(max_size,eary,vertexes,3),0)
assert.deepStrictEqual($offset_(max_size,eary,vertexes,4),1)
assert.deepStrictEqual($offset_(max_size,eary,vertexes,5),1)
assert.deepStrictEqual($offset_(max_size,eary,vertexes,6),2)
assert.deepStrictEqual($offset_(max_size,eary,vertexes,7),3)
assert.deepStrictEqual($offset_(max_size,eary,vertexes,16),10)


assert.deepStrictEqual($rel_offset(max_size,eary,vertexes,16,7),7)



