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
nds.push(nd17)

var forest = nd1[_Node.SYM_DICT.get_forest]
var {idpool,fc,rb,pr,lb,lc} = forest


const assert = require("assert")

nds.forEach(nd=>assert.deepStrictEqual(nd1.$is_root_of(nd),true))

for(let i=1;i<nds.length;i++) {
    var rt = nds[i];
    nds.forEach(nd=>assert.deepStrictEqual(rt.$is_root_of(nd),false))
}

assert.deepStrictEqual( nd1.$is_parent_of(nd2),true)
assert.deepStrictEqual( nd1.$is_parent_of(nd7),true)
assert.deepStrictEqual( nd1.$is_parent_of(nd10),false)
assert.deepStrictEqual( nd2.$is_parent_of(nd3),true)
assert.deepStrictEqual( nd2.$is_parent_of(nd4),true)
assert.deepStrictEqual( nd3.$is_parent_of(nd3),false)
assert.deepStrictEqual( nd4.$is_parent_of(nd5),true)
assert.deepStrictEqual( nd4.$is_parent_of(nd6),true)
assert.deepStrictEqual( nd7.$is_parent_of(nd8),true)
assert.deepStrictEqual( nd7.$is_parent_of(nd9),true)
assert.deepStrictEqual( nd7.$is_parent_of(nd10),true)
assert.deepStrictEqual(nd10.$is_parent_of(nd11),true)
assert.deepStrictEqual(nd10.$is_parent_of(nd12),true)
assert.deepStrictEqual(nd10.$is_parent_of(nd13),true)
assert.deepStrictEqual(nd10.$is_parent_of(nd14),true)
assert.deepStrictEqual(nd10.$is_parent_of(nd15),true)
assert.deepStrictEqual(nd10.$is_parent_of(nd16),true)
assert.deepStrictEqual(nd10.$is_parent_of(nd17),false)
assert.deepStrictEqual(nd16.$is_parent_of(nd17),true)


assert.deepStrictEqual( nd1.$is_ance_of(nd1),false)
for(let i=1;i<nds.length;i++) {
    assert.deepStrictEqual(nd1.$is_ance_of(nds[i]),true)
}


assert.deepStrictEqual( nd2.$is_ance_of(nd3),true)
assert.deepStrictEqual( nd2.$is_ance_of(nd4),true)
assert.deepStrictEqual( nd2.$is_ance_of(nd5),true)
assert.deepStrictEqual( nd2.$is_ance_of(nd6),true)
assert.deepStrictEqual( nd2.$is_ance_of(nd17),false)

assert.deepStrictEqual( nd3.$is_ance_of(nd3),false)
assert.deepStrictEqual( nd4.$is_ance_of(nd5),true)
assert.deepStrictEqual( nd4.$is_ance_of(nd6),true)
assert.deepStrictEqual( nd7.$is_ance_of(nd8),true)
assert.deepStrictEqual( nd7.$is_ance_of(nd9),true)
assert.deepStrictEqual( nd7.$is_ance_of(nd10),true)
assert.deepStrictEqual( nd7.$is_ance_of(nd11),true)
assert.deepStrictEqual( nd7.$is_ance_of(nd12),true)
assert.deepStrictEqual( nd7.$is_ance_of(nd13),true)
assert.deepStrictEqual( nd7.$is_ance_of(nd14),true)
assert.deepStrictEqual( nd7.$is_ance_of(nd15),true)
assert.deepStrictEqual( nd7.$is_ance_of(nd16),true)
assert.deepStrictEqual( nd7.$is_ance_of(nd17),true)


assert.deepStrictEqual(nd10.$is_ance_of(nd11),true)
assert.deepStrictEqual(nd10.$is_ance_of(nd12),true)
assert.deepStrictEqual(nd10.$is_ance_of(nd13),true)
assert.deepStrictEqual(nd10.$is_ance_of(nd14),true)
assert.deepStrictEqual(nd10.$is_ance_of(nd15),true)
assert.deepStrictEqual(nd10.$is_ance_of(nd16),true)
assert.deepStrictEqual(nd10.$is_ance_of(nd17),true)
assert.deepStrictEqual(nd16.$is_ance_of(nd17),true)


assert.deepStrictEqual(nd16.$is_inclusive_ance_of(nd16),true)
assert.deepStrictEqual(nd16.$is_inclusive_ance_of(nd17),true)

assert.deepStrictEqual( nd1.$is_child_of(nd1),false)
assert.deepStrictEqual( nd2.$is_child_of(nd1),true)
assert.deepStrictEqual( nd7.$is_child_of(nd1),true)
assert.deepStrictEqual( nd3.$is_child_of(nd2),true)
assert.deepStrictEqual( nd4.$is_child_of(nd2),true)
assert.deepStrictEqual( nd5.$is_child_of(nd4),true)
assert.deepStrictEqual( nd6.$is_child_of(nd4),true)
assert.deepStrictEqual( nd8.$is_child_of(nd7),true)
assert.deepStrictEqual( nd9.$is_child_of(nd7),true)
assert.deepStrictEqual(nd10.$is_child_of(nd7),true)

