class Node {constructor(n){this.name="nd-"+n}}
var slots = Array.from({length:4096}).map(r=>0)
for(let i=1;i<17;i++) {slots[i]=new Node(i)}
var fc = Array.from({length:4096}).map(r=>0)
var tmp = [
  2, 3, 0,  5, 0, 0,
  8, 0, 0, 11, 0, 0,
  0, 0, 0,  0
]
for(let i=1;i<17;i++) {fc[i]=tmp[i-1]}
var rb = Array.from({length:4096}).map(r=>0)
var tmp = [
   0,  7,  4, 0,  6,  0,
   0,  9, 10, 0, 12, 13,
  14, 15, 16, 0
]
for(let i=1;i<17;i++) {rb[i]=tmp[i-1]}

var pr = Array.from({length:4096}).map(r=>0)
var tmp = [
   0,  1,  2,  2,  4,  4,
   1,  7,  7,  7, 10, 10,
  10, 10, 10, 10
]
for(let i=1;i<17;i++) {pr[i]=tmp[i-1]}

var lc = Array.from({length:4096}).map(r=>0)

var tmp = [
   7, 4, 0,  6, 0, 0,
  10, 0, 0, 16, 0, 0,
   0, 0, 0,  0
]

for(let i=1;i<17;i++) {lc[i]=tmp[i-1]}

var lb = Array.from({length:4096}).map(r=>0)
var tmp = [
   0,  0,  0,  3, 0,  5,
   2,  0,  8,  9, 0, 11,
  12, 13, 14, 15
]

for(let i=1;i<17;i++) {lb[i]=tmp[i-1]}

//const l0 = require("../l0")
const l0 = require("../../index")
const assert = require("assert")

assert.deepStrictEqual(l0.$is_empty(slots,1),false)
assert.deepStrictEqual(l0.$is_empty(slots,16),false)
assert.deepStrictEqual(l0.$is_empty(slots,10),false)
assert.deepStrictEqual(l0.$is_empty(slots,17),true)

assert.deepStrictEqual(l0.$is_fstch(lb,1),true)
assert.deepStrictEqual(l0.$is_fstch(lb,2),true)
assert.deepStrictEqual(l0.$is_fstch(lb,3),true)
assert.deepStrictEqual(l0.$is_fstch(lb,4),false)
assert.deepStrictEqual(l0.$is_fstch(lb,5),true)
assert.deepStrictEqual(l0.$is_fstch(lb,6),false)
assert.deepStrictEqual(l0.$is_fstch(lb,7),false)
assert.deepStrictEqual(l0.$is_fstch(lb,8),true)
assert.deepStrictEqual(l0.$is_fstch(lb,9),false)
assert.deepStrictEqual(l0.$is_fstch(lb,10),false)
assert.deepStrictEqual(l0.$is_fstch(lb,11),true)
assert.deepStrictEqual(l0.$is_fstch(lb,12),false)
assert.deepStrictEqual(l0.$is_fstch(lb,13),false)
assert.deepStrictEqual(l0.$is_fstch(lb,14),false)
assert.deepStrictEqual(l0.$is_fstch(lb,15),false)
assert.deepStrictEqual(l0.$is_fstch(lb,16),false)

assert.deepStrictEqual(l0.$is_lstch(rb,1),true)
assert.deepStrictEqual(l0.$is_lstch(rb,2),false)
assert.deepStrictEqual(l0.$is_lstch(rb,3),false)
assert.deepStrictEqual(l0.$is_lstch(rb,4),true)
assert.deepStrictEqual(l0.$is_lstch(rb,5),false)
assert.deepStrictEqual(l0.$is_lstch(rb,6),true)
assert.deepStrictEqual(l0.$is_lstch(rb,7),true)
assert.deepStrictEqual(l0.$is_lstch(rb,8),false)
assert.deepStrictEqual(l0.$is_lstch(rb,9),false)
assert.deepStrictEqual(l0.$is_lstch(rb,10),true)
assert.deepStrictEqual(l0.$is_lstch(rb,11),false)
assert.deepStrictEqual(l0.$is_lstch(rb,12),false)
assert.deepStrictEqual(l0.$is_lstch(rb,13),false)
assert.deepStrictEqual(l0.$is_lstch(rb,14),false)
assert.deepStrictEqual(l0.$is_lstch(rb,15),false)
assert.deepStrictEqual(l0.$is_lstch(rb,16),true)

assert.deepStrictEqual(l0.$is_root(pr,1),true)
assert.deepStrictEqual(l0.$is_root(pr,2),false)
assert.deepStrictEqual(l0.$is_root(pr,3),false)
assert.deepStrictEqual(l0.$is_root(pr,4),false)
assert.deepStrictEqual(l0.$is_root(pr,5),false)
assert.deepStrictEqual(l0.$is_root(pr,6),false)
assert.deepStrictEqual(l0.$is_root(pr,7),false)
assert.deepStrictEqual(l0.$is_root(pr,8),false)
assert.deepStrictEqual(l0.$is_root(pr,9),false)
assert.deepStrictEqual(l0.$is_root(pr,10),false)
assert.deepStrictEqual(l0.$is_root(pr,11),false)
assert.deepStrictEqual(l0.$is_root(pr,12),false)
assert.deepStrictEqual(l0.$is_root(pr,13),false)
assert.deepStrictEqual(l0.$is_root(pr,14),false)
assert.deepStrictEqual(l0.$is_root(pr,15),false)
assert.deepStrictEqual(l0.$is_root(pr,16),false)

assert.deepStrictEqual(l0.$is_leaf(fc,1),false)
assert.deepStrictEqual(l0.$is_leaf(fc,2),false)
assert.deepStrictEqual(l0.$is_leaf(fc,3),true)
assert.deepStrictEqual(l0.$is_leaf(fc,4),false)
assert.deepStrictEqual(l0.$is_leaf(fc,5),true)
assert.deepStrictEqual(l0.$is_leaf(fc,6),true)
assert.deepStrictEqual(l0.$is_leaf(fc,7),false)
assert.deepStrictEqual(l0.$is_leaf(fc,8),true)
assert.deepStrictEqual(l0.$is_leaf(fc,9),true)
assert.deepStrictEqual(l0.$is_leaf(fc,10),false)
assert.deepStrictEqual(l0.$is_leaf(fc,11),true)
assert.deepStrictEqual(l0.$is_leaf(fc,12),true)
assert.deepStrictEqual(l0.$is_leaf(fc,13),true)
assert.deepStrictEqual(l0.$is_leaf(fc,14),true)
assert.deepStrictEqual(l0.$is_leaf(fc,15),true)
assert.deepStrictEqual(l0.$is_leaf(fc,16),true)

assert.deepStrictEqual(l0.$is_lonely(rb,lb,1),true)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,2),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,3),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,4),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,5),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,6),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,7),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,8),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,9),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,10),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,11),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,12),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,13),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,14),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,15),false)
assert.deepStrictEqual(l0.$is_lonely(rb,lb,16),false)
