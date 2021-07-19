const ndget = require("../nv-data-tree-csp-ndget/index");

const {
    Act,
    srchk_to_buildk,
    FLAG_DICT,
} = require("../nv-data-tree-actdef/index");




const __ME = {}

////SDFS_ACTION
////(...)=>{k:string,d:Act.direction}


__ME.$sdfs_next_srch_action  = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>{
    let prev_direction = others[0];
    let prev_id = ids[0];
    if(prev_direction === Act.DIRECTION.up) {
        let rsib = rb[prev_id];
        if(rsib !== 0) {
            return(new Act('$rsib_',Act.DIRECTION.right,rsib))
        } else {
            let p = pr[prev_id]
            if(p === 0) {
                return(new Act('$end_',Act.DIRECTION.up,p))
            } else {
                return(new Act('$parent_',Act.DIRECTION.up,p))
            }
        }
    } else {
        //down or right
        let fstch = fc[prev_id];
        if(fstch !== 0) {
            return(new Act('$fstch_',Act.DIRECTION.down,fstch))
        } else  {
            let rsib = rb[prev_id];
            if(rsib !== 0) {
                return(new Act('$rsib_',Act.DIRECTION.right,rsib))
            } else {
                let p = pr[prev_id];
                if(p === 0) {
                    return(new Act('$end_',Act.DIRECTION.up,p))
                } else {
                    return(new Act('$parent_',Act.DIRECTION.up,p))
                }
            }
        }
    }
}


__ME.$sdfs_next_build_action = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>{
    let act = __ME.$sdfs_next_srch_action(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    act.k = (act.d===Act.DIRECTION.right || act.d===Act.DIRECTION.down)?srchk_to_buildk(act.k):act.k;
    return(act)
}


__ME.$sdfs_prev_srch_action  = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>{
    let prev_direction = others[0];
    let prev_id = ids[0];
    if(prev_direction === Act.DIRECTION.up) {
         let lsib = lb[prev_id];
         if(lsib!==0) {
             return(new Act('$lsib_',Act.DIRECTION.left,lsib))
         } else {
             let p = pr[prev_id];
             if(p === 0) {
                 return(new Act('$end_',Act.DIRECTION.up,p))
             } else {
                 return(new Act('$parent_',Act.DIRECTION.up,p))
             }
         }
    } else {
        if(fc[prev_id]===0) {
            let lsib = lb[prev_id];
            if(lsib!==0) {
                return(new Act('$lsib_',Act.DIRECTION.left,lsib))
            } else {
                 let p = pr[prev_id];
                 if(p === 0) {
                     return(new Act('$end_',Act.DIRECTION.up,p))
                 } else {
                     return(new Act('$parent_',Act.DIRECTION.up,p))
                 }
            }
        } else {
            let lstch = lc[prev_id];
            return(new Act('$lstch_',Act.DIRECTION.down,lstch))
        }
    }
}

__ME.$sdfs_prev_build_action = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>{
    let act = __ME.$sdfs_prev_srch_action(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    act.k = (
        act.d===Act.DIRECTION.left ||
        act.d===Act.DIRECTION.down
    )?srchk_to_buildk(act.k,true):((act.k==='$parent_' && rb[ids[0]]===0)?'$add_or_goto_parent':act.k);
    return(act)
}


////GEN
////(...) => g@{k:string,d:Act.DIRECTION}

__ME.$gen_sdfs_next_srch_action  = function * (idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let drmost = ndget.$drmost_(idpool,fc,rb,pr,lb,lc,ids,idxs,others)
    yield({k:'$self_',d:Act.DIRECTION.down})
    let id = ids[0];
    if(id !== drmost) {
        let act = __ME.$sdfs_next_srch_action(idpool,fc,rb,pr,lb,lc,[id],idxs,[Act.DIRECTION.down]);
        while(act.id!==0) {
            yield({k:act.k,d:act.d})
            if(act.id === drmost) {break}
            act =  __ME.$sdfs_next_srch_action(idpool,fc,rb,pr,lb,lc,[act.id],idxs,[act.d])
        }
    }
}

__ME.$gen_sdfs_next_build_action = function * (idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let g = __ME.$gen_sdfs_next_srch_action(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    for(let act of g) {
        act.k = (act.d===Act.DIRECTION.right || act.d===Act.DIRECTION.down)?srchk_to_buildk(act.k):act.k;
        yield(act)
    }
}


__ME.$gen_sdfs_prev_srch_action  = function * (idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let rt = ndget.$root_(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    yield({k:'$self_',d:Act.DIRECTION.left,id:ids[0]})
    let id = ids[0];
    if(id !== rt) {
        let act = __ME.$sdfs_prev_srch_action(idpool,fc,rb,pr,lb,lc,[id],idxs,[Act.DIRECTION.left]);
        while(act.id!==0) {
            yield({k:act.k,d:act.d,id:act.id})
            if(act.id === rt) {break}
            act =  __ME.$sdfs_prev_srch_action(idpool,fc,rb,pr,lb,lc,[act.id],idxs,[act.d])
        }
    }
}


__ME.$gen_sdfs_prev_build_action = function * (idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let g = __ME.$gen_sdfs_prev_srch_action(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    for(let act of g) {
        act.k = (
            act.d===Act.DIRECTION.left || act.d===Act.DIRECTION.down
        )?srchk_to_buildk(act.k,true):(
            (act.k==='$parent_' && rb[act.id]===0)?'$add_or_goto_parent':act.k
        );
        yield(act)
    }
}


module.exports = __ME


