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

var [nd2,nd7] = nd1.$prepend_children(2)
nd2.tag = 2;
nd7.tag = 7

var [nd3,nd4] = nd2.$prepend_children(2)
nd3.tag =3;
nd4.tag = 4;

var [nd5,nd6] = nd4.$prepend_children(2)
nd5.tag = 5
nd6.tag = 6



var [nd8,nd9,nd10] = nd7.$prepend_children(3)
nd8.tag =8
nd9.tag = 9
nd10.tag = 10

var [nd11,nd12,nd13,nd14,nd15,nd16] = nd10.$prepend_children(6)

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



const {Act,FLAG_DICT} = require("nv-data-tree-actdef")
/*
> Act
[class Act] {
  DIRECTION: {
    '0': 'down',
    '1': 'right',
    '2': 'up',
    '3': 'left',
    down: 0,
    right: 1,
    up: 2,
    left: 3
  }
}
>
> FLAG_DICT
{
  '0': 'open',
  '1': 'close',
  '2': 'lyrfst',
  '3': 'lyrmid',
  '4': 'lyrlst',
  '5': 'lyrbst',
  open: 0,
  close: 1,
  lyrfst: 2,
  lyrmid: 3,
  lyrlst: 4,
  lyrbst: 5
}
>

*/

const assert = require("assert")

assert.deepStrictEqual(
    JSON.parse(JSON.stringify(nds.map(nd=>nd.$sdfs_next_srch_action(Act.DIRECTION.down)))),
[
    { k: '$fstch_', d: 0, id: 2 },
    { k: '$fstch_', d: 0, id: 4 },
    { k: '$rsib_', d: 1, id: 5 },
    { k: '$fstch_', d: 0, id: 6 },
    { k: '$rsib_', d: 1, id: 7 },
    { k: '$parent_', d: 2, id: 5 },
    { k: '$fstch_', d: 0, id: 8 },
    { k: '$rsib_', d: 1, id: 9 },
    { k: '$rsib_', d: 1, id: 10 },
    { k: '$fstch_', d: 0, id: 11 },
    { k: '$rsib_', d: 1, id: 12 },
    { k: '$rsib_', d: 1, id: 13 },
    { k: '$rsib_', d: 1, id: 14 },
    { k: '$rsib_', d: 1, id: 15 },
    { k: '$rsib_', d: 1, id: 16 },
    { k: '$fstch_', d: 0, id: 17 },
    { k: '$parent_', d: 2, id: 16 }
]

)
    
assert.deepStrictEqual(
    JSON.parse(JSON.stringify(nds.map(nd=>nd.$sdfs_next_build_action(Act.DIRECTION.down)))),
[
    { k: '$prepend_child', d: 0, id: 2 },
    { k: '$prepend_child', d: 0, id: 4 },
    { k: '$add_rsib', d: 1, id: 5 },
    { k: '$prepend_child', d: 0, id: 6 },
    { k: '$add_rsib', d: 1, id: 7 },
    { k: '$parent_', d: 2, id: 5 },
    { k: '$prepend_child', d: 0, id: 8 },
    { k: '$add_rsib', d: 1, id: 9 },
    { k: '$add_rsib', d: 1, id: 10 },
    { k: '$prepend_child', d: 0, id: 11 },
    { k: '$add_rsib', d: 1, id: 12 },
    { k: '$add_rsib', d: 1, id: 13 },
    { k: '$add_rsib', d: 1, id: 14 },
    { k: '$add_rsib', d: 1, id: 15 },
    { k: '$add_rsib', d: 1, id: 16 },
    { k: '$prepend_child', d: 0, id: 17 },
    { k: '$parent_', d: 2, id: 16 }
])

assert.deepStrictEqual(
    JSON.parse(JSON.stringify(nd1.$sdfs_prev_srch_action())),
    { k: '$lstch_', d: 0, id: 3 }
)

console.log("prev_srch")
nd17.$sdfs_prev_srch_action()
nd16.$sdfs_prev_srch_action(2)
nd15.$sdfs_prev_srch_action(3)
nd14.$sdfs_prev_srch_action(3)
nd13.$sdfs_prev_srch_action(3)
nd12.$sdfs_prev_srch_action(3)
nd11.$sdfs_prev_srch_action(3)
nd10.$sdfs_prev_srch_action(2)
 nd9.$sdfs_prev_srch_action(3)
 nd8.$sdfs_prev_srch_action(3)
 nd7.$sdfs_prev_srch_action(2)
 nd2.$sdfs_prev_srch_action(3)
 nd4.$sdfs_prev_srch_action(0)
 nd6.$sdfs_prev_srch_action(0)
 nd5.$sdfs_prev_srch_action(3)
 nd4.$sdfs_prev_srch_action(2)
 nd3.$sdfs_prev_srch_action(3)
 nd2.$sdfs_prev_srch_action(2)
 nd1.$sdfs_prev_srch_action(2)
////
console.log("prev_build")
nd17.$sdfs_prev_build_action()
nd16.$sdfs_prev_build_action(2)
nd15.$sdfs_prev_build_action(3)
nd14.$sdfs_prev_build_action(3)
nd13.$sdfs_prev_build_action(3)
nd12.$sdfs_prev_build_action(3)
nd11.$sdfs_prev_build_action(3)
nd10.$sdfs_prev_build_action(2)
 nd9.$sdfs_prev_build_action(3)
 nd8.$sdfs_prev_build_action(3)
 nd7.$sdfs_prev_build_action(2)
 nd2.$sdfs_prev_build_action(3)
 nd4.$sdfs_prev_build_action(0)
 nd6.$sdfs_prev_build_action(0)
 nd5.$sdfs_prev_build_action(3)
 nd4.$sdfs_prev_build_action(2)
 nd3.$sdfs_prev_build_action(3)
 nd2.$sdfs_prev_build_action(2)
 nd1.$sdfs_prev_build_action(2)
 
 


////

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



