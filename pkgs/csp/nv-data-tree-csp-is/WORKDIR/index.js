const l0 = require("nv-data-tree-csp-l0");
const __ME = {
    $is_empty:(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>l0.$is_empty(idpool.rented_,ids[0]),
    $is_root:(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>l0.$is_root(pr,ids[0]),
    $is_fstch:(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>l0.$is_fstch(lb,ids[0]),
    $is_midch:(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> !l0.$is_fstch(lb,ids[0]) && !l0.$is_lstch(rb,ids[0]),
    $is_lstch:(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>l0.$is_lstch(rb,ids[0]),
    $is_leaf:(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>l0.$is_leaf(fc,ids[0]),
    $is_lonely:(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>l0.$is_lonely(rb,lb,ids[0]),
    $is_isolated:(idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>l0.$is_isolated(fc,pr,ids[0]),
}

module.exports = __ME;
