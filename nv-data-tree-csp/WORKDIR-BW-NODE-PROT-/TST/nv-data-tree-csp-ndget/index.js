const l0 = require("../nv-data-tree-csp-l0/index");
const gn = require("../nv-data-tree-csp-gen/index");

const __ME = {}

__ME.$self_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>ids[0];
__ME.$root_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>{
    let g = gn.$ance(pr,ids[0]);
    return(gn.lst0(g,ids[0]))
}
__ME.$parent_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>pr[ids[0]];
__ME.$fstch_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>fc[ids[0]];
__ME.$lstch_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>lc[ids[0]];

function _xstsib(cary,pr,ids) {
    let p = pr[ids[0]];
    return((p!==0)?cary[p]:0);
}

__ME.$fstsib_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>_xstsib(fc,pr,ids);
__ME.$lstsib_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>_xstsib(lc,pr,ids);

__ME.$lsib_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>lb[ids[0]];
__ME.$rsib_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>rb[ids[0]];

function _xstxsib(cary,pr,ids) {
    let p = pr[ids[0]];
    let sib = (p!==0)?cary[p]:0;
    return((sib!==ids[0])?sib:0)
}

__ME.$fstpsib_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>_xstxsib(fc,pr,ids);

__ME.$lstfsib_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>_xstxsib(lc,pr,ids);

__ME.$dlmost_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>{
    let g = gn.$dlmost(fc,ids[0]);
    return(gn.lst0(g,ids[0]))
}
__ME.$drmost_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>{
    let g = gn.$drmost(lc,ids[0]);
    return(gn.lst0(g,ids[0]))
}

function _sib_of_fstan(bary,pr,ids) {
    let g = gn.$ance(pr,ids[0]);
    let sib =0;
    for(let an of g) {
        if(bary[an]!==0) {sib = bary[an];break;}
    }
    return(sib)
}

__ME.$rsib_of_fst_ance_having_rsib_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>_sib_of_fstan(rb,pr,ids);
__ME.$lsib_of_fst_ance_having_lsib_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>_sib_of_fstan(lb,pr,ids);

function _uncle(bary,pr,ids) {
    let p = pr[ids[0]];
    return((p!==0)?bary[p]:0)
}

__ME.$runcle_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>_uncle(rb,pr,ids);
__ME.$luncle_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>_uncle(lb,pr,ids);


function _cin(cary,bary,pr,ids) {
    if(bary[ids[0]]!==0) {return(0)} else {
        let uncle = _uncle(bary,pr,ids);
        return((uncle!==0)?cary[uncle]:0)
    }
}

__ME.$rcin_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>_cin(fc,rb,pr,ids);
__ME.$lcin_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>_cin(lc,lb,pr,ids);


__ME.$sdfs_next_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>{
    let fstch = fc[ids[0]];
    if(fstch !==0) {
        return(fstch)
    } else {
        let rsib = rb[ids[0]];
        if(rsib!==0) {
            return(rsib)
        } else {
            return(_sib_of_fstan(rb,pr,ids))
        }
    }
}


__ME.$sdfs_prev_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>{
    let p = pr[ids[0]];
    if(p===0) {
        return(0)
    } else {
        let lsib = lb[ids[0]];
        if(l0.$is_leaf(fc,ids[0])) {
            return((lsib!==0)?lsib:p)
        } else {
            if(lsib!==0) {
                if(l0.$is_leaf(fc,lsib)) {
                    return(lsib)
                } else {
                    return(
                        __ME.$drmost_(idpool,fc,rb,pr,lb,lc,[lsib],idxs,others)
                    )
                }
            } else {
                return(p)
            }
        }
    }
}


__ME.$edfs_next_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>{
    let rsib = rb[ids[0]];
    if(rsib===0) {
        return(pr[ids[0]])
    } else {
        return(
            __ME.$dlmost_(idpool,fc,rb,pr,lb,lc,[rsib],idxs,others)
        )
    }
}


__ME.$edfs_prev_=(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>{
    if(!l0.$is_leaf(fc,ids[0])) {
        return(lc[ids[0]])
    } else {
        let lsib = lb[ids[0]];
        if(lsib === 0) {
            return(_sib_of_fstan(lb,pr,ids));
        } else {
            return(lsib)
        }
    }
}


module.exports = __ME


