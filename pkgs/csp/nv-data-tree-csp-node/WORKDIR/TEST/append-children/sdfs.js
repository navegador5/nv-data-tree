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

var [nd2,nd7] = nd1.$append_children(2)
nd2.tag = 2;
nd7.tag = 7

var [nd3,nd4] = nd2.$append_children(2)
nd3.tag =3;
nd4.tag = 4;

var [nd5,nd6] = nd4.$append_children(2)
nd5.tag = 5
nd6.tag = 6



var [nd8,nd9,nd10] = nd7.$append_children(3)
nd8.tag =8
nd9.tag = 9
nd10.tag = 10

var [nd11,nd12,nd13,nd14,nd15,nd16] = nd10.$append_children(6)

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


assert.deepStrictEqual(
    jdcp(nd17.$ances_),
    [ { tag: 16 }, { tag: 10 }, { tag: 7 }, { tag: 1 } ]
);

assert.deepStrictEqual(
    jdcp(nd17.$plances_),
    [ { tag: 1 }, { tag: 7 }, { tag: 10 }, { tag: 16 }, { tag: 17 } ]
);

assert.deepStrictEqual(
    jdcp(nd10.$children_),
   [
  { tag: 11 },
  { tag: 12 },
  { tag: 13 },
  { tag: 14 },
  { tag: 15 },
  { tag: 16 }
]
);

assert.deepStrictEqual(
    jdcp(nd14.$sibs_),
[
  { tag: 11 },
  { tag: 12 },
  { tag: 13 },
  { tag: 14 },
  { tag: 15 },
  { tag: 16 }
]
);


assert.deepStrictEqual(
    jdcp(nd14.$psibs_),
    [ { tag: 13 }, { tag: 12 }, { tag: 11 } ]
);

assert.deepStrictEqual(
    jdcp(nd14.$fsibs_),
    [ { tag: 15 }, { tag: 16 } ]
);

assert.deepStrictEqual(
    jdcp(nd3.$edfs_),
[
  { tag: 3 },  { tag: 5 },
  { tag: 6 },  { tag: 4 },
  { tag: 2 },  { tag: 8 },
  { tag: 9 },  { tag: 11 },
  { tag: 12 }, { tag: 13 },
  { tag: 14 }, { tag: 15 },
  { tag: 17 }, { tag: 16 },
  { tag: 10 }, { tag: 7 },
  { tag: 1 }
]);

assert.deepStrictEqual(
    jdcp(nd1.$sdfs_),
[
  { tag: 1 },  { tag: 2 },
  { tag: 3 },  { tag: 4 },
  { tag: 5 },  { tag: 6 },
  { tag: 7 },  { tag: 8 },
  { tag: 9 },  { tag: 10 },
  { tag: 11 }, { tag: 12 },
  { tag: 13 }, { tag: 14 },
  { tag: 15 }, { tag: 16 },
  { tag: 17 }
]);

assert.deepStrictEqual(
    jdcp(nd1.$sdfs_leafs_),
[
  { tag: 3 },  { tag: 5 },
  { tag: 6 },  { tag: 8 },
  { tag: 9 },  { tag: 11 },
  { tag: 12 }, { tag: 13 },
  { tag: 14 }, { tag: 15 },
  { tag: 17 }
]);

assert.deepStrictEqual(
    jdcp(nd1.$sdfs_nonleafs_),
[
  { tag: 1 },
  { tag: 2 },
  { tag: 4 },
  { tag: 7 },
  { tag: 10 },
  { tag: 16 }
]);


////
assert.deepStrictEqual(
    Array.from(nd1.$gen_sdfs_next_srch_action()),
[
  { k: '$self_', d: 0 },   { k: '$fstch_', d: 0 },
  { k: '$fstch_', d: 0 },  { k: '$rsib_', d: 1 },
  { k: '$fstch_', d: 0 },  { k: '$rsib_', d: 1 },
  { k: '$parent_', d: 2 }, { k: '$parent_', d: 2 },
  { k: '$rsib_', d: 1 },   { k: '$fstch_', d: 0 },
  { k: '$rsib_', d: 1 },   { k: '$rsib_', d: 1 },
  { k: '$fstch_', d: 0 },  { k: '$rsib_', d: 1 },
  { k: '$rsib_', d: 1 },   { k: '$rsib_', d: 1 },
  { k: '$rsib_', d: 1 },   { k: '$rsib_', d: 1 },
  { k: '$fstch_', d: 0 }
]

)

