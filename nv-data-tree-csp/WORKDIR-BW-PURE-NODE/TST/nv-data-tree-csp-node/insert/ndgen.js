const assert = require("assert")

const {jmap} = require("../../../lib/nv-facutil-basic/index");
const {jdcp} = require("../../../lib/nv-facutil-basic/index");
const {Act,FLAG_DICT} = require("../../../lib/nv-data-tree-actdef/index")


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

var nd1 = forest.node(_Node);
nd1.tag = 1;

var nd2 = nd1.$insert_child_before(0)
nd2.tag = 2;

var nd7 = nd1.$insert_child_after(0)
nd7.tag = 7;


var nd3 = forest.node(_Node);
nd3.tag =3;
var nd4 = forest.node(_Node)
nd4.tag = 4;
nd2.$insert_children_before(0,[nd3,nd4])


var [nd5,nd6] = nd4.$insert_children_after(0,2)
nd5.tag = 5
nd6.tag = 6


var nd8 = nd7.$insert_child_before(0)
nd8.tag =8
var nd9 = nd7.$insert_child_after(0)
nd9.tag =9
var nd10 = nd7.$insert_child_after(1)
nd10.tag =10


var [nd11,nd12,nd16] = nd10.$insert_children_after(0,3)
nd11.tag = 11
nd12.tag = 12
nd16.tag = 16

/*
var [nd13,nd14] = nd10.$insert_children_after(1,2)
nd13.tag = 13
nd14.tag = 14
*/
var [nd13,nd14] = nd10.$insert_children_before(2,2)
nd13.tag = 13
nd14.tag = 14

var nd15 = nd10.$insert_child_after(3)
nd15.tag = 15


var nd17=nd16.$prepend_child()

nd17.tag = 17

var nds = [nd1,nd2,nd3,nd4,nd5,nd6,nd7,nd8,nd9,nd10,nd11,nd12,nd13,nd14,nd15,nd16,nd17]

var forest = nd1[_Node.SYM_DICT.get_forest]
var {idpool,fc,rb,pr,lb,lc} = forest
var ctor = _Node



assert.deepStrictEqual(
    jdcp(Array.from(nd17.$gen_ance())),
    [ { tag: 16 }, { tag: 10 }, { tag: 7 }, { tag: 1 } ]
);

assert.deepStrictEqual(
    jdcp(Array.from(nd10.$gen_child_from_fst())),
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
    jdcp(Array.from(nd10.$gen_child_from_lst())),
[
  { tag: 16 },
  { tag: 15 },
  { tag: 14 },
  { tag: 13 },
  { tag: 12 },
  { tag: 11 }
]
);

assert.deepStrictEqual(
    jdcp(Array.from(nd14.$gen_sib_from_fst())),
[
  { tag: 11 },
  { tag: 12 },
  { tag: 13 },
  { tag: 14 },
  { tag: 15 },
  { tag: 16 }
]

)
assert.deepStrictEqual(
    jdcp(Array.from(nd14.$gen_sib_from_lst())),
    [
  { tag: 16 },
  { tag: 15 },
  { tag: 14 },
  { tag: 13 },
  { tag: 12 },
  { tag: 11 }
]
)
assert.deepStrictEqual(
    jdcp(Array.from(nd14.$gen_fsib())),
    [ { tag: 15 }, { tag: 16 } ]

)
assert.deepStrictEqual(
    jdcp(Array.from(nd14.$gen_psib())),
    [ { tag: 13 }, { tag: 12 }, { tag: 11 } ]
)

assert.deepStrictEqual(
    jdcp(Array.from(nd1.$gen_lmost())),
    [ { tag: 1 }, { tag: 2 }, { tag: 3 } ]

)
assert.deepStrictEqual(
    jdcp(Array.from(nd1.$gen_rmost())),
    [ { tag: 1 }, { tag: 7 }, { tag: 10 }, { tag: 16 }, { tag: 17 } ]
)


assert.deepStrictEqual(
    jdcp(Array.from(nd1.$gen_sdfs_next())),
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
])


assert.deepStrictEqual(
    jdcp(Array.from(nd1.$gen_sdfs_next_leaf())),
[
  { tag: 3 },  { tag: 5 },
  { tag: 6 },  { tag: 8 },
  { tag: 9 },  { tag: 11 },
  { tag: 12 }, { tag: 13 },
  { tag: 14 }, { tag: 15 },
  { tag: 17 }
]
)

assert.deepStrictEqual(
    jdcp(Array.from(nd1.$gen_sdfs_next_nonleaf())),
[
  { tag: 1 },
  { tag: 2 },
  { tag: 4 },
  { tag: 7 },
  { tag: 10 },
  { tag: 16 }
])

assert.deepStrictEqual(
    jdcp(Array.from(nd17.$gen_sdfs_prev())),
[
  { tag: 17 }, { tag: 16 },
  { tag: 15 }, { tag: 14 },
  { tag: 13 }, { tag: 12 },
  { tag: 11 }, { tag: 10 },
  { tag: 9 },  { tag: 8 },
  { tag: 7 },  { tag: 6 },
  { tag: 5 },  { tag: 4 },
  { tag: 3 },  { tag: 2 },
  { tag: 1 }
]

)


