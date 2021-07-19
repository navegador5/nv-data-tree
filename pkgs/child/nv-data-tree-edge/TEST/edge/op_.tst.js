const assert = require("assert");
const {SNidPool} = require("nv-facutil-basic")
const {fixy} = require("nv-number-basic")

const {
    $depth_,
    $noop,
    $new,
    $add_parent,
    $connto,
    $add_lsib,
    $add_lsibs,
    $add_rsib,
    $add_rsibs,
    $append_child,
    $append_children,
    $prepend_child,
    $prepend_children,
    $insert_child_at,
    $insert_children_at,
    $disconn,
    $rm_fstch,
    $rm_lstch,
    $rm_child,
    $rm_some_children,
    $rm_children,
    $erase,
    $erase_r,
    $replace_with,
    $replace_child_at,
    $clone,
    $sdfs_,
    $swap
} = require("../../edge");


var max_size= 4096
var vertexes = new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
var eary = []

var should_be = [
      2,  4099,  4100,
  12293, 12294,     7,
  24584, 24585, 24586,
  36875, 36876, 36877,
  36878, 36879, 36880
]

$append_child(max_size,eary,vertexes,1,2);
$append_child(max_size,eary,vertexes,2,3);
$append_child(max_size,eary,vertexes,2,4);
$append_child(max_size,eary,vertexes,4,5);
$append_child(max_size,eary,vertexes,4,6);
$append_child(max_size,eary,vertexes,1,7);
$append_child(max_size,eary,vertexes,7,8);
$append_child(max_size,eary,vertexes,7,9);
$append_child(max_size,eary,vertexes,7,10);
$append_child(max_size,eary,vertexes,10,11);
$append_child(max_size,eary,vertexes,10,12);
$append_child(max_size,eary,vertexes,10,13);
$append_child(max_size,eary,vertexes,10,14);
$append_child(max_size,eary,vertexes,10,15);
$append_child(max_size,eary,vertexes,10,16);

assert.deepStrictEqual(eary,should_be)


var eary = []

var eary = []
$append_child(max_size,eary,vertexes,1,2)
$append_child(max_size,eary,vertexes,2,3)
$append_child(max_size,eary,vertexes,2,4)
$append_child(max_size,eary,vertexes,4,5)
$add_rsib(max_size,eary,vertexes,5,6)
$append_child(max_size,eary,vertexes,1,7)
$append_child(max_size,eary,vertexes,7,8)
$add_rsib(max_size,eary,vertexes,8,9)
$add_rsib(max_size,eary,vertexes,9,10)
$append_child(max_size,eary,vertexes,10,11)
$add_rsib(max_size,eary,vertexes,11,12)
$add_rsib(max_size,eary,vertexes,12,13)
$add_rsib(max_size,eary,vertexes,13,14)
$add_rsib(max_size,eary,vertexes,14,15)
$add_rsib(max_size,eary,vertexes,15,16)

assert.deepStrictEqual(eary,should_be)


var eary = []
$append_child(max_size,eary,vertexes,1,2)
$append_child(max_size,eary,vertexes,2,4)
$add_lsib(max_size,eary,vertexes,4,3)
$append_child(max_size,eary,vertexes,4,6)
$add_lsib(max_size,eary,vertexes,6,5)
$append_child(max_size,eary,vertexes,1,7)
$append_child(max_size,eary,vertexes,7,10)
$add_lsib(max_size,eary,vertexes,10,9)
$add_lsib(max_size,eary,vertexes,9,8)
$append_child(max_size,eary,vertexes,10,16)
$add_lsib(max_size,eary,vertexes,16,15)
$add_lsib(max_size,eary,vertexes,15,14)
$add_lsib(max_size,eary,vertexes,14,13)
$add_lsib(max_size,eary,vertexes,13,12)
$add_lsib(max_size,eary,vertexes,12,11)

assert.deepStrictEqual(new Set(eary),new Set(should_be))

assert(eary.indexOf(2)<eary.indexOf(7))
assert(eary.indexOf(4099)<eary.indexOf(4100))
assert(eary.indexOf(12293)<eary.indexOf(12294))
assert(eary.indexOf(24584)<eary.indexOf(24585))
assert(eary.indexOf(24585)<eary.indexOf(24586))
assert(eary.indexOf(36875)<eary.indexOf(36876))
assert(eary.indexOf(36876)<eary.indexOf(36877))
assert(eary.indexOf(36877)<eary.indexOf(36878))
assert(eary.indexOf(36878)<eary.indexOf(36879))
assert(eary.indexOf(36879)<eary.indexOf(36880))


var eary = []

