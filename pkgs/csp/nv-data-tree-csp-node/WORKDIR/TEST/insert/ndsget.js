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



assert.deepStrictEqual(
    jdcp(nd17.$ances_),
    [ { tag: 16 }, { tag: 10 }, { tag: 7 }, { tag: 1 } ]
);

assert.deepStrictEqual(
    jdcp(nd17.$plances_),
    [ { tag: 1 }, { tag: 7 }, { tag: 10 }, { tag: 16 }, { tag: 17 } ]
);

assert.deepStrictEqual(
    jdcp(nd10.$children_),
   [
  { tag: 11 },
  { tag: 12 },
  { tag: 13 },
  { tag: 14 },
  { tag: 15 },
  { tag: 16 }
]
);

assert.deepStrictEqual(
    jdcp(nd14.$sibs_),
[
  { tag: 11 },
  { tag: 12 },
  { tag: 13 },
  { tag: 14 },
  { tag: 15 },
  { tag: 16 }
]
);


assert.deepStrictEqual(
    jdcp(nd14.$psibs_),
    [ { tag: 13 }, { tag: 12 }, { tag: 11 } ]
);

assert.deepStrictEqual(
    jdcp(nd14.$fsibs_),
    [ { tag: 15 }, { tag: 16 } ]
);

assert.deepStrictEqual(
    jdcp(nd3.$edfs_),
[
  { tag: 3 },  { tag: 5 },
  { tag: 6 },  { tag: 4 },
  { tag: 2 },  { tag: 8 },
  { tag: 9 },  { tag: 11 },
  { tag: 12 }, { tag: 13 },
  { tag: 14 }, { tag: 15 },
  { tag: 17 }, { tag: 16 },
  { tag: 10 }, { tag: 7 },
  { tag: 1 }
]);

assert.deepStrictEqual(
    jdcp(nd1.$sdfs_),
[
  { tag: 1 },  { tag: 2 },
  { tag: 3 },  { tag: 4 },
  { tag: 5 },  { tag: 6 },
  { tag: 7 },  { tag: 8 },
  { tag: 9 },  { tag: 10 },
  { tag: 11 }, { tag: 12 },
  { tag: 13 }, { tag: 14 },
  { tag: 15 }, { tag: 16 },
  { tag: 17 }
]);

assert.deepStrictEqual(
    jdcp(nd1.$sdfs_leafs_),
[
  { tag: 3 },  { tag: 5 },
  { tag: 6 },  { tag: 8 },
  { tag: 9 },  { tag: 11 },
  { tag: 12 }, { tag: 13 },
  { tag: 14 }, { tag: 15 },
  { tag: 17 }
]);

assert.deepStrictEqual(
    jdcp(nd1.$sdfs_nonleafs_),
[
  { tag: 1 },
  { tag: 2 },
  { tag: 4 },
  { tag: 7 },
  { tag: 10 },
  { tag: 16 }
]

);

tst('$get_with_spl',1000000,()=>{nd1.$get_with_spl([1,2,4])})
tst('$ances_',1000000,()=>{nd17.$ances_})
tst('$plances_',1000000,()=>{nd17.$plances_})
tst('$children_',1000000,()=>{nd10.$children_})
tst('$sibs_',1000000,()=>{nd14.$sibs_})
tst('$psibs_',1000000,()=>{nd14.$psibs_})
tst('$fsibs_',1000000,()=>{nd14.$fsibs_})
tst('$edfs_',1000000,()=>{nd3.$edfs_})
tst('$sdfs_',1000000,()=>{nd1.$sdfs_})
tst('$sdfs_leafs_',1000000,()=>{nd1.$sdfs_leafs_})
tst('$sdfs_nonleafs_',1000000,()=>{nd1.$sdfs_nonleafs_})