assert.deepStrictEqual(
    jdcp(Array.from(nd17.$gen_sdfs_prev_leaf())),
[
  { tag: 17 }, { tag: 15 },
  { tag: 14 }, { tag: 13 },
  { tag: 12 }, { tag: 11 },
  { tag: 9 },  { tag: 8 },
  { tag: 6 },  { tag: 5 },
  { tag: 3 }
]


)

assert.deepStrictEqual(
    jdcp(Array.from(nd17.$gen_sdfs_prev_nonleaf())),
[
  { tag: 16 },
  { tag: 10 },
  { tag: 7 },
  { tag: 4 },
  { tag: 2 },
  { tag: 1 }
]
)
////
assert.deepStrictEqual(
    jdcp(Array.from(nd3.$gen_edfs_next())),
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
]

)


assert.deepStrictEqual(
    jdcp(Array.from(nd3.$gen_edfs_next_leaf())),
[
  { tag: 3 },  { tag: 5 },
  { tag: 6 },  { tag: 8 },
  { tag: 9 },  { tag: 11 },
  { tag: 12 }, { tag: 13 },
  { tag: 14 }, { tag: 15 },
  { tag: 17 }
]

)

assert.deepStrictEqual(
    jdcp(Array.from(nd3.$gen_edfs_next_nonleaf())),
[
  { tag: 4 },
  { tag: 2 },
  { tag: 16 },
  { tag: 10 },
  { tag: 7 },
  { tag: 1 }
])



assert.deepStrictEqual(
    jdcp(Array.from(nd1.$gen_edfs_prev())),
[
  { tag: 1 },  { tag: 7 },
  { tag: 10 }, { tag: 16 },
  { tag: 17 }, { tag: 15 },
  { tag: 14 }, { tag: 13 },
  { tag: 12 }, { tag: 11 },
  { tag: 9 },  { tag: 8 },
  { tag: 2 },  { tag: 4 },
  { tag: 6 },  { tag: 5 },
  { tag: 3 }
]

)


assert.deepStrictEqual(
    jdcp(Array.from(nd1.$gen_edfs_prev_leaf())),
[
  { tag: 17 }, { tag: 15 },
  { tag: 14 }, { tag: 13 },
  { tag: 12 }, { tag: 11 },
  { tag: 9 },  { tag: 8 },
  { tag: 6 },  { tag: 5 },
  { tag: 3 }
]

)

assert.deepStrictEqual(
    jdcp(Array.from(nd1.$gen_edfs_prev_nonleaf())),
[
  { tag: 1 },
  { tag: 7 },
  { tag: 10 },
  { tag: 16 },
  { tag: 2 },
  { tag: 4 }
]
)

////

tst('$gen_ance',1000000,()=>{nd17.$gen_ance()})
tst('$gen_child_from_fst',1000000,()=>{nd10.$gen_child_from_fst()})
tst('$gen_child_from_lst',1000000,()=>{nd10.$gen_child_from_lst()})
tst('$gen_sib_from_fst',1000000,()=>{nd14.$gen_sib_from_fst()})
tst('$gen_sib_from_lst',1000000,()=>{nd14.$gen_sib_from_lst()})
tst('$gen_psib',1000000,()=>{nd14.$gen_psib()})
tst('$gen_fsib',1000000,()=>{nd14.$gen_fsib()})
tst('$gen_lmost',1000000,()=>{nd1.$gen_lmost()})
tst('$gen_rmost',1000000,()=>{nd1.$gen_rmost()})
tst('$gen_sdfs_next',1000000,()=>{nd1.$gen_sdfs_next()})
tst('$gen_sdfs_next_leaf',1000000,()=>{nd1.$gen_sdfs_next_leaf()})
tst('$gen_sdfs_next_nonleaf',1000000,()=>{nd1.$gen_sdfs_next_nonleaf()})
tst('$gen_sdfs_prev',1000000,()=>{nd17.$gen_sdfs_prev()})
tst('$gen_sdfs_prev_leaf',1000000,()=>{nd17.$gen_sdfs_prev_leaf()})
tst('$gen_sdfs_prev_nonleaf',1000000,()=>{nd17.$gen_sdfs_prev_nonleaf()})
tst('$gen_edfs_next',1000000,()=>{nd3.$gen_sdfs_next()})
tst('$gen_edfs_next_leaf',1000000,()=>{nd3.$gen_sdfs_next_leaf()})
tst('$gen_edfs_next_nonleaf',1000000,()=>{nd3.$gen_sdfs_next_nonleaf()})
tst('$gen_edfs_prev',1000000,()=>{nd1.$gen_sdfs_prev()})
tst('$gen_edfs_prev_leaf',1000000,()=>{nd1.$gen_sdfs_prev_leaf()})
tst('$gen_edfs_prev_nonleaf',1000000,()=>{nd1.$gen_sdfs_prev_nonleaf()})




