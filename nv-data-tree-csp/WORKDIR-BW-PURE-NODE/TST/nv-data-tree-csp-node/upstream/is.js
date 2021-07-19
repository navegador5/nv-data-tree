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

