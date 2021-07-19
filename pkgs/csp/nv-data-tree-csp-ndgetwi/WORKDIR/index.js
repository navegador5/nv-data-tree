const gn = require("nv-data-tree-csp-gen");

const __ME = {}

__ME.$ance = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
             gn.which(gn.$ance(pr,ids[0]),idxs[0])

__ME.$plance = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) => {
    let ans = gn.reverse_then_push_self(gn.$ance(pr,ids[0]),ids[0]);
    return(gn.which(ans,idxs[0]))
}

__ME.$child = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
             gn.which(gn.$fch(fc,rb,ids[0]),idxs[0])

__ME.$sib = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
             gn.which(gn.$sibff(fc,rb,pr,ids[0]),idxs[0])

__ME.$psib = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
             gn.which(gn.$psib(lb,ids[0]),idxs[0])

__ME.$fsib = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
             gn.which(gn.$fsib(rb,ids[0]),idxs[0])


module.exports = __ME
