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
nd1.style = {}
nd1.class = "abc-def"


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

var forest = nd1[_TagNode.SYM_DICT.get_forest]
var {idpool,fc,rb,pr,lb,lc} = forest
var ctor = _TagNode


nds.forEach(nd=>console.log(nd))
