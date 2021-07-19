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

nd1.$prepend_child(nd7)
nd7.$add_lsib(nd2)

nd2.$prepend_child(nd4)
nd4.$add_lsib(nd3)


nd4.$prepend_child(nd6)
nd6.$add_lsib(nd5)


nd7.$prepend_child(nd10)
nd10.$add_lsib(nd9)
nd9.$add_lsib(nd8)


nd10.$prepend_child(nd16)
nd16.$add_lsib(nd15)
nd15.$add_lsib(nd14)
nd14.$add_lsib(nd13)
nd13.$add_lsib(nd12)
nd12.$add_lsib(nd11)


var nd17=nd16.$prepend_child()


nd17.tag = 17
nds.push(nd17)

var forest = nd1[_Node.SYM_DICT.get_forest]
var {idpool,fc,rb,pr,lb,lc} = forest



assert.deepStrictEqual(nd1.$get_with_spl([1,2,4]),nd15);
assert.deepStrictEqual(nd1.$get_with_spl([2]),null);




tst('$get_with_spl',1000000,()=>{nd1.$get_with_spl([1,2,4])})





