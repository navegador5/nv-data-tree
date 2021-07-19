const {jmap} = require("../../../lib/nv-facutil-basic/index");
const {jdcp} = require("../../../lib/nv-facutil-basic/index");
const {Act,FLAG_DICT} = require("../../../lib/nv-data-tree-actdef/index")


const assert = require("assert")


const {Forest,_Node,_TermNode,_TagNode,_UiNode} = require("../../../index");


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

var nds = Array.from({length:16}).map((r,i)=>{
    let nd = forest.node(_Node);
    nd.tag = (i+1)
    return(nd)
})


for(let i=1;i<17;i++) {
    globalThis["nd"+i] = nds[i-1]
}

nd1.$prepend_child(nd7)
nd1.$prepend_child(nd2)

nd2.$prepend_child(nd4)
nd2.$prepend_child(nd3)

nd4.$prepend_child(nd6)
nd4.$prepend_child(nd5)

nd7.$prepend_child(nd10)
nd7.$prepend_child(nd9)
nd7.$prepend_child(nd8)

nd10.$prepend_child(nd16)
nd10.$prepend_child(nd15)
nd10.$prepend_child(nd14)
nd10.$prepend_child(nd13)
nd10.$prepend_child(nd12)
nd10.$prepend_child(nd11)
var nd17=nd16.$prepend_child()


nd17.tag = 17
nds.push(nd17)

var forest = nd1[_Node.SYM_DICT.get_forest]
var {idpool,fc,rb,pr,lb,lc} = forest



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
  { k: '$parent_', d: 2, id: 7 },
  { k: '$lsib_', d: 3, id: 2 },
  { k: '$lstch_', d: 0, id: 4 },
  { k: '$lstch_', d: 0, id: 6 },
  { k: '$lsib_', d: 3, id: 5 },
  { k: '$parent_', d: 2, id: 4 },
  { k: '$lsib_', d: 3, id: 3 },
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
  { k: '$add_or_goto_parent', d: 2, id: 7 },
  { k: '$add_lsib', d: 3, id: 2 },
  { k: '$append_child', d: 0, id: 4 },
  { k: '$append_child', d: 0, id: 6 },
  { k: '$add_lsib', d: 3, id: 5 },
  { k: '$add_or_goto_parent', d: 2, id: 4 },
  { k: '$add_lsib', d: 3, id: 3 },
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






