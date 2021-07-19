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



var nd200 = forest.node(_Node);
nd200.tag = 200;
var [nd201,nd202,nd203] = nd200.$append_children(3)
nd201.tag = 201;
nd202.tag = 202;
nd203.tag = 203;
nd2.$replace_tree(nd200)

assert.deepStrictEqual(
    jdcp(nd1.$sdfs_),
    [
      { tag: 1 },   { tag: 200 },
      { tag: 201 }, { tag: 202 },
      { tag: 203 }, { tag: 7 },
      { tag: 8 },   { tag: 9 },
      { tag: 10 },  { tag: 11 },
      { tag: 12 },  { tag: 13 },
      { tag: 14 },  { tag: 15 },
      { tag: 16 },  { tag: 17 }
    ]
)


var nd300 = forest.node(_Node);
nd300.tag = 300;
var [nd301,nd302,nd303] = nd300.$append_children(3)
nd301.tag = 301;
nd302.tag = 302;
nd303.tag = 303;
nd1.$replace_tree(nd300)

assert.deepStrictEqual(
    jdcp(nd1.$sdfs_),
    [
      { tag: 1 },   { tag: 200 },
      { tag: 201 }, { tag: 202 },
      { tag: 203 }, { tag: 7 },
      { tag: 8 },   { tag: 9 },
      { tag: 10 },  { tag: 11 },
      { tag: 12 },  { tag: 13 },
      { tag: 14 },  { tag: 15 },
      { tag: 16 },  { tag: 17 }
    ]
)

////


var nd400 = forest.node(_Node);
nd400.tag = 400 
nd200.replace_node(nd400)

assert.deepStrictEqual(
    jdcp(nd200.$sdfs_),
    [{ tag: 200 }]
)
assert.deepStrictEqual(
    jdcp(nd400.$sdfs_),
    [[ { tag: 400 }, { tag: 201 }, { tag: 202 }, { tag: 203 } ]]
)

assert.deepStrictEqual(
    jdcp(nd1.$sdfs_),
    [
        { tag: 1 },   { tag: 400 },
        { tag: 201 }, { tag: 202 },
        { tag: 203 }, { tag: 7 },
        { tag: 8 },   { tag: 9 },
        { tag: 10 },  { tag: 11 },
        { tag: 12 },  { tag: 13 },
        { tag: 14 },  { tag: 15 },
        { tag: 16 },  { tag: 17 }
    ]
)

//tst('$erase',1000000,()=>{nd8.$erase()})



