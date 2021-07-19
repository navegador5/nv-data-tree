const {_Node} = require("../../index");
const Forest = require("nv-data-tree-csp-forest");



const method = require("nv-data-tree-csp-method")
for(let k in method) {
    if(k!=='ERROR_DICT') {
        method[k](_Node)
    }
}


var forest = new Forest(1000000)

var nd1 = forest.node(_Node);
nd1.tag = 1;

var [nd7,nd2] = nd1.$prepend_children(2)
nd2.tag = 2;
nd7.tag = 7

var [nd4,nd3] = nd2.$prepend_children(2)
nd3.tag =3;
nd4.tag = 4;

var [nd6,nd5] = nd4.$prepend_children(2)
nd5.tag = 5
nd6.tag = 6



var [nd10,nd9,nd8] = nd7.$prepend_children(3)
nd8.tag =8
nd9.tag = 9
nd10.tag = 10

var [nd16,nd15,nd14,nd13,nd12,nd11] = nd10.$prepend_children(6)

nd11.tag = 11
nd12.tag = 12
nd13.tag = 13
nd14.tag = 14
nd15.tag = 15
nd16.tag = 16

var nd17=nd16.$prepend_child()

nd17.tag = 17

var nds = [nd1,nd2,nd3,nd4,nd5,nd6,nd7,nd8,nd9,nd10,nd11,nd12,nd13,nd14,nd15,nd16,nd17]

var forest = nd1[_Node.SYM_DICT.get_forest]
var {idpool,fc,rb,pr,lb,lc} = forest
var ctor = _Node


const assert = require("assert")

nds.forEach(nd=>assert.deepStrictEqual(nd.$self_,nd))
nds.forEach(nd=>assert.deepStrictEqual(nd.$root_,nd1))

for(let i=1;i<nds.length;i++) {
    var rt = nds[i];
    nds.forEach(nd=>assert.deepStrictEqual(rt.$is_root_of(nd),false))
}

assert.deepStrictEqual(nd1.$parent_,null)
assert.deepStrictEqual(nd2.$parent_,nd1)
assert.deepStrictEqual(nd7.$parent_,nd1)
assert.deepStrictEqual(nd3.$parent_,nd2)
assert.deepStrictEqual(nd4.$parent_,nd2)

assert.deepStrictEqual(nd1.$fstch_,nd2)
assert.deepStrictEqual(nd2.$fstch_,nd3)
assert.deepStrictEqual(nd3.$fstch_,null)
assert.deepStrictEqual(nd4.$fstch_,nd5)
assert.deepStrictEqual(nd7.$fstch_,nd8)
assert.deepStrictEqual(nd10.$fstch_,nd11)
assert.deepStrictEqual(nd16.$fstch_,nd17)

assert.deepStrictEqual( nd1.$lstch_,nd7)
assert.deepStrictEqual( nd2.$lstch_,nd4)
assert.deepStrictEqual( nd3.$lstch_,null)
assert.deepStrictEqual( nd4.$lstch_,nd6)
assert.deepStrictEqual( nd7.$lstch_,nd10)
assert.deepStrictEqual(nd10.$lstch_,nd16)
assert.deepStrictEqual(nd16.$lstch_,nd17)

assert.deepStrictEqual( nd1.$fstsib_,null)
assert.deepStrictEqual( nd7.$fstsib_,nd2)
assert.deepStrictEqual( nd14.$fstsib_,nd11)

assert.deepStrictEqual( nd1.$lstsib_,null)
assert.deepStrictEqual( nd2.$lstsib_,nd7)
assert.deepStrictEqual( nd14.$lstsib_,nd16)

assert.deepStrictEqual( nd14.$fstpsib_,nd11)
assert.deepStrictEqual( nd17.$fstpsib_,null)

assert.deepStrictEqual( nd14.$lstfsib_,nd16)
assert.deepStrictEqual( nd17.$lstfsib_,null)

assert.deepStrictEqual( nd1.$lsib_,null)
assert.deepStrictEqual( nd1.$rsib_,null)

assert.deepStrictEqual( nd2.$lsib_,null)
assert.deepStrictEqual( nd2.$rsib_,nd7)

assert.deepStrictEqual( nd3.$lsib_,null)
assert.deepStrictEqual( nd3.$rsib_,nd4)

assert.deepStrictEqual( nd4.$lsib_,nd3)
assert.deepStrictEqual( nd4.$rsib_,null)

