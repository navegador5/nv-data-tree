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

nd1.$append_child(nd2)
nd2.$append_child(nd3)
nd2.$append_child(nd4)
nd4.$append_child(nd5)
nd4.$append_child(nd6)
nd1.$append_child(nd7)
nd7.$append_child(nd8)
nd7.$append_child(nd9)
nd7.$append_child(nd10)
nd10.$append_child(nd11)
nd10.$append_child(nd12)
nd10.$append_child(nd13)
nd10.$append_child(nd14)
nd10.$append_child(nd15)
nd10.$append_child(nd16)
var nd17=nd16.$append_child()
nd17.tag = 17
nds.push(nd17)

var forest = nd1[_Node.SYM_DICT.get_forest]
var {idpool,fc,rb,pr,lb,lc} = forest

const {Act,FLAG_DICT} = require("../../../lib/nv-data-tree-actdef/index")


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
  { k: '$fstch_', d: 0, id: 3 },
  { k: '$rsib_', d: 1, id: 4 },
  { k: '$fstch_', d: 0, id: 5 },
  { k: '$rsib_', d: 1, id: 6 },
  { k: '$parent_', d: 2, id: 4 },
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
])

assert.deepStrictEqual(
    JSON.parse(JSON.stringify(nds.map(nd=>nd.$sdfs_next_build_action(Act.DIRECTION.down)))),
[
  { k: '$prepend_child', d: 0, id: 2 },
  { k: '$prepend_child', d: 0, id: 3 },
  { k: '$add_rsib', d: 1, id: 4 },
  { k: '$prepend_child', d: 0, id: 5 },
  { k: '$add_rsib', d: 1, id: 6 },
  { k: '$parent_', d: 2, id: 4 },
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
    { k: '$lstch_', d: 0, id: 7 }
)

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



