
const assert = require("assert")
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

assert.deepStrictEqual(nd1.$ance(0),null)
assert.deepStrictEqual(nd17.$ance(1),nd10)

assert.deepStrictEqual(nd1.$plance(0),nd1)
assert.deepStrictEqual(nd17.$plance(2),nd10)

assert.deepStrictEqual(nd1.$child(0),nd2)
assert.deepStrictEqual(nd10.$child(2),nd13)
assert.deepStrictEqual(nd10.$child(8),null)

assert.deepStrictEqual(nd11.$sib(0),nd11)
assert.deepStrictEqual(nd11.$sib(1),nd12)
assert.deepStrictEqual(nd11.$sib(5),nd16)
assert.deepStrictEqual(nd11.$sib(6),null)

assert.deepStrictEqual(nd14.$psib(0),nd13)
assert.deepStrictEqual(nd14.$psib(2),nd11)

assert.deepStrictEqual(nd14.$fsib(0),nd15)
assert.deepStrictEqual(nd14.$fsib(2),null)




tst('$ance',1000000,()=>{nd17.$ance(1)})
tst('$plance',1000000,()=>{nd17.$plance(1)})
tst('$child',1000000,()=>{nd10.$child(3)})
tst('$sib',1000000,()=>{nd14.$sib(3)})
tst('$psib',1000000,()=>{nd14.$psib(1)})
tst('$fsib',1000000,()=>{nd14.$fsib(1)})









