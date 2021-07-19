const {Forest,_Node,_TermNode,_TagNode,_UiNode} = require("../../../index");


var forest = new Forest(1000)

var nd1 = forest.node(_Node);
nd1.tag = 1;

var nd2 = nd1.$insert_child_before(0)
nd2.tag = 2;

var nd7 = nd1.$insert_child_after(0)
nd7.tag = 7;


var nd3 = forest.node(_Node);
nd3.tag =3;
var nd4 = forest.node(_Node)
nd4.tag = 4;
nd2.$insert_children_before(0,[nd3,nd4])


var [nd5,nd6] = nd4.$insert_children_after(0,2)
nd5.tag = 5
nd6.tag = 6


var nd8 = nd7.$insert_child_before(0)
nd8.tag =8
var nd9 = nd7.$insert_child_after(0)
nd9.tag =9
var nd10 = nd7.$insert_child_after(1)
nd10.tag =10


var [nd11,nd12,nd16] = nd10.$insert_children_after(0,3)
nd11.tag = 11
nd12.tag = 12
nd16.tag = 16

/*
var [nd13,nd14] = nd10.$insert_children_after(1,2)
nd13.tag = 13
nd14.tag = 14
*/
var [nd13,nd14] = nd10.$insert_children_before(2,2)
nd13.tag = 13
nd14.tag = 14

var nd15 = nd10.$insert_child_after(3)
nd15.tag = 15


var nd17=nd16.$prepend_child()

nd17.tag = 17

var nds = [nd1,nd2,nd3,nd4,nd5,nd6,nd7,nd8,nd9,nd10,nd11,nd12,nd13,nd14,nd15,nd16,nd17]

var forest = nd1[_Node.SYM_DICT.get_forest]
var {idpool,fc,rb,pr,lb,lc} = forest
var ctor = _Node



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

