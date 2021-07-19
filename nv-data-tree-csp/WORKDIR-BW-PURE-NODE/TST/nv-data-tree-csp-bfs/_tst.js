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

const ndbfs = require("../../lib/nv-data-tree-csp-bfs/index")


assert.deepStrictEqual(
   Array.from(ndbfs.$gen_des_lyr(idpool,fc,rb,pr,lb,lc,[1],[],[])),
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
   Array.from(ndbfs.$gen_lyr(idpool,fc,rb,pr,lb,lc,[16],[],[])),
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
   ndbfs.$des_lyrs_(idpool,fc,rb,pr,lb,lc,[2],[],[]),
[ [ 2 ], [ 3, 4 ], [ 5, 6 ] ]
)

assert.deepStrictEqual(
   ndbfs.$lyrs_(idpool,fc,rb,pr,lb,lc,[2],[],[]),
[
  [ 1 ],
  [ 2, 7 ],
  [ 3, 4, 8, 9, 10 ],
  [
     5,  6, 11, 12,
    13, 14, 15, 16
  ]
])


assert.deepStrictEqual(
   ndbfs.$lst_des_lyr_(idpool,fc,rb,pr,lb,lc,[2],[],[]),
   [5,6]
)
assert.deepStrictEqual(
   ndbfs.$lst_lyr_(idpool,fc,rb,pr,lb,lc,[2],[],[]),
   [
      5,  6, 11, 12,
     13, 14, 15, 16
   ]
)

assert.deepStrictEqual(
   ndbfs.$own_lyr_(idpool,fc,rb,pr,lb,lc,[2],[],[]),
   [2,7]
)

assert.deepStrictEqual(
   ndbfs.$plyr_(idpool,fc,rb,pr,lb,lc,[2],[],[]),
   [1]
)

assert.deepStrictEqual(
   ndbfs.$some_des_lyrs(idpool,fc,rb,pr,lb,lc,[1],[1,3],[]),
[ [ 2, 7 ], [
     5,  6, 11, 12,
    13, 14, 15, 16
  ] ]
)
assert.deepStrictEqual(
   ndbfs.$some_lyrs(idpool,fc,rb,pr,lb,lc,[2],[1,3],[]),
[ [ 2, 7 ], [
     5,  6, 11, 12,
    13, 14, 15, 16
  ] ]
)

assert.deepStrictEqual(
   ndbfs.$des_lyr(idpool,fc,rb,pr,lb,lc,[2],[1],[]),
   [ 3, 4 ]
)
assert.deepStrictEqual(
   ndbfs.$lyr(idpool,fc,rb,pr,lb,lc,[2],[1],[]),
   [ 2, 7 ]
)

assert.deepStrictEqual(
   ndbfs.$des_own_lyr(idpool,fc,rb,pr,lb,lc,[5,2],[],[]),
   [ 5, 6 ]
)

assert.deepStrictEqual(
   ndbfs.$des_plyr(idpool,fc,rb,pr,lb,lc,[5,1],[],[]),
   [ 3, 4, 8, 9, 10 ]
)

const {FLAG_DICT} =require("../../lib/nv-data-tree-actdef/index");

assert.deepStrictEqual(
   ndbfs.$des_bfs_(idpool,fc,rb,pr,lb,lc,[1],[],[]),
[
  [ 1, 5 ],  [ 2, 2 ],
  [ 7, 4 ],  [ 3, 2 ],
  [ 4, 3 ],  [ 8, 3 ],
  [ 9, 3 ],  [ 10, 4 ],
  [ 5, 2 ],  [ 6, 3 ],
  [ 11, 3 ], [ 12, 3 ],
  [ 13, 3 ], [ 14, 3 ],
  [ 15, 3 ], [ 16, 4 ]
])

assert.deepStrictEqual(
   ndbfs.$des_bfs_(idpool,fc,rb,pr,lb,lc,[2],[],[]),
   [ [ 2, 5 ], [ 3, 2 ], [ 4, 4 ], [ 5, 2 ], [ 6, 4 ] ]
)


assert.deepStrictEqual(
   ndbfs.$bfs_(idpool,fc,rb,pr,lb,lc,[3],[],[]),
  [ [ 1, 5 ],  [ 2, 2 ],
  [ 7, 4 ], [ 3, 2 ],
  [ 4, 3 ],  [ 8, 3 ],
  [ 9, 3 ],  [ 10, 4 ],
  [ 5, 2 ],  [ 6, 3 ],
  [ 11, 3 ], [ 12, 3 ],
  [ 13, 3 ], [ 14, 3 ],
  [ 15, 3 ], [ 16, 4 ]]
)

assert.deepStrictEqual(
   ndbfs.$bfs_des_next(idpool,fc,rb,pr,lb,lc,[1,1],[],[]),
   [2,2]
)
var arr = [
    ndbfs.$bfs_des_prev(idpool,fc,rb,pr,lb,lc,[6,2],[],[]),
    ndbfs.$bfs_des_prev(idpool,fc,rb,pr,lb,lc,[5,2],[],[]),
    ndbfs.$bfs_des_prev(idpool,fc,rb,pr,lb,lc,[4,2],[],[]),
    ndbfs.$bfs_des_prev(idpool,fc,rb,pr,lb,lc,[3,2],[],[]),
    ndbfs.$bfs_des_prev(idpool,fc,rb,pr,lb,lc,[2,2],[],[])
]

assert.deepStrictEqual(
    arr,
    [[5,2],[4,4],[3,2],[2,5],[ 0, 5 ]]
)

