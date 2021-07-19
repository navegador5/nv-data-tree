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
