const {jmap} = require("nv-facutil-basic")
const {jdcp} = require("nv-facutil-basic")
const assert = require("assert")
const {Act,FLAG_DICT} = require("nv-data-tree-actdef")



const {_Node} = require("../../index");
const Forest = require("nv-data-tree-csp-forest");



const method = require("nv-data-tree-csp-method")
for(let k in method) {
    if(k!=='ERROR_DICT') {
        method[k](_Node)
    }
}

const perf_hooks = require("perf_hooks")

function tst(name,times,f,...args) {
    console.log(name+" :")
    let start = perf_hooks.performance.nodeTiming.duration
    c= 0
    while(c<times) {f(...args);c=c+1}
    let end = perf_hooks.performance.nodeTiming.duration
    console.log(times+" : costed : ")
    console.log(end-start)
}



var forest = new Forest(1000000)

var nd1 = forest.node(_Node);
nd1.tag = 1;

var nd2 = forest.node(_Node);
nd2.tag = 2;

nd2.$connto(nd1)


var nd3 = forest.node(_Node);
nd3.tag =3;

nd3.$connto(nd2)

var nd4 = forest.node(_Node)
nd4.tag = 4;

nd3.$add_rsib(nd4)

var nd5 = forest.node(_Node)
nd5.tag = 5
nd5.$connto(nd4)

var nd6 = forest.node(_Node)
nd6.tag = 6;
nd5.$add_rsib(nd6)



var nd17 = forest.node(_Node)
nd17.tag = 17


var nd16 = nd17.$add_parent()
nd16.tag = 16


var [nd10,nd15] = nd16.$add_parent_and_lsib()
nd10.tag = 10
nd15.tag = 15

var [nd7,nd9] = nd10.$add_parent_and_lsib()
nd7.tag = 7;
nd9.tag =9

var nd8 = nd9.$add_lsib()
nd8.tag =8

assert.deepStrictEqual(nd8.$add_or_goto_parent(),nd7)

var [nd11,nd12,nd13,nd14] = nd15.$add_lsibs(4)
nd11.tag = 11
nd12.tag = 12
nd13.tag = 13
nd14.tag = 14


nd2.$add_rsib(nd7)


var nds = [nd1,nd2,nd3,nd4,nd5,nd6,nd7,nd8,nd9,nd10,nd11,nd12,nd13,nd14,nd15,nd16,nd17]

var forest = nd1[_Node.SYM_DICT.get_forest]
var {idpool,fc,rb,pr,lb,lc} = forest
var ctor = _Node



assert.deepStrictEqual(nd1.$ance_dist(nd1),0)
assert.deepStrictEqual(nd2.$ance_dist(nd1),1)
assert.deepStrictEqual(nd17.$ance_dist(nd1),4)
assert.deepStrictEqual(nd17.$ance_dist(nd7),3)
assert.deepStrictEqual(nd17.$ance_dist(nd2),Infinity)


assert.deepStrictEqual( nd1.$sib_dist(nd1),0)
assert.deepStrictEqual( nd2.$sib_dist(nd1),Infinity)
assert.deepStrictEqual(nd15.$sib_dist(nd12),-3)
assert.deepStrictEqual(nd12.$sib_dist(nd15),3)
assert.deepStrictEqual(nd17.$sib_dist(nd2),Infinity)

assert.deepStrictEqual( nd17.$des_spl(nd7),[ 2, 5, 0 ])
assert.deepStrictEqual( nd17.$des_spl(nd2),[ -1 ])

assert.deepStrictEqual( nd10.$des_offset(nd1),5)
assert.deepStrictEqual( nd10.$des_offset(nd2),-1)

////
assert.deepStrictEqual( nd10.$sdfs_des_index(nd7),3)
assert.deepStrictEqual( nd10.$sdfs_des_index(nd1),9)
assert.deepStrictEqual( nd10.$sdfs_des_index(nd1),9)
assert.deepStrictEqual( nd10.$sdfs_des_index(nd2),-1)
assert.deepStrictEqual( nd10.$sdfs_des_index(nd10),0)
////
assert.deepStrictEqual( nd10.$sdfs_des_nonleaf_index(nd7),1)
assert.deepStrictEqual( nd7.$sdfs_des_nonleaf_index(nd7),0)
assert.deepStrictEqual( nd10.$sdfs_des_nonleaf_index(nd1),4)
assert.deepStrictEqual( nd10.$sdfs_des_nonleaf_index(nd2),-1)

////
assert.deepStrictEqual( nd3.$sdfs_des_leaf_index(nd2),0)
assert.deepStrictEqual( nd3.$sdfs_des_leaf_index(nd3),0)
assert.deepStrictEqual( nd9.$sdfs_des_leaf_index(nd1),4)
assert.deepStrictEqual( nd9.$sdfs_des_leaf_index(nd7),1)
assert.deepStrictEqual( nd9.$sdfs_des_leaf_index(nd2),-1)
////
console.log("reverse edfs order")

assert.deepStrictEqual( 
    nds.map(nd=>nd.$edfs_des_index(nd1)),
    [
        0, 12, 16, 13, 15, 14, 1,
        11, 10,  2,  9,  8,  7, 6,
        5,  3,  4
    ]
)
assert.deepStrictEqual( 
    nds.map(nd=>nd.$edfs_des_index(nd1)),
    [
        0, 12, 16, 13, 15, 14, 1,
        11, 10,  2,  9,  8,  7, 6,
        5,  3,  4
    ]
)
assert.deepStrictEqual( 
    nds.map(nd=>nd.$edfs_des_leaf_index(nd1)),
[
  0, -1, 10, -1, 9, 8, -1,
  7,  6, -1,  5, 4, 3,  2,
  1, -1,  0
]
)

assert.deepStrictEqual( 
    nds.map(nd=>nd.$edfs_des_nonleaf_index(nd1)),
[
   0,  4, -1,  5, -1, -1,  1,
  -1, -1,  2, -1, -1, -1, -1,
  -1,  3, -1
])





tst('$ance_dist',1000000,()=>{nd17.$ance_dist(nd1)})
tst('$sib_dist',1000000,()=>{nd12.$sib_dist(nd15)})
tst('$des_spl',1000000,()=>{nd17.$des_spl(nd7)})
tst('$des_offset',1000000,()=>{nd10.$des_offset(nd1)})
tst('$sdfs_des_index',1000000,()=>{nd10.$sdfs_des_index(nd1)})
tst('$sdfs_des_leaf_index',1000000,()=>{nd9.$sdfs_des_leaf_index(nd1)})
tst('$sdfs_des_nonleaf_index',1000000,()=>{nd10.$sdfs_des_nonleaf_index(nd1)})

tst('$edfs_des_index',1000000,()=>{nd3.$edfs_des_index(nd1)})
tst('$edfs_des_leaf_index',1000000,()=>{nd9.$edfs_des_leaf_index(nd1)})
tst('$edfs_des_nonleaf_index',1000000,()=>{nd10.$edfs_des_nonleaf_index(nd1)})




