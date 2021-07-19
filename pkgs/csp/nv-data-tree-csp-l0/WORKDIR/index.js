//empty 0

const _eng0 = (arr,id) => arr[id] === 0;

const __M = {};
/*
const __M  = {
    _0:(slots,id)  => slots[id] === 0,
    _1:(lb,id)     => lb[id] === 0,
    _2:(pr,id)     => pr[id] === 0,
    _3:(rb,id)     => rb[id] === 0,
    _4:(fc,id)     => fc[id] === 0,
}
*/
[0,1,2,3,4].forEach(r=>{__M["_"+r] = _eng0});

const _eng1 = (arr0,arr1,id) => _eng0(arr0,id) && _eng0(arr1,id);

/*
__M._5 = (rb,lb,id) => _eng0(lb,id) && _eng0(rb,id);
__M._6 = (fc,pr,id) => _eng0(pr,id) && _eng0(fc,id);
*/

[5,6].forEach(r=>{__M["_"+r] = _eng1})


__M._7 = (cary,pr,p,c) => {
    cary[p] = c;
    pr[c] = p;
}


__M._8 = (rb,lb,r,l) => {
    rb[l] = r;
    lb[r] = l;
}

__M._9 = (fc,rb,pr,lb,lc,id) => {
    //unlink pc
    let p = pr[id];
    let rsib = rb[id];
    let lsib = lb[id];
    if(__M._1(lb,id)) {fc[p]=rsib}
    if(__M._3(rb,id)) {lc[p]=lsib}
    pr[id] = 0;
    //unlink rl
    __M._8(rb,lb,rsib,lsib);
    rb[id] = 0;
    lb[id] = 0;
    return(id)
}

function _10(pcp,rb,pr,lb,id,ch,typ) {
    if(!__M._2(pr,ch)) {
        return(0)
    } else {
        let och = pcp[0][id];
        __M._7(pcp[0],pr,id,ch);
        och?(
            typ?__M._8(rb,lb,ch,och):__M._8(rb,lb,och,ch)
        ):(pcp[1][id] = ch);
        return(ch)
    }
}

__M._11 = (fc,rb,pr,lb,lc,id,ch) => _10([fc,lc],rb,pr,lb,id,ch,0)
__M._12  = (fc,rb,pr,lb,lc,id,ch) => _10([lc,fc],rb,pr,lb,id,ch,1)

function _13(isf,c,b,rb,pr,lb,id,sib,typ) {
    let p = pr[id];
    if(__M._2(pr,id) || !__M._2(pr,sib)){
        return(0)
    } else {
        ////
        pr[sib] = p;
        isf(b,id)?(c[p] = sib):null;
        ////
        let osib = b[id];
        ////
        typ?
            (__M._8(rb,lb,id,sib),__M._8(rb,lb,sib,osib)):
            (__M._8(rb,lb,sib,id),__M._8(rb,lb,osib,sib));
        return(sib)
    }
}

__M._14 =  (fc,rb,pr,lb,lc,id,sib) =>_13(__M._3,lc,rb,rb,pr,lb,id,sib,0);
__M._15 =  (fc,rb,pr,lb,lc,id,sib) =>_13(__M._1,fc,lb,rb,pr,lb,id,sib,1);


[
  '$is_empty',     '$is_fstch',
  '$is_root',      '$is_lstch',
  '$is_leaf',      '$is_lonely',
  '$is_isolated',  'link_pc',
  'link_rl',       '$disconn',
  '_pend',         '$prepend_child',
  '$append_child', '_asib',
  '$add_rsib',     '$add_lsib'
].forEach(
    (n,i) => {
        module.exports[n] = __M["_"+i]
    }
);





