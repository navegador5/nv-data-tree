const gn = require("../nv-data-tree-csp-gen/index");

const __ME = {}

__ME.$some_ances = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
                    gn.some(gn.$ance(pr,ids[0]),idxs)

__ME.$some_plances = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) => {
    let ans = gn.reverse_then_push_self(gn.$ance(pr,ids[0]),ids[0]);
    return(gn.some(ans,idxs))
}

__ME.$some_children = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
                     gn.some(gn.$fch(fc,rb,ids[0]),idxs)

__ME.$some_sibs = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
                   gn.some(gn.$sibff(fc,rb,pr,ids[0]),idxs)

__ME.$some_psibs = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
                   gn.some(gn.$psib(lb,ids[0]),idxs)

__ME.$some_fsibs = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
                   gn.some(gn.$fsib(rb,ids[0]),idxs)


module.exports = __ME


