//empty 0
const __ME  = {
    $is_empty:(slots,id)=> slots[id] === 0,
    $is_fstch:(lb,id)=> lb[id] === 0,
    $is_root:(pr,id) => pr[id] === 0,
    $is_lstch:(rb,id)=> rb[id] === 0,
    $is_leaf: (fc,id) => fc[id] === 0,
}

__ME.$is_lonely = (rb,lb,id) => __ME.$is_fstch(lb,id) && __ME.$is_lstch(rb,id);
__ME.$is_isolated = (fc,pr,id) => 
    __ME.$is_root(pr,id) && 
    __ME.$is_leaf(fc,id) 


__ME.link_pc = (cary,pr,p,c) => {
    cary[p] = c;
    pr[c] = p;
}


__ME.link_rl = (rb,lb,r,l) => {
    rb[l] = r;
    lb[r] = l;
}

__ME.$disconn = (fc,rb,pr,lb,lc,id) => {
    //unlink pc
    let p = pr[id];
    let rsib = rb[id];
    let lsib = lb[id];
    if(__ME.$is_fstch(lb,id)) {fc[p]=rsib}
    if(__ME.$is_lstch(rb,id)) {lc[p]=lsib}
    pr[id] = 0;
    //unlink rl
    __ME.link_rl(rb,lb,rsib,lsib);
    rb[id] = 0;
    lb[id] = 0;
    return(id)
}

function _pend(pcp,rb,pr,lb,id,ch,typ) {
    if(!__ME.$is_root(pr,ch)) {
        return(0)
    } else {
        let och = pcp[0][id];
        __ME.link_pc(pcp[0],pr,id,ch);
        och?(
            typ?__ME.link_rl(rb,lb,ch,och):__ME.link_rl(rb,lb,och,ch)
        ):(pcp[1][id] = ch);
        return(ch)
    }
}

__ME.$prepend_child = (fc,rb,pr,lb,lc,id,ch) => _pend([fc,lc],rb,pr,lb,id,ch,0)
__ME.$append_child  = (fc,rb,pr,lb,lc,id,ch) => _pend([lc,fc],rb,pr,lb,id,ch,1)

function _asib(isf,c,b,rb,pr,lb,id,sib,typ) {
    let p = pr[id];
    if(__ME.$is_root(pr,id) || !__ME.$is_root(pr,sib)){
        return(0)
    } else {
        ////
        pr[sib] = p;
        isf(b,id)?(c[p] = sib):null;
        ////
        let osib = b[id];
        ////
        typ?
            (__ME.link_rl(rb,lb,id,sib),__ME.link_rl(rb,lb,sib,osib)):
            (__ME.link_rl(rb,lb,sib,id),__ME.link_rl(rb,lb,osib,sib));
        return(sib)
    }
}

__ME.$add_rsib =  (fc,rb,pr,lb,lc,id,sib) =>
                  _asib(__ME.$is_lstch,lc,rb,rb,pr,lb,id,sib,0);

__ME.$add_lsib =  (fc,rb,pr,lb,lc,id,sib) =>
                  _asib(__ME.$is_fstch,fc,lb,rb,pr,lb,id,sib,1);


module.exports = __ME;

