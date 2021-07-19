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



assert.deepStrictEqual(nd1.$is_lyr_fst(),true)
assert.deepStrictEqual(nd2.$is_lyr_fst(),true)
assert.deepStrictEqual(nd3.$is_lyr_fst(),true)
assert.deepStrictEqual(nd3.$is_lyr_fst(),true)
assert.deepStrictEqual(nd5.$is_lyr_fst(),true)


assert.deepStrictEqual(nd1.$is_lyr_lst(),true)
assert.deepStrictEqual(nd7.$is_lyr_lst(),true)
assert.deepStrictEqual(nd10.$is_lyr_lst(),true)
assert.deepStrictEqual(nd16.$is_lyr_lst(),true)


assert.deepStrictEqual(nd1.$is_lyr_bst(),true)
assert.deepStrictEqual(nd7.$is_lyr_bst(),false)
assert.deepStrictEqual(nd10.$is_lyr_bst(),false)
assert.deepStrictEqual(nd17.$is_lyr_bst(),true)


assert.deepStrictEqual(nd1.$bpl_,[ 0 ])
assert.deepStrictEqual(nd2.$bpl_,[ 0 ,0])
assert.deepStrictEqual(nd3.$bpl_,[ 0 ,0,0])
assert.deepStrictEqual(nd4.$bpl_,[ 0 ,0,1])
assert.deepStrictEqual(nd5.$bpl_,[ 0 ,0,1,0])
assert.deepStrictEqual(nd6.$bpl_,[ 0 ,0,1,1])
assert.deepStrictEqual(nd7.$bpl_,[ 0 ,1])
assert.deepStrictEqual(nd8.$bpl_,[ 0 ,1,2])
assert.deepStrictEqual(nd9.$bpl_,[ 0 ,1,3])
assert.deepStrictEqual(nd10.$bpl_,[ 0 ,1,4])
assert.deepStrictEqual(nd11.$bpl_,[ 0 ,1,4,2])
assert.deepStrictEqual(nd12.$bpl_,[ 0 ,1,4,3])
assert.deepStrictEqual(nd13.$bpl_,[ 0 ,1,4,4])
assert.deepStrictEqual(nd14.$bpl_,[ 0 ,1,4,5])
assert.deepStrictEqual(nd15.$bpl_,[ 0 ,1,4,6])
assert.deepStrictEqual(nd16.$bpl_,[ 0 ,1,4,7])
assert.deepStrictEqual(nd17.$bpl_,[ 0 ,1,4,7,0])

assert.deepStrictEqual( nd1.$breadth_,0)
assert.deepStrictEqual( nd2.$breadth_,0)
assert.deepStrictEqual( nd3.$breadth_,0)
assert.deepStrictEqual( nd4.$breadth_,1)
assert.deepStrictEqual( nd5.$breadth_,0)
assert.deepStrictEqual( nd6.$breadth_,1)
assert.deepStrictEqual( nd7.$breadth_,1)
assert.deepStrictEqual( nd8.$breadth_,2)
assert.deepStrictEqual( nd9.$breadth_,3)
assert.deepStrictEqual(nd10.$breadth_,4)
assert.deepStrictEqual(nd11.$breadth_,2)
assert.deepStrictEqual(nd12.$breadth_,3)
assert.deepStrictEqual(nd13.$breadth_,4)
assert.deepStrictEqual(nd14.$breadth_,5)
assert.deepStrictEqual(nd15.$breadth_,6)
assert.deepStrictEqual(nd16.$breadth_,7)
assert.deepStrictEqual(nd17.$breadth_,0)

assert.deepStrictEqual( nd1.$pbreadth_,-1)
assert.deepStrictEqual( nd2.$pbreadth_,0)
assert.deepStrictEqual( nd3.$pbreadth_,0)
assert.deepStrictEqual( nd4.$pbreadth_,0)
assert.deepStrictEqual( nd5.$pbreadth_,1)
assert.deepStrictEqual( nd6.$pbreadth_,1)

