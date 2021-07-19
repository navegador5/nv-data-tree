//empty 0

type  BL          = boolean;
type  ID          = number;
type  SLOTS       = any[];
type  A           = Array<ID>;
type  VD          = void;
type  AP          = [A,A];
type  TYP         = 0 | 1;
type  ISF         = (b:A,id:ID)=>BL;


////bsc_is = {0:"$is_empty",1:"$is_fstch",2:"$is_root",3:"$is_lstch",4:"$is_leaf"}

const _0 = (slots : SLOTS, id : ID):BL => slots[id] === 0;
const _1 = (lb    :    A,  id : ID):BL => lb[id]    === 0;
const _2 = (pr    :    A,  id : ID):BL => pr[id]    === 0;
const _3 = (rb    :    A,  id : ID):BL => rb[id]    === 0; 
const _4 = (fc    :    A,  id : ID):BL => fc[id]    === 0;

////ex_is = {5:"$is_lonely",6:"$is_isolated"}
const _5 = (         rb : A,         lb : A, id : ID):BL  => _1(lb,id) && _3(rb,id);
const _6 = (fc : A,          pr : A,         id : ID):BL  => _2(pr,id) && _4(fc,id);


////op = {7:"link_pc",8:"link_rl"}
const _7 = (cary : A, pr : A, p : ID, c : ID):VD => {
    cary[p] = c;
    pr[c] = p;
}

const _8 = (rb:A, lb:A, r:ID, l:ID):VD  => {
    rb[l] = r;
    lb[r] = l;
}

//// {9:"$disconn"}
const _9 = (fc:A, rb:A, pr:A, lb:A, lc:A, id:ID):ID => {
    //unlink pc
    let p:ID    = pr[id];
    let rsib:ID = rb[id];
    let lsib:ID = lb[id];
    if(_1(lb,id)) {fc[p]=rsib}
    if(_3(rb,id)) {lc[p]=lsib}
    pr[id] = 0;
    //unlink rl
    _8(rb,lb,rsib,lsib);
    rb[id] = 0;
    lb[id] = 0;
    return(id)
}



//// {10:"_pend",11:"$prepend_child",2:"$append_child"}
const _10 = (pcp:AP, rb:A, pr:A, lb:A, id:ID, ch:ID, typ:TYP):ID => {
    if(!_2(pr,ch)) {
        return(0)
    } else {
        let xch:ID = pcp[0][id];
        _7(pcp[0],pr,id,ch);
        xch?(typ?_8(rb,lb,ch,xch):_8(rb,lb,xch,ch)):(pcp[1][id] = ch);
        return(ch)
    }
}

const _11 = (fc:A,rb:A,pr:A,lb:A,lc:A,id:ID,ch:ID):ID => _10([fc,lc],rb,pr,lb,id,ch,0);
const _12 = (fc:A,rb:A,pr:A,lb:A,lc:A,id:ID,ch:ID):ID => _10([lc,fc],rb,pr,lb,id,ch,1);


////{13:"_asib",14:"$add_rsib",15:"$add_lsib"}

const _13 = (isf:ISF,c:A,b:A,rb:A,pr:A,lb:A,id:ID,sib:ID,typ:TYP):ID =>{
    let p:ID = pr[id];
    if(_1(pr,id) || !_1(pr,sib)){
        return(0)
    } else {
        ////
        pr[sib] = p;
        isf(b,id)?(c[p] = sib):null;
        let osib:ID = b[id];
        typ?(_8(rb,lb,id,sib),_8(rb,lb,sib,osib)):(_8(rb,lb,sib,id),_8(rb,lb,osib,sib));
        return(sib)
    }
}

const _14 =  (fc:A,rb:A,pr:A,lb:A,lc:A,id:ID,sib:ID):ID => _13(_3,lc,rb,rb,pr,lb,id,sib,0);
const _15 =  (fc:A,rb:A,pr:A,lb:A,lc:A,id:ID,sib:ID):ID => _13(_1,fc,lb,rb,pr,lb,id,sib,1);



export {
    _0  as $is_empty,
    _1  as $is_fstch,
    _2  as $is_root,
    _3  as $is_lstch,
    _4  as $is_leaf,
    ////
    _5  as $is_lonely,
    _6  as $is_isolated,
    ////
    _7  as link_pc,
    _8  as link_rl,
    ////
    _9  as $disconn,
    _11 as $prepend_child,
    _12 as $append_child,
    ////
    _14 as $add_rsib,
    _15 as $add_lsib
}






