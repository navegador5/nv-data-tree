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
nd17.tag = 17
nds.push(nd17)

var forest = nd1[_Node.SYM_DICT.get_forest]
var {idpool,fc,rb,pr,lb,lc} = forest



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




