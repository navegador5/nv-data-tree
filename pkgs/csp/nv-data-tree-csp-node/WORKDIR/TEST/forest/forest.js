const {jmap} = require("nv-facutil-basic")
const {jdcp} = require("nv-facutil-basic")
const assert = require("assert")
const {Act,FLAG_DICT} = require("nv-data-tree-actdef")



const {_TagNode} = require("../../index");
const Forest = require("nv-data-tree-csp-forest");


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


var nd1 = forest.node(_TagNode);
nd1.$tag_ = 'T1'

var nd2 = nd1.$append('T2')[0]
var nd3 = nd2.$append('T3')[0]
var nd4 = nd2.$append('T4')[0]
var nd5 = nd4.$append('T5')[0]
var nd6 = nd4.$append('T6')[0]
var nd7 = nd1.$append('T7')[0]
var nd8  = nd7.$append('T8')[0]
var nd9  = nd7.$append('T9')[0]
var nd10 = nd7.$append('T10')[0]
var nd11 = nd10.$append('T11')[0]
var nd12 = nd10.$append('T12')[0]
var nd13 = nd10.$append('T13')[0]
var nd14 = nd10.$append('T14')[0]
var nd15 = nd10.$append('T15')[0]
var nd16 = nd10.$append('T16')[0]
var nd17 =nd16.$append('T17')[0]




var nds = [nd1,nd2,nd3,nd4,nd5,nd6,nd7,nd8,nd9,nd10,nd11,nd12,nd13,nd14,nd15,nd16,nd17]

nds.forEach((nd,i)=>{nd.name=`nd${i}`})


var forest = nd1[_TagNode.SYM_DICT.get_forest]
var {idpool,fc,rb,pr,lb,lc} = forest
var ctor = _TagNode

const fac_getp = require("nv-facutil-getp");



assert.deepStrictEqual(
    nd1.$dump(),
{
  struct: [
    256, 257, 257, 258, 257, 258,
      3,   3, 258, 257, 258, 258,
    257, 258, 258, 258, 258, 258,
    257
  ],
  data: [
    { name: 'nd0' },  { name: 'nd1' },
    { name: 'nd2' },  { name: 'nd3' },
    { name: 'nd4' },  { name: 'nd5' },
    { name: 'nd6' },  { name: 'nd7' },
    { name: 'nd8' },  { name: 'nd9' },
    { name: 'nd10' }, { name: 'nd11' },
    { name: 'nd12' }, { name: 'nd13' },
    { name: 'nd14' }, { name: 'nd15' },
    { name: 'nd16' }
  ]
}
)

var dumped = nd1.$dump()
function load_func(nd,data) {
    Object.assign(nd,data);
    nd.$tag_ = "T"+nd.$id_
    return(nd)
}
var nnd = forest.load_nd_from_dump(_TagNode,dumped,load_func)
console.log(nnd)




////
var nest_dumped = nd1.$to_nest()
assert.deepStrictEqual(
    nest_dumped,
    {"name":"nd0","_children":[{"name":"nd1","_children":[{"name":"nd2","_children":[]},{"name":"nd3","_children":[{"name":"nd4","_children":[]},{"name":"nd5","_children":[]}]}]},{"name":"nd6","_children":[{"name":"nd7","_children":[]},{"name":"nd8","_children":[]},{"name":"nd9","_children":[{"name":"nd10","_children":[]},{"name":"nd11","_children":[]},{"name":"nd12","_children":[]},{"name":"nd13","_children":[]},{"name":"nd14","_children":[]},{"name":"nd15","_children":[{"name":"nd16","_children":[]}]}]}]}]}
)

function nest_load_func(nd,data,ck) {
    _TagNode.DFLT_NEST_LOAD_FUNC(nd,data,ck)
    nd.$tag_ = "T"+nd.$id_
    return(nd)
}

var nrt = forest.load_nd_from_nest(_TagNode,nest_dumped,nest_load_func)
console.log(nrt)






var forest_dumped = forest.dump()

