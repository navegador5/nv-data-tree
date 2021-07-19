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



assert.deepStrictEqual(
    jdcp(Array.from(nd1.$sedfs_)),
[
  [ { tag: 1 }, 'open' ],   
  [ { tag: 2 }, 'open' ],
      [ { tag: 3 }, 'open' ],   
      [ { tag: 3 }, 'close' ],
      [ { tag: 4 }, 'open' ],   
          [ { tag: 5 }, 'open' ],
          [ { tag: 5 }, 'close' ],  
          [ { tag: 6 }, 'open' ],
          [ { tag: 6 }, 'close' ],  
      [ { tag: 4 }, 'close' ],
  [ { tag: 2 }, 'close' ],  [ { tag: 7 }, 'open' ],
  [ { tag: 8 }, 'open' ],   [ { tag: 8 }, 'close' ],
  [ { tag: 9 }, 'open' ],   [ { tag: 9 }, 'close' ],
  [ { tag: 10 }, 'open' ],  [ { tag: 11 }, 'open' ],
  [ { tag: 11 }, 'close' ], [ { tag: 12 }, 'open' ],
  [ { tag: 12 }, 'close' ], [ { tag: 13 }, 'open' ],
  [ { tag: 13 }, 'close' ], [ { tag: 14 }, 'open' ],
  [ { tag: 14 }, 'close' ], [ { tag: 15 }, 'open' ],
  [ { tag: 15 }, 'close' ], [ { tag: 16 }, 'open' ],
  [ { tag: 17 }, 'open' ],  [ { tag: 17 }, 'close' ],
  [ { tag: 16 }, 'close' ], [ { tag: 10 }, 'close' ],
  [ { tag: 7 }, 'close' ],  [ { tag: 1 }, 'close' ]
]);


assert.deepStrictEqual(
    jdcp(nds.map(nd=>nd.$sedfs_next_after_open_)),
    [
  [ { tag: 2 }, 'open' ],
  [ { tag: 3 }, 'open' ],
  [ { tag: 3 }, 'close' ],
  [ { tag: 5 }, 'open' ],
  [ { tag: 5 }, 'close' ],
  [ { tag: 6 }, 'close' ],
  [ { tag: 8 }, 'open' ],
  [ { tag: 8 }, 'close' ],
  [ { tag: 9 }, 'close' ],
  [ { tag: 11 }, 'open' ],
  [ { tag: 11 }, 'close' ],
  [ { tag: 12 }, 'close' ],
  [ { tag: 13 }, 'close' ],
  [ { tag: 14 }, 'close' ],
  [ { tag: 15 }, 'close' ],
  [ { tag: 17 }, 'open' ],
  [ { tag: 17 }, 'close' ]
])

assert.deepStrictEqual(
    jdcp(nds.map(nd=>nd.$sedfs_next_after_close_)),
[
  [ null, 'close' ],
  [ { tag: 7 }, 'open' ],
  [ { tag: 4 }, 'open' ],
  [ { tag: 2 }, 'close' ],
  [ { tag: 6 }, 'open' ],
  [ { tag: 4 }, 'close' ],
  [ { tag: 1 }, 'close' ],
  [ { tag: 9 }, 'open' ],
  [ { tag: 10 }, 'open' ],
  [ { tag: 7 }, 'close' ],
  [ { tag: 12 }, 'open' ],
  [ { tag: 13 }, 'open' ],
  [ { tag: 14 }, 'open' ],
  [ { tag: 15 }, 'open' ],
  [ { tag: 16 }, 'open' ],
  [ { tag: 10 }, 'close' ],
  [ { tag: 16 }, 'close' ]
]
)
////
assert.deepStrictEqual(
    jdcp(nds.map(nd=>nd.$sedfs_prev_before_open_)),
[
  [ null, 'open' ],
  [ { tag: 1 }, 'open' ],
  [ { tag: 2 }, 'open' ],
  [ { tag: 3 }, 'close' ],
  [ { tag: 4 }, 'open' ],
  [ { tag: 5 }, 'close' ],
  [ { tag: 2 }, 'close' ],
  [ { tag: 7 }, 'open' ],
  [ { tag: 8 }, 'close' ],
  [ { tag: 9 }, 'close' ],
  [ { tag: 10 }, 'open' ],
  [ { tag: 11 }, 'close' ],
  [ { tag: 12 }, 'close' ],
  [ { tag: 13 }, 'close' ],
  [ { tag: 14 }, 'close' ],
  [ { tag: 15 }, 'close' ],
  [ { tag: 16 }, 'open' ]
]

)