assert.deepStrictEqual( nd7.$pbreadth_,0)
assert.deepStrictEqual( nd8.$pbreadth_,1)
assert.deepStrictEqual( nd9.$pbreadth_,1)
assert.deepStrictEqual(nd10.$pbreadth_,1)
assert.deepStrictEqual(nd11.$pbreadth_,4)
assert.deepStrictEqual(nd12.$pbreadth_,4)
assert.deepStrictEqual(nd13.$pbreadth_,4)
assert.deepStrictEqual(nd14.$pbreadth_,4)
assert.deepStrictEqual(nd15.$pbreadth_,4)
assert.deepStrictEqual(nd16.$pbreadth_,4)
assert.deepStrictEqual(nd17.$pbreadth_,7)



assert.deepStrictEqual( nd1.$bfs_index_,0)
assert.deepStrictEqual( nd2.$bfs_index_,1)
assert.deepStrictEqual( nd3.$bfs_index_,3)
assert.deepStrictEqual( nd4.$bfs_index_,4)
assert.deepStrictEqual( nd5.$bfs_index_,8)
assert.deepStrictEqual( nd6.$bfs_index_,9)
assert.deepStrictEqual( nd7.$bfs_index_,2)
assert.deepStrictEqual( nd8.$bfs_index_,5)
assert.deepStrictEqual( nd9.$bfs_index_,6)
assert.deepStrictEqual(nd10.$bfs_index_,7)
assert.deepStrictEqual(nd11.$bfs_index_,10)
assert.deepStrictEqual(nd12.$bfs_index_,11)
assert.deepStrictEqual(nd13.$bfs_index_,12)
assert.deepStrictEqual(nd14.$bfs_index_,13)
assert.deepStrictEqual(nd15.$bfs_index_,14)
assert.deepStrictEqual(nd16.$bfs_index_,15)
assert.deepStrictEqual(nd17.$bfs_index_,16)

assert.deepStrictEqual(
    nds.map(nd=>nd.$bfs_leaf_index_),
[
  -1, -1,  0, -1, 3, 4, -1,
   1,  2, -1,  5, 6, 7,  8,
   9, -1, 10
])


assert.deepStrictEqual(
    nds.map(nd=>nd.$bfs_nonleaf_index_),
[
   0,  1, -1,  3, -1, -1,  2,
  -1, -1,  4, -1, -1, -1, -1,
  -1,  5, -1
])
/////

assert.deepStrictEqual( nd1.$lyr_next_,null)
assert.deepStrictEqual( nd2.$lyr_next_,nd7)
assert.deepStrictEqual( nd3.$lyr_next_,nd4)
assert.deepStrictEqual( nd4.$lyr_next_,nd8)
assert.deepStrictEqual( nd5.$lyr_next_,nd6)
assert.deepStrictEqual( nd6.$lyr_next_,nd11)
assert.deepStrictEqual( nd7.$lyr_next_,null)
assert.deepStrictEqual( nd8.$lyr_next_,nd9)
assert.deepStrictEqual( nd9.$lyr_next_,nd10)
assert.deepStrictEqual(nd10.$lyr_next_,null)
assert.deepStrictEqual(nd11.$lyr_next_,nd12)
assert.deepStrictEqual(nd12.$lyr_next_,nd13)
assert.deepStrictEqual(nd13.$lyr_next_,nd14)
assert.deepStrictEqual(nd14.$lyr_next_,nd15)
assert.deepStrictEqual(nd15.$lyr_next_,nd16)
assert.deepStrictEqual(nd16.$lyr_next_,null)
assert.deepStrictEqual(nd17.$lyr_next_,null)



assert.deepStrictEqual( nd1.$lyr_prev_,null)
assert.deepStrictEqual( nd2.$lyr_prev_,null)
assert.deepStrictEqual( nd3.$lyr_prev_,null)
assert.deepStrictEqual( nd4.$lyr_prev_,nd3)
assert.deepStrictEqual( nd5.$lyr_prev_,null)
assert.deepStrictEqual( nd6.$lyr_prev_,nd5)
assert.deepStrictEqual( nd7.$lyr_prev_,nd2)
assert.deepStrictEqual( nd8.$lyr_prev_,nd4)
assert.deepStrictEqual( nd9.$lyr_prev_,nd8)
assert.deepStrictEqual(nd10.$lyr_prev_,nd9)
assert.deepStrictEqual(nd11.$lyr_prev_,nd6)
assert.deepStrictEqual(nd12.$lyr_prev_,nd11)
assert.deepStrictEqual(nd13.$lyr_prev_,nd12)
assert.deepStrictEqual(nd14.$lyr_prev_,nd13)
assert.deepStrictEqual(nd15.$lyr_prev_,nd14)
assert.deepStrictEqual(nd16.$lyr_prev_,nd15)
assert.deepStrictEqual(nd17.$lyr_prev_,null)