assert.deepStrictEqual( nd5.$lsib_,null)
assert.deepStrictEqual( nd5.$rsib_,nd6)

assert.deepStrictEqual( nd6.$lsib_,nd5)
assert.deepStrictEqual( nd6.$rsib_,null)

assert.deepStrictEqual( nd7.$lsib_,nd2)
assert.deepStrictEqual( nd7.$rsib_,null)

assert.deepStrictEqual( nd8.$lsib_,null)
assert.deepStrictEqual( nd8.$rsib_,nd9)

assert.deepStrictEqual( nd9.$lsib_,nd8)
assert.deepStrictEqual( nd9.$rsib_,nd10)

assert.deepStrictEqual( nd10.$lsib_,nd9)
assert.deepStrictEqual( nd10.$rsib_,null)

assert.deepStrictEqual( nd11.$lsib_,null)
assert.deepStrictEqual( nd11.$rsib_,nd12)

assert.deepStrictEqual( nd12.$lsib_,nd11)
assert.deepStrictEqual( nd12.$rsib_,nd13)

assert.deepStrictEqual( nd13.$lsib_,nd12)
assert.deepStrictEqual( nd13.$rsib_,nd14)

assert.deepStrictEqual( nd14.$lsib_,nd13)
assert.deepStrictEqual( nd14.$rsib_,nd15)

assert.deepStrictEqual( nd15.$lsib_,nd14)
assert.deepStrictEqual( nd15.$rsib_,nd16)

assert.deepStrictEqual( nd16.$lsib_,nd15)
assert.deepStrictEqual( nd16.$rsib_,null)

assert.deepStrictEqual( nd17.$lsib_,null)
assert.deepStrictEqual( nd17.$rsib_,null)
////

assert.deepStrictEqual( nd1.$dlmost_,nd3)
assert.deepStrictEqual( nd2.$dlmost_,nd3)
assert.deepStrictEqual( nd3.$dlmost_,nd3)
assert.deepStrictEqual( nd4.$dlmost_,nd5)
assert.deepStrictEqual( nd5.$dlmost_,nd5)
assert.deepStrictEqual( nd6.$dlmost_,nd6)
assert.deepStrictEqual( nd7.$dlmost_,nd8)
assert.deepStrictEqual( nd8.$dlmost_,nd8)
assert.deepStrictEqual( nd9.$dlmost_,nd9)
assert.deepStrictEqual(nd10.$dlmost_,nd11)
assert.deepStrictEqual(nd12.$dlmost_,nd12)
assert.deepStrictEqual(nd13.$dlmost_,nd13)
assert.deepStrictEqual(nd14.$dlmost_,nd14)
assert.deepStrictEqual(nd15.$dlmost_,nd15)
assert.deepStrictEqual(nd16.$dlmost_,nd17)
assert.deepStrictEqual(nd17.$dlmost_,nd17)


assert.deepStrictEqual( nd1.$drmost_,nd17)
assert.deepStrictEqual( nd2.$drmost_,nd6)
assert.deepStrictEqual( nd3.$drmost_,nd3)
assert.deepStrictEqual( nd4.$drmost_,nd6)
assert.deepStrictEqual( nd5.$drmost_,nd5)
assert.deepStrictEqual( nd6.$drmost_,nd6)
assert.deepStrictEqual( nd7.$drmost_,nd17)
assert.deepStrictEqual( nd8.$drmost_,nd8)
assert.deepStrictEqual( nd9.$drmost_,nd9)
assert.deepStrictEqual(nd10.$drmost_,nd17)
assert.deepStrictEqual(nd12.$drmost_,nd12)
assert.deepStrictEqual(nd13.$drmost_,nd13)
assert.deepStrictEqual(nd14.$drmost_,nd14)
assert.deepStrictEqual(nd15.$drmost_,nd15)
assert.deepStrictEqual(nd16.$drmost_,nd17)
assert.deepStrictEqual(nd17.$drmost_,nd17)

assert.deepStrictEqual(nd5.$lsib_of_fst_ance_having_lsib_,nd3)
assert.deepStrictEqual(nd6.$lsib_of_fst_ance_having_lsib_,nd3)
assert.deepStrictEqual(nd8.$lsib_of_fst_ance_having_lsib_,nd2)
assert.deepStrictEqual(nd9.$lsib_of_fst_ance_having_lsib_,nd2)
assert.deepStrictEqual(nd10.$lsib_of_fst_ance_having_lsib_,nd2)
assert.deepStrictEqual(nd11.$lsib_of_fst_ance_having_lsib_,nd9)
assert.deepStrictEqual(nd17.$lsib_of_fst_ance_having_lsib_,nd15)

