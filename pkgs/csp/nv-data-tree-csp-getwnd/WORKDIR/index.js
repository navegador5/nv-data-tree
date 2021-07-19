const gn = require("nv-data-tree-csp-gen");
const ndgen = require("nv-data-tree-csp-ndgen");

const __ME = {}


////GET_WITH_ND

__ME.$ance_dist = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    gn.dist_after(gn.$ance(pr,ids[0]),ids[0],ids[1])


__ME.$sib_dist = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    gn.dist_dual(gn.$sibff(fc,rb,pr,ids[0]),ids[0],ids[1])


function _dfs_des_index(gfn,idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let self = ids[0];
    let rt = ids[1];
    if(gn.of(gn.$ance(pr,self),rt)) {
        return(
            gn.seq(
                ndgen[gfn](idpool,fc,rb,pr,lb,lc,[rt],idxs,others),
                self
            )
        )
    } else {
        return(-1)
    }
}



__ME.$sdfs_des_index = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    (ids[0]===ids[1])?0:
     _dfs_des_index('$gen_sdfs_next',idpool,fc,rb,pr,lb,lc,ids,idxs,others)

__ME.$sdfs_des_leaf_index = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> 
     (ids[0]===ids[1] && fc[ids[0]]===0)?0:
     _dfs_des_index('$gen_sdfs_next_leaf',idpool,fc,rb,pr,lb,lc,ids,idxs,others)


__ME.$sdfs_des_nonleaf_index = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
     (ids[0]===ids[1] && fc[ids[0]]!==0)?0:
     _dfs_des_index('$gen_sdfs_next_nonleaf',idpool,fc,rb,pr,lb,lc,ids,idxs,others)

__ME.$edfs_des_index = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> 
    (ids[0]===ids[1])?0:
    _dfs_des_index('$gen_edfs_prev',idpool,fc,rb,pr,lb,lc,ids,idxs,others)

__ME.$edfs_des_leaf_index = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    (ids[0]===ids[1] && fc[ids[0]]!==0)?0: 
    _dfs_des_index('$gen_edfs_prev_leaf',idpool,fc,rb,pr,lb,lc,ids,idxs,others)

__ME.$edfs_des_nonleaf_index = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    (ids[0]===ids[1] && fc[ids[0]]!==0)?0: 
    _dfs_des_index('$gen_edfs_prev_nonleaf',idpool,fc,rb,pr,lb,lc,ids,idxs,others)


__ME.$des_spl = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let spl = []
    let rt = ids[1];
    if(rt === ids[0]) {return([])}
    let flag = false;
    let anceg = gn.$ance(pr,ids[0])
    for(let an of anceg) {
        if(an === rt) {flag=true;break}
        let seq = gn.seq(gn.$sibff(fc,rb,pr,an),an);
        spl.unshift(seq)
    }
    if(flag) {
        spl.push(gn.seq(gn.$sibff(fc,rb,pr,ids[0]),ids[0]))
        return(spl)
    } else {
        return([-1])
    }
}


__ME.$des_offset = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let rt = ids[1];
    let g = ndgen.$gen_sdfs_next(idpool,fc,rb,pr,lb,lc,[rt],idxs,others);
    let offset = 0;
    let ready = false;
    let flag = false;
    for(let each of g) {
        if(ids[0] === each) {
            flag = true
            if(fc[each] === 0) {
                return(offset)
            } else {
                ready = true
            }
        } else {
            if(fc[each] === 0 && ready) {return(offset)}
        }
        if(fc[each] === 0) {offset = offset+1}
    }
    return(flag?offset:-1)
}


module.exports = __ME


