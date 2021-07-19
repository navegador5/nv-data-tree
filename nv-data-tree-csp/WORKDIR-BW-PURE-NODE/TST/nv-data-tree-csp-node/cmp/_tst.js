const assert = require("assert")

const {jmap} = require("../../../lib/nv-facutil-basic/index");
const {jdcp} = require("../../../lib/nv-facutil-basic/index");
const {Act,FLAG_DICT} = require("../../../lib/nv-data-tree-actdef/index")




const {Forest,_Node,_TermNode,_TagNode,_UiNode} = require("../../../index");



const {add_ance_relation} = require("../../../lib/nv-data-tree-csp-relation/index");
add_ance_relation(_Node)

const {
    add_deep_steq,
    add_deep_lseq,
} = require("../../../lib/nv-data-tree-cmp/index");

add_deep_steq(_Node)
add_deep_lseq(_Node)


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




var nd100 = nd1.$clone()
assert.deepStrictEqual(nd1.$deep_steq(nd100),true)

nd2.$swap_tree(nd7)
assert.deepStrictEqual(nd1.$deep_steq(nd100),false)
assert.deepStrictEqual(nd1.$deep_lseq(nd100),true)




















assert.deepStrictEqual(nd17.$cmmn_ances(nd8),[nd1,nd7])
assert.deepStrictEqual(nd17.$fst_cmmn_ance(nd8),nd7)
assert.deepStrictEqual(nd17.$dist(nd8),4)
assert.deepStrictEqual(jdcp(nd17.$path_to(nd8)),[ { tag: 17 }, { tag: 16 }, { tag: 10 }, { tag: 8 } ])
assert.deepStrictEqual(jdcp(nd8.$path_to(nd17)),[ { tag: 8 }, { tag: 10 }, { tag: 16 }, { tag: 17 } ])











