const gn = require("nv-data-tree-csp-gen");
const ndget = require("nv-data-tree-csp-ndget");


const __ME = {}

__ME.$gen_ance = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>gn.$ance(pr,ids[0]);

__ME.$gen_child_from_fst = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                           gn.$fch(fc,rb,ids[0]);

__ME.$gen_child_from_lst = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                           gn.$lch(lc,lb,ids[0]);

__ME.$gen_sib_from_fst = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                           gn.$sibff(fc,rb,pr,ids[0]);

__ME.$gen_sib_from_lst = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                           gn.$sibfl(lc,lb,pr,ids[0]);

__ME.$gen_psib = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>gn.$psib(lb,ids[0]);
__ME.$gen_fsib = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>gn.$fsib(rb,ids[0]);

__ME.$gen_rmost = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                  gn.$drmost(lc,ids[0]);
__ME.$gen_lmost = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                  gn.$dlmost(fc,ids[0]);


function * _gen_sdfs(nfn,xmost,idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let id = ids[0];
    while(id!==0) {
        yield(id);
        if(id === xmost) {break}
        id = ndget[nfn](idpool,fc,rb,pr,lb,lc,[id],idxs,others)
    }
}

__ME.$gen_sdfs_next = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let drmost = ndget.$drmost_(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    yield * (_gen_sdfs('$sdfs_next_',drmost,idpool,fc,rb,pr,lb,lc,ids,idxs,others))
}

__ME.$gen_sdfs_prev = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let rt = ndget.$root_(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    yield * (_gen_sdfs('$sdfs_prev_',rt,idpool,fc,rb,pr,lb,lc,ids,idxs,others))
}


function * _gen_dfs_leaf(gfn,idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let g = __ME[gfn](idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    for(let each of g) {if(fc[each]===0) {yield(each)}}
}


__ME.$gen_sdfs_next_leaf = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    yield * _gen_dfs_leaf('$gen_sdfs_next',idpool,fc,rb,pr,lb,lc,ids,idxs,others)
}

__ME.$gen_sdfs_prev_leaf = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    yield * _gen_dfs_leaf('$gen_sdfs_prev',idpool,fc,rb,pr,lb,lc,ids,idxs,others)
}


function * _gen_dfs_nonleaf(gfn,idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let g = __ME[gfn](idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    for(let each of g) {if(fc[each]!==0) {yield(each)}}
}

__ME.$gen_sdfs_next_nonleaf = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others){
    yield * _gen_dfs_nonleaf('$gen_sdfs_next',idpool,fc,rb,pr,lb,lc,ids,idxs,others)
}

__ME.$gen_sdfs_prev_nonleaf = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others){
    yield * _gen_dfs_nonleaf('$gen_sdfs_prev',idpool,fc,rb,pr,lb,lc,ids,idxs,others)
}

__ME.$gen_edfs_next = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let id = ids[0]
    while(id!==0) {
        yield(id);
        id = ndget.$edfs_next_(idpool,fc,rb,pr,lb,lc,[id],idxs,others);
    }
}

__ME.$gen_edfs_prev = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let id = ids[0];
    while(id!==0) {
        yield(id);
        id = ndget.$edfs_prev_(idpool,fc,rb,pr,lb,lc,[id],idxs,others);
    }
}


__ME.$gen_edfs_next_leaf = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    yield * _gen_dfs_leaf('$gen_edfs_next',idpool,fc,rb,pr,lb,lc,ids,idxs,others)
}

__ME.$gen_edfs_prev_leaf = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    yield * _gen_dfs_leaf('$gen_edfs_prev',idpool,fc,rb,pr,lb,lc,ids,idxs,others)
}


__ME.$gen_edfs_next_nonleaf = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others){
    yield * _gen_dfs_nonleaf('$gen_edfs_next',idpool,fc,rb,pr,lb,lc,ids,idxs,others)
}

__ME.$gen_edfs_prev_nonleaf = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others){
    yield *  _gen_dfs_nonleaf('$gen_edfs_prev',idpool,fc,rb,pr,lb,lc,ids,idxs,others)
}


module.exports = __ME