////

assert.deepStrictEqual(
    nds.map(r=>r.$bfs_prev_),
[
  [ null, 'lyrbst' ],
  [ nd1, 'lyrbst' ],
  [ nd7, 'lyrlst' ],
  [ nd3, 'lyrfst' ],
  [ nd10, 'lyrlst' ],
  [ nd5, 'lyrfst' ],
  [ nd2, 'lyrfst' ],
  [ nd4, 'lyrmid' ],
  [ nd8, 'lyrmid' ],
  [ nd9, 'lyrmid' ],
  [ nd6, 'lyrmid' ],
  [ nd11, 'lyrmid' ],
  [ nd12, 'lyrmid' ],
  [ nd13, 'lyrmid' ],
  [ nd14, 'lyrmid' ],
  [ nd15, 'lyrmid' ],
  [ nd16, 'lyrlst' ]
])


assert.deepStrictEqual(
    nds.map(r=>r.$bfs_next_),
[
  [ nd2, 'lyrfst' ],
  [ nd7, 'lyrlst' ],
  [ nd4, 'lyrmid' ],
  [ nd8, 'lyrmid' ],
  [ nd6, 'lyrmid' ],
  [ nd11, 'lyrmid' ],
  [ nd3, 'lyrfst' ],
  [ nd9, 'lyrmid' ],
  [ nd10, 'lyrlst' ],
  [ nd5, 'lyrfst' ],
  [ nd12, 'lyrmid' ],
  [ nd13, 'lyrmid' ],
  [ nd14, 'lyrmid' ],
  [ nd15, 'lyrmid' ],
  [ nd16, 'lyrlst' ],
  [ nd17, 'lyrbst' ],
  [ null, undefined ]
])

////

assert.deepStrictEqual(nd1.$is_des_lyr_fst(nd1),true)
assert.deepStrictEqual(nd2.$is_des_lyr_fst(nd1),true)
assert.deepStrictEqual(nd3.$is_des_lyr_fst(nd2),true)
assert.deepStrictEqual(nd4.$is_des_lyr_fst(nd2),false)
assert.deepStrictEqual(nd8.$is_des_lyr_fst(nd1),false)
assert.deepStrictEqual(nd8.$is_des_lyr_fst(nd7),true)

assert.deepStrictEqual(nd1.$is_des_lyr_bst(nd1),true)
assert.deepStrictEqual(nd3.$is_des_lyr_bst(nd1),false)
assert.deepStrictEqual(nd3.$is_des_lyr_bst(nd3),true)
assert.deepStrictEqual(nd17.$is_des_lyr_bst(nd1),true)


assert.deepStrictEqual(nd1.$is_des_lyr_lst(nd1),true)
assert.deepStrictEqual(nd7.$is_des_lyr_lst(nd1),true)
assert.deepStrictEqual(nd4.$is_des_lyr_lst(nd2),true)
assert.deepStrictEqual(nd4.$is_des_lyr_lst(nd1),false)
assert.deepStrictEqual(nd10.$is_des_lyr_lst(nd1),true)
assert.deepStrictEqual(nd17.$is_des_lyr_lst(nd10),true)

assert.deepStrictEqual(nd1.$des_breadth(nd1),0)
assert.deepStrictEqual(nd2.$des_breadth(nd1),0)
assert.deepStrictEqual(nd7.$des_breadth(nd1),1)
assert.deepStrictEqual(nd9.$des_breadth(nd7),1)
assert.deepStrictEqual(nd9.$des_breadth(nd1),3)
assert.deepStrictEqual(nd9.$des_breadth(nd2),-1)


