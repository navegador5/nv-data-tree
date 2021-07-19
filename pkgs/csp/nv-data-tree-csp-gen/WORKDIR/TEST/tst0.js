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

const gn = require("../../index")

var ances = Array.from(gn.$ance(pr,1))
assert.deepStrictEqual(ances,[])
var ances = Array.from(gn.$ance(pr,2))
assert.deepStrictEqual(ances,[1])
var ances = Array.from(gn.$ance(pr,3))
assert.deepStrictEqual(ances,[2,1])
var ances = Array.from(gn.$ance(pr,6))
assert.deepStrictEqual(ances,[4,2,1])
var ances = Array.from(gn.$ance(pr,16))
assert.deepStrictEqual(ances,[10,7,1])


var drmosts = Array.from(gn.$drmost(lc,1))
assert.deepStrictEqual(drmosts,[ 1,7, 10, 16 ])

var dlmosts = Array.from(gn.$dlmost(fc,1))
assert.deepStrictEqual(dlmosts,[ 1,2,3 ])

var chs = Array.from(gn.$fch(fc,rb,10))
assert.deepStrictEqual(chs,[ 11, 12, 13, 14, 15, 16 ])

var chs = Array.from(gn.$lch(lc,lb,10))
assert.deepStrictEqual(chs,[ 16, 15, 14, 13, 12, 11 ])

var psibs = Array.from(gn.$psib(lb,14))
assert.deepStrictEqual(psibs,[ 13, 12, 11 ])

var fsibs = Array.from(gn.$fsib(rb,14))
assert.deepStrictEqual(fsibs,[ 15, 16 ])

var sibs = Array.from(gn.$sibff(fc,rb,pr,14))
assert.deepStrictEqual(sibs,[ 11, 12, 13, 14, 15, 16 ])

var sibs = Array.from(gn.$sibfl(lc,lb,pr,14))
assert.deepStrictEqual(sibs,[ 16, 15, 14, 13, 12, 11 ])

var sibs = Array.from(gn.$sibff(fc,rb,pr,1))
assert.deepStrictEqual(sibs,[ 1])


var lyr = Array.from(gn.$nlyr(fc,rb,[1]))
assert.deepStrictEqual(lyr,[ 2,7 ])
var lyr = Array.from(gn.$nlyr(fc,rb,[2,7]))
assert.deepStrictEqual(lyr,[ 3, 4, 8, 9, 10 ])
var lyr = Array.from(gn.$nlyr(fc,rb,[ 3, 4, 8, 9, 10 ]))
assert.deepStrictEqual(lyr,[
   5,  6, 11, 12,
  13, 14, 15, 16
])
var lyr = Array.from(gn.$nlyr(fc,rb,[
   5,  6, 11, 12,
  13, 14, 15, 16
]))
assert.deepStrictEqual(lyr,[])

var m = Array.from(gn.$mat(fc,rb,1))

assert.deepStrictEqual(m,[
  [ 1 ],
  [ 2, 7 ],
  [ 3, 4, 8, 9, 10 ],
  [
     5,  6, 11, 12,
    13, 14, 15, 16
  ]
])

var plans = gn.reverse_then_push_self(gn.$ance(pr,16),16)
assert.deepStrictEqual(plans,[ 1, 7, 10, 16 ])

assert.deepStrictEqual(gn.count(gn.$ance(pr,16)),3)



var lst = gn.lst0(gn.$sibff(fc,rb,pr,14),11)
assert.deepStrictEqual(lst,16)

var which = gn.which(gn.$sibff(fc,rb,pr,14),2)
assert.deepStrictEqual(which,13)

assert.deepStrictEqual(gn.seq(gn.$sibff(fc,rb,pr,14),10),-1)
assert.deepStrictEqual(gn.seq(gn.$sibff(fc,rb,pr,14),11),0)
assert.deepStrictEqual(gn.seq(gn.$sibff(fc,rb,pr,14),13),2)
assert.deepStrictEqual(gn.seq(gn.$sibff(fc,rb,pr,14),17),-1)


var some = gn.some(gn.$sibff(fc,rb,pr,14),[0,2,4])
assert.deepStrictEqual(some,[11,13,15])

var bl = gn.of(gn.$ance(pr,16),1)  //1 is ance of 16
assert.deepStrictEqual(bl,true)
var bl = gn.of(gn.$ance(pr,16),2)  //2 is not ance of 16
assert.deepStrictEqual(bl,false)

var bl = gn.of(gn.$drmost(lc,16),2)  //2 is not ance of 16
assert.deepStrictEqual(bl,false)
var bl = gn.of(gn.$drmost(lc,2),6)   //6 is drmost of 2
assert.deepStrictEqual(bl,true)


var bl = gn.of(gn.$fch(fc,rb,2),4)
assert.deepStrictEqual(bl,true)
var bl = gn.of(gn.$fch(fc,rb,1),2)     //2 is child of 1
assert.deepStrictEqual(bl,true)
var bl = gn.of(gn.$lch(fc,rb,1),2)     //2 is child of 1
assert.deepStrictEqual(bl,true)

var dist = gn.dist_after(gn.$fsib(rb,12),12,14)
assert.deepStrictEqual(dist,2)
var dist = gn.dist_after(gn.$fsib(rb,12),12,16)
assert.deepStrictEqual(dist,4)
var dist = gn.dist_after(gn.$fsib(rb,12),12,11)
assert.deepStrictEqual(dist,Infinity)
var dist = gn.dist_after(gn.$fsib(rb,12),12,17)
assert.deepStrictEqual(dist,Infinity)

var dist = gn.dist_dual(gn.$sibff(fc,rb,pr,16),12,14)
assert.deepStrictEqual(dist,2)
var dist = gn.dist_dual(gn.$sibff(fc,rb,pr,16),14,12)
assert.deepStrictEqual(dist,-2)

var dist = gn.dist_dual(gn.$sibff(fc,rb,pr,16),14,9)
assert.deepStrictEqual(dist,Infinity)

var dist = gn.dist_dual(gn.$sibff(fc,rb,pr,16),9,14)
assert.deepStrictEqual(dist,Infinity)

var dist = gn.dist_dual(gn.$sibff(fc,rb,pr,16),9,10)
assert.deepStrictEqual(dist,Infinity)
