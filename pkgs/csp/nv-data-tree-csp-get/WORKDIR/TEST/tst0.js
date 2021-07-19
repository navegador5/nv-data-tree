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

const cspget = require("../../index")


assert.deepStrictEqual(cspget.$depth_(idpool,fc,rb,pr,lb,lc,[1],[],[]),0)
assert.deepStrictEqual(cspget.$depth_(idpool,fc,rb,pr,lb,lc,[2],[],[]),1)
assert.deepStrictEqual(cspget.$depth_(idpool,fc,rb,pr,lb,lc,[7],[],[]),1)
assert.deepStrictEqual(cspget.$depth_(idpool,fc,rb,pr,lb,lc,[3],[],[]),2)
assert.deepStrictEqual(cspget.$depth_(idpool,fc,rb,pr,lb,lc,[4],[],[]),2)
assert.deepStrictEqual(cspget.$depth_(idpool,fc,rb,pr,lb,lc,[8],[],[]),2)
assert.deepStrictEqual(cspget.$depth_(idpool,fc,rb,pr,lb,lc,[9],[],[]),2)
assert.deepStrictEqual(cspget.$depth_(idpool,fc,rb,pr,lb,lc,[10],[],[]),2)
assert.deepStrictEqual(cspget.$depth_(idpool,fc,rb,pr,lb,lc,[11],[],[]),3)
assert.deepStrictEqual(cspget.$depth_(idpool,fc,rb,pr,lb,lc,[12],[],[]),3)
assert.deepStrictEqual(cspget.$depth_(idpool,fc,rb,pr,lb,lc,[13],[],[]),3)
assert.deepStrictEqual(cspget.$depth_(idpool,fc,rb,pr,lb,lc,[14],[],[]),3)
assert.deepStrictEqual(cspget.$depth_(idpool,fc,rb,pr,lb,lc,[15],[],[]),3)
assert.deepStrictEqual(cspget.$depth_(idpool,fc,rb,pr,lb,lc,[16],[],[]),3)



assert.deepStrictEqual(cspget.$children_count_(idpool,fc,rb,pr,lb,lc,[1],[],[]),2)
assert.deepStrictEqual(cspget.$children_count_(idpool,fc,rb,pr,lb,lc,[2],[],[]),2)
assert.deepStrictEqual(cspget.$children_count_(idpool,fc,rb,pr,lb,lc,[7],[],[]),3)
assert.deepStrictEqual(cspget.$children_count_(idpool,fc,rb,pr,lb,lc,[3],[],[]),0)
assert.deepStrictEqual(cspget.$children_count_(idpool,fc,rb,pr,lb,lc,[4],[],[]),2)
assert.deepStrictEqual(cspget.$children_count_(idpool,fc,rb,pr,lb,lc,[8],[],[]),0)
assert.deepStrictEqual(cspget.$children_count_(idpool,fc,rb,pr,lb,lc,[9],[],[]),0)
assert.deepStrictEqual(cspget.$children_count_(idpool,fc,rb,pr,lb,lc,[10],[],[]),6)
assert.deepStrictEqual(cspget.$children_count_(idpool,fc,rb,pr,lb,lc,[11],[],[]),0)
assert.deepStrictEqual(cspget.$children_count_(idpool,fc,rb,pr,lb,lc,[12],[],[]),0)
assert.deepStrictEqual(cspget.$children_count_(idpool,fc,rb,pr,lb,lc,[13],[],[]),0)
assert.deepStrictEqual(cspget.$children_count_(idpool,fc,rb,pr,lb,lc,[14],[],[]),0)
assert.deepStrictEqual(cspget.$children_count_(idpool,fc,rb,pr,lb,lc,[15],[],[]),0)
assert.deepStrictEqual(cspget.$children_count_(idpool,fc,rb,pr,lb,lc,[16],[],[]),0)

assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[1],[],[]),0)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[2],[],[]),0)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[7],[],[]),1)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[3],[],[]),0)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[4],[],[]),1)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[5],[],[]),0)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[6],[],[]),1)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[8],[],[]),0)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[9],[],[]),1)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[10],[],[]),2)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[11],[],[]),0)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[12],[],[]),1)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[13],[],[]),2)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[14],[],[]),3)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[15],[],[]),4)
assert.deepStrictEqual(cspget.$sibseq_(idpool,fc,rb,pr,lb,lc,[16],[],[]),5)

assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[1],[],[]),1)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[2],[],[]),2)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[7],[],[]),2)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[3],[],[]),2)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[4],[],[]),2)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[5],[],[]),2)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[6],[],[]),2)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[8],[],[]),3)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[9],[],[]),3)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[10],[],[]),3)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[11],[],[]),6)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[12],[],[]),6)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[13],[],[]),6)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[14],[],[]),6)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[15],[],[]),6)
assert.deepStrictEqual(cspget.$sibs_count_(idpool,fc,rb,pr,lb,lc,[16],[],[]),6)


assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[1],[],[]),0)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[2],[],[]),0)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[7],[],[]),1)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[3],[],[]),0)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[4],[],[]),1)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[5],[],[]),0)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[6],[],[]),1)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[8],[],[]),0)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[9],[],[]),1)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[10],[],[]),2)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[11],[],[]),0)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[12],[],[]),1)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[13],[],[]),2)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[14],[],[]),3)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[15],[],[]),4)
assert.deepStrictEqual(cspget.$psibs_count_(idpool,fc,rb,pr,lb,lc,[16],[],[]),5)

assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[1],[],[]),0)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[2],[],[]),1)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[7],[],[]),0)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[3],[],[]),1)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[4],[],[]),0)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[5],[],[]),1)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[6],[],[]),0)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[8],[],[]),2)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[9],[],[]),1)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[10],[],[]),0)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[11],[],[]),5)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[12],[],[]),4)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[13],[],[]),3)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[14],[],[]),2)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[15],[],[]),1)
assert.deepStrictEqual(cspget.$fsibs_count_(idpool,fc,rb,pr,lb,lc,[16],[],[]),0)


assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[1],[],[]),[])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[2],[],[]),[0])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[7],[],[]),[1])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[3],[],[]),[0,0])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[4],[],[]),[0,1])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[5],[],[]),[0,1,0])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[6],[],[]),[0,1,1])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[8],[],[]),[1,0])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[9],[],[]),[1,1])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[10],[],[]),[1,2])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[11],[],[]),[1,2,0])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[12],[],[]),[1,2,1])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[13],[],[]),[1,2,2])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[14],[],[]),[1,2,3])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[15],[],[]),[1,2,4])
assert.deepStrictEqual(cspget.$spl_(idpool,fc,rb,pr,lb,lc,[16],[],[]),[1,2,5])


//const gn = require("nv-data-tree-csp-gen");
//const ndget = require("nv-data-tree-csp-ndget");
//const ndgen = require("nv-data-tree-csp-ndgen");
//const getwnd = require("nv-data-tree-csp-getwnd");
//const cspact = require("nv-data-tree-csp-act");



assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[1],[],[]),16)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[2],[],[]),5)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[7],[],[]),10)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[3],[],[]),1)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[4],[],[]),3)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[5],[],[]),1)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[6],[],[]),1)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[8],[],[]),1)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[9],[],[]),1)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[10],[],[]),7)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[11],[],[]),1)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[12],[],[]),1)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[13],[],[]),1)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[14],[],[]),1)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[15],[],[]),1)
assert.deepStrictEqual(cspget.$length_(idpool,fc,rb,pr,lb,lc,[16],[],[]),1)



assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[1],[],[]),11)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[2],[],[]),3)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[7],[],[]),8)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[3],[],[]),1)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[4],[],[]),2)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[5],[],[]),1)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[6],[],[]),1)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[8],[],[]),1)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[9],[],[]),1)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[10],[],[]),6)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[11],[],[]),1)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[12],[],[]),1)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[13],[],[]),1)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[14],[],[]),1)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[15],[],[]),1)
assert.deepStrictEqual(cspget.$width_(idpool,fc,rb,pr,lb,lc,[16],[],[]),1)


assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[1],[],[]),5)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[2],[],[]),2)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[7],[],[]),2)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[3],[],[]),0)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[4],[],[]),1)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[5],[],[]),0)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[6],[],[]),0)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[8],[],[]),0)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[9],[],[]),0)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[10],[],[]),1)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[11],[],[]),0)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[12],[],[]),0)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[13],[],[]),0)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[14],[],[]),0)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[15],[],[]),0)
assert.deepStrictEqual(cspget.$nonleaf_length_(idpool,fc,rb,pr,lb,lc,[16],[],[]),0)



assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[1],[],[]),0)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[2],[],[]),0)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[7],[],[]),3)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[3],[],[]),0)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[4],[],[]),1)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[5],[],[]),1)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[6],[],[]),2)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[8],[],[]),3)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[9],[],[]),4)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[10],[],[]),5)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[11],[],[]),5)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[12],[],[]),6)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[13],[],[]),7)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[14],[],[]),8)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[15],[],[]),9)
assert.deepStrictEqual(cspget.$offset_(idpool,fc,rb,pr,lb,lc,[16],[],[]),10)


assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[1],[],[]),4)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[2],[],[]),3)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[7],[],[]),3)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[3],[],[]),1)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[4],[],[]),2)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[5],[],[]),1)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[6],[],[]),1)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[8],[],[]),1)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[9],[],[]),1)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[10],[],[]),2)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[11],[],[]),1)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[12],[],[]),1)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[13],[],[]),1)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[14],[],[]),1)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[15],[],[]),1)
assert.deepStrictEqual(cspget.$height_(idpool,fc,rb,pr,lb,lc,[16],[],[]),1)

assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[1],[],[]),0)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[2],[],[]),1)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[7],[],[]),6)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[3],[],[]),2)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[4],[],[]),3)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[5],[],[]),4)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[6],[],[]),5)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[8],[],[]),7)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[9],[],[]),8)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[10],[],[]),9)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[11],[],[]),10)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[12],[],[]),11)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[13],[],[]),12)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[14],[],[]),13)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[15],[],[]),14)
assert.deepStrictEqual(cspget.$sdfs_index_(idpool,fc,rb,pr,lb,lc,[16],[],[]),15)


assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[1],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[2],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[7],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[3],[],[]),0)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[4],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[5],[],[]),1)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[6],[],[]),2)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[8],[],[]),3)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[9],[],[]),4)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[10],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[11],[],[]),5)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[12],[],[]),6)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[13],[],[]),7)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[14],[],[]),8)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[15],[],[]),9)
assert.deepStrictEqual(cspget.$sdfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[16],[],[]),10)


assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[1],[],[]),0)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[2],[],[]),1)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[7],[],[]),3)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[3],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[4],[],[]),2)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[5],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[6],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[8],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[9],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[10],[],[]),4)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[11],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[12],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[13],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[14],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[15],[],[]),-1)
assert.deepStrictEqual(cspget.$sdfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[16],[],[]),-1)


assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[1],[],[]),15)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[2],[],[]),4)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[7],[],[]),14)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[3],[],[]),0)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[4],[],[]),3)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[5],[],[]),1)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[6],[],[]),2)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[8],[],[]),5)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[9],[],[]),6)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[10],[],[]),13)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[11],[],[]),7)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[12],[],[]),8)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[13],[],[]),9)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[14],[],[]),10)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[15],[],[]),11)
assert.deepStrictEqual(cspget.$edfs_index_(idpool,fc,rb,pr,lb,lc,[16],[],[]),12)


assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[1],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[2],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[7],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[3],[],[]),0)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[4],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[5],[],[]),1)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[6],[],[]),2)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[8],[],[]),3)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[9],[],[]),4)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[10],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[11],[],[]),5)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[12],[],[]),6)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[13],[],[]),7)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[14],[],[]),8)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[15],[],[]),9)
assert.deepStrictEqual(cspget.$edfs_leaf_index_(idpool,fc,rb,pr,lb,lc,[16],[],[]),10)


assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[1],[],[]),4)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[2],[],[]),1)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[7],[],[]),3)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[3],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[4],[],[]),0)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[5],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[6],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[8],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[9],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[10],[],[]),2)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[11],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[12],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[13],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[14],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[15],[],[]),-1)
assert.deepStrictEqual(cspget.$edfs_nonleaf_index_(idpool,fc,rb,pr,lb,lc,[16],[],[]),-1)

assert.deepStrictEqual(cspget.$sdfs_next_srch_action_list_(idpool,fc,rb,pr,lb,lc,[1],[],[]),[
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
assert.deepStrictEqual(cspget.$sdfs_next_srch_action_list_(idpool,fc,rb,pr,lb,lc,[2],[],[]),[
  { k: '$self_', d: 0 },
  { k: '$fstch_', d: 0 },
  { k: '$rsib_', d: 1 },
  { k: '$fstch_', d: 0 },
  { k: '$rsib_', d: 1 }
]
)

assert.deepStrictEqual(cspget.$sdfs_next_build_action_list_(idpool,fc,rb,pr,lb,lc,[1],[],[]),
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