assert.deepStrictEqual(nd1.$des_pbreadth(nd1),-1)
assert.deepStrictEqual(nd2.$des_pbreadth(nd1),0)
assert.deepStrictEqual(nd7.$des_pbreadth(nd1),0)
assert.deepStrictEqual(nd9.$des_pbreadth(nd7),0)
assert.deepStrictEqual(nd9.$des_pbreadth(nd1),1)
assert.deepStrictEqual(nd9.$des_pbreadth(nd2),-1)

////$des_bpl
assert.deepStrictEqual(nd1.$des_bpl(nd1),[0])
assert.deepStrictEqual(nd2.$des_bpl(nd1),[ 0, 0 ])
assert.deepStrictEqual(nd7.$des_bpl(nd1),[ 0, 1 ])
assert.deepStrictEqual(nd9.$des_bpl(nd7),[ 0, 1 ])
assert.deepStrictEqual(nd9.$des_bpl(nd1),[ 0, 1, 3 ])
assert.deepStrictEqual(nd9.$des_bpl(nd2),[-1])

////
assert.deepStrictEqual(nd1.$bfs_des_index(nd1),0)
assert.deepStrictEqual(nd2.$bfs_des_index(nd1),1)
assert.deepStrictEqual(nd7.$bfs_des_index(nd1),2)
assert.deepStrictEqual(nd9.$bfs_des_index(nd7),2)
assert.deepStrictEqual(nd9.$bfs_des_index(nd1),6)
assert.deepStrictEqual(nd9.$bfs_des_index(nd2),-1)

////
assert.deepStrictEqual(nd1.$bfs_des_leaf_index(nd1),-1)
assert.deepStrictEqual(nd2.$bfs_des_leaf_index(nd1),-1)
assert.deepStrictEqual(nd7.$bfs_des_leaf_index(nd1),-1)
assert.deepStrictEqual(nd9.$bfs_des_leaf_index(nd7),1)
assert.deepStrictEqual(nd9.$bfs_des_leaf_index(nd1),2)
assert.deepStrictEqual(nd9.$bfs_des_leaf_index(nd2),-1)

////
assert.deepStrictEqual(nd1.$bfs_des_nonleaf_index(nd1),0)
assert.deepStrictEqual(nd2.$bfs_des_nonleaf_index(nd1),1)
assert.deepStrictEqual(nd7.$bfs_des_nonleaf_index(nd1),2)
assert.deepStrictEqual(nd9.$bfs_des_nonleaf_index(nd7),-1)
assert.deepStrictEqual(nd9.$bfs_des_nonleaf_index(nd1),-1)
assert.deepStrictEqual(nd9.$bfs_des_nonleaf_index(nd2),-1)


assert.deepStrictEqual(
   JSON.parse(JSON.stringify(nd1.$des_lyrs_)),
[
  [ { tag: 1 } ],
  [ { tag: 2 }, { tag: 7 } ],
  [ { tag: 3 }, { tag: 4 }, { tag: 8 }, { tag: 9 }, { tag: 10 } ],
  [
    { tag: 5 },
    { tag: 6 },
    { tag: 11 },
    { tag: 12 },
    { tag: 13 },
    { tag: 14 },
    { tag: 15 },
    { tag: 16 }
  ],
  [ { tag: 17 } ]
])

assert.deepStrictEqual(
   JSON.parse(JSON.stringify(nd2.$des_lyrs_)),
[
  [ { tag: 2 } ],
  [ { tag: 3 }, { tag: 4 } ],
  [ { tag: 5 }, { tag: 6 } ]
]
)

assert.deepStrictEqual(
   JSON.parse(JSON.stringify(nd2.$lyrs_)),
[
  [ { tag: 1 } ],
  [ { tag: 2 }, { tag: 7 } ],
  [ { tag: 3 }, { tag: 4 }, { tag: 8 }, { tag: 9 }, { tag: 10 } ],
  [
    { tag: 5 },
    { tag: 6 },
    { tag: 11 },
    { tag: 12 },
    { tag: 13 },
    { tag: 14 },
    { tag: 15 },
    { tag: 16 }
  ],
  [ { tag: 17 } ]
]

)

////

