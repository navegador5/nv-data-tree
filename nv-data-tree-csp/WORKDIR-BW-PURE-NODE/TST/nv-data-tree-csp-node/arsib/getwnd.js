const {Forest,_Node,_TermNode,_TagNode,_UiNode} = require("../../../index");


var forest = new Forest(1000000)

var nds = Array.from({length:16}).map((r,i)=>{
    let nd = forest.node(_Node);
    nd.tag = (i+1)
    return(nd)
})


for(let i=1;i<17;i++) {
    globalThis["nd"+i] = nds[i-1]
}


nd1.$prepend_child(nd2)
nd2.$add_rsib(nd7)

nd2.$prepend_child(nd3)
nd3.$add_rsib(nd4)


nd4.$prepend_child(nd5)
nd5.$add_rsib(nd6)



nd7.$prepend_child(nd8)
nd8.$add_rsib(nd9)
nd9.$add_rsib(nd10)


nd10.$prepend_child(nd11)
nd11.$add_rsib(nd12)
nd12.$add_rsib(nd13)
nd13.$add_rsib(nd14)
nd14.$add_rsib(nd15)
nd15.$add_rsib(nd16)
var nd17=nd16.$prepend_child()

nd17.tag = 17
nds.push(nd17)

var forest = nd1[_Node.SYM_DICT.get_forest]
var {idpool,fc,rb,pr,lb,lc} = forest

const {Act,FLAG_DICT} = require("nv-data-tree-actdef")


const assert = require("assert")

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




