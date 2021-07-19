
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

////
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

////



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