assert.deepStrictEqual(nd1.$bfs_des_next(nd1),[nd2,'lyrfst'])
assert.deepStrictEqual(nd7.$bfs_des_next(nd1),[nd3,'lyrfst'])
assert.deepStrictEqual(nd8.$bfs_des_next(nd1),[nd9,'lyrmid'])
assert.deepStrictEqual(nd10.$bfs_des_next(nd1),[nd5,'lyrfst'])

assert.deepStrictEqual(nd3.$bfs_des_prev(nd2),[nd2,'lyrbst'])
assert.deepStrictEqual(nd6.$bfs_des_prev(nd2),[nd5,'lyrfst'])
assert.deepStrictEqual(nd5.$bfs_des_prev(nd2),[nd4,'lyrlst'])
assert.deepStrictEqual(nd4.$bfs_des_prev(nd2),[nd3,'lyrfst'])


assert.deepStrictEqual(nd3.$des_lyr_next(nd2),nd4)
assert.deepStrictEqual(nd4.$des_lyr_next(nd2),null)
assert.deepStrictEqual(nd4.$des_lyr_next(nd1),nd8)

assert.deepStrictEqual(nd8.$des_lyr_prev(nd7),null)
assert.deepStrictEqual(nd8.$des_lyr_prev(nd1),nd4)

assert.deepStrictEqual(nd1.$des_lyr(2),[nd3,nd4,nd8,nd9,nd10])
assert.deepStrictEqual(nd2.$des_lyr(2),[nd5,nd6])

assert.deepStrictEqual(nd1.$lyr(3),[nd5,nd6,nd11,nd12,nd13,nd14,nd15,nd16])

assert.deepStrictEqual(nd2.$lst_des_lyr_,[nd5,nd6])
assert.deepStrictEqual(nd1.$lst_des_lyr_,[nd17])

assert.deepStrictEqual(nd2.$lst_lyr_,[nd17])
assert.deepStrictEqual(nd2.$own_lyr_,[nd2,nd7])
assert.deepStrictEqual(nd3.$plyr_,[nd2,nd7])


assert.deepStrictEqual(
    jdcp(nd2.$des_bfs_),
    [
      [ { tag: 2 }, 'lyrbst' ],
      [ { tag: 3 }, 'lyrfst' ],
      [ { tag: 4 }, 'lyrlst' ],
      [ { tag: 5 }, 'lyrfst' ],
      [ { tag: 6 }, 'lyrlst' ]
    ]
)


assert.deepStrictEqual(
    jdcp(nd10.$des_own_lyr(nd1)),
    [ { tag: 3 }, { tag: 4 }, { tag: 8 }, { tag: 9 }, { tag: 10 } ]
)

assert.deepStrictEqual(
    jdcp(nd10.$des_own_lyr(nd7)),
    [ { tag: 8 }, { tag: 9 }, { tag: 10 } ]
)

assert.deepStrictEqual(
    jdcp(nd10.$des_plyr(nd1)),
    [ { tag: 2 }, { tag: 7 } ]
)


assert.deepStrictEqual(
    jdcp(nd7.$some_des_lyrs([0,2])),
[
  [ { tag: 7 } ],
  [
    { tag: 11 },
    { tag: 12 },
    { tag: 13 },
    { tag: 14 },
    { tag: 15 },
    { tag: 16 }
  ]
])


assert.deepStrictEqual(
    jdcp(nd7.$some_lyrs([0,2])),
[
  [ { tag: 1 } ],
  [ { tag: 3 }, { tag: 4 }, { tag: 8 }, { tag: 9 }, { tag: 10 } ]
])

assert.deepStrictEqual(
   jdcp(Array.from(nd1.$gen_bfs())),
[
  [ { tag: 1 }, 'lyrbst' ],
  [ { tag: 2 }, 'lyrfst' ],
  [ { tag: 7 }, 'lyrlst' ],
  [ { tag: 3 }, 'lyrfst' ],
  [ { tag: 4 }, 'lyrmid' ],
  [ { tag: 8 }, 'lyrmid' ],
  [ { tag: 9 }, 'lyrmid' ],
  [ { tag: 10 }, 'lyrlst' ],
  [ { tag: 5 }, 'lyrfst' ],
  [ { tag: 6 }, 'lyrmid' ],
  [ { tag: 11 }, 'lyrmid' ],
  [ { tag: 12 }, 'lyrmid' ],
  [ { tag: 13 }, 'lyrmid' ],
  [ { tag: 14 }, 'lyrmid' ],
  [ { tag: 15 }, 'lyrmid' ],
  [ { tag: 16 }, 'lyrlst' ],
  [ { tag: 17 }, 'lyrbst' ]
])