assert.deepStrictEqual(
   ndbfs.$breadth_(idpool,fc,rb,pr,lb,lc,[9],[],[]),
   3
)
assert.deepStrictEqual(
   ndbfs.$breadth_(idpool,fc,rb,pr,lb,lc,[1],[],[]),
   0
)


assert.deepStrictEqual(
   ndbfs.$des_breadth(idpool,fc,rb,pr,lb,lc,[9,7],[],[]),
   1
)

assert.deepStrictEqual(
   ndbfs.$des_breadth(idpool,fc,rb,pr,lb,lc,[11,1],[],[]),
   2
)

assert.deepStrictEqual(
   ndbfs.$des_breadth(idpool,fc,rb,pr,lb,lc,[11,7],[],[]),
   0
)


assert.deepStrictEqual(
   ndbfs.$des_breadth(idpool,fc,rb,pr,lb,lc,[11,2],[],[]),
   -1
)

assert.deepStrictEqual(
   ndbfs.$des_pbreadth(idpool,fc,rb,pr,lb,lc,[11,7],[],[]),
   2
)

assert.deepStrictEqual(
   ndbfs.$des_pbreadth(idpool,fc,rb,pr,lb,lc,[11,1],[],[]),
   4
)


assert.deepStrictEqual(
   ndbfs.$pbreadth_(idpool,fc,rb,pr,lb,lc,[11],[],[]),
   4
)

assert.deepStrictEqual(
   ndbfs.$pbreadth_(idpool,fc,rb,pr,lb,lc,[1],[],[]),
   -1
)

//
assert.deepStrictEqual(
   ndbfs.$is_lyr_bst(idpool,fc,rb,pr,lb,lc,[1],[],[]),
   true
)
assert.deepStrictEqual(
   ndbfs.$is_lyr_fst(idpool,fc,rb,pr,lb,lc,[2],[],[]),
   true
)
assert.deepStrictEqual(
   ndbfs.$is_lyr_lst(idpool,fc,rb,pr,lb,lc,[2],[],[]),
   false
)
assert.deepStrictEqual(
   ndbfs.$is_lyr_fst(idpool,fc,rb,pr,lb,lc,[7],[],[]),
   false
)
assert.deepStrictEqual(
   ndbfs.$is_lyr_lst(idpool,fc,rb,pr,lb,lc,[7],[],[]),
   true
)


assert.deepStrictEqual(
   ndbfs.$is_des_lyr_bst(idpool,fc,rb,pr,lb,lc,[7,7],[],[]),
   true
)
assert.deepStrictEqual(
   ndbfs.$is_des_lyr_lst(idpool,fc,rb,pr,lb,lc,[4,2],[],[]),
   true
)

assert.deepStrictEqual(
    Array.from(ndbfs.$gen_lyr_next(idpool,fc,rb,pr,lb,lc,[8],[],[])),
    [8,9,10]
)
assert.deepStrictEqual(
    Array.from(ndbfs.$gen_lyr_prev(idpool,fc,rb,pr,lb,lc,[8],[],[])),
    [4,3]
)


assert.deepStrictEqual(
    Array.from(ndbfs.$gen_des_lyr_next(idpool,fc,rb,pr,lb,lc,[4,2],[],[])),
    []
)
assert.deepStrictEqual(
    Array.from(ndbfs.$gen_des_lyr_prev(idpool,fc,rb,pr,lb,lc,[8,7],[],[])),
    []
)

assert.deepStrictEqual(
    Array.from(ndbfs.$gen_des_lyr_next(idpool,fc,rb,pr,lb,lc,[4,7],[],[])),
    []
)


assert.deepStrictEqual(
    ndbfs.$bfs_index_(idpool,fc,rb,pr,lb,lc,[1],[],[]),
    0
)

assert.deepStrictEqual(
    ndbfs.$bfs_index_(idpool,fc,rb,pr,lb,lc,[9],[],[]),
    6
)
assert.deepStrictEqual(
    ndbfs.$bfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[9],[],[]),
    2
)
assert.deepStrictEqual(
    ndbfs.$bfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[10],[],[]),
    4
)
assert.deepStrictEqual(
    ndbfs.$bfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[9],[],[]),
    -1
)

assert.deepStrictEqual(
    ndbfs.$bfs_des_nonleaf_index(idpool,fc,rb,pr,lb,lc,[9,7],[],[]),
    -1
)
assert.deepStrictEqual(
    ndbfs.$bfs_des_leaf_index(idpool,fc,rb,pr,lb,lc,[9,7],[],[]),
    1
)
assert.deepStrictEqual(
    ndbfs.$bfs_des_nonleaf_index(idpool,fc,rb,pr,lb,lc,[4,2],[],[]),
    1
)
assert.deepStrictEqual(
    ndbfs.$bfs_des_nonleaf_index(idpool,fc,rb,pr,lb,lc,[4,7],[],[]),
    -1
)

assert.deepStrictEqual(
    ndbfs.$bpl_(idpool,fc,rb,pr,lb,lc,[9],[],[]),
    [ 0, 1, 3 ]
)

assert.deepStrictEqual(
    ndbfs.$des_bpl(idpool,fc,rb,pr,lb,lc,[9,7],[],[]),
    [ 0, 1,]
)

assert.deepStrictEqual(
    ndbfs.$des_bpl(idpool,fc,rb,pr,lb,lc,[9,2],[],[]),
    [-1]
)

