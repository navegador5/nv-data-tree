const {_Node} = require("../../index");
const Forest = require("nv-data-tree-csp-forest");



const method = require("nv-data-tree-csp-method")
for(let k in method) {
    if(k!=='ERROR_DICT') {
        method[k](_Node)
    }
}


var forest = new Forest(1000)

var nds = Array.from({length:16}).map((r,i)=>{
    let nd = forest.node(_Node);
    nd.tag = (i+1)
    return(nd)
})


for(let i=1;i<17;i++) {
    globalThis["nd"+i] = nds[i-1]
}

nd1.$prepend_child(nd7)
nd1.$prepend_child(nd2)

nd2.$prepend_child(nd4)
nd2.$prepend_child(nd3)

nd4.$prepend_child(nd6)
nd4.$prepend_child(nd5)

nd7.$prepend_child(nd10)
nd7.$prepend_child(nd9)
nd7.$prepend_child(nd8)

nd10.$prepend_child(nd16)
nd10.$prepend_child(nd15)
nd10.$prepend_child(nd14)
nd10.$prepend_child(nd13)
nd10.$prepend_child(nd12)
nd10.$prepend_child(nd11)
var nd17=nd16.$prepend_child()

nds.push(nd17)

const assert = require("assert")

nds.forEach(nd=>assert.deepStrictEqual(nd.$is_empty(),false))

assert.deepStrictEqual(nd1.$is_root(),true)
for(let i=1;i<nds.length;i++) {
    assert.deepStrictEqual(nds[i].$is_root(),false)
}



assert.deepStrictEqual(nd1.$is_fstch(),true)
assert.deepStrictEqual(nd2.$is_fstch(),true)
assert.deepStrictEqual(nd3.$is_fstch(),true)
assert.deepStrictEqual(nd4.$is_fstch(),false)
assert.deepStrictEqual(nd5.$is_fstch(),true)
assert.deepStrictEqual(nd6.$is_fstch(),false)
assert.deepStrictEqual(nd7.$is_fstch(),false)
assert.deepStrictEqual(nd8.$is_fstch(),true)
assert.deepStrictEqual(nd9.$is_fstch(),false)
assert.deepStrictEqual(nd10.$is_fstch(),false)
assert.deepStrictEqual(nd11.$is_fstch(),true)
assert.deepStrictEqual(nd12.$is_fstch(),false)
assert.deepStrictEqual(nd13.$is_fstch(),false)
assert.deepStrictEqual(nd14.$is_fstch(),false)
assert.deepStrictEqual(nd15.$is_fstch(),false)
assert.deepStrictEqual(nd16.$is_fstch(),false)
assert.deepStrictEqual(nd17.$is_fstch(),true)


assert.deepStrictEqual( nd1.$is_lstch(),true)
assert.deepStrictEqual( nd2.$is_lstch(),false)
assert.deepStrictEqual( nd3.$is_lstch(),false)
assert.deepStrictEqual( nd4.$is_lstch(),true)
assert.deepStrictEqual( nd5.$is_lstch(),false)
assert.deepStrictEqual( nd6.$is_lstch(),true)
assert.deepStrictEqual( nd7.$is_lstch(),true)
assert.deepStrictEqual( nd8.$is_lstch(),false)
assert.deepStrictEqual( nd9.$is_lstch(),false)
assert.deepStrictEqual(nd10.$is_lstch(),true)
assert.deepStrictEqual(nd11.$is_lstch(),false)
assert.deepStrictEqual(nd12.$is_lstch(),false)
assert.deepStrictEqual(nd13.$is_lstch(),false)
assert.deepStrictEqual(nd14.$is_lstch(),false)
assert.deepStrictEqual(nd15.$is_lstch(),false)
assert.deepStrictEqual(nd16.$is_lstch(),true)
assert.deepStrictEqual(nd17.$is_lstch(),true)

assert.deepStrictEqual( nd1.$is_midch(),false)
assert.deepStrictEqual( nd2.$is_midch(),false)
assert.deepStrictEqual( nd3.$is_midch(),false)
assert.deepStrictEqual( nd4.$is_midch(),false)
assert.deepStrictEqual( nd5.$is_midch(),false)
assert.deepStrictEqual( nd6.$is_midch(),false)
assert.deepStrictEqual( nd7.$is_midch(),false)
assert.deepStrictEqual( nd8.$is_midch(),false)
assert.deepStrictEqual( nd9.$is_midch(),true)
assert.deepStrictEqual(nd10.$is_midch(),false)
assert.deepStrictEqual(nd11.$is_midch(),false)
assert.deepStrictEqual(nd12.$is_midch(),true)
assert.deepStrictEqual(nd13.$is_midch(),true)
assert.deepStrictEqual(nd14.$is_midch(),true)
assert.deepStrictEqual(nd15.$is_midch(),true)
assert.deepStrictEqual(nd16.$is_midch(),false)
assert.deepStrictEqual(nd17.$is_midch(),false)