assert.deepStrictEqual(
   jdcp(Array.from(nd2.$gen_des_bfs())),
   [
     [ { tag: 2 }, 'lyrbst' ],
     [ { tag: 3 }, 'lyrfst' ],
     [ { tag: 4 }, 'lyrlst' ],
     [ { tag: 5 }, 'lyrfst' ],
     [ { tag: 6 }, 'lyrlst' ]
   ]
)

assert.deepStrictEqual(
    jdcp(Array.from(nd2.$gen_des_lyr())),
[
  [ { tag: 2 } ],
  [ { tag: 3 }, { tag: 4 } ],
  [ { tag: 5 }, { tag: 6 } ]
]
)


assert.deepStrictEqual(
    jdcp(Array.from(nd2.$gen_lyr())),
[
  [ { tag: 1 } ],
  [ { tag: 2 }, { tag: 7 } ],
  [ { tag: 3 }, { tag: 4 }, { tag: 8 }, { tag: 9 }, { tag: 10 } ],
  [
    { tag: 5 },
    { tag: 6 },
    { tag: 11 },
    { tag: 12 },
    { tag: 13 },
    { tag: 14 },
    { tag: 15 },
    { tag: 16 }
  ],
  [ { tag: 17 } ]
]
)


assert.deepStrictEqual(
    jdcp(Array.from(nd2.$gen_lyr_next())),
    [ { tag: 2 }, { tag: 7 } ]
)

assert.deepStrictEqual(
    jdcp(Array.from(nd8.$gen_lyr_prev())),
    [ { tag: 4 }, { tag: 3 } ]
)
assert.deepStrictEqual(
    jdcp(Array.from(nd8.$gen_lyr_next())),
    [ { tag: 8 }, { tag: 9 }, { tag: 10 } ]
)

assert.deepStrictEqual(
    jdcp(Array.from(nd8.$gen_des_lyr_prev(nd7))),
    [  ]
)
assert.deepStrictEqual(
    jdcp(Array.from(nd8.$gen_des_lyr_next(nd7))),
    [ { tag: 8 }, { tag: 9 }, { tag: 10 } ]

)
assert.deepStrictEqual(
    jdcp(Array.from(nd8.$gen_des_lyr_prev(nd1))),
    [ { tag: 4 }, { tag: 3 } ]
)
assert.deepStrictEqual(
    jdcp(Array.from(nd6.$gen_des_lyr_next(nd1))),
[
  { tag: 6 },
  { tag: 11 },
  { tag: 12 },
  { tag: 13 },
  { tag: 14 },
  { tag: 15 },
  { tag: 16 }
])

assert.deepStrictEqual(
   jdcp(nd3.$bfs_),
   [
     [ { tag: 1 }, 'lyrbst' ],
     [ { tag: 2 }, 'lyrfst' ],
     [ { tag: 7 }, 'lyrlst' ],
     [ { tag: 3 }, 'lyrfst' ],
     [ { tag: 4 }, 'lyrmid' ],
     [ { tag: 8 }, 'lyrmid' ],
     [ { tag: 9 }, 'lyrmid' ],
     [ { tag: 10 }, 'lyrlst' ],
     [ { tag: 5 }, 'lyrfst' ],
     [ { tag: 6 }, 'lyrmid' ],
     [ { tag: 11 }, 'lyrmid' ],
     [ { tag: 12 }, 'lyrmid' ],
     [ { tag: 13 }, 'lyrmid' ],
     [ { tag: 14 }, 'lyrmid' ],
     [ { tag: 15 }, 'lyrmid' ],
     [ { tag: 16 }, 'lyrlst' ],
     [ { tag: 17 }, 'lyrbst' ]
   ]
);


////