assert.deepStrictEqual(nd11.$is_child_of(nd10),true)
assert.deepStrictEqual(nd12.$is_child_of(nd10),true)
assert.deepStrictEqual(nd13.$is_child_of(nd10),true)
assert.deepStrictEqual(nd14.$is_child_of(nd10),true)
assert.deepStrictEqual(nd15.$is_child_of(nd10),true)
assert.deepStrictEqual(nd16.$is_child_of(nd10),true)
assert.deepStrictEqual(nd17.$is_child_of(nd16),true)


assert.deepStrictEqual(nd17.$is_fstch_of(nd16),true)
assert.deepStrictEqual(nd11.$is_fstch_of(nd10),true)
assert.deepStrictEqual(nd3.$is_fstch_of(nd2),true)
assert.deepStrictEqual(nd8.$is_fstch_of(nd7),true)
assert.deepStrictEqual(nd2.$is_fstch_of(nd1),true)

assert.deepStrictEqual(nd17.$is_lstch_of(nd16),true)
assert.deepStrictEqual(nd16.$is_lstch_of(nd10),true)
assert.deepStrictEqual( nd4.$is_lstch_of(nd2),true)
assert.deepStrictEqual(nd10.$is_lstch_of(nd7),true)
assert.deepStrictEqual( nd7.$is_lstch_of(nd1),true)


assert.deepStrictEqual( nd1.$is_des_of(nd1),false)
for(let i=1;i<nds.length;i++) {
    assert.deepStrictEqual(nds[i].$is_des_of(nd1),true)
}
assert.deepStrictEqual( nd1.$is_inclusive_des_of(nd1),true)

////
assert.deepStrictEqual(nd11.$is_psib_of(nd12),true)
assert.deepStrictEqual(nd11.$is_psib_of(nd13),true)
assert.deepStrictEqual(nd11.$is_psib_of(nd14),true)
assert.deepStrictEqual(nd11.$is_psib_of(nd15),true)
assert.deepStrictEqual(nd11.$is_psib_of(nd16),true)

assert.deepStrictEqual(nd12.$is_psib_of(nd13),true)
assert.deepStrictEqual(nd12.$is_psib_of(nd14),true)
assert.deepStrictEqual(nd12.$is_psib_of(nd15),true)
assert.deepStrictEqual(nd12.$is_psib_of(nd16),true)

assert.deepStrictEqual(nd13.$is_psib_of(nd14),true)
assert.deepStrictEqual(nd13.$is_psib_of(nd15),true)
assert.deepStrictEqual(nd13.$is_psib_of(nd16),true)


assert.deepStrictEqual(nd15.$is_psib_of(nd16),true)

assert.deepStrictEqual(nd16.$is_psib_of(nd16),false)


assert.deepStrictEqual(nd12.$is_fsib_of(nd11),true)
assert.deepStrictEqual(nd13.$is_fsib_of(nd11),true)
assert.deepStrictEqual(nd14.$is_fsib_of(nd11),true)
assert.deepStrictEqual(nd15.$is_fsib_of(nd11),true)
assert.deepStrictEqual(nd16.$is_fsib_of(nd11),true)

assert.deepStrictEqual(nd2.$is_lsib_of(nd7),true)
assert.deepStrictEqual(nd7.$is_rsib_of(nd2),true)
assert.deepStrictEqual(nd1.$is_lsib_of(nd1),false)
assert.deepStrictEqual(nd1.$is_sib_of(nd1),false)
assert.deepStrictEqual(nd2.$is_sib_of(nd7),true)
assert.deepStrictEqual(nd7.$is_sib_of(nd2),true)
assert.deepStrictEqual(nd1.$is_inclusive_sib_of(nd1),true)

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

tst('$is_root_of',1000000,()=>{nd1.$is_root_of(nd2)})
tst('$is_parent_of',1000000,()=>{nd1.$is_parent_of(nd2)})
tst('$is_ance_of',1000000,()=>{nd1.$is_ance_of(nd17)})
tst('$is_inclusive_ance_of',1000000,()=>{nd1.$is_inclusive_ance_of(nd17)})
tst('$is_child_of',1000000,()=>{nd9.$is_child_of(nd7)})
tst('$is_fstch_of',1000000,()=>{nd8.$is_fstch_of(nd7)})
tst('$is_lstch_of',1000000,()=>{nd16.$is_fstch_of(nd10)})
tst('$is_des_of',1000000,()=>{nd17.$is_des_of(nd1)})
tst('$is_psib_of',1000000,()=>{nd11.$is_psib_of(nd16)})
tst('$is_fsib_of',1000000,()=>{nd16.$is_fsib_of(nd11)})
tst('$is_lsib_of',1000000,()=>{nd2.$is_fsib_of(nd7)})
tst('$is_rsib_of',1000000,()=>{nd7.$is_fsib_of(nd2)})
tst('$is_sib_of',1000000,()=>{nd7.$is_fsib_of(nd2)})
tst('$is_inclusive_sib_of',1000000,()=>{nd2.$is_inclusive_sib_of(nd2)})





