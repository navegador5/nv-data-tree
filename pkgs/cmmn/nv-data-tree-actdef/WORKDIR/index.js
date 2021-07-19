const SRCH_ENTRIES = [
  [ '$self_', 0 ],
  [ '$fstch_', 1 ],
  [ '$rsib_', 2 ],
  [ '$parent_', 3 ],
  [ '$lsib_', 4 ],
  [ '$lstch_', 5 ],
  [ '$end_', 255 ]
]

const SRCH_KS = SRCH_ENTRIES.map(e=>e[0])
const SRCH_NS = SRCH_ENTRIES.map(e=>e[1]) 
const SRCH_MAP = new Map(SRCH_ENTRIES.concat(SRCH_ENTRIES.map(e=>[e[1],e[0]])))


const BUILD_ENTRIES = [
  [ '$new', 256 ],
  [ '$prepend_child', 257 ],
  [ '$add_rsib', 258 ],
  [ '$add_parent', 259 ],
  [ '$add_lsib', 260 ],
  [ '$append_child', 261 ],
  [ '$noop',511]
]

const BUILD_KS = BUILD_ENTRIES.map(e=>e[0])
const BUILD_NS = BUILD_ENTRIES.map(e=>e[1])
const BUILD_MAP = new Map(BUILD_ENTRIES.concat(BUILD_ENTRIES.map(e=>[e[1],e[0]])))


function srchk_to_buildk(k,prev=false) {
    let n = SRCH_MAP.get(k) + 256
    if(n==="$parent_" && !prev) {
        return(n)
    } else {
        return(BUILD_MAP.get(n))
    }
}

function buildk_to_srchk(k) {
    let n = BUILD_MAP.get(k) - 256
    if(n==="$parent_") {
        return("$parent_")
    } else {
        return(SRCH_MAP.get(n))
    }
}

function srchn_to_srchk(n) {return(SRCH_MAP.get(n))}
function srchk_to_srchn(k) {return(SRCH_MAP.get(k))}
function buildn_to_buildk(n) {return(BUILD_MAP.get(n))}
function buildk_to_buildn(k) {return(BUILD_MAP.get(k))}

function actnl_to_actkl(nl) {
    return(nl.map(
        n=>(n<256)?srchn_to_srchk(n):buildn_to_buildk(n)
    ))
}

function actkl_to_actnl(kl) {
    return(kl.map(
        k=>SRCH_KS.includes(k)?srchk_to_srchn(k):buildk_to_buildn(k)
    ))
}

class Act {
    constructor(action,direction,id=-1) {
        this.k = action;
        this.d = direction;
        this.id = id;
    }
}
Act.DIRECTION = {
    down:0,right:1,up:2,left:3,
    0:"down",1:"right",2:"up",3:"left"
}


const FLAG_DICT = {
    open:0,close:1,0:"open",1:"close",
    lyrfst:2,lyrmid:3,lyrlst:4,lyrbst:5,2:"lyrfst",3:"lyrmid",4:"lyrlst",5:"lyrbst"
}


module.exports = {
    SRCH_KS,BUILD_KS,
    SRCH_NS,BUILD_NS,
    srchk_to_buildk,
    buildk_to_srchk,
    srchn_to_srchk,
    srchk_to_srchn,
    buildn_to_buildk,
    buildk_to_buildn,
    actnl_to_actkl,
    actkl_to_actnl,
    Act,
    FLAG_DICT
}


