const {fc,lb,rb,pr,lc,chs} = require("../nv-data-tree-bw-name-map/index");
const l0 = require("../nv-data-tree-csp-l0/index");
const gn = require("../nv-data-tree-csp-gen/index");
const is = require("../nv-data-tree-csp-is/index");


function _sib_of_fstan(that,k) {
    let g = gn.$ance(that);
    let sib =null;
    for(let an of g) {
        let nd = an[k];
        if(nd!==null) {
            sib = nd;
            break
        }
    }
    return(sib)
}



function _cin(that,k,pck) {
    if(that[k]!==null) {
        return(null)
    } else if(that[pr]===null) {
        return(null)
    } else if(that[pr][k]===null) {
        return(null)
    } else {
        return(that[pr][k][pck])
    }
}


const __ME = {
    $root_   : (that)=> gn.lst0(gn.$ance(that),that),
    $parent_ : (that)=> that[pr],
    $fstch_  : (that)=> that[fc],   
    $lstch_  : (that)=> that[lc],
    $lsib_   : (that)=> that[lb],
    $rsib_   : (that)=> that[rb],
    $fstsib_ : (that)=> (that[pr]===null)?null:((that[pr][fc]===that)?null:that[pr][fc]),
    $lstsib_ : (that)=> (that[pr]===null)?null:((that[pr][lc]===that)?null:that[pr][lc]),
    $rsib_of_fst_ance_having_rsib_ : (that)=>_sib_of_fstan(that,rb),
    $lsib_of_fst_ance_having_lsib_ : (that)=>_sib_of_fstan(that,lb),
    $runcle_: (that)=>(that[pr]===null)?null:that[pr][rb],
    $luncle_: (that)=>(that[pr]===null)?null:that[pr][lb],
    $rcin_:   (that)=>_cin(that,rb,fc),
    $lcin_:   (that)=>_cin(that,lb,lc),
    $drmost_: gn.$drmost,
    $dlmost_: gn.$dlmost,
    $sdfs_next_: (that)=> {
        let fstch = that[fc];
        if(fstch!==null) {
            return(fstch)
        } else {
            let rsib = that[rb];
            if(rsib!==null) {
                return(rsib)
            } else {
                return(_sib_of_fstan(that,rb))
            }
        }
    },
    $sdfs_prev_: (that)=> {
        let p = that[pr];
        if(p===null) {
            return(null)
        } else {
            let lsib = that[lb];
            if(lsib===null){
                return(p)
            } else if(is.$is_leaf(lsib)) {
                return(lsib)
            } else {
                return(gn.$drmost(lsib))
            }
        }
    },
    $edfs_next_: (that)=> {
        let rsib = that[rb];
        if(rsib===null) {
            return(that[pr])
        } else {
            return(gn.$dlmost(rsib))
        }
    },
    $edfs_prev_: (that)=> {
        if(is.$is_leaf(that)) {
            let lsib = that[lb];
            if(lsib===null) {
                return(_sib_of_fstan(that,lb))
            } else {
                return(lsib)
            }
        } else {
            return(that[lc])
        }
    }
}



module.exports = __ME