$add_parent(max_size,eary,vertexes,16,10)
$add_lsib(max_size,eary,vertexes,16,15)
$add_lsib(max_size,eary,vertexes,15,11)
$add_lsib(max_size,eary,vertexes,15,12)
$add_rsib(max_size,eary,vertexes,12,14)
$add_rsib(max_size,eary,vertexes,12,13)
$add_lsib(max_size,eary,vertexes,10,9,7,true)
$add_lsib(max_size,eary,vertexes,9,8)
$connto(max_size,eary,vertexes,6,4)
$add_lsib(max_size,eary,vertexes,6,5)
$append_children(max_size,eary,vertexes,1,[2,7])
$prepend_children(max_size,eary,vertexes,2,[3,4])


assert.deepStrictEqual(new Set(eary),new Set(should_be))



assert(eary.indexOf(2)<eary.indexOf(7))
assert(eary.indexOf(4099)<eary.indexOf(4100))
assert(eary.indexOf(12293)<eary.indexOf(12294))
assert(eary.indexOf(24584)<eary.indexOf(24585))
assert(eary.indexOf(24585)<eary.indexOf(24586))
assert(eary.indexOf(36875)<eary.indexOf(36876))
assert(eary.indexOf(36876)<eary.indexOf(36877))
assert(eary.indexOf(36877)<eary.indexOf(36878))
assert(eary.indexOf(36878)<eary.indexOf(36879))
assert(eary.indexOf(36879)<eary.indexOf(36880))




var eary = []

$add_lsibs(max_size,eary,vertexes,16,[11,12,13,14,15],10,true)
$add_rsibs(max_size,eary,vertexes,8,[9,10],7,true)
$prepend_child(max_size,eary,vertexes,2,4)
$prepend_child(max_size,eary,vertexes,2,3)
$prepend_children(max_size,eary,vertexes,4,[5,6])
$append_children(max_size,eary,vertexes,1,[2,7])


assert.deepStrictEqual(new Set(eary),new Set(should_be))

assert(eary.indexOf(2)<eary.indexOf(7))
assert(eary.indexOf(4099)<eary.indexOf(4100))
assert(eary.indexOf(12293)<eary.indexOf(12294))
assert(eary.indexOf(24584)<eary.indexOf(24585))
assert(eary.indexOf(24585)<eary.indexOf(24586))
assert(eary.indexOf(36875)<eary.indexOf(36876))
assert(eary.indexOf(36876)<eary.indexOf(36877))
assert(eary.indexOf(36877)<eary.indexOf(36878))
assert(eary.indexOf(36878)<eary.indexOf(36879))
assert(eary.indexOf(36879)<eary.indexOf(36880))


var eary = []



$append_children(max_size,eary,vertexes,1,[2,7])
$prepend_child(max_size,eary,vertexes,2,4)
$prepend_child(max_size,eary,vertexes,2,3)
$prepend_children(max_size,eary,vertexes,4,[5,6])
$append_child(max_size,eary,vertexes,7,8)
$append_child(max_size,eary,vertexes,7,10)
$insert_child_at(max_size,eary,vertexes,7,9,1)
$append_child(max_size,eary,vertexes,10,11)
$append_child(max_size,eary,vertexes,10,16)
$insert_children_at(max_size,eary,vertexes,10,[12,13,14,15],1)


assert.deepStrictEqual(new Set(eary),new Set(should_be))

assert(eary.indexOf(2)<eary.indexOf(7))
assert(eary.indexOf(4099)<eary.indexOf(4100))
assert(eary.indexOf(12293)<eary.indexOf(12294))
assert(eary.indexOf(24584)<eary.indexOf(24585))
assert(eary.indexOf(24585)<eary.indexOf(24586))
assert(eary.indexOf(36875)<eary.indexOf(36876))
assert(eary.indexOf(36876)<eary.indexOf(36877))
assert(eary.indexOf(36877)<eary.indexOf(36878))
assert(eary.indexOf(36878)<eary.indexOf(36879))
assert(eary.indexOf(36879)<eary.indexOf(36880))



////rm

var eary = []



$append_children(max_size,eary,vertexes,1,[2,7])
$prepend_child(max_size,eary,vertexes,2,4)
$prepend_child(max_size,eary,vertexes,2,3)
$prepend_children(max_size,eary,vertexes,4,[5,6])
$append_child(max_size,eary,vertexes,7,8)
$append_child(max_size,eary,vertexes,7,10)
$insert_child_at(max_size,eary,vertexes,7,9,1)
$append_child(max_size,eary,vertexes,10,11)
$append_child(max_size,eary,vertexes,10,16)
$insert_children_at(max_size,eary,vertexes,10,[12,13,14,15],1)

$disconn(max_size,eary,vertexes,2)

assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,1),
    [
        1,  7,  8,  9, 10,
        11, 12, 13, 14, 15,
        16
    ]
)

$rm_fstch(max_size,eary,vertexes,7)

assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,1),
    [
        1,  7, 9, 10,
        11, 12, 13, 14, 15,
        16
    ]
)

