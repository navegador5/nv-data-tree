
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


assert.deepStrictEqual(nd17.$some_ances([0,2]),[nd16,nd7])
assert.deepStrictEqual(nd17.$some_plances([0,2]),[nd1,nd10])
assert.deepStrictEqual(nd10.$some_children([0,2,4]),[nd11,nd13,nd15])
assert.deepStrictEqual(nd14.$some_sibs([0,2,4]),[nd11,nd13,nd15])
assert.deepStrictEqual(nd14.$some_psibs([0,2,4]),[nd13,nd11])
assert.deepStrictEqual(nd12.$some_fsibs([0,2,4]),[nd13,nd15])







tst('$some_ances',1000000,()=>{nd17.$some_ances([0,2])})
tst('$some_plances',1000000,()=>{nd17.$some_plances([0,2])})
tst('$some_children',1000000,()=>{nd10.$some_plances([0,2,4])})
tst('$some_sibs',1000000,()=>{nd14.$some_sibs([0,2,4])})
tst('$some_psibs',1000000,()=>{nd14.$some_psibs([0,2,4])})
tst('$some_fsibs',1000000,()=>{nd12.$some_fsibs([0,2,4])})