assert.deepStrictEqual(
    jdcp(nds.map(nd=>nd.$sedfs_prev_before_close_)),
[
  [ { tag: 7 }, 'close' ],
  [ { tag: 4 }, 'close' ],
  [ { tag: 3 }, 'open' ],
  [ { tag: 6 }, 'close' ],
  [ { tag: 5 }, 'open' ],
  [ { tag: 6 }, 'open' ],
  [ { tag: 10 }, 'close' ],
  [ { tag: 8 }, 'open' ],
  [ { tag: 9 }, 'open' ],
  [ { tag: 16 }, 'close' ],
  [ { tag: 11 }, 'open' ],
  [ { tag: 12 }, 'open' ],
  [ { tag: 13 }, 'open' ],
  [ { tag: 14 }, 'open' ],
  [ { tag: 15 }, 'open' ],
  [ { tag: 17 }, 'close' ],
  [ { tag: 17 }, 'open' ]
])
////
assert.deepStrictEqual(
    jdcp(Array.from(nd1.$gen_sedfs_next(0))),
[
  [ { tag: 1 }, 'open' ],   [ { tag: 2 }, 'open' ],
  [ { tag: 3 }, 'open' ],   [ { tag: 3 }, 'close' ],
  [ { tag: 4 }, 'open' ],   [ { tag: 5 }, 'open' ],
  [ { tag: 5 }, 'close' ],  [ { tag: 6 }, 'open' ],
  [ { tag: 6 }, 'close' ],  [ { tag: 4 }, 'close' ],
  [ { tag: 2 }, 'close' ],  [ { tag: 7 }, 'open' ],
  [ { tag: 8 }, 'open' ],   [ { tag: 8 }, 'close' ],
  [ { tag: 9 }, 'open' ],   [ { tag: 9 }, 'close' ],
  [ { tag: 10 }, 'open' ],  [ { tag: 11 }, 'open' ],
  [ { tag: 11 }, 'close' ], [ { tag: 12 }, 'open' ],
  [ { tag: 12 }, 'close' ], [ { tag: 13 }, 'open' ],
  [ { tag: 13 }, 'close' ], [ { tag: 14 }, 'open' ],
  [ { tag: 14 }, 'close' ], [ { tag: 15 }, 'open' ],
  [ { tag: 15 }, 'close' ], [ { tag: 16 }, 'open' ],
  [ { tag: 17 }, 'open' ],  [ { tag: 17 }, 'close' ],
  [ { tag: 16 }, 'close' ], [ { tag: 10 }, 'close' ],
  [ { tag: 7 }, 'close' ],  [ { tag: 1 }, 'close' ]
])

assert.deepStrictEqual(
    jdcp(Array.from(nd1.$gen_sedfs_prev(1))),
[
  [ { tag: 1 }, 'close' ],  [ { tag: 7 }, 'close' ],
  [ { tag: 10 }, 'close' ], [ { tag: 16 }, 'close' ],
  [ { tag: 17 }, 'close' ], [ { tag: 17 }, 'open' ],
  [ { tag: 16 }, 'open' ],  [ { tag: 15 }, 'close' ],
  [ { tag: 15 }, 'open' ],  [ { tag: 14 }, 'close' ],
  [ { tag: 14 }, 'open' ],  [ { tag: 13 }, 'close' ],
  [ { tag: 13 }, 'open' ],  [ { tag: 12 }, 'close' ],
  [ { tag: 12 }, 'open' ],  [ { tag: 11 }, 'close' ],
  [ { tag: 11 }, 'open' ],  [ { tag: 10 }, 'open' ],
  [ { tag: 9 }, 'close' ],  [ { tag: 9 }, 'open' ],
  [ { tag: 8 }, 'close' ],  [ { tag: 8 }, 'open' ],
  [ { tag: 7 }, 'open' ],   [ { tag: 2 }, 'close' ],
  [ { tag: 4 }, 'close' ],  [ { tag: 6 }, 'close' ],
  [ { tag: 6 }, 'open' ],   [ { tag: 5 }, 'close' ],
  [ { tag: 5 }, 'open' ],   [ { tag: 4 }, 'open' ],
  [ { tag: 3 }, 'close' ],  [ { tag: 3 }, 'open' ],
  [ { tag: 2 }, 'open' ],   [ { tag: 1 }, 'open' ]
])

assert.deepStrictEqual(
    jdcp(Array.from(nd2.$gen_sedfs_next_after_open())),
[
  [ { tag: 2 }, 'open' ],
  [ { tag: 3 }, 'open' ],
  [ { tag: 3 }, 'close' ],
  [ { tag: 4 }, 'open' ],
  [ { tag: 5 }, 'open' ],
  [ { tag: 5 }, 'close' ],
  [ { tag: 6 }, 'open' ],
  [ { tag: 6 }, 'close' ],
  [ { tag: 4 }, 'close' ],
  [ { tag: 2 }, 'close' ]
])

