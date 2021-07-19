
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

var nds = Array.from({length:16}).map((r,i)=>{
    let nd = forest.node(_Node);
    nd.tag = (i+1)
    return(nd)
})


for(let i=1;i<17;i++) {
    globalThis["nd"+i] = nds[i-1]
}


nd1.$prepend_child(nd2)
nd2.$add_rsib(nd7)

nd2.$prepend_child(nd3)
nd3.$add_rsib(nd4)


nd4.$prepend_child(nd5)
nd5.$add_rsib(nd6)



nd7.$prepend_child(nd8)
nd8.$add_rsib(nd9)
nd9.$add_rsib(nd10)


nd10.$prepend_child(nd11)
nd11.$add_rsib(nd12)
nd12.$add_rsib(nd13)
nd13.$add_rsib(nd14)
nd14.$add_rsib(nd15)
nd15.$add_rsib(nd16)


var nd17=nd16.$prepend_child()

nd17.tag = 17
nds.push(nd17)

var forest = nd1[_Node.SYM_DICT.get_forest]
var {idpool,fc,rb,pr,lb,lc} = forest

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











