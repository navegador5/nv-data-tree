/*
    1
    ├── 2
    │   ├── 3
    │   └── 4
    │       ├── 5
    │       └── 6
    └── 7
        ├── 8
        ├── 9
        └── 10
            ├── 11
            ├── 12
            ├── 13
            ├── 14
            ├── 15
            └── 16
*/


class Node {constructor(n){this.name="nd-"+n}}
var slots = Array.from({length:4096}).map(r=>0)
for(let i=1;i<17;i++) {slots[i]=new Node(i)}
var idpool = {rented_:slots}


var fc = Array.from({length:4096}).map(r=>0)
var rb = Array.from({length:4096}).map(r=>0)
var pr = Array.from({length:4096}).map(r=>0)
var lc = Array.from({length:4096}).map(r=>0)
var lb = Array.from({length:4096}).map(r=>0)
const l0 = require("../../lib/nv-data-tree-csp-l0/index")
const assert = require("assert")


var sib = l0.$add_rsib(fc,rb,pr,lb,lc,1,2)
assert.deepStrictEqual(sib,0)
var sib = l0.$add_lsib(fc,rb,pr,lb,lc,1,2)
assert.deepStrictEqual(sib,0)

var ch = l0.$append_child(fc,rb,pr,lb,lc,1,2)
var sib = l0.$add_rsib(fc,rb,pr,lb,lc,2,7)

assert.deepStrictEqual(sib,7)
assert.deepStrictEqual(l0.$is_lstch(rb,2),false)
assert.deepStrictEqual(l0.$is_lstch(rb,7),true)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,2),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,7),false)
assert.deepStrictEqual(l0.$is_root(pr,1),true)
assert.deepStrictEqual(l0.$is_root(pr,2),false)
assert.deepStrictEqual(l0.$is_root(pr,7),false)

var sib = l0.$add_rsib(fc,rb,pr,lb,lc,2,7)
assert.deepStrictEqual(sib,0)
var sib = l0.$add_lsib(fc,rb,pr,lb,lc,2,7)
assert.deepStrictEqual(sib,0)


var ch = l0.$append_child(fc,rb,pr,lb,lc,2,4)
var sib = l0.$add_lsib(fc,rb,pr,lb,lc,4,3)
var ch = l0.$prepend_child(fc,rb,pr,lb,lc,4,5)
var sib = l0.$add_rsib(fc,rb,pr,lb,lc,5,6)


var ch = l0.$append_child(fc,rb,pr,lb,lc,7,8)
var sib = l0.$add_rsib(fc,rb,pr,lb,lc,8,9)
var sib = l0.$add_rsib(fc,rb,pr,lb,lc,9,10)

var ch = l0.$append_child(fc,rb,pr,lb,lc,10,16)

var sib = l0.$add_lsib(fc,rb,pr,lb,lc,16,13)
var sib = l0.$add_rsib(fc,rb,pr,lb,lc,13,14)
var sib = l0.$add_rsib(fc,rb,pr,lb,lc,14,15)

var sib = l0.$add_lsib(fc,rb,pr,lb,lc,13,12)
var sib = l0.$add_lsib(fc,rb,pr,lb,lc,12,11)

const ndgen = require("../../lib/nv-data-tree-csp-ndgen/index")


assert.deepStrictEqual(
   Array.from(ndgen.$gen_ance(idpool,fc,rb,pr,lb,lc,[16],[],[])),
   [10,7,1]
)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_ance(idpool,fc,rb,pr,lb,lc,[1],[],[])),
   []
)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_child_from_fst(idpool,fc,rb,pr,lb,lc,[10],[],[])),
   [ 11, 12, 13, 14, 15, 16 ]
)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_child_from_lst(idpool,fc,rb,pr,lb,lc,[10],[],[])),
   [ 16, 15, 14, 13, 12, 11 ]
)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_sib_from_fst(idpool,fc,rb,pr,lb,lc,[13],[],[])),
   [ 11, 12, 13, 14, 15, 16 ]
)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_sib_from_lst(idpool,fc,rb,pr,lb,lc,[14],[],[])),
   [ 16, 15, 14, 13, 12, 11 ]
)


assert.deepStrictEqual(
   Array.from(ndgen.$gen_psib(idpool,fc,rb,pr,lb,lc,[14],[],[])),
   [ 13,12,11 ]
)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_fsib(idpool,fc,rb,pr,lb,lc,[14],[],[])),
   [15,16]
)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_rmost(idpool,fc,rb,pr,lb,lc,[1],[],[])),
   [ 1, 7, 10, 16 ]
)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_lmost(idpool,fc,rb,pr,lb,lc,[1],[],[])),
   [1,2,3]
)




assert.deepStrictEqual(
   Array.from(ndgen.$gen_sdfs_next(idpool,fc,rb,pr,lb,lc,[1],[],[])),
[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15, 16
]
)
assert.deepStrictEqual(
   Array.from(ndgen.$gen_sdfs_next(idpool,fc,rb,pr,lb,lc,[2],[],[])),
   [ 2, 3, 4, 5, 6 ]
)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_sdfs_next(idpool,fc,rb,pr,lb,lc,[3],[],[])),
   [3]
)


assert.deepStrictEqual(
   Array.from(ndgen.$gen_sdfs_prev(idpool,fc,rb,pr,lb,lc,[1],[],[])),
   [1]
)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_sdfs_prev(idpool,fc,rb,pr,lb,lc,[3],[],[])),
   [3,2,1]
)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_sdfs_prev(idpool,fc,rb,pr,lb,lc,[9],[],[])),
[
  9, 8, 7, 6, 5,
  4, 3, 2, 1
]
)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_sdfs_prev_leaf(idpool,fc,rb,pr,lb,lc,[9],[],[])),
[ 9, 8, 6, 5, 3 ]
)
assert.deepStrictEqual(
   Array.from(ndgen.$gen_sdfs_prev_nonleaf(idpool,fc,rb,pr,lb,lc,[9],[],[])),
[ 7,4,2,1 ]
)



assert.deepStrictEqual(
   Array.from(ndgen.$gen_edfs_next(idpool,fc,rb,pr,lb,lc,[1],[],[])),
   [1]
)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_edfs_next(idpool,fc,rb,pr,lb,lc,[2],[],[])),
[
   2,  8,  9, 11, 12,
  13, 14, 15, 16, 10,
   7,  1
]
)


assert.deepStrictEqual(
   Array.from(ndgen.$gen_edfs_prev(idpool,fc,rb,pr,lb,lc,[3],[],[])),
[3]
)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_edfs_prev(idpool,fc,rb,pr,lb,lc,[4],[],[])),
[ 4, 6, 5, 3 ]
)


assert.deepStrictEqual(
   Array.from(ndgen.$gen_edfs_prev_leaf(idpool,fc,rb,pr,lb,lc,[1],[],[])),
[
  16, 15, 14, 13, 12,
  11,  9,  8,  6,  5,
   3
]

)

assert.deepStrictEqual(
   Array.from(ndgen.$gen_edfs_prev_nonleaf(idpool,fc,rb,pr,lb,lc,[1],[],[])),
   [ 1, 7, 10, 2, 4 ]
)