assert.deepStrictEqual( nd3.$rsib_of_fst_ance_having_rsib_,nd7)
assert.deepStrictEqual( nd6.$rsib_of_fst_ance_having_rsib_,nd7)
assert.deepStrictEqual( nd8.$rsib_of_fst_ance_having_rsib_,null)

////
assert.deepStrictEqual( nd1.$luncle_,null)
assert.deepStrictEqual( nd5.$luncle_,nd3)
assert.deepStrictEqual( nd8.$luncle_,nd2)
assert.deepStrictEqual( nd11.$luncle_,nd9)
assert.deepStrictEqual( nd17.$luncle_,nd15)

assert.deepStrictEqual(  nd1.$runcle_,null)
assert.deepStrictEqual(  nd3.$runcle_,nd7)


assert.deepStrictEqual(  nd1.$runcle_,null)
assert.deepStrictEqual(  nd3.$runcle_,nd7)
assert.deepStrictEqual(nds.map(r=>r.$lcin_),[
  null, null,       null,
  null, null,       null,
  null, nd4, null,
  null, null,       null,
  null, null,       null,
  null, null
])
assert.deepStrictEqual(nds.map(r=>r.$rcin_),[
  null,       null, null,
  nd8, null, null,
  null,       null, null,
  null,       null, null,
  null,       null, null,
  null,       null

])


////
assert.deepStrictEqual(
    nds.map(r=>r.$sdfs_next_?r.$sdfs_next_.tag:null),
   [
     2,  3,    4,  5,  6,
     7,  8,    9,  10, 11,
     12, 13,   14, 15, 16,
     17, null
   ]
)
assert.deepStrictEqual(
    nds.map(r=>r.$sdfs_prev_?r.$sdfs_prev_.tag:null),
   [
  null, 1,  2,  3,  4,
  5,    6,  7,  8,  9,
  10,   11, 12, 13, 14,
  15,   16
   ]
)

//
assert.deepStrictEqual(
    nds.map(r=>r.$edfs_next_?r.$edfs_next_.tag:null),
[
  null, 8,  5,  2,  6,
  4,    1,  9,  11, 7,
  12,   13, 14, 15, 17,
  10,   16
]

)
assert.deepStrictEqual(
    nds.map(r=>r.$edfs_prev_?r.$edfs_prev_.tag:null),
[
  7,  4,  null, 6,  3,
  5,  10, 2,    8,  16,
  9,  11, 12,   13, 14,
  17, 15
]

)

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

tst('$self_',  1000000,()=>{nd1.$self_})
tst('$root_',  1000000,()=>{nd17.$root_})
tst('$parent_',1000000,()=>{nd3.$parent_})
tst('$fstch_',1000000,()=>{nd10.$fstch_})
tst('$lstch_',1000000,()=>{nd10.$lstch_})
tst('$fstsib_',1000000,()=>{nd14.$fstsib_})
tst('$lstsib_',1000000,()=>{nd14.$lstsib_})
tst('$fstpsib_',1000000,()=>{nd14.$fstpsib_})
tst('$lstfsib_',1000000,()=>{nd14.$lstfsib_})
tst('$lsib_',1000000,()=>{nd14.$lsib_})
tst('$rsib_',1000000,()=>{nd14.$rsib_})
tst('$dlmost_',1000000,()=>{nd1.$dlmost_})
tst('$drmost_',1000000,()=>{nd1.$drmost_})
tst('$lsib_of_fst_ance_having_lsib_',1000000,()=>{nd10.$lsib_of_fst_ance_having_lsib_})
tst('$rsib_of_fst_ance_having_lsib_',1000000,()=>{nd6.$rsib_of_fst_ance_having_lsib_})
tst('$luncle_',1000000,()=>{nd17.$luncle_})
tst('$runcle_',1000000,()=>{nd3.$runcle_})
tst('$lcin_',1000000,()=>{nd8.$lcin_})
tst('$rcin_',1000000,()=>{nd4.$rcin_})
tst('$sdfs_next_',1000000,()=>{nd6.$sdfs_next_})
tst('$sdfs_prev_',1000000,()=>{nd7.$sdfs_prev_})
tst('$edfs_next_',1000000,()=>{nd2.$edfs_next_})
tst('$edfs_prev_',1000000,()=>{nd7.$sdfs_prev_})