assert.deepStrictEqual(
    forest_dumped,
{
  fid: '72d4dc14-85f4-4b59-9142-0c73969650a5',
  maxid: 1000000,
  struct: {
    ids: [
       1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
      12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
      34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
      45, 46, 47, 48, 49, 50, 51
    ],
    fc: [
      2,  3,  0,  5,  0,  0,  8,  0,  0, 11,  0,
      0,  0,  0,  0, 17,  0, 19, 20,  0, 22,  0,
      0, 25,  0,  0, 28,  0,  0,  0,  0,  0, 34,
      0, 36, 38, 40,  0, 43,  0,  0, 45,  0,  0,
      0,  0,  0,  0,  0, 51,  0
    ],
    pr: [
       0,  1,  2,  2,  4,  4,  1,  7,  7,  7, 10,
      10, 10, 10, 10, 10, 16,  0, 18, 19, 19, 21,
      21, 18, 24, 24, 24, 27, 27, 27, 27, 27, 27,
      33,  0, 35, 35, 36, 36, 37, 37, 37, 39, 39,
      42, 42, 42, 42, 42, 42, 50
    ],
    rb: [
       0,  7,  4,  0,  6,  0,  0,  9, 10,  0, 12,
      13, 14, 15, 16,  0,  0,  0, 24, 21,  0, 23,
       0,  0, 26, 27,  0, 29, 30, 31, 32, 33,  0,
       0,  0, 37,  0, 39,  0, 41, 42,  0, 44,  0,
      46, 47, 48, 49, 50,  0,  0
    ],
    lb: [
       0,  0,  0,  3,  0,  5,  2,  0,  8,  9,  0,
      11, 12, 13, 14, 15,  0,  0,  0,  0, 20,  0,
      22, 19,  0, 25, 26,  0, 28, 29, 30, 31, 32,
       0,  0,  0, 36,  0, 38,  0, 40, 41,  0, 43,
       0, 45, 46, 47, 48, 49,  0
    ],
    lc: [
      7,  4,  0,  6,  0,  0, 10,  0,  0, 16,  0,
      0,  0,  0,  0, 17,  0, 24, 21,  0, 23,  0,
      0, 27,  0,  0, 33,  0,  0,  0,  0,  0, 34,
      0, 37, 39, 42,  0, 44,  0,  0, 50,  0,  0,
      0,  0,  0,  0,  0, 51,  0
    ]
  },
  data: [
    { name: 'nd0' },  { name: 'nd1' },  { name: 'nd2' },
    { name: 'nd3' },  { name: 'nd4' },  { name: 'nd5' },
    { name: 'nd6' },  { name: 'nd7' },  { name: 'nd8' },
    { name: 'nd9' },  { name: 'nd10' }, { name: 'nd11' },
    { name: 'nd12' }, { name: 'nd13' }, { name: 'nd14' },
    { name: 'nd15' }, { name: 'nd16' }, { name: 'nd0' },
    { name: 'nd1' },  { name: 'nd2' },  { name: 'nd3' },
    { name: 'nd4' },  { name: 'nd5' },  { name: 'nd6' },
    { name: 'nd7' },  { name: 'nd8' },  { name: 'nd9' },
    { name: 'nd10' }, { name: 'nd11' }, { name: 'nd12' },
    { name: 'nd13' }, { name: 'nd14' }, { name: 'nd15' },
    { name: 'nd16' }, { name: 'nd0' },  { name: 'nd1' },
    { name: 'nd6' },  { name: 'nd2' },  { name: 'nd3' },
    { name: 'nd7' },  { name: 'nd8' },  { name: 'nd9' },
    { name: 'nd4' },  { name: 'nd5' },  { name: 'nd10' },
    { name: 'nd11' }, { name: 'nd12' }, { name: 'nd13' },
    { name: 'nd14' }, { name: 'nd15' }, { name: 'nd16' }
  ]
}

)

const {_UiNode} = require("../../index")
var nforest = Forest.load_from_dump(forest_dumped,_UiNode)
var nnd = nforest.nodes_[0]
nnd.$expand();
nnd.display();

////
nnd.$erase_r()
nforest.defrag()

assert.deepStrictEqual(
    nforest.nodes_[0].$sdfs_.map(r=>r.$id_),
[
   1,  2,  3,  4,  5,  6,  7,
   8,  9, 10, 11, 12, 13, 14,
  15, 16, 17
]
)

/////

var forest0 = new Forest(1000000)

var nd1 = forest0.node(_TagNode);
nd1.$tag_ = 'T1'

var nd2 = nd1.$append('T2')[0]
var nd3 = nd2.$append('T3')[0]
var nd4 = nd2.$append('T4')[0]
var nd5 = nd4.$append('T5')[0]
var nd6 = nd4.$append('T6')[0]
var nd7 = nd1.$append('T7')[0]
var nd8  = nd7.$append('T8')[0]
var nd9  = nd7.$append('T9')[0]
var nd10 = nd7.$append('T10')[0]
var nd11 = nd10.$append('T11')[0]
var nd12 = nd10.$append('T12')[0]
var nd13 = nd10.$append('T13')[0]
var nd14 = nd10.$append('T14')[0]
var nd15 = nd10.$append('T15')[0]
var nd16 = nd10.$append('T16')[0]
var nd17 =nd16.$append('T17')[0]


var nds = [nd1,nd2,nd3,nd4,nd5,nd6,nd7,nd8,nd9,nd10,nd11,nd12,nd13,nd14,nd15,nd16,nd17]

nds.forEach((nd,i)=>{nd.name=`nd${i}`})



var forest_dumped = forest0.dump()
var forest1 = Forest.load_from_dump(forest_dumped,_UiNode)
var trees = forest0.merge(forest1)

assert.deepStrictEqual(forest0.nodes_.length,34)
assert.deepStrictEqual(forest0.nodes_[17],trees[0])
assert.deepStrictEqual(
    trees[0].$sdfs_.map(r=>r.name),
[
  'nd0',  'nd1',  'nd2',
  'nd3',  'nd4',  'nd5',
  'nd6',  'nd7',  'nd8',
  'nd9',  'nd10', 'nd11',
  'nd12', 'nd13', 'nd14',
  'nd15', 'nd16'
]
)


assert.deepStrictEqual(
    trees[0].$sdfs_.map(r=>r.$id_),
[
  18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, 31,
  32, 33, 34
]

)
