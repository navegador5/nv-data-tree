const gn = require("../nv-data-tree-csp-gen/index");
const ndgen = require("../nv-data-tree-csp-ndgen/index");
const _0 = Array.from;

const __ME = {}
////NDS_GETTER
////(...) => []:ID
__ME.$ances_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _0(gn.$ance(pr,ids[0]));

__ME.$plances_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    gn.reverse_then_push_self(gn.$ance(pr,ids[0]),ids[0])

__ME.$children_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _0(gn.$fch(fc,rb,ids[0]));

__ME.$sibs_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _0(gn.$sibff(fc,rb,pr,ids[0]));

__ME.$psibs_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _0(gn.$psib(lb,ids[0]));

__ME.$fsibs_ =  (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _0(gn.$fsib(rb,ids[0]));

__ME.$sdfs_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _0(ndgen.$gen_sdfs_next(idpool,fc,rb,pr,lb,lc,ids,idxs,others));

__ME.$sdfs_leafs_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _0(ndgen.$gen_sdfs_next_leaf(idpool,fc,rb,pr,lb,lc,ids,idxs,others));

__ME.$sdfs_nonleafs_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _0(ndgen.$gen_sdfs_next_nonleaf(idpool,fc,rb,pr,lb,lc,ids,idxs,others));

__ME.$edfs_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _0(ndgen.$gen_edfs_next(idpool,fc,rb,pr,lb,lc,ids,idxs,others));

__ME.$edfs_leafs_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _0(ndgen.$gen_edfs_next_leaf(idpool,fc,rb,pr,lb,lc,ids,idxs,others));

__ME.$edfs_nonleafs_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _0(ndgen.$gen_edfs_next_nonleaf(idpool,fc,rb,pr,lb,lc,ids,idxs,others));


module.exports = __ME;