assert.deepStrictEqual(
    Array.from(nd17.$gen_sdfs_prev_srch_action()),
[
    { k: '$self_', d: 3, id: 17 },
    { k: '$parent_', d: 2, id: 16 },
    { k: '$lsib_', d: 3, id: 15 },
    { k: '$lsib_', d: 3, id: 14 },
    { k: '$lsib_', d: 3, id: 13 },
    { k: '$lsib_', d: 3, id: 12 },
    { k: '$lsib_', d: 3, id: 11 },
    { k: '$parent_', d: 2, id: 10 },
    { k: '$lsib_', d: 3, id: 9 },
    { k: '$lsib_', d: 3, id: 8 },
    { k: '$parent_', d: 2, id: 3 },
    { k: '$lsib_', d: 3, id: 2 },
    { k: '$lstch_', d: 0, id: 5 },
    { k: '$lstch_', d: 0, id: 7 },
    { k: '$lsib_', d: 3, id: 6 },
    { k: '$parent_', d: 2, id: 5 },
    { k: '$lsib_', d: 3, id: 4 },
    { k: '$parent_', d: 2, id: 2 },
    { k: '$parent_', d: 2, id: 1 }
]
)

assert.deepStrictEqual(
    Array.from(nd1.$gen_sdfs_next_build_action()),
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
  { k: '$add_rsib', d: 1 },
  { k: '$prepend_child', d: 0 }
]

)

assert.deepStrictEqual(
    Array.from(nd17.$gen_sdfs_prev_build_action()),
[
    { k: '$new', d: 3, id: 17 },
    { k: '$add_or_goto_parent', d: 2, id: 16 },
    { k: '$add_lsib', d: 3, id: 15 },
    { k: '$add_lsib', d: 3, id: 14 },
    { k: '$add_lsib', d: 3, id: 13 },
    { k: '$add_lsib', d: 3, id: 12 },
    { k: '$add_lsib', d: 3, id: 11 },
    { k: '$add_or_goto_parent', d: 2, id: 10 },
    { k: '$add_lsib', d: 3, id: 9 },
    { k: '$add_lsib', d: 3, id: 8 },
    { k: '$add_or_goto_parent', d: 2, id: 3 },
    { k: '$add_lsib', d: 3, id: 2 },
    { k: '$append_child', d: 0, id: 5 },
    { k: '$append_child', d: 0, id: 7 },
    { k: '$add_lsib', d: 3, id: 6 },
    { k: '$add_or_goto_parent', d: 2, id: 5 },
    { k: '$add_lsib', d: 3, id: 4 },
    { k: '$parent_', d: 2, id: 2 },
    { k: '$add_or_goto_parent', d: 2, id: 1 }
]

)



tst('$get_with_spl',1000000,()=>{nd1.$get_with_spl([1,2,4])})
tst('$ances_',1000000,()=>{nd17.$ances_})
tst('$plances_',1000000,()=>{nd17.$plances_})
tst('$children_',1000000,()=>{nd10.$children_})
tst('$sibs_',1000000,()=>{nd14.$sibs_})
tst('$psibs_',1000000,()=>{nd14.$psibs_})
tst('$fsibs_',1000000,()=>{nd14.$fsibs_})
tst('$edfs_',1000000,()=>{nd3.$edfs_})
tst('$sdfs_',1000000,()=>{nd1.$sdfs_})
tst('$sdfs_leafs_',1000000,()=>{nd1.$sdfs_leafs_})
tst('$sdfs_nonleafs_',1000000,()=>{nd1.$sdfs_nonleafs_})
tst('$gen_sdfs_next_srch_action',1000000,()=>{nd1.$gen_sdfs_next_srch_action()})
tst('$gen_sdfs_prev_srch_action',1000000,()=>{nd17.$gen_sdfs_prev_srch_action()})
tst('$gen_sdfs_next_build_action',1000000,()=>{nd1.$gen_sdfs_next_build_action()})
tst('$gen_sdfs_prev_build_action',1000000,()=>{nd17.$gen_sdfs_prev_build_action()})






