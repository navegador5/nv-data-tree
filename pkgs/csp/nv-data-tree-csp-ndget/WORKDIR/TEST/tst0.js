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

const ndget = require("../../index")


assert.deepStrictEqual(
   ndget.$self_(idpool,fc,rb,pr,lb,lc,[16],[],[]),
   16
)

assert.deepStrictEqual(
   ndget.$root_(idpool,fc,rb,pr,lb,lc,[16],[],[]),
   1
)

assert.deepStrictEqual(
   ndget.$parent_(idpool,fc,rb,pr,lb,lc,[16],[],[]),
   10
)
assert.deepStrictEqual(
   ndget.$fstch_(idpool,fc,rb,pr,lb,lc,[10],[],[]),
   11
)

assert.deepStrictEqual(
   ndget.$lstch_(idpool,fc,rb,pr,lb,lc,[10],[],[]),
   16
)

assert.deepStrictEqual(
   ndget.$fstsib_(idpool,fc,rb,pr,lb,lc,[14],[],[]),
   11
)

assert.deepStrictEqual(
   ndget.$lstsib_(idpool,fc,rb,pr,lb,lc,[14],[],[]),
   16
)

assert.deepStrictEqual(
   ndget.$lsib_(idpool,fc,rb,pr,lb,lc,[14],[],[]),
   13
)

assert.deepStrictEqual(
   ndget.$rsib_(idpool,fc,rb,pr,lb,lc,[14],[],[]),
   15
)

assert.deepStrictEqual(
   ndget.$fstpsib_(idpool,fc,rb,pr,lb,lc,[14],[],[]),
   11
)
assert.deepStrictEqual(
   ndget.$lstfsib_(idpool,fc,rb,pr,lb,lc,[14],[],[]),
   16
)
assert.deepStrictEqual(
   ndget.$dlmost_(idpool,fc,rb,pr,lb,lc,[1],[],[]),
   3
)

assert.deepStrictEqual(
   ndget.$drmost_(idpool,fc,rb,pr,lb,lc,[1],[],[]),
   16
)

assert.deepStrictEqual(
   ndget.$rsib_of_fst_ance_having_rsib_(idpool,fc,rb,pr,lb,lc,[6],[],[]),
   7
)
assert.deepStrictEqual(
   ndget.$lsib_of_fst_ance_having_lsib_(idpool,fc,rb,pr,lb,lc,[6],[],[]),
   3
)

assert.deepStrictEqual(
   ndget.$runcle_(idpool,fc,rb,pr,lb,lc,[6],[],[]),
   0
)

assert.deepStrictEqual(
   ndget.$runcle_(idpool,fc,rb,pr,lb,lc,[4],[],[]),
   7
)
assert.deepStrictEqual(
   ndget.$luncle_(idpool,fc,rb,pr,lb,lc,[10],[],[]),
   2
)
assert.deepStrictEqual(
   ndget.$rcin_(idpool,fc,rb,pr,lb,lc,[4],[],[]),
   8
)

assert.deepStrictEqual(
   ndget.$lcin_(idpool,fc,rb,pr,lb,lc,[8],[],[]),
   4
)

assert.deepStrictEqual(
   ndget.$sdfs_next_(idpool,fc,rb,pr,lb,lc,[1],[],[]),
   2
)
assert.deepStrictEqual(
   ndget.$sdfs_next_(idpool,fc,rb,pr,lb,lc,[2],[],[]),
   3
)

assert.deepStrictEqual(
   ndget.$sdfs_next_(idpool,fc,rb,pr,lb,lc,[3],[],[]),
   4
)

assert.deepStrictEqual(
   ndget.$sdfs_next_(idpool,fc,rb,pr,lb,lc,[4],[],[]),
   5
)
assert.deepStrictEqual(
   ndget.$sdfs_next_(idpool,fc,rb,pr,lb,lc,[5],[],[]),
   6
)
assert.deepStrictEqual(
   ndget.$sdfs_next_(idpool,fc,rb,pr,lb,lc,[6],[],[]),
   7
)


assert.deepStrictEqual(
   ndget.$sdfs_prev_(idpool,fc,rb,pr,lb,lc,[16],[],[]),
   15
)

assert.deepStrictEqual(
   ndget.$sdfs_prev_(idpool,fc,rb,pr,lb,lc,[11],[],[]),
   10
)
assert.deepStrictEqual(
   ndget.$sdfs_prev_(idpool,fc,rb,pr,lb,lc,[7],[],[]),
   6
)

assert.deepStrictEqual(
   ndget.$sdfs_prev_(idpool,fc,rb,pr,lb,lc,[1],[],[]),
   0
)

assert.deepStrictEqual(
   ndget.$edfs_next_(idpool,fc,rb,pr,lb,lc,[1],[],[]),
   0
)
assert.deepStrictEqual(
   ndget.$edfs_prev_(idpool,fc,rb,pr,lb,lc,[1],[],[]),
   7
)

assert.deepStrictEqual(
   ndget.$edfs_next_(idpool,fc,rb,pr,lb,lc,[7],[],[]),
   1
)


assert.deepStrictEqual(
   ndget.$edfs_prev_(idpool,fc,rb,pr,lb,lc,[3],[],[]),
   0
)

assert.deepStrictEqual(
   ndget.$edfs_next_(idpool,fc,rb,pr,lb,lc,[3],[],[]),
   5
)