tst('$is_lyr_fst',1000000,()=>{nd3.$is_lyr_fst()})
tst('$is_lyr_lst',1000000,()=>{nd16.$is_lyr_lst()})
tst('$is_lyr_bst',1000000,()=>{nd17.$is_lyr_lst()})
tst('$bpl_',1000000,()=>{nd17.$bpl_})
tst('$breadth_',1000000,()=>{nd17.$breadth_})
tst('$pbreadth_',1000000,()=>{nd17.$pbreadth_})
tst('$bfs_index_',1000000,()=>{nd17.$bfs_index_})
tst('$bfs_leaf_index_',1000000,()=>{nd17.$bfs_leaf_index_})
tst('$bfs_nonleaf_index_',1000000,()=>{nd10.$bfs_nonleaf_index_})
tst('$lyr_next_',1000000,()=>{nd6.$lyr_next_})
tst('$lyr_prev_',1000000,()=>{nd11.$lyr_prev_})

tst('$is_des_lyr_fst',1000000,()=>{nd11.$is_des_lyr_fst(nd7)})
tst('$is_des_lyr_bst',1000000,()=>{nd17.$is_des_lyr_bst(nd7)})
tst('$is_des_lyr_lst',1000000,()=>{nd10.$is_des_lyr_bst(nd1)})


tst('$des_breadth',1000000,()=>{nd11.$des_breadth(nd7)})
tst('$des_pbreadth',1000000,()=>{nd9.$des_pbreadth(nd1)})
tst('$des_bpl',1000000,()=>{nd9.$des_bpl(nd1)})
tst('$bfs_des_index',1000000,()=>{nd9.$bfs_des_index(nd1)})
tst('$bfs_des_leaf_index',1000000,()=>{nd9.$bfs_des_leaf_index(nd1)})
tst('$bfs_des_nonleaf_index',1000000,()=>{nd16.$bfs_des_nonleaf_index(nd1)})

tst('$des_lyrs_',1000000,()=>{nd2.$des_lyrs_})
tst('$lyrs_',1000000,()=>{nd2.$des_lyrs_})

tst('$bfs_des_next',1000000,()=>{nd7.$bfs_des_next(nd1)})
tst('$bfs_des_prev',1000000,()=>{nd7.$bfs_des_prev(nd1)})
tst('$des_lyr_next',1000000,()=>{nd4.$des_lyr_next(nd1)})
tst('$des_lyr_prev',1000000,()=>{nd8.$des_lyr_prev(nd1)})
tst('$des_lyr',1000000,()=>{nd1.$des_lyr(2)})
tst('$lyr',1000000,()=>{nd1.$lyr(3)})
tst('$lst_des_lyr_',1000000,()=>{nd2.$lst_des_lyr_})
tst('$lst_lyr_',1000000,()=>{nd2.$lst_lyr_})
tst('$own_lyr_',1000000,()=>{nd2.$own_lyr_})
tst('$plyr_',1000000,()=>{nd3.$plyr_})


tst('$bfs_',1000000,()=>{nd3.$bfs_})
tst('$des_bfs_',1000000,()=>{nd2.$des_bfs_})
tst('$des_own_lyr',1000000,()=>{nd10.$des_own_lyr(nd7)})
tst('$des_plyr',1000000,()=>{nd10.$des_own_lyr(nd1)})
tst('$some_des_lyrs',1000000,()=>{nd7.$some_des_lyrs([0,2])})
tst('$some_lyrs',1000000,()=>{nd7.$some_lyrs([0,2])})
tst('$gen_bfs',1000000,()=>{nd2.$gen_bfs()})
tst('$gen_des_bfs',1000000,()=>{nd2.$gen_des_bfs()})
tst('$gen_lyr',1000000,()=>{nd2.$gen_lyr()})
tst('$gen_des_lyr',1000000,()=>{nd2.$gen_des_lyr()})
tst('$gen_lyr_next',1000000,()=>{Array.from(nd2.$gen_lyr_next())})
tst('$gen_lyr_prev',1000000,()=>{Array.from(nd8.$gen_lyr_prev())})
tst('$gen_des_lyr_next',1000000,()=>{Array.from(nd6.$gen_des_lyr_next(nd1))})
tst('$gen_des_lyr_prev',1000000,()=>{Array.from(nd6.$gen_des_lyr_prev(nd1))})


