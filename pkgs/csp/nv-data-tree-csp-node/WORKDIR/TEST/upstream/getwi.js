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