$rm_lstch(max_size,eary,vertexes,10)

assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,1),
    [
        1,  7, 9, 10,
        11, 12, 13, 14, 15,
    ]
)

$rm_child(max_size,eary,vertexes,10,3)

assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,1),
    [
        1,  7, 9,10,
        11, 12, 13, 15,
    ]
)

$rm_some_children(max_size,eary,vertexes,10,[0,3])
assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,1),
    [
        1,  7, 9,10,
        12, 13
    ]
)

$rm_children(max_size,eary,vertexes,10)

assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,1),
    [1,7, 9,10]
)



////

var eary = []



$append_children(max_size,eary,vertexes,1,[2,7])
$prepend_child(max_size,eary,vertexes,2,4)
$prepend_child(max_size,eary,vertexes,2,3)
$prepend_children(max_size,eary,vertexes,4,[5,6])
$append_child(max_size,eary,vertexes,7,8)
$append_child(max_size,eary,vertexes,7,10)
$insert_child_at(max_size,eary,vertexes,7,9,1)
$append_child(max_size,eary,vertexes,10,11)
$append_child(max_size,eary,vertexes,10,16)
$insert_children_at(max_size,eary,vertexes,10,[12,13,14,15],1)

var idpool = new SNidPool(undefined,vertexes)

assert.deepStrictEqual(
    $clone(max_size,eary,vertexes,2,idpool),
    [ 17, [ 17, 18, 19, 20, 21 ] ]
)



assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,17),
    [ 17, 18, 19, 20, 21 ]
)

$replace_with(max_size,eary,vertexes,3,17)

assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,1),
[
   1,  2, 17, 18, 19, 20, 21,
   4,  5,  6,  7,  8,  9, 10,
  11, 12, 13, 14, 15, 16
]
)

$clone(max_size,eary,vertexes,4,idpool)

$replace_child_at(max_size,eary,vertexes,10,22,1)


assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,1),
[
   1,  2, 17, 18, 19, 20, 21,
   4,  5,  6,  7,  8,  9, 10,
  11, 22, 23, 24, 13, 14, 15,
  16
]
)

////

$clone(max_size,eary,vertexes,2,idpool)


assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,17),
    [ 17, 18, 19, 20, 21 ]
)

$replace_with(max_size,eary,vertexes,3,17)

assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,1),
[
   1,  2, 17, 18, 19, 20, 21,
   4,  5,  6,  7,  8,  9, 10,
  11, 22,23,24, 13, 14, 15, 16
]
)

$clone(max_size,eary,vertexes,4,idpool)

$replace_child_at(max_size,eary,vertexes,10,22,1)



assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,1),
[
   1,  2, 17, 18, 19, 20, 21,
   4,  5,  6,  7,  8,  9, 10,
  11, 22, 23, 24, 13, 14, 15,
  16
]
)


assert.deepStrictEqual($erase(max_size,eary,vertexes,7),[8,9,10])



assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,1),
[
   1,  2, 17, 18, 19,
  20, 21,  4,  5,  6
]
)

assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,10),
[
  10, 11, 22, 23, 24,
  13, 14, 15, 16
]
)


assert.deepStrictEqual(
    ($erase_r(max_size,eary,vertexes,10)),
    [
  10, 11, 22, 13, 14,
  15, 16, 23, 24
])



$swap(max_size,eary,vertexes,4,17)

assert.deepStrictEqual(
    $sdfs_(max_size,eary,vertexes,1),
[
   1,  2,  4,  5,  6,
  17, 18, 19, 20, 21
]
)


////
var max_size= 4096
var vertexes = new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
var eary = []

var should_be = [
      2,  4099,  4100,
  12293, 12294,     7,
  24584, 24585, 24586,
  36875, 36876, 36877,
  36878, 36879, 36880
]

$append_child(max_size,eary,vertexes,1,2);
$append_child(max_size,eary,vertexes,2,3);
$append_child(max_size,eary,vertexes,2,4);
$append_child(max_size,eary,vertexes,4,5);
$append_child(max_size,eary,vertexes,4,6);
$append_child(max_size,eary,vertexes,1,7);
$append_child(max_size,eary,vertexes,7,8);
$append_child(max_size,eary,vertexes,7,9);
$append_child(max_size,eary,vertexes,7,10);
$append_child(max_size,eary,vertexes,10,11);
$append_child(max_size,eary,vertexes,10,12);
$append_child(max_size,eary,vertexes,10,13);
$append_child(max_size,eary,vertexes,10,14);
$append_child(max_size,eary,vertexes,10,15);
$append_child(max_size,eary,vertexes,10,16);


var children = $rm_children(max_size,eary,vertexes,1)
$append_children(max_size,eary,vertexes,1,children)

assert($depth_(max_size,eary,vertexes,3),2)
