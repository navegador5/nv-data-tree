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
const l0 = require("nv-data-tree-csp-l0")
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

const getwnd = require("../../index")




assert.deepStrictEqual(
   getwnd.$ance_dist(idpool,fc,rb,pr,lb,lc,[16,1],[],[]),
   3
)
assert.deepStrictEqual(
   getwnd.$ance_dist(idpool,fc,rb,pr,lb,lc,[16,16],[],[]),
   0
)

assert.deepStrictEqual(
   getwnd.$ance_dist(idpool,fc,rb,pr,lb,lc,[16,6],[],[]),
   Infinity
)


assert.deepStrictEqual(
   getwnd.$sib_dist(idpool,fc,rb,pr,lb,lc,[14,16],[],[]),
   2
)
assert.deepStrictEqual(
   getwnd.$sib_dist(idpool,fc,rb,pr,lb,lc,[16,14],[],[]),
   -2
)

assert.deepStrictEqual(
   getwnd.$sib_dist(idpool,fc,rb,pr,lb,lc,[14,6],[],[]),
   Infinity
)

assert.deepStrictEqual(
   getwnd.$sdfs_des_index(idpool,fc,rb,pr,lb,lc,[1,7],[],[]),
   -1
)

assert.deepStrictEqual(
   getwnd.$sdfs_des_index(idpool,fc,rb,pr,lb,lc,[7,1],[],[]),
   6
)
assert.deepStrictEqual(
   getwnd.$sdfs_des_leaf_index(idpool,fc,rb,pr,lb,lc,[7,1],[],[]),
   -1
)
assert.deepStrictEqual(
   getwnd.$sdfs_des_nonleaf_index(idpool,fc,rb,pr,lb,lc,[7,1],[],[]),
   3
)

assert.deepStrictEqual(
   getwnd.$sdfs_des_index(idpool,fc,rb,pr,lb,lc,[2,1],[],[]),
   1
)



assert.deepStrictEqual(
   getwnd.$sdfs_des_index(idpool,fc,rb,pr,lb,lc,[14,10],[],[]),
   4
)
assert.deepStrictEqual(
   getwnd.$sdfs_des_index(idpool,fc,rb,pr,lb,lc,[14,2],[],[]),
   -1
)

assert.deepStrictEqual(
   getwnd.$edfs_des_index(idpool,fc,rb,pr,lb,lc,[14,7],[],[]),
   4
)

assert.deepStrictEqual(
   getwnd.$des_spl(idpool,fc,rb,pr,lb,lc,[5,4],[],[]),
   [0]
)
assert.deepStrictEqual(
   getwnd.$des_spl(idpool,fc,rb,pr,lb,lc,[6,1],[],[]),
   [0,1,1]
)
assert.deepStrictEqual(
   getwnd.$des_spl(idpool,fc,rb,pr,lb,lc,[14,2],[],[]),
   [-1]
)


assert.deepStrictEqual(
   getwnd.$des_offset(idpool,fc,rb,pr,lb,lc,[1,1],[],[]),
   0
)

assert.deepStrictEqual(
   getwnd.$des_offset(idpool,fc,rb,pr,lb,lc,[14,14],[],[]),
   0
)
assert.deepStrictEqual(
   getwnd.$des_offset(idpool,fc,rb,pr,lb,lc,[14,1],[],[]),
   8
)
assert.deepStrictEqual(
   getwnd.$des_offset(idpool,fc,rb,pr,lb,lc,[14,2],[],[]),
   -1
)

