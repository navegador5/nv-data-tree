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

const {
    Act,
    srchk_to_buildk,
    FLAG_DICT,
} = require("nv-data-tree-actdef");


const cspact = require("nv-data-tree-csp-act");
const sedfs = require("../../index")


assert.deepStrictEqual(sedfs.$sedfs_next(idpool,fc,rb,pr,lb,lc,[1],[],[0]),[2,0])
assert.deepStrictEqual(sedfs.$sedfs_next(idpool,fc,rb,pr,lb,lc,[2],[],[0]),[3,0])
assert.deepStrictEqual(sedfs.$sedfs_next(idpool,fc,rb,pr,lb,lc,[3],[],[0]),[3,1])
assert.deepStrictEqual(sedfs.$sedfs_next(idpool,fc,rb,pr,lb,lc,[3],[],[1]),[4,0])
assert.deepStrictEqual(sedfs.$sedfs_next(idpool,fc,rb,pr,lb,lc,[4],[],[0]),[5,0])
assert.deepStrictEqual(sedfs.$sedfs_next(idpool,fc,rb,pr,lb,lc,[5],[],[0]),[5,1])
assert.deepStrictEqual(sedfs.$sedfs_next(idpool,fc,rb,pr,lb,lc,[5],[],[1]),[6,0])
assert.deepStrictEqual(sedfs.$sedfs_next(idpool,fc,rb,pr,lb,lc,[6],[],[0]),[6,1])
assert.deepStrictEqual(sedfs.$sedfs_next(idpool,fc,rb,pr,lb,lc,[2],[],[1]),[7,0])
assert.deepStrictEqual(sedfs.$sedfs_next(idpool,fc,rb,pr,lb,lc,[1],[],[1]),[0,1])


assert.deepStrictEqual(sedfs.$sedfs_next_after_close_(idpool,fc,rb,pr,lb,lc,[1],[],[]),[0,1])
assert.deepStrictEqual(sedfs.$sedfs_next_after_close_(idpool,fc,rb,pr,lb,lc,[2],[],[]),[7,0])
assert.deepStrictEqual(sedfs.$sedfs_next_after_open_(idpool,fc,rb,pr,lb,lc,[1],[],[]),[2,0])
assert.deepStrictEqual(sedfs.$sedfs_next_after_open_(idpool,fc,rb,pr,lb,lc,[2],[],[]),[3,0])


assert.deepStrictEqual(sedfs.$sedfs_(idpool,fc,rb,pr,lb,lc,[1],[],[]),[
  [ 1, 0  ],  [ 2, 0 ],  [ 3, 0 ],
  [ 3, 1  ],  [ 4, 0 ],  [ 5, 0 ],
  [ 5, 1  ],  [ 6, 0 ],  [ 6, 1 ],
  [ 4, 1  ],  [ 2, 1 ],  [ 7, 0 ],
  [ 8, 0  ],  [ 8, 1 ],  [ 9, 0 ],
  [ 9, 1  ],  [ 10, 0 ], [ 11, 0 ],
  [ 11, 1 ],  [ 12, 0 ], [ 12, 1 ],
  [ 13, 0 ],  [ 13, 1 ], [ 14, 0 ],
  [ 14, 1 ],  [ 15, 0 ], [ 15, 1 ],
  [ 16, 0 ],  [ 16, 1 ], [ 10, 1 ],
  [ 7, 1  ],  [ 1, 1 ]
])




assert.deepStrictEqual(sedfs.$sedfs_prev_before_close_(idpool,fc,rb,pr,lb,lc,[1],[],[]),[7,1])
assert.deepStrictEqual(sedfs.$sedfs_prev_before_close_(idpool,fc,rb,pr,lb,lc,[2],[],[]),[4,1])

assert.deepStrictEqual(sedfs.$sedfs_prev_before_open_(idpool,fc,rb,pr,lb,lc,[1],[],[]),[0,0])
assert.deepStrictEqual(sedfs.$sedfs_prev_before_open_(idpool,fc,rb,pr,lb,lc,[2],[],[]),[1,0])

assert.deepStrictEqual(
    sedfs.$sedfs_prev(idpool,fc,rb,pr,lb,lc,[1],[],[0]),
    [0,0]
)


assert.deepStrictEqual(
    sedfs.$sedfs_prev(idpool,fc,rb,pr,lb,lc,[1],[],[1]),
    [7,1]
)

assert.deepStrictEqual(
    sedfs.$sedfs_prev(idpool,fc,rb,pr,lb,lc,[7],[],[1]),
    [10,1]
)
assert.deepStrictEqual(
    Array.from(sedfs.$gen_sedfs_prev(idpool,fc,rb,pr,lb,lc,[1],[],[1])),
[
  [ 1, 1 ],  [ 7, 1 ],  [ 10, 1 ],
  [ 16, 1 ], [ 16, 0 ], [ 15, 1 ],
  [ 15, 0 ], [ 14, 1 ], [ 14, 0 ],
  [ 13, 1 ], [ 13, 0 ], [ 12, 1 ],
  [ 12, 0 ], [ 11, 1 ], [ 11, 0 ],
  [ 10, 0 ], [ 9, 1 ],  [ 9, 0 ],
  [ 8, 1 ],  [ 8, 0 ],  [ 7, 0 ],
  [ 2, 1 ],  [ 4, 1 ],  [ 6, 1 ],
  [ 6, 0 ],  [ 5, 1 ],  [ 5, 0 ],
  [ 4, 0 ],  [ 3, 1 ],  [ 3, 0 ],
  [ 2, 0 ],  [ 1, 0 ]
])