assert.deepStrictEqual( nd1.$is_midch(),false)
assert.deepStrictEqual( nd2.$is_midch(),false)
assert.deepStrictEqual( nd3.$is_midch(),false)
assert.deepStrictEqual( nd4.$is_midch(),false)
assert.deepStrictEqual( nd5.$is_midch(),false)
assert.deepStrictEqual( nd6.$is_midch(),false)
assert.deepStrictEqual( nd7.$is_midch(),false)
assert.deepStrictEqual( nd8.$is_midch(),false)
assert.deepStrictEqual( nd9.$is_midch(),true)
assert.deepStrictEqual(nd10.$is_midch(),false)
assert.deepStrictEqual(nd11.$is_midch(),false)
assert.deepStrictEqual(nd12.$is_midch(),true)
assert.deepStrictEqual(nd13.$is_midch(),true)
assert.deepStrictEqual(nd14.$is_midch(),true)
assert.deepStrictEqual(nd15.$is_midch(),true)
assert.deepStrictEqual(nd16.$is_midch(),false)
assert.deepStrictEqual(nd17.$is_midch(),false)


assert.deepStrictEqual( nd1.$is_leaf(),false)
assert.deepStrictEqual( nd2.$is_leaf(),false)
assert.deepStrictEqual( nd3.$is_leaf(),true)
assert.deepStrictEqual( nd4.$is_leaf(),false)
assert.deepStrictEqual( nd5.$is_leaf(),true)
assert.deepStrictEqual( nd6.$is_leaf(),true)
assert.deepStrictEqual( nd7.$is_leaf(),false)
assert.deepStrictEqual( nd8.$is_leaf(),true)
assert.deepStrictEqual( nd9.$is_leaf(),true)
assert.deepStrictEqual(nd10.$is_leaf(),false)
assert.deepStrictEqual(nd11.$is_leaf(),true)
assert.deepStrictEqual(nd12.$is_leaf(),true)
assert.deepStrictEqual(nd13.$is_leaf(),true)
assert.deepStrictEqual(nd14.$is_leaf(),true)
assert.deepStrictEqual(nd15.$is_leaf(),true)
assert.deepStrictEqual(nd16.$is_leaf(),false)
assert.deepStrictEqual(nd17.$is_leaf(),true)


assert.deepStrictEqual( nd1.$is_lonely(),true)
assert.deepStrictEqual( nd2.$is_lonely(),false)
assert.deepStrictEqual( nd3.$is_lonely(),false)
assert.deepStrictEqual( nd4.$is_lonely(),false)
assert.deepStrictEqual( nd5.$is_lonely(),false)
assert.deepStrictEqual( nd6.$is_lonely(),false)
assert.deepStrictEqual( nd7.$is_lonely(),false)
assert.deepStrictEqual( nd8.$is_lonely(),false)
assert.deepStrictEqual( nd9.$is_lonely(),false)
assert.deepStrictEqual(nd10.$is_lonely(),false)
assert.deepStrictEqual(nd11.$is_lonely(),false)
assert.deepStrictEqual(nd12.$is_lonely(),false)
assert.deepStrictEqual(nd13.$is_lonely(),false)
assert.deepStrictEqual(nd14.$is_lonely(),false)
assert.deepStrictEqual(nd15.$is_lonely(),false)
assert.deepStrictEqual(nd16.$is_lonely(),false)
assert.deepStrictEqual(nd17.$is_lonely(),true)

nds.forEach(nd=>assert.deepStrictEqual(nd.$is_isolated(),false))


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

tst("$is_empty",1000000,()=>{nd1.$is_empty()})
tst("$is_root",1000000,()=>{nd1.$is_root()})
tst("$is_fstch",1000000,()=>{nd11.$is_fstch()})
tst("$is_lstch",1000000,()=>{nd16.$is_lstch()})
tst("$is_midch",1000000,()=>{nd12.$is_midch()})
tst("$is_leaf",1000000,()=>{nd9.$is_leaf()})
tst("$is_leaf",1000000,()=>{nd10.$is_leaf()})
tst("$is_lonely",1000000,()=>{nd17.$is_lonely()})
tst("$is_isolated",1000000,()=>{nd17.$is_isolated()})

tst("$is_isolated",1000000,()=>{nd17.$is_isolated()})

nds.forEach(nd=>nd.$disconn())
nds.forEach(nd=>assert.deepStrictEqual(nd.$is_isolated(),true))

tst("$is_isolated",1000000,()=>{nd1.$is_isolated()})

