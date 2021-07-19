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

const cspact = require("../../lib/nv-data-tree-csp-act/index")

const {
    Act,
    srchk_to_buildk,
    FLAG_DICT,
} = require("../../lib/nv-data-tree-actdef/index");



var g = cspact.$gen_sdfs_next_srch_action(idpool,fc,rb,pr,lb,lc,[1],[],[])

assert.deepStrictEqual(
    Array.from(g),
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
]
)

var g = cspact.$gen_sdfs_next_srch_action(idpool,fc,rb,pr,lb,lc,[2],[],[])
assert.deepStrictEqual(
    Array.from(g),
[
  { k: '$self_', d: 0 },
  { k: '$fstch_', d: 0 },
  { k: '$rsib_', d: 1 },
  { k: '$fstch_', d: 0 },
  { k: '$rsib_', d: 1 }
]
)

var g = cspact.$gen_sdfs_prev_srch_action(idpool,fc,rb,pr,lb,lc,[2],[],[])
assert.deepStrictEqual(
    Array.from(g),
[
    { k: '$self_', d: 3, id: 2 },
    { k: '$lstch_', d: 0, id: 4 },
    { k: '$lstch_', d: 0, id: 6 },
    { k: '$lsib_', d: 3, id: 5 },
    { k: '$parent_', d: 2, id: 4 },
    { k: '$lsib_', d: 3, id: 3 },
    { k: '$parent_', d: 2, id: 2 },
    { k: '$parent_', d: 2, id: 1 }
]
)
var g = cspact.$gen_sdfs_prev_build_action(idpool,fc,rb,pr,lb,lc,[2],[],[])
assert.deepStrictEqual(
    Array.from(g),
[
    { k: '$new', d: 3, id: 2 },
    { k: '$append_child', d: 0, id: 4 },
    { k: '$append_child', d: 0, id: 6 },
    { k: '$add_lsib', d: 3, id: 5 },
    { k: '$add_or_goto_parent', d: 2, id: 4 },
    { k: '$add_lsib', d: 3, id: 3 },
    { k: '$parent_', d: 2, id: 2 },
    { k: '$add_or_goto_parent', d: 2, id: 1 }
]

)
var g = cspact.$gen_sdfs_next_build_action(idpool,fc,rb,pr,lb,lc,[1],[],[])
assert.deepStrictEqual(
    Array.from(g),
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
]

)

