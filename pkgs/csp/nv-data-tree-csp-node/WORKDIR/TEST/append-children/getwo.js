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



assert.deepStrictEqual(nd1.$get_with_spl([1,2,4]),nd15);
assert.deepStrictEqual(nd1.$get_with_spl([2]),null);




tst('$get_with_spl',1000000,()=>{nd1.$get_with_spl([1,2,4])})





