const gn = require("../nv-data-tree-csp-gen/index");

const __ME = {}

__ME.$get_with_spl = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let id = ids[0];
    let spl = others[0];
    for(let i of spl) {
        id = gn.which(gn.$fch(fc,rb,id),i)
        if(id===0) {break}
    }
    return(id)
}


module.exports = __ME
