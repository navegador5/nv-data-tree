const l0                = require("nv-data-tree-csp-l0");
const gn                = require("nv-data-tree-csp-gen");
const {FLAG_DICT}       = require("nv-data-tree-actdef");


const __ME = {}

const  _sedfs_close_next = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
        (rb[ids[0]])?[rb[ids[0]],0]:([pr[ids[0]],1])

__ME.$sedfs_next = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) => {
    let flag = others[0];
    if(flag === FLAG_DICT.close) {
        return(_sedfs_close_next(idpool,fc,rb,pr,lb,lc,ids,idxs,others))
    } else {
        let fstch = fc[ids[0]];
        return(fstch?[fstch,FLAG_DICT.open]:[ids[0],FLAG_DICT.close])
    }
}

__ME.$sedfs_next_after_open_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
    __ME.$sedfs_next(idpool,fc,rb,pr,lb,lc,ids,idxs,[0])

__ME.$sedfs_next_after_close_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
    __ME.$sedfs_next(idpool,fc,rb,pr,lb,lc,ids,idxs,[1])


__ME.$gen_sedfs_next= function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let curr = ids[0];
    let flag = others[0];
    yield([curr,flag]);
    while(!(curr === ids[0] && flag ===FLAG_DICT.close)) {
        [curr,flag] = __ME.$sedfs_next(idpool,fc,rb,pr,lb,lc,[curr],[],[flag]);
        yield([curr,flag])
    }
}


__ME.$gen_sedfs_next_after_open = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    yield * __ME.$gen_sedfs_next(idpool,fc,rb,pr,lb,lc,ids,idxs,[0])
}

__ME.$gen_sedfs_next_after_close = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    yield * __ME.$gen_sedfs_next(idpool,fc,rb,pr,lb,lc,ids,idxs,[1])
}

__ME.$sedfs_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
    Array.from(__ME.$gen_sedfs_next_after_open(idpool,fc,rb,pr,lb,lc,ids,idxs,others))

const _sedfs_open_prev = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) => 
    (lb[ids[0]])?[lb[ids[0]],1]:[pr[ids[0]],0]


__ME.$sedfs_prev = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) => {
    let flag = others[0];
    if(flag === FLAG_DICT.open) {
        return(_sedfs_open_prev(idpool,fc,rb,pr,lb,lc,ids,idxs,others))
    } else {
        let fstch = fc[ids[0]];
        return(fstch?[lc[ids[0]],FLAG_DICT.close]:[ids[0],FLAG_DICT.open])        
    }
}

__ME.$sedfs_prev_before_open_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
    __ME.$sedfs_prev(idpool,fc,rb,pr,lb,lc,ids,idxs,[0])


__ME.$sedfs_prev_before_close_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
    __ME.$sedfs_prev(idpool,fc,rb,pr,lb,lc,ids,idxs,[1])

__ME.$gen_sedfs_prev = function * (idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let rt = gn.lst0(gn.$ance(pr,ids[0]),ids[0]);
    let curr = ids[0];
    let flag = others[0];
    yield([curr,flag]);
    while(!(curr === rt && flag ===FLAG_DICT.open)) {
        [curr,flag] = __ME.$sedfs_prev(idpool,fc,rb,pr,lb,lc,[curr],idxs,[flag]);
        yield([curr,flag])
    }
}


__ME.$gen_sedfs_prev_before_open = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    yield * __ME.$gen_sedfs_prev(idpool,fc,rb,pr,lb,lc,ids,idxs,[0])
}

__ME.$gen_sedfs_prev_before_close = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    yield * __ME.$gen_sedfs_prev(idpool,fc,rb,pr,lb,lc,ids,idxs,[1])
}


module.exports = __ME


