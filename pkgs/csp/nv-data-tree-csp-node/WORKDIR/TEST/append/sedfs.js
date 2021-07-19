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