assert.deepStrictEqual(
    jdcp(Array.from(nd1.$gen_sedfs_next_after_close())),
    [ [ { tag: 1 }, 'close' ] ]
)
////

assert.deepStrictEqual(
    jdcp(Array.from(nd2.$gen_sedfs_prev_before_open())),
    [ [ { tag: 2 }, 'open' ], [ { tag: 1 }, 'open' ] ]
)

assert.deepStrictEqual(
    jdcp(Array.from(nd1.$gen_sedfs_prev_before_close())),
[
  [ { tag: 1 }, 'close' ],  [ { tag: 7 }, 'close' ],
  [ { tag: 10 }, 'close' ], [ { tag: 16 }, 'close' ],
  [ { tag: 17 }, 'close' ], [ { tag: 17 }, 'open' ],
  [ { tag: 16 }, 'open' ],  [ { tag: 15 }, 'close' ],
  [ { tag: 15 }, 'open' ],  [ { tag: 14 }, 'close' ],
  [ { tag: 14 }, 'open' ],  [ { tag: 13 }, 'close' ],
  [ { tag: 13 }, 'open' ],  [ { tag: 12 }, 'close' ],
  [ { tag: 12 }, 'open' ],  [ { tag: 11 }, 'close' ],
  [ { tag: 11 }, 'open' ],  [ { tag: 10 }, 'open' ],
  [ { tag: 9 }, 'close' ],  [ { tag: 9 }, 'open' ],
  [ { tag: 8 }, 'close' ],  [ { tag: 8 }, 'open' ],
  [ { tag: 7 }, 'open' ],   [ { tag: 2 }, 'close' ],
  [ { tag: 4 }, 'close' ],  [ { tag: 6 }, 'close' ],
  [ { tag: 6 }, 'open' ],   [ { tag: 5 }, 'close' ],
  [ { tag: 5 }, 'open' ],   [ { tag: 4 }, 'open' ],
  [ { tag: 3 }, 'close' ],  [ { tag: 3 }, 'open' ],
  [ { tag: 2 }, 'open' ],   [ { tag: 1 }, 'open' ]
])
////
assert.deepStrictEqual(
    nd1.$sedfs_next(FLAG_DICT.open),
    [ nd2, 'open' ]
)
assert.deepStrictEqual(
    nd1.$sedfs_next(FLAG_DICT.close),
    [ null, 'close' ]
)
assert.deepStrictEqual(
    nd6.$sedfs_next(FLAG_DICT.open),
    [ nd6, 'close' ]
)
assert.deepStrictEqual(
    nd6.$sedfs_next(FLAG_DICT.close),
    [ nd4, 'close' ]
)


assert.deepStrictEqual(
    nd1.$sedfs_prev(FLAG_DICT.open),
    [ null, 'open' ]
)
assert.deepStrictEqual(
    nd1.$sedfs_prev(FLAG_DICT.close),
    [ nd7, 'close' ]
)
assert.deepStrictEqual(
    nd6.$sedfs_prev(FLAG_DICT.open),
    [ nd5, 'close' ]
)
assert.deepStrictEqual(
    nd6.$sedfs_prev(FLAG_DICT.close),
    [ nd6, 'open' ]
)
assert.deepStrictEqual(
    nd7.$sedfs_prev(FLAG_DICT.open),
    [ nd2, 'close' ]
)
tst('$sedfs_',1000000,()=>{nd1.$sedfs_})
tst('$sedfs_next_after_open_',1000000,()=>{nd10.$sedfs_next_after_open_})
tst('$sedfs_next_after_close_',1000000,()=>{nd10.$sedfs_next_after_close_})

tst('$sedfs_next_before_open_',1000000,()=>{nd7.$sedfs_next_before_open_})
tst('$sedfs_next_before_close_',1000000,()=>{nd7.$sedfs_next_before_close_})

tst('$gen_sedfs_next',1000000,()=>{nd1.$gen_sedfs_next(FLAG_DICT.open)})
tst('$gen_sedfs_prev',1000000,()=>{nd1.$gen_sedfs_prev(FLAG_DICT.close)})


tst('$gen_sedfs_next_after_open',1000000,()=>{Array.from(nd2.$gen_sedfs_next_after_open())})
tst('$gen_sedfs_next_after_close',1000000,()=>{Array.from(nd2.$gen_sedfs_next_after_close())})

tst('$gen_sedfs_prev_before_open',1000000, ()=>{Array.from(nd2.$gen_sedfs_prev_before_open())})
tst('$gen_sedfs_prev_before_close',1000000,()=>{Array.from(nd2.$gen_sedfs_prev_before_open())})

tst('$sedfs_next',1000000,()=>{nd2.$sedfs_next(FLAG_DICT.close)})
tst('$sedfs_prev',1000000,()=>{nd2.$sedfs_prev(FLAG_DICT.close)})



