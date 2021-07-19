const {RELATION_ANCE} = require("nv-data-tree-csp-apidef");


function _cmmn_ances_engine(nd0,nd1) {
    if (
        nd0[nd0.constructor.SYM_DICT.get_forest] === null ||
        nd1[nd1.constructor.SYM_DICT.get_forest] === null
    ){
        return([])
    } else if(nd0.$fid_ !== nd1.$fid_) {
        return([])
    } else {
        let plances0 = nd0.$plances_;
        let plances1 = nd1.$plances_;
        let c = -1;
        let lngth = (plances0.length<=plances1.length)?plances0.length:plances1.length;
        for(let i=0;i<lngth;i++) {
            if(plances0[i]===plances1[i]) {
                c = i
            } else {
                break
            }
        }
        if(c>=0) {
            return([
                plances0.slice(0,c+1),
                plances0,
                plances1
            ])
        } else {
            return([])
        }
    }
}

function cmmn_ances(nd0,nd1) {
    let rslt = _cmmn_ances_engine(nd0,nd1);
    if(rslt.length>0) {
        return(rslt[0])
    } else {
        return(null)
    }
}


function fst_cmmn_ance(nd0,nd1) {
    let rslt = _cmmn_ances_engine(nd0,nd1);
    if(rslt.length>0) {
        return(rslt[0][rslt[0].length-1])
    } else {
        return(null)
    }
}

function dist(nd0,nd1) {
    let rslt = _cmmn_ances_engine(nd0,nd1);
    if(rslt.length>0) {
        let [r0,r1,r2] = rslt;
        return(r2.length-r0.length+r1.length-r0.length)
    } else {
        return(Infinity)
    }
}

function path_to(nd0,nd1) {
    let rslt = _cmmn_ances_engine(nd0,nd1);
    if(rslt.length>0) {
        let [r0,r1,r2] = rslt;
        r1 = r1.slice(r0.length);
        r1.reverse();
        r2 = r2.slice(r0.length);
        return(r1.concat(r2))
    } else {
        return([])
    }
}

const D = {
    $cmmn_ances: cmmn_ances,
    $fst_cmmn_ance: fst_cmmn_ance,
    $dist:dist,
    $path_to:path_to
}


function add_ance_relation(Node) {
    for(let fn of RELATION_ANCE) {
        Node.prototype[fn] = function(nd) {
            return(D[fn](this,nd))
        }
    }
}


module.exports = {
    add_ance_relation
}

