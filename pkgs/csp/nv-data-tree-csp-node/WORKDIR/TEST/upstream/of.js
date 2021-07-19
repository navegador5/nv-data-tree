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





