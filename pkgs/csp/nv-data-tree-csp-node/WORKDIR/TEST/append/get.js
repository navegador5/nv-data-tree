const {_Node} = require("../../index");
const Forest = require("nv-data-tree-csp-forest");



const method = require("nv-data-tree-csp-method")
for(let k in method) {
    if(k!=='ERROR_DICT') {
        method[k](_Node)
    }
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


const assert = require("assert")

assert.deepStrictEqual(nds.map(r=>r.$depth_),[
  0, 1, 2, 2, 3, 3, 1,
  2, 2, 2, 3, 3, 3, 3,
  3, 3, 4
]
)

assert.deepStrictEqual(nds.map(r=>r.$children_count_),
[
  2, 2, 0, 2, 0, 0, 3,
  0, 0, 6, 0, 0, 0, 0,
  0, 1, 0
]
)


assert.deepStrictEqual(nds.map(r=>r.$sibseq_),
[
  0, 0, 0, 1, 0, 1, 1,
  0, 1, 2, 0, 1, 2, 3,
  4, 5, 0
]
)

assert.deepStrictEqual(nds.map(r=>r.$sibs_count_),
[
  1, 2, 2, 2, 2, 2, 2,
  3, 3, 3, 6, 6, 6, 6,
  6, 6, 1
]

)
assert.deepStrictEqual(nds.map(r=>r.$psibs_count_),
[
  0, 0, 0, 1, 0, 1, 1,
  0, 1, 2, 0, 1, 2, 3,
  4, 5, 0
]

)
assert.deepStrictEqual(nds.map(r=>r.$fsibs_count_),
[
  0, 1, 1, 0, 1, 0, 0,
  2, 1, 0, 5, 4, 3, 2,
  1, 0, 0
]
)


assert.deepStrictEqual(nds.map(r=>r.$spl_),[
  [],             [ 0 ],
  [ 0, 0 ],       [ 0, 1 ],
  [ 0, 1, 0 ],    [ 0, 1, 1 ],
  [ 1 ],          [ 1, 0 ],
  [ 1, 1 ],       [ 1, 2 ],
  [ 1, 2, 0 ],    [ 1, 2, 1 ],
  [ 1, 2, 2 ],    [ 1, 2, 3 ],
  [ 1, 2, 4 ],    [ 1, 2, 5 ],
  [ 1, 2, 5, 0 ]
])


assert.deepStrictEqual(nds.map(r=>r.$length_),
[
  17, 5, 1, 3, 1, 1, 11,
   1, 1, 8, 1, 1, 1,  1,
   1, 2, 1
]
)

assert.deepStrictEqual(nds.map(r=>r.$width_),
[
  11, 3, 1, 2, 1, 1, 8,
   1, 1, 6, 1, 1, 1, 1,
   1, 1, 1
]

)

assert.deepStrictEqual(nds.map(r=>r.$nonleaf_length_),
[
  6, 2, 0, 1, 0, 0, 3,
  0, 0, 2, 0, 0, 0, 0,
  0, 1, 0
]

)

assert.deepStrictEqual(nds.map(r=>r.$offset_),
[
  0,  0,  0, 1, 1, 2, 3,
  3,  4,  5, 5, 6, 7, 8,
  9, 10, 10
]
)

assert.deepStrictEqual(nds.map(r=>r.$height_),
[
  5, 3, 1, 2, 1, 1, 4,
  1, 1, 3, 1, 1, 1, 1,
  1, 2, 1
]
)
assert.deepStrictEqual(nds.map(r=>r.$sdfs_index_),
[
   0,  1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12, 13,
  14, 15, 16
]

)
assert.deepStrictEqual(nds.map(r=>r.$sdfs_leaf_index_),
[
  -1, -1,  0, -1, 1, 2, -1,
   3,  4, -1,  5, 6, 7,  8,
   9, -1, 10
]

)
assert.deepStrictEqual(nds.map(r=>r.$sdfs_nonleaf_index_),
[
   0,  1, -1,  2, -1, -1,  3,
  -1, -1,  4, -1, -1, -1, -1,
  -1,  5, -1
]
)
assert.deepStrictEqual(nds.map(r=>r.$edfs_index_),
[
  16,  4,  0, 3, 1, 2, 15,
   5,  6, 14, 7, 8, 9, 10,
  11, 13, 12
]

)
assert.deepStrictEqual(nds.map(r=>r.$edfs_leaf_index_),
[
  -1, -1,  0, -1, 1, 2, -1,
   3,  4, -1,  5, 6, 7,  8,
   9, -1, 10
]
)
assert.deepStrictEqual(nds.map(r=>r.$edfs_nonleaf_index_),
[
   5,  1, -1,  0, -1, -1,  4,
  -1, -1,  3, -1, -1, -1, -1,
  -1,  2, -1
]
)
assert.deepStrictEqual(nd1.$sdfs_next_srch_action_list_,
 [
    { k: '$self_', d: 0 },   { k: '$fstch_', d: 0 },
    { k: '$fstch_', d: 0 },  { k: '$rsib_', d: 1 },
    { k: '$fstch_', d: 0 },  { k: '$rsib_', d: 1 },
    { k: '$parent_', d: 2 }, { k: '$parent_', d: 2 },
    { k: '$rsib_', d: 1 },   { k: '$fstch_', d: 0 },
    { k: '$rsib_', d: 1 },   { k: '$rsib_', d: 1 },
    { k: '$fstch_', d: 0 },  { k: '$rsib_', d: 1 },
    { k: '$rsib_', d: 1 },   { k: '$rsib_', d: 1 },
    { k: '$rsib_', d: 1 },   { k: '$rsib_', d: 1 },
    { k: '$fstch_', d: 0 }
  ]
)
assert.deepStrictEqual(nd1.$sdfs_next_build_action_list_,
[
  { k: '$new', d: 0 },
  { k: '$prepend_child', d: 0 },
  { k: '$prepend_child', d: 0 },
  { k: '$add_rsib', d: 1 },
  { k: '$prepend_child', d: 0 },
  { k: '$add_rsib', d: 1 },
  { k: '$parent_', d: 2 },
  { k: '$parent_', d: 2 },
  { k: '$add_rsib', d: 1 },
  { k: '$prepend_child', d: 0 },
  { k: '$add_rsib', d: 1 },
  { k: '$add_rsib', d: 1 },
  { k: '$prepend_child', d: 0 },
  { k: '$add_rsib', d: 1 },
  { k: '$add_rsib', d: 1 },
  { k: '$add_rsib', d: 1 },
  { k: '$add_rsib', d: 1 },
  { k: '$add_rsib', d: 1 },
  { k: '$prepend_child', d: 0 }
]
)

assert.deepStrictEqual(nd17.$sdfs_prev_srch_action_list_,
[
    { k: '$self_', d: 3, id: 17 },
    { k: '$parent_', d: 2, id: 16 },
    { k: '$lsib_', d: 3, id: 15 },
    { k: '$lsib_', d: 3, id: 14 },
    { k: '$lsib_', d: 3, id: 13 },
    { k: '$lsib_', d: 3, id: 12 },
    { k: '$lsib_', d: 3, id: 11 },
    { k: '$parent_', d: 2, id: 10 },
    { k: '$lsib_', d: 3, id: 9 },
    { k: '$lsib_', d: 3, id: 8 },
    { k: '$parent_', d: 2, id: 7 },
    { k: '$lsib_', d: 3, id: 2 },
    { k: '$lstch_', d: 0, id: 4 },
    { k: '$lstch_', d: 0, id: 6 },
    { k: '$lsib_', d: 3, id: 5 },
    { k: '$parent_', d: 2, id: 4 },
    { k: '$lsib_', d: 3, id: 3 },
    { k: '$parent_', d: 2, id: 2 },
    { k: '$parent_', d: 2, id: 1 }
  ]
)

assert.deepStrictEqual(nd17.$sdfs_prev_build_action_list_,
[
    { k: '$new', d: 3, id: 17 },
    { k: '$add_or_goto_parent', d: 2, id: 16 },
    { k: '$add_lsib', d: 3, id: 15 },
    { k: '$add_lsib', d: 3, id: 14 },
    { k: '$add_lsib', d: 3, id: 13 },
    { k: '$add_lsib', d: 3, id: 12 },
    { k: '$add_lsib', d: 3, id: 11 },
    { k: '$add_or_goto_parent', d: 2, id: 10 },
    { k: '$add_lsib', d: 3, id: 9 },
    { k: '$add_lsib', d: 3, id: 8 },
    { k: '$add_or_goto_parent', d: 2, id: 7 },
    { k: '$add_lsib', d: 3, id: 2 },
    { k: '$append_child', d: 0, id: 4 },
    { k: '$append_child', d: 0, id: 6 },
    { k: '$add_lsib', d: 3, id: 5 },
    { k: '$add_or_goto_parent', d: 2, id: 4 },
    { k: '$add_lsib', d: 3, id: 3 },
    { k: '$parent_', d: 2, id: 2 },
    { k: '$add_or_goto_parent', d: 2, id: 1 }
]
)
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


tst('$depth_',1000000,()=>{nd17.$depth_})
tst('$children_count_',1000000,()=>{nd10.$children_count_})
tst('$sibseq_',1000000,()=>{nd14.$sibseq_})
tst('$sibs_count_',1000000,()=>{nd14.$sibs_count_})
tst('$psibs_count_',1000000,()=>{nd14.$psibs_count_})
tst('$fsibs_count_',1000000,()=>{nd14.$fsibs_count_})
tst('$spl_',1000000,()=>{nd17.$spl_})
tst('$length_',1000000,()=>{nd17.$length_})
tst('$width_',1000000,()=>{nd1.$width_})
tst('$nonleaf_length_',1000000,()=>{nd1.$nonleaf_length_})
tst('$offset_',1000000,()=>{nd17.$offset_})
tst('$height_',1000000,()=>{nd17.$height_})
tst('$sdfs_index_',1000000,()=>{nd17.$sdfs_index_})
tst('$sdfs_leaf_index_',1000000,()=>{nd17.$sdfs_leaf_index_})
tst('$sdfs_nonleaf_index_',1000000,()=>{nd10.$sdfs_nonleaf_index_})
tst('$edfs_index_',1000000,()=>{nd17.$edfs_index_})
tst('$edfs_leaf_index_',1000000,()=>{nd17.$edfs_leaf_index_})
tst('$edfs_nonleaf_index_',1000000,()=>{nd10.$edfs_nonleaf_index_})
tst('$sdfs_next_srch_action_list_',1000000,()=>{nd1.$sdfs_next_srch_action_list_})
tst('$sdfs_next_build_action_list_',1000000,()=>{nd1.$sdfs_next_build_action_list_})
tst('$sdfs_prev_srch_action_list_',1000000,()=>{nd1.$sdfs_prev_srch_action_list_})
tst('$sdfs_prev_build_action_list_',1000000,()=>{nd1.$sdfs_prev_build_action_list_})





