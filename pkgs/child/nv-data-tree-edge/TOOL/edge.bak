const {
    fixy,
    fiy,
    fiseq
} = require("nv-number-basic");

const {
    Act,
    srchk_to_buildk
} = require("nv-data-tree-actdef");


function _count_engine(gf,max_size,eary,vertexes,id) {
    let g =  gf(max_size,eary,vertexes,id);
    let c = 0
    for(let each of g) {c = c+1;}
    return(c)    
}

function _lst_engine(gf,max_size,eary,vertexes,id) {
    let g =  gf(max_size,eary,vertexes,id);
    let prev;
    for(let each of g) {prev = each;}
    return(prev)
}


function _which_engine(gf,max_size,eary,vertexes,id,which=0) {
    let g =  gf(max_size,eary,vertexes,id);
    let c = 0
    for(let each of g) {
        if(c===which) {return(each)}
        c = c+1;
    }
    return(0)
}


function _some_engine(gf,max_size,eary,vertexes,id,indexes) {
    let rslt = [];
    let g =  gf(max_size,eary,vertexes,id);
    let c = 0
    for(let each of g) {
        if(indexes.includes(c)) {rslt.push(each)}
        c = c+1;
    }
    return(rslt)
}


function _is_of_engine(gf,max_size,eary,vertexes,id,other) {
    let g = gf(max_size,eary,vertexes,other)
    for(let each of g) {
        if(each === id) {return(true)}
    }
    return(false)
}


// is

function $is_empty(max_size,eary,vertexes,id) {return(!vertexes.has(id))}

function $is_root(max_size,eary,vertexes,id) {
    let p = $parent_(max_size,eary,vertexes,id);
    return(p===0)
}

function $is_leaf(max_size,eary,vertexes,id) {return($children_count_(max_size,eary,vertexes,id)===0)}

function $is_lonely(max_size,eary,vertexes,id) {return($sibs_count_(max_size,eary,vertexes,id)===1)}

function $is_fstch(max_size,eary,vertexes,id) {
    let p = $parent_(max_size,eary,vertexes,id);
    if(p===0) {
        return(true)
    } else {
        return($fstch_(max_size,eary,vertexes,p)===id)
    }
}

function $is_lstch(max_size,eary,vertexes,id) {
    let p = $parent_(max_size,eary,vertexes,id);
    if(p===0) {
        return(true)
    } else {
        return($lstch_(max_size,eary,vertexes,p)===id)
    }
}


////

function $is_root_of(max_size,eary,vertexes,id,des) {
    return($root_(max_size,eary,vertexes,des)===id)
}

function $is_parent_of(max_size,eary,vertexes,id,ch) {
    return($parent_(max_size,eary,vertexes,ch)===id)
}

function $is_ance_of(max_size,eary,vertexes,id,ch) {return(_is_of_engine($gen_ance,max_size,eary,vertexes,id,ch))}

function $is_inclusive_ance_of(max_size,eary,vertexes,id,ch) {
    return(
        id === ch ||
        _is_of_engine($gen_ance,max_size,eary,vertexes,id,ch)
    )
}


function $is_child_of(max_size,eary,vertexes,id,p) {return(_is_of_engine($gen_child_from_fst,max_size,eary,vertexes,id,p))}

function $is_fstch_of(max_size,eary,vertexes,id,p) {
    return($fstch_(max_size,eary,vertexes,p)===id)
}

function $is_lstch_of(max_size,eary,vertexes,id,p) {
    return($lstch_(max_size,eary,vertexes,p)===id)
}

function $is_des_of(max_size,eary,vertexes,id,ance) {return(_is_of_engine($gen_ance,max_size,eary,vertexes,ance,id))}

function $is_inclusive_des_of(max_size,eary,vertexes,id,ance) {
    return(
        id === ance ||
        $is_des_of(max_size,eary,vertexes,id,ance)
    )
}

function $is_fsib_of(max_size,eary,vertexes,id,sib) {return(_is_of_engine($gen_fsib,max_size,eary,vertexes,id,sib))} 
function $is_psib_of(max_size,eary,vertexes,id,sib) {return(_is_of_engine($gen_psib,max_size,eary,vertexes,id,sib))}

function $is_sib_of(max_size,eary,vertexes,id,sib) {
    return($is_fsib_of(max_size,eary,vertexes,id,sib) || $is_psib_of(max_size,eary,vertexes,id,sib))
}

function $is_lsib_of(max_size,eary,vertexes,id,sib) {return($lsib_(max_size,eary,vertexes,sib) === id)}

function $is_rsib_of(max_size,eary,vertexes,id,sib) {return($rsib_(max_size,eary,vertexes,sib) === id)}

function $is_inclusive_sib_of(max_size,eary,vertexes,id,sib) {
    return(
        id === sib ||
        $is_sib_of(max_size,eary,vertexes,id,sib)
    )
}


//self
function $self_(max_size,eary,vertexes,id) {
    if($is_empty(max_size,eary,vertexes,id)) {
        return(0)
    } else {
        return(id)
    }
}

//children


function _get_fstch_and_index(max_size,eary,vertexes,id) {
    let lngth = eary.length;
    for(let i=0;i<lngth;i++) {
        let e = eary[i];
        let [p,ch] = fixy(max_size,e);
        if(p===id) { return([ch,i])}
    }
    return([0,-1])
}


function _get_fstch_index(max_size,eary,vertexes,id) {return(_get_fstch_and_index(max_size,eary,vertexes,id)[1])}
function $fstch_(max_size,eary,vertexes,id) {return(_get_fstch_and_index(max_size,eary,vertexes,id)[0])}

function _get_lstch_and_index(max_size,eary,vertexes,id) {
    for(let i=eary.length-1;i>=0;i--) {
        let e = eary[i];
        let [p,ch] = fixy(max_size,e);
        if(p===id) { return([ch,i])}
    }
    return([0,-1])
}

function _get_lstch_index(max_size,eary,vertexes,id) {return(_get_lstch_and_index(max_size,eary,vertexes,id)[1])}
function $lstch_(max_size,eary,vertexes,id) {return(_get_lstch_and_index(max_size,eary,vertexes,id)[0])}


function * _gen_child_and_index_from_fst(max_size,eary,vertexes,id) {
    let lngth = eary.length;
    for(let i=0;i<lngth;i++) {
        let e = eary[i];
        let [p,ch] = fixy(max_size,e);
        if(p===id) { yield([ch,i])}
    }
}

function * _gen_child_pair_from_fst(max_size,eary,vertexes,id) {
    let lngth = eary.length;
    for(let i=0;i<lngth;i++) {
        let e = eary[i];
        let [p,ch] = fixy(max_size,e);
        if(p===id) { yield([p,ch])}
    }
}


function * $gen_child_from_fst(max_size,eary,vertexes,id) {
    let g = _gen_child_and_index_from_fst(max_size,eary,vertexes,id);
    for(let pair of g) {yield(pair[0])}
}

function * _gen_child_index_from_fst(max_size,eary,vertexes,id) {
    let g = _gen_child_and_index_from_fst(max_size,eary,vertexes,id);
    for(let pair of g) {yield(pair[1])}
}


function * $gen_child_from_lst(max_size,eary,vertexes,id) {
    let lngth = eary.length;
    for(let i=lngth-1;i>=0;i--) {
        let e = eary[i];
        let [p,ch] = fixy(max_size,e);
        if(p===id) { yield(ch)}
    }
}


function $child(max_size,eary,vertexes,id,which=0) {return(_which_engine($gen_child_from_fst,max_size,eary,vertexes,id,which))}
    

function $some_children(max_size,eary,vertexes,id,indexes) {
    return(_some_engine($gen_child_from_fst,max_size,eary,vertexes,id,indexes))
}

function _pair_children(max_size,eary,vertexes,id) {
     return(Array.from(_gen_child_pair_from_fst(max_size,eary,vertexes,id)))
}

function $children_(max_size,eary,vertexes,id) {
    return(Array.from($gen_child_from_fst(max_size,eary,vertexes,id)))
}

function $children_count_(max_size,eary,vertexes,id) {
    return(_count_engine($gen_child_from_fst,max_size,eary,vertexes,id))
}



//ance

function $root_(max_size,eary,vertexes,id) {
    let lngth = eary.length;
    let [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,lngth);
    if(p===0) {
        return(id)
    } else {
        let prev;
        while(p!==0) {
            prev = p;
            [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,p,dst_index)
        }
        return(prev)
    }
}


function _get_parent_and_dst_index(max_size,eary,vertexes,id,index) {
    index = (index<=0)?eary.length:index;
    for(let i =index-1;i>=0;i--) {
        let seq = eary[i];
        let [x,y]= fixy(max_size,seq);
        if(y === id) {return([x,i])}
    }
    for(let i =eary.length-1;i>index;i--) {
        let seq = eary[i];
        let [x,y]= fixy(max_size,seq);
        if(y === id) {return([x,i])}
    }
    return([0,-1])
} 

function $parent_(max_size,eary,vertexes,id) {
    return(_get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length)[0])
}

function $luncle_(max_size,eary,vertexes,id) {
    let p = $parent_(max_size,eary,vertexes,id);
    if(p===0) {
        return(0)
    } else {
        return($lsib_(max_size,eary,vertexes,p))
    }
}

function $runcle_(max_size,eary,vertexes,id) {
    let p = $parent_(max_size,eary,vertexes,id);
    if(p===0) {
        return(0)
    } else {
        return($rsib_(max_size,eary,vertexes,p))
    }
}


function * $gen_ance(max_size,eary,vertexes,id) {
    let [p,index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length);
    while(p!==0) {
        yield(p);
        [p,index] = _get_parent_and_dst_index(max_size,eary,vertexes,p,index)
    }
}


function $ance(max_size,eary,vertexes,id,which=0) {return(_which_engine($gen_ance,max_size,eary,vertexes,id,which))}


function $ances_(max_size,eary,vertexes,id) {
    return(Array.from($gen_ance(max_size,eary,vertexes,id)))
}


function $some_ances(max_size,eary,vertexes,id,indexes) {
    return(_some_engine($gen_ance,max_size,eary,vertexes,id,indexes))
}


function $plance(max_size,eary,vertexes,id,which=0) {
    let ans = $plances_(max_size,eary,vertexes,id);
    return(ans.filter((an,i)=>i===which))
}



function $some_plances(max_size,eary,vertexes,id,indexes) {
    let ans = $plances_(max_size,eary,vertexes,id);
    return(ans.filter((an,i)=>indexes.includes(i)))
}


function $plances_(max_size,eary,vertexes,id) {
    let ans = $ances_(max_size,eary,vertexes,id);
    ans.reverse();
    ans.push(id);
    return(ans)
}

function $depth_(max_size,eary,vertexes,id) {
    let c = 0
    let [p,index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length);
    while(p!==0) {
        c = c + 1;
        [p,index] = _get_parent_and_dst_index(max_size,eary,vertexes,p,index)
    }
    return(c);
}


function $ance_dist(max_size,eary,vertexes,id,ance) {
    if(id === ance) {return(0)}
    let g = $gen_ance(max_size,eary,vertexes,id);
    let c = 1;
    let founded = false
    for(let an of g) {
        if(an === ance) {
            founded = true;
            break;
        } else {}
        c = c +1
    }
    if(founded) {return(c)} else {return(Infinity)}
}


////sib


function _get_fst_as_src_index(max_size,eary,vertexes,id) {
    for(let i=0;i<eary.length;i++) {
        let e = eary[i];
        let [x,y] = fixy(max_size,e);
        if(x===id) {return(i)}
    }
}

function _get_lst_as_src_index(max_size,eary,vertexes,id) {
    for(let i=eary.length-1;i>-1;i--) {
        let e = eary[i];
        let [x,y] = fixy(max_size,e);
        if(x===id) {return(i)}
    }
}



function _get_sibseq(max_size,eary,vertexes,id,p,fst_as_src_index,lst_as_src_index) {
    let c = -1;
    for(let i=fst_as_src_index;i<=lst_as_src_index;i++) {
        let e = eary[i];
        let [x,y] = fixy(max_size,e);
        if(x===p) {c=c+1;}
        if(y===id) {return(c)}
    }
}


function $sibseq_(max_size,eary,vertexes,id) {
    let [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length);
    let fst_as_src_index = _get_fst_as_src_index(max_size,eary,vertexes,p);
    let lst_as_src_index = _get_lst_as_src_index(max_size,eary,vertexes,p);
    if(p === 0) {
        return(0)
    } else {
        return(_get_sibseq(max_size,eary,vertexes,id,p,fst_as_src_index,lst_as_src_index))
    }
}


function * $gen_psib(max_size,eary,vertexes,id) {
    let [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length);
    if(p === 0) {
        
    } else {
         let fst_as_src_index = _get_fst_as_src_index(max_size,eary,vertexes,p);
         for(let i=dst_index-1;i>=fst_as_src_index;i--) {
             let e = eary[i];
             let [x,y] = fixy(max_size,e);
             if(x===p) {
                 if(y===id){break} else {yield(y)}
             } else {}
         }    
    }
}

function $lsib_(max_size,eary,vertexes,id) {return($psib(max_size,eary,vertexes,id,0))}

function $fstpsib_(max_size,eary,vertexes,id) {return(_lst_engine($gen_psib,max_size,eary,vertexes,id))}

function $psib(max_size,eary,vertexes,id,which=0) {return(_which_engine($gen_psib,max_size,eary,vertexes,id,which))}

function $some_psibs(max_size,eary,vertexes,id,indexes) {return(_some_engine($gen_psib,max_size,eary,vertexes,id,indexes))}

function $psibs_(max_size,eary,vertexes,id) {return(Array.from($gen_psib(max_size,eary,vertexes,id)))}

function $psibs_count_(max_size,eary,vertexes,id) {
    let sibseq = $sibseq_(max_size,eary,vertexes,id);
    if(sibseq===0) {return(0)} else {return(sibseq-1)}
}


function * $gen_fsib(max_size,eary,vertexes,id) {
    let [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length);
    if(p === 0) {
    } else {
        let lstch_index =  _get_lstch_index(max_size,eary,vertexes,p);
        for(let i=dst_index+1;i<=lstch_index;i++) {
            let e = eary[i];
            let [x,y] = fixy(max_size,e);
            if(x===p) {yield(y)}
        }
    }
}


function $rsib_(max_size,eary,vertexes,id) {return($fsib(max_size,eary,vertexes,id,0))}

function $lstfsib_(max_size,eary,vertexes,id) {return(_lst_engine($gen_fsib,max_size,eary,vertexes,id))}

function $fsib(max_size,eary,vertexes,id,which=0) {return(_which_engine($gen_fsib,max_size,eary,vertexes,id,which))}

function $some_fsibs(max_size,eary,vertexes,id,indexes) {return(_some_engine($gen_fsib,max_size,eary,vertexes,id,indexes))}

function $fsibs_(max_size,eary,vertexes,id) {return(Array.from(gen_fsib(max_size,eary,vertexes,id)))}

function $fsibs_count_(max_size,eary,vertexes,id) {return(_count_engine($gen_fsib,max_size,eary,vertexes,id))}


function * $gen_sib(max_size,eary,vertexes,id) {
    let [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length);
    if(p === 0) {
        yield(id)
    } else {
        let fstch_index =  _get_fstch_index(max_size,eary,vertexes,p)
        let lstch_index =  _get_lstch_index(max_size,eary,vertexes,p)
        for(let i=fstch_index;i<=lstch_index;i++) {
            let e = eary[i];
            let [x,y] = fixy(max_size,e);
            if(x===p) {yield(y)}
        }
    }
}

function $fstsib_(max_size,eary,vertexes,id) {return($sib(max_size,eary,vertexes,id,0))}
function $lstsib_(max_size,eary,vertexes,id) {return(_lst_engine($gen_sib,max_size,eary,vertexes,id))}

function $sib(max_size,eary,vertexes,id,which=0) {return(_which_engine($gen_sib,max_size,eary,vertexes,id,which))}

function $some_sibs(max_size,eary,vertexes,id,indexes) {return(_some_engine($gen_sib,max_size,eary,vertexes,id,indexes))}

function $sibs_(max_size,eary,vertexes,id) {return(Array.from($gen_sib(max_size,eary,vertexes,id)))}

function $sibs_count_(max_size,eary,vertexes,id) {return(_count_engine($gen_sib,max_size,eary,vertexes,id))}

function $sib_dist(max_size,eary,vertexes,id,sib) {
    if(id === sib) {return(0)}
    let pg = $gen_psib(max_size,eary,vertexes,id);
    let c = 1;
    let founded=false
    for(let each of pg) {
        if(each === sib) {founded=true;break}
        c = c +1
    }
    if(founded){return(-c)} else {}
    c = 1;
    let fg = $gen_psib(max_size,eary,vertexes,id);
    for(let each of fg) {
        if(each === sib) {founded=true;break}
        c = c +1
    }
    if(founded){return(c)} else {return(Infinity)}
}


function $rel_spl(max_size,eary,vertexes,id,rt) {
    let spl = [$sibseq_(max_size,eary,vertexes,id)]
    let g = $gen_ance(max_size,eary,vertexes,id)
    for(let an of g) {
        if(an === rt) {break}
        let sibseq = $sibseq_(max_size,eary,vertexes,an);
        spl.unshift(sibseq);
    }
    return(spl)
}


function $spl_(max_size,eary,vertexes,id) {
    let rt = $root_(max_size,eary,vertexes,id);
    return($rel_spl(max_size,eary,vertexes,id,rt))
}

function $get_with_spl(max_size,eary,vertexes,id,spl) {
    let an = id
    for(let sibseq of spl) {
        let children = $children_(max_size,eary,vertexes,an);
        an = children[sibseq]
    }
    return(an)
}

////is


function $is_fstch(max_size,eary,vertexes,id) {
    let [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length);
    if(p === 0) {
        return(true)
    } else {
        let fstch = $fstch_(max_size,eary,vertexes,p)
        return(fstch === id)
    }
}

function $is_lstch(max_size,eary,vertexes,id) {
    let [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length);
    if(p === 0) {
        return(true)
    } else {
        let lstch = $lstch_(max_size,eary,vertexes,p)
        return(lstch === id)
    }
}

function $is_leaf(max_size,eary,vertexes,id) {return($children_count_(max_size,eary,vertexes,id) === 0)}



////cousin

function $lcin_(max_size,eary,vertexes,id) {
    let [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length); 
    if(p === 0) {
        return(0)
    } else {
        let fstch = $fstch_(max_size,eary,vertexes,p);
        if(fstch === id) {
            let plsib = $lsib_(max_size,eary,vertexes,p);
            if(plsib === 0) {
                return(0)
            } else {
                return($lstch_(max_size,eary,vertexes,plsib))
            }
        } else {
            return(0)
        }
    }
}


function $rcin_(max_size,eary,vertexes,id) {
    let [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length);
    if(p === 0) {
        return(0)
    } else {
        let lstch = $lstch_(max_size,eary,vertexes,p);
        if(lstch === id) {
            let prsib = $rsib_(max_size,eary,vertexes,p);
            if(prsib === 0) {
                return(0)
            } else {
                return($fstch_(max_size,eary,vertexes,prsib))
            }
        } else {
            return(0)
        }
    }
}


function * $gen_lmost(max_size,eary,vertexes,id) {
    yield(id);
    let fstch = $fstch_(max_size,eary,vertexes,id);
    while(fstch !== 0) {
        yield(fstch);
        fstch = $fstch_(max_size,eary,vertexes,fstch);
    }    
}


function $dlmost_(max_size,eary,vertexes,id) {
    let dlmost = id;
    let fstch = $fstch_(max_size,eary,vertexes,id);
    while(fstch !== 0) {
        dlmost = fstch;
        fstch = $fstch_(max_size,eary,vertexes,fstch);
    }
    return(dlmost)
}


function * $gen_rmost(max_size,eary,vertexes,id) {
    yield(id);
    let lstch = $lstch_(max_size,eary,vertexes,id);
    while(lstch !== 0) {
        yield(lstch);
        lstch = $lstch_(max_size,eary,vertexes,lstch);
    }
}


function $drmost_(max_size,eary,vertexes,id) {
    let drmost = id;
    let lstch = $lstch_(max_size,eary,vertexes,id);
    while(lstch !== 0) {
        drmost = lstch;
        lstch = $lstch_(max_size,eary,vertexes,lstch);
    }
    return(drmost)
}


function $lsib_of_fst_ance_having_lsib_(max_size,eary,vertexes,id) {
    let g = $gen_ance(max_size,eary,vertexes,id);
    for(let an of g) {
        let alsib = $lsib_(max_size,eary,vertexes,an);
        if(alsib !== 0) {return(alsib)}
    }
    return(0)
}

function $rsib_of_fst_ance_having_rsib_(max_size,eary,vertexes,id) {
    let g = $gen_ance(max_size,eary,vertexes,id);
    for(let an of g) {
        let arsib = $rsib_(max_size,eary,vertexes,an);
        if(arsib !== 0) {return(arsib)}        
    }
    return(0)
}


////

function $sdfs_next_(max_size,eary,vertexes,id) {
    let fstch = $fstch_(max_size,eary,vertexes,id);
    if(fstch !== 0) {
        return(fstch)
    } else  {
        let rsib = $rsib_(max_size,eary,vertexes,id);
        if(rsib !== 0) {
            return(rsib)
        } else {
            return($rsib_of_fst_ance_having_rsib_(max_size,eary,vertexes,id))
        }
    }
}

function * $gen_sdfs_next(max_size,eary,vertexes,id) {
    let drmost = $drmost_(max_size,eary,vertexes,id);
    if($is_empty(max_size,eary,vertexes,id)) {
    } else {
        while(id!==0) {
            yield(id);
            if(id === drmost) {break}
            id = $sdfs_next_(max_size,eary,vertexes,id);
        }
    }
}

function $rel_offset(max_size,eary,vertexes,id,rt) {
    let g = $gen_sdfs_next(max_size,eary,vertexes,rt);
    let offset = 0
    let ready = false
    for(let each of g) {
        if(id === each) {
            if($is_leaf(max_size,eary,vertexes,each)) {
                return(offset)
            } else {
                ready = true
            }
        } else {
            if($is_leaf(max_size,eary,vertexes,each) && ready) {return(offset)}
        }
        if($is_leaf(max_size,eary,vertexes,each)) {offset = offset + 1}
    }
    return(offset)
}


function $offset_(max_size,eary,vertexes,id) {
    let rt = $root_(max_size,eary,vertexes,id);
    return($rel_offset(max_size,eary,vertexes,id,rt))
}



function $sdfs_(max_size,eary,vertexes,id) {return(Array.from($gen_sdfs_next(max_size,eary,vertexes,id)))}

function $sdfs_rel_index(max_size,eary,vertexes,id,rt) {
    let g = $gen_sdfs_next(max_size,eary,vertexes,rt);
    let c = 0
    for(let each of g) {
        if(each === id){return(c)}
        c = c+1;
    }
    return(-1)
}

function $sdfs_index_(max_size,eary,vertexes,id) {
    let rt = $root_(max_size,eary,vertexes,id);
    return($sdfs_rel_index(max_size,eary,vertexes,id,rt))
}

function $length_(max_size,eary,vertexes,id) {
    return(_count_engine($gen_sdfs_next,max_size,eary,vertexes,id))
}



function * $gen_sdfs_next_leaf(max_size,eary,vertexes,id) {
     let g = $gen_sdfs_next(max_size,eary,vertexes,id);
     for(let each of g) {if($is_leaf(max_size,eary,vertexes,each)) {yield(each)}}
}

function $sdfs_leafs_(max_size,eary,vertexes,id) {return(Array.from($gen_sdfs_next_leaf(max_size,eary,vertexes,id)))}

function $sdfs_rel_leaf_index(max_size,eary,vertexes,id,rt) {
    let g = $gen_sdfs_next_leaf(max_size,eary,vertexes,rt);
    let c = 0
    for(let each of g) {
        if(each === id){return(c)}
        c = c+1;
    }
    return(-1)
}

function $sdfs_leaf_index_(max_size,eary,vertexes,id) {
    let rt = $root_(max_size,eary,vertexes,id);
    return($sdfs_rel_leaf_index(max_size,eary,vertexes,id,rt))
}

function $width_(max_size,eary,vertexes,id) {
    return(_count_engine($gen_sdfs_next_leaf,max_size,eary,vertexes,id))
}


function * $gen_sdfs_next_nonleaf(max_size,eary,vertexes,id) {
     let g = $gen_sdfs_next(max_size,eary,vertexes,id);
     for(let each of g) {if(!$is_leaf(max_size,eary,vertexes,each)) {yield(each)}}
}

function $sdfs_nonleafs_(max_size,eary,vertexes,id) {return(Array.from($gen_sdfs_next_nonleaf(max_size,eary,vertexes,id)))}

function $sdfs_rel_nonleaf_index(max_size,eary,vertexes,id,rt) {
    let g = $gen_sdfs_next_nonleaf(max_size,eary,vertexes,rt);
    let c = 0
    for(let each of g) {
        if(each === id){return(c)}
        c = c+1;
    }
    return(-1)
}

function $sdfs_nonleaf_index_(max_size,eary,vertexes,id) {
    let rt = $root_(max_size,eary,vertexes,id);
    return($sdfs_rel_nonleaf_index(max_size,eary,vertexes,id,rt))
}


function $nonleaf_length_(max_size,eary,vertexes,id) {
    return(_count_engine($gen_sdfs_next_nonleaf,max_size,eary,vertexes,id))
}

function $sdfs_next_srch_action(max_size,eary,vertexes,prev_id,prev_direction) {
    if(prev_direction === Act.DIRECTION.up) {
        let rsib = $rsib_(max_size,eary,vertexes,prev_id);
        if(rsib !== 0) {
            return(new Act('$rsib_',Act.DIRECTION.right,rsib))
        } else {
            let p = $parent_(max_size,eary,vertexes,prev_id);
            if(p === 0) {
                return(new Act('$end_',Act.DIRECTION.up,p))
            } else {
                return(new Act('$parent_',Act.DIRECTION.up,p))
            }
        }
    } else {
        //down or right 
        let fstch = $fstch_(max_size,eary,vertexes,prev_id);
        if(fstch !== 0) {
            return(new Act('$fstch_',Act.DIRECTION.down,fstch))
        } else  {
            let rsib = $rsib_(max_size,eary,vertexes,prev_id);
            if(rsib !== 0) {
                return(new Act('$rsib_',Act.DIRECTION.right,rsib))
            } else {
                let p = $parent_(max_size,eary,vertexes,prev_id);
                if(p === 0) {
                    return(new Act('$end_',Act.DIRECTION.up,p))
                } else {
                    return(new Act('$parent_',Act.DIRECTION.up,p))
                }
            }
        }
    }
}


function * $gen_sdfs_next_srch_action(max_size,eary,vertexes,id) {
    let drmost = $drmost_(max_size,eary,vertexes,id);
    if($is_empty(max_size,eary,vertexes,id)) {
    } else {
        yield({k:'$self_',d:Act.DIRECTION.down});
        if(id !== drmost) {
            let act = $sdfs_next_srch_action(max_size,eary,vertexes,id,Act.DIRECTION.down)
            while(act.id!==0) {
                yield({k:act.k,d:act.d})
                if(act.id === drmost) {break}
                act =  $sdfs_next_srch_action(max_size,eary,vertexes,act.id,act.d)
            }
        }
    }
}


function $sdfs_next_srch_action_list_(max_size,eary,vertexes,id) {
    return(Array.from($gen_sdfs_next_srch_action(max_size,eary,vertexes,id)))
}

function $sdfs_next_build_action(max_size,eary,vertexes,id,direction) {
    let act = $sdfs_next_srch_action(max_size,eary,vertexes,id,direction);
    act.k = (act.d===Act.DIRECTION.right || act.d===Act.DIRECTION.down)?srchk_to_buildk(act.k):act.k;
    return(act)
}

function * $gen_sdfs_next_build_action(max_size,eary,vertexes,id) {
    let g = $gen_sdfs_next_srch_action(max_size,eary,vertexes,id);
    for(let act of g) {
        act.k = (act.d===Act.DIRECTION.right || act.d===Act.DIRECTION.down)?srchk_to_buildk(act.k):act.k;
        yield(act)
    }
}

function $sdfs_next_build_action_list_(max_size,eary,vertexes,id) {
    return(Array.from($gen_sdfs_next_build_action(max_size,eary,vertexes,id)))
}


function $sdfs_prev_(max_size,eary,vertexes,id) {
    if($is_root(max_size,eary,vertexes,id)) {
        return(0)
    } else {
        if($is_leaf(max_size,eary,vertexes,id)) {
            let lsib = $lsib_(max_size,eary,vertexes,id);
            if(lsib !== 0) {
                return(lsib)
            } else {
                return($parent_(max_size,eary,vertexes,id))
            }
        } else {
            let lsib = $lsib_(max_size,eary,vertexes,id);
            if(lsib !== 0) {
                if($is_leaf(max_size,eary,vertexes,lsib)) {
                    return(lsib)
                } else {
                    return($drmost_(max_size,eary,vertexes,lsib))
                }
            } else {
                return($parent_(max_size,eary,vertexes,id))
            }
        }
    }
}


function * $gen_sdfs_prev(max_size,eary,vertexes,id) {
    let rt = $root_(max_size,eary,vertexes,id);
    if($is_empty(max_size,eary,vertexes,id)) {
    } else {
        while(id!==0) {
            yield(id);
            if(id === rt) {break}
            id = $sdfs_prev_(max_size,eary,vertexes,id);
        }
    }
}

function * $gen_sdfs_prev_leaf(max_size,eary,vertexes,id) {
     let g = $gen_sdfs_prev(max_size,eary,vertexes,id);
     for(let each of g) {if($is_leaf(max_size,eary,vertexes,each)) {yield(each)}}
}

function * $gen_sdfs_prev_nonleaf(max_size,eary,vertexes,id) {
     let g = $gen_sdfs_prev(max_size,eary,vertexes,id);
     for(let each of g) {if(!$is_leaf(max_size,eary,vertexes,each)) {yield(each)}}
}

function $sdfs_prev_srch_action(max_size,eary,vertexes,prev_id,prev_direction) {
    if(prev_direction === Act.DIRECTION.up) {
         let lsib = $lsib_(max_size,eary,vertexes,prev_id);
         if(lsib!==0) {
             return(new Act('$lsib_',Act.DIRECTION.left,lsib))
         } else {
             let p = $parent_(max_size,eary,vertexes,prev_id);
             if(p === 0) {
                 return(new Act('$end_',Act.DIRECTION.up,p))
             } else {
                 return(new Act('$parent_',Act.DIRECTION.up,p))
             }
         }
    } else {
        //left or  down
        if($is_leaf(max_size,eary,vertexes,prev_id)) {
            let lsib = $lsib_(max_size,eary,vertexes,prev_id);
            if(lsib!==0) {
                return(new Act('$lsib_',Act.DIRECTION.left,lsib))
            } else {
                 let p = $parent_(max_size,eary,vertexes,prev_id);
                 if(p === 0) {
                     return(new Act('$end_',Act.DIRECTION.up,p))
                 } else {
                     return(new Act('$parent_',Act.DIRECTION.up,p))
                 }
            }
        } else {
            let lstch = $lstch_(max_size,eary,vertexes,prev_id);
            return(new Act('$lstch_',Act.DIRECTION.down,lstch))
        }    
    }
}

function * $gen_sdfs_prev_srch_action(max_size,eary,vertexes,id) {
    let rt = $root_(max_size,eary,vertexes,id);
    if($is_empty(max_size,eary,vertexes,id)) {
    } else {
        yield({k:'$self_',d:Act.DIRECTION.left});
        if(id !== rt) {
            let act = $sdfs_prev_srch_action(max_size,eary,vertexes,id,Act.DIRECTION.left)
            while(act.id!==0) {
                yield({k:act.k,d:act.d})
                if(act.id === rt) {break}
                act =  $sdfs_prev_srch_action(max_size,eary,vertexes,act.id,act.d)
            }
        }
    }
}

function $sdfs_prev_srch_action_list_(max_size,eary,vertexes,id) {
    return(Array.from($gen_sdfs_prev_srch_action(max_size,eary,vertexes,id)))
}


function $sdfs_prev_build_action(max_size,eary,vertexes,id,direction) {
    let act = $sdfs_prev_srch_action(max_size,eary,vertexes,id,direction);
    act.k = (act.d===Act.DIRECTION.left || act.d===Act.DIRECTION.down)?srchk_to_buildk(act.k):act.k;
    return(act)
}

function * $gen_sdfs_prev_build_action(max_size,eary,vertexes,id) {
    let g = $gen_sdfs_prev_srch_action(max_size,eary,vertexes,id);
    for(let act of g) {
        act.k = (act.d===Act.DIRECTION.left || act.d===Act.DIRECTION.down)?srchk_to_buildk(act.k):act.k;
        yield(act)
    }
}

function $sdfs_prev_build_action_list_(max_size,eary,vertexes,id) {
    return(Array.from($gen_sdfs_prev_build_action(max_size,eary,vertexes,id)))
}

////edfs

function $edfs_next_(max_size,eary,vertexes,id) {
    let rsib = $rsib_(max_size,eary,vertexes,id);
    if(rsib === 0) {
        return($parent_(max_size,eary,vertexes,id))
    } else {
        let dlmost = $dlmost_(max_size,eary,vertexes,rsib);
        return(dlmost)
    }
}


function * $gen_edfs_next(max_size,eary,vertexes,id) {
    let rt =id;
    if($is_empty(max_size,eary,vertexes,id)) {
    } else {
        id = $dlmost_(max_size,eary,vertexes,id);
        while(id!==0) {
            yield(id);
            id = $edfs_next_(max_size,eary,vertexes,id);
            if(id === rt) {break}
        }
        yield(rt)
    }
}

function $edfs_prev_(max_size,eary,vertexes,id) {
    if(!$is_leaf(max_size,eary,vertexes,id)) {
        return($lstch_(max_size,eary,vertexes,id))
    } else {
        let lsib = $lsib_(max_size,eary,vertexes,id);
        if(lsib === 0) {
            return($lsib_of_fst_ance_having_lsib_(max_size,eary,vertexes,id))
        } else {
            return(lsib)
        }
    }
}

function * $gen_edfs_prev(max_size,eary,vertexes,id) {
    if($is_empty(max_size,eary,vertexes,id)) {
    } else {
        while(id!==0) {
            yield(id);
            id = $edfs_prev_(max_size,eary,vertexes,id);
        }
    }
}

function $edfs_(max_size,eary,vertexes,id) {
    return(Array.from($gen_edfs_next(max_size,eary,vertexes,id)))
}

////sedfs

function _sedfs_close_next(max_size,eary,vertexes,id) {
    let rsib = $rsib_(max_size,eary,vertexes,id);
    if(rsib ===0) {
        let p = $parent_(max_size,eary,vertexes,id);
        return([p,1])
    } else {
        return([rsib,0])
    }
}

function $sedfs_next(max_size,eary,vertexes,id,flag) {
    if(flag ===1) {
        return(_sedfs_close_next(max_size,eary,vertexes,id))
    } else {
        let cond = $is_leaf(max_size,eary,vertexes,id);
        if(cond) {
            return([id,1])
        } else {
            let fstch = $fstch_(max_size,eary,vertexes,id);
            return([fstch,0])
        }
    }
}

function * $gen_sedfs_next(max_size,eary,vertexes,id,flag) {
    let curr =id;
    yield([curr,flag]);
    while(!(curr === id && flag ===1)) {
        [curr,flag] = $sedfs_next(max_size,eary,vertexes,curr,flag)
        yield([curr,flag]);
    }
}

function _sedfs_open_prev(max_size,eary,vertexes,id) {
    let lsib = $lsib_(max_size,eary,vertexes,id)
    if(lsib ===0) {
        let p = $parent_(max_size,eary,vertexes,id);
        return([p,0])
    } else {
        return([lsib,1])
    }
}


function $sedfs_prev(max_size,eary,vertexes,id,flag) {
    if(flag ===0) {
        return(_sedfs_open_prev(max_size,eary,vertexes,id)) 
    } else {
        let cond = $is_leaf(max_size,eary,vertexes,id);
        if(cond) {
            return([id,0])
        } else {
            let lstch = $lstch_(max_size,eary,vertexes,id);
            return([lstch,1])
        }
    }
}

function * $gen_sedfs_prev(max_size,eary,vertexes,id,flag) {
    let rt = $root_(max_size,eary,vertexes,id)
    let curr =id;
    yield([curr,flag]);
    while(!(curr === rt && flag ===1)) {
        [curr,flag] = $sedfs_prev(max_size,eary,vertexes,curr,flag)
        yield([curr,flag]);
    }
}

function $sedfs_(max_size,eary,vertexes,id) {
    return(Array.from($gen_sedfs_next(max_size,eary,vertexes,id,0)))
}


////

function $height_(max_size,eary,vertexes,id) {
    let height = 1;
    let rslt = height;
    let g = $gen_sdfs_next_srch_action(max_size,eary,vertexes,id);
    for(let act of g) {
        if(act.k === '$fstch_') {
            height = height +1;
        } else if(act.k === '$parent_'){
            height = height -1;
        } else {}
        if(height>rslt) {rslt = height}
    }
    return(height)
}

function * _gen_des_pclyr(max_size,eary,vertexes,id) {
    let [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length);
    let unhandled =[[p,id]]
    let next_unhandled =[]
    while(unhandled.length>0) {
        yield(unhandled);
        for(let pair of unhandled) {
            let children = _pair_children(max_size,eary,vertexes,pair[1])
            for(let each of children) {
                next_unhandled.push(each)
            }
        }
        unhandled = next_unhandled;
        next_unhandled = []
    }
}



function * $gen_des_lyr(max_size,eary,vertexes,id) {
    let unhandled =[id]
    let next_unhandled =[]
    while(unhandled.length>0) {
        yield(unhandled);
        for(let each of unhandled) {
            let children = $children_(max_size,eary,vertexes,each);
            for(let ch of children) {
                next_unhandled.push(ch)
            }
        }
        unhandled = next_unhandled;
        next_unhandled = []
    }
}


function * $gen_des_lyr(max_size,eary,vertexes,id) {
    let unhandled =[id]
    let next_unhandled =[]
    while(unhandled.length>0) {
        yield(unhandled);
        for(let each of unhandled) {
            let children = $children_(max_size,eary,vertexes,each);
            for(let ch of children) {
                next_unhandled.push(ch)
            }
        }
        unhandled = next_unhandled;
        next_unhandled = []
    }
}

function * $gen_des_bfs(max_size,eary,vertexes,id) {
    let g = $gen_des_lyr(max_size,eary,vertexes,id);
    for(let lyr of g) {for(let each of lyr) {yield(each)}}
}

function $des_bfs_(max_size,eary,vertexes,id) {return(Array.from($gen_des_bfs(max_size,eary,vertexes,id)))}


function $des_lyr(max_size,eary,vertexes,id,which=0) {
    return(_which_engine($gen_des_lyr,max_size,eary,vertexes,id,which))
}


function $lst_des_lyr_(max_size,eary,vertexes,id) {
    return(_lst_engine($gen_des_lyr,max_size,eary,vertexes,id))
}

function $some_des_lyrs(max_size,eary,vertexes,id,depths) {
    return(_some_engine($gen_des_lyr,max_size,eary,vertexes,id,depths))
}

function $des_lyrs_(max_size,eary,vertexes,id) {return(Array.from($gen_des_lyr(max_size,eary,vertexes,id)))}


function * $gen_lyr(max_size,eary,vertexes,id) {
    let rt = $root_(max_size,eary,vertexes,id);
    yield * $gen_des_lyr(max_size,eary,vertexes,rt)
}

function * $gen_bfs(max_size,eary,vertexes,id) {
    let g = $gen_lyr(max_size,eary,vertexes,id);
    for(let lyr of g) {for(let each of lyr) {yield(each)}}
}

function $bfs_(max_size,eary,vertexes,id) {return(Array.from($gen_bfs(max_size,eary,vertexes,id)))}


function $lyr(max_size,eary,vertexes,id,which=0) {
    return(_which_engine($gen_lyr,max_size,eary,vertexes,id,which))
}


function $lst_lyr_(max_size,eary,vertexes,id) {
    return(_lst_engine($gen_lyr,max_size,eary,vertexes,id))
}

function $some_lyrs(max_size,eary,vertexes,id,depths) {
    return(_some_engine($gen_lyr,max_size,eary,vertexes,id,depths))
}

function $lyrs_(max_size,eary,vertexes,id) {return(Array.from($gen_lyr(max_size,eary,vertexes,id)))}

function $own_lyr_(max_size,eary,vertexes,id) {
    let g = $gen_lyr(max_size,eary,vertexes,id);
    for(let lyr of g) {
        for(let i=0;i<lyr.length;i++) {
            if(lyr[i]===id) {return(lyr)}
        }
    }
    return([])
}

function $breadth_(max_size,eary,vertexes,id) {
    let g = $gen_lyr(max_size,eary,vertexes,id);
    for(let lyr of g) {
        for(let i=0;i<lyr.length;i++) {
            if(lyr[i]===id) {return(i)}
        }
    }
    return(-1)
}


function $plyr_(max_size,eary,vertexes,id) {
    let g = $gen_lyr(max_size,eary,vertexes,id);
    let p = $parent_(max_size,eary,vertexes,id);
    if(p===0) {return([])} else {
        return($own_lyr_(max_size,eary,vertexes,p))
    }
}


function $pbreadth_(max_size,eary,vertexes,id) {
    let p = $parent_(max_size,eary,vertexes,id);
    return($breadth_(max_size,eary,vertexes,p))
}

function $rel_own_lyr(max_size,eary,vertexes,id,rt) {
    let g = $gen_des_lyr(max_size,eary,vertexes,rt);
    for(let lyr of g) {if(lyr.includes(id)) {return(lyr)}}
    return([])
}

function $rel_plyr(max_size,eary,vertexes,id,rt) {
    let g = $gen_des_lyr(max_size,eary,vertexes,rt);
    let p = $parent_(max_size,eary,vertexes,id);
    if(p===0) {return([])} else {
        for(let lyr of g) {if(lyr.includes(p)) {return(lyr)}}
    }    
}

function $rel_breadth(max_size,eary,vertexes,id,rt) {
    let lyr = $rel_own_lyr(max_size,eary,vertexes,id,rt);
    return(lyr.indexOf(id))
}

function $rel_pbreadth(max_size,eary,vertexes,id,rt) {
    let p = $parent_(max_size,eary,vertexes,id);
    return($rel_breadth(max_size,eary,vertexes,p))
}


function $rel_bpl(max_size,eary,vertexes,id,rt) {
    if(id === rt) {return([])}
    let bpl = [$rel_breadth(max_size,eary,vertexes,id,rt)]
    let g = $gen_ance(max_size,eary,vertexes,id)
    for(let an of g) {
        if(an === rt) {break}
        let bseq = $rel_breadth(max_size,eary,vertexes,an,rt)
        bpl.unshift(bseq);
    }    
    return(bpl)
}


function $bpl_(max_size,eary,vertexes,id) {
    let rt = $root_(max_size,eary,vertexes,id);
    return($rel_bpl(max_size,eary,vertexes,id,rt))
}


function $get_with_bpl(max_size,eary,vertexes,id,bpl) {
    let g = $gen_des_lyr(max_size,eary,vertexes,id)
    g.next().value;
    let an = id
    for(let bseq of bpl) {
        let lyr = g.next().value
        an = lyr[bseq]
    }
    return(an)
}


////

function $noop(max_size,eary,vertexes,id) {}

function $new(max_size,eary,vertexes,id) {vertexes.add(id)}

function $connto(max_size,eary,vertexes,id,leaf) {
    //rt to leaf
    if($is_root(max_size,eary,vertexes,id) && $is_leaf(max_size,eary,vertexes,leaf)) {
        let seq = fiseq(max_size,leaf,id);
        eary.push(seq);
        return(id)
    } else {
        return(-1);
    }
}

function $add_parent(max_size,eary,vertexes,id,np) {
    //make sure id,np  exist in vertexes in app-layer
    //only root can add_parent
    let p = $parent_(max_size,eary,vertexes,id);
    if(p===0) {
        let seq = fiseq(max_size,np,id);
        eary.push(seq);
        return(np)
    } else {
        return(-1)
    }
}

function $prepend_child(max_size,eary,vertexes,id,ch) {
    //make sure id,ch  exist in vertexes in app-layer
    let [old_fch,index] = _get_fstch_and_index(max_size,eary,vertexes,id);
    let seq = fiseq(max_size,id,ch);
    if(old_fch === 0) {
        eary.push(seq);
    } else {
        eary.splice(index,0,seq)
    }
    return(ch)
}

function $prepend_children(max_size,eary,vertexes,id,children) {
    for(let i=children.length-1;i>-1;i--) {
        $prepend_child(max_size,eary,vertexes,id,children[i])
    }
    return(children)
}


function $append_child(max_size,eary,vertexes,id,ch) {
    //make sure id,ch  exist in vertexes in app-layer
    let seq = fiseq(max_size,id,ch);
    eary.push(seq);
    return(ch)
}

function $append_children(max_size,eary,vertexes,id,children) {
    children.forEach(ch=>$append_child(max_size,eary,vertexes,id,ch))
    return(children)
}


function $add_lsib(max_size,eary,vertexes,id,lsib,np,force=false) {
    let arr = $add_lsibs(max_size,eary,vertexes,id,[lsib],np,force)
    if(arr.length ===0) {return(-1)} else {return(arr[0])}
}

function $add_lsibs(max_size,eary,vertexes,id,lsibs,np,force=false) {
    //make sure id,lsib  exist in vertexes in app-layer
    let [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length);
    if(p === 0) {
        if(force) {
            //for(let i=lsibs.length-1;i>-1;i--) {
            for(let lsib of lsibs) {
                //let lsib = lsibs[i]
                let seq = fiseq(max_size,np,lsib);
                eary.push(seq);
            }
            let seq = fiseq(max_size,np,id);
            eary.push(seq);
            return(lsibs)
        } else {
            return([])
        }
    } else {
        let index = dst_index;
        for(let i=lsibs.length-1;i>-1;i--) {
            let lsib = lsibs[i]
            let seq = fiseq(max_size,p,lsib);
            eary.splice(index,0,seq);
            index = index +1;
        }
        return(lsibs)
    }    
}


function $add_rsib(max_size,eary,vertexes,id,rsib,np,force=false) {
    let arr = $add_rsibs(max_size,eary,vertexes,id,[rsib],np,force)
    if(arr.length ===0) {return(-1)} else {return(arr[0])}
}

function $add_rsibs(max_size,eary,vertexes,id,rsibs,np,force=false) {
    //make sure id,rsib  exist in vertexes in app-layer
    let [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length);
    if(p === 0) {
        if(force) {
            let seq = fiseq(max_size,np,id);
            eary.push(seq);
            for(let rsib of rsibs) {
                let seq = fiseq(max_size,np,rsib);
                eary.push(seq);
            }
            return(rsibs)
        } else {
            return([])
        }
    } else {
        let index = dst_index;
        for(let rsib of rsibs) {
            let seq = fiseq(max_size,p,rsib);
            eary.splice(index+1,0,seq);
        }
        return(rsibs)
    }
}


function $insert_child_at(max_size,eary,vertexes,id,ch,sibseq) {
    let arr = $insert_children_at(max_size,eary,vertexes,id,[ch],sibseq)
    if(arr.length ===0) {return(-1)} else {return(arr[0])}    
}

function $insert_children_at(max_size,eary,vertexes,id,children,sibseq) {
    //make sure id,ch  exist in vertexes in app-layer
    if(sibseq<0) {return([])}
    if($is_leaf(max_size,eary,vertexes,id)) {
        for(let ch of children) {
            let seq = fiseq(max_size,id,ch);
            eary.push(seq);
        }
        return(children)
    } else {
        let g =  _gen_child_index_from_fst(max_size,eary,vertexes,id);
        let c = 0;
        for(let i of g) {
             if(c === sibseq) {
                 let seqs = children.map(ch=>fiseq(max_size,id,ch));
                 seqs.unshift(i,0);
                 Array.prototype.splice.apply(eary,seqs);
                 return(children)
            }
            c = c +1
        }
        return(-1)
    }
}

function $disconn(max_size,eary,vertexes,id) {
    let lngth = eary.length;
    let [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,lngth);    
    if(p===0) {} else {eary.splice(dst_index,1);}
    return(id)
}


function $rm_fstch(max_size,eary,vertexes,id) {
    let [ch,index] = _get_fstch_and_index(max_size,eary,vertexes,id);
    if(index < 0) {
        return(-1)
    } else {
        eary.splice(index,1);
        return(ch);
    }
}

function $rm_lstch(max_size,eary,vertexes,id) {
    let [ch,index] = _get_lstch_and_index(max_size,eary,vertexes,id);
    if(index < 0) {
        return(-1)
    } else {
        eary.splice(index,1);
        return(ch);
    }
}

function $rm_child(max_size,eary,vertexes,id,which=0) {
    let g = _gen_child_and_index_from_fst(max_size,eary,vertexes,id);
    let c =0;
    for(let pair of g) {
        if(c===which) {
            eary.splice(pair[1],1);
            return(pair[0]);
        } else {}
        c = c + 1;
    }
    return(0)
}

function $rm_some_children(max_size,eary,vertexes,id,whiches) {
    let children = $children_(max_size,eary,vertexes,id);
    let c =0;
    let rslt = []
    for(let ch of children) {
        if(whiches.includes(c)) {
            $disconn(max_size,eary,vertexes,ch);
            rslt.push(ch)
        } else {}
        c = c + 1;
    }
    return(rslt)
}

function $rm_children(max_size,eary,vertexes,id) {
    let children = $children_(max_size,eary,vertexes,id);
    children.forEach(ch => $disconn(max_size,eary,vertexes,ch))
    return(children)
}

function $erase(max_size,eary,vertexes,id) {
    let children = $rm_children(max_size,eary,vertexes,id);
    $disconn(max_size,eary,vertexes,id);
    vertexes.delete(id);
    return(children)
}

function $erase_r(max_size,eary,vertexes,id) {
    let erased = []
    let unhandled = [id]
    let next_unhandled = []
    while(unhandled.length>0) {
         for(let i=0;i<unhandled.length;i++) {
             let children = $rm_children(max_size,eary,vertexes,unhandled[i]);
             $disconn(max_size,eary,vertexes,unhandled[i]);
             vertexes.delete(unhandled[i]);
             erased.push(unhandled[i])
             for(let each of children) {
                 next_unhandled.push(each)
             }
         }
         unhandled = next_unhandled;
         next_unhandled = []
    }
    return(erased)
}

function $swap(max_size,eary,vertexes,id,other) {
    let [p0,dst_index0] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length);
    let [p1,dst_index1] = _get_parent_and_dst_index(max_size,eary,vertexes,other,eary.length);
    if(p0===0 && p1 ===0) {
    } else if(p0===0) {
        eary[dst_index1] = fiseq(max_size,p1,id);
    } else if(p1===0) {
        eary[dst_index0] = fiseq(max_size,p0,other);
    } else {
        eary[dst_index1] = fiseq(max_size,p1,id);
        eary[dst_index0] = fiseq(max_size,p0,other);
    }
}


function $replace_with(max_size,eary,vertexes,id,nid) {
    let [p,dst_index] = _get_parent_and_dst_index(max_size,eary,vertexes,id,eary.length);
    if(p===0) {return(0)} else {
        eary[dst_index] = fiseq(max_size,p,nid);
        return(id)
    }
}

function $replace_child_at(max_size,eary,vertexes,id,ch,which=0) {
    let g = _gen_child_and_index_from_fst(max_size,eary,vertexes,id);
    let c = 0
    for(let pair of g) {
        if(c===which) {
            eary[pair[1]] = fiseq(max_size,id,ch)
            return(pair[0])
        } else {}
        c = c + 1;
    }
    return(0)
}

function $clone(max_size,eary,vertexes,id,idpool) {
    let g = _gen_des_pclyr(max_size,eary,vertexes,id);
    let arr = Array.from(g)
    arr.shift();
    arr = arr.flat();
    let ps = arr.map(pair=>pair[0]);
    let cs = arr.map(pair=>pair[1]);
    let st = new Set(arr.flat());
    arr = null;
    let mp = new Map()
    for(let oid of st) {
        let nid = idpool.rent()
        mp.set(oid,nid);
        vertexes.add(nid);
    }
    st = null;
    ps = ps.map(p=>mp.get(p))
    cs = cs.map(c=>mp.get(c))
    for(let i=0;i<ps.length;i++) {
        let p = ps[i];
        let c = cs[i];
        let seq = fiseq(max_size,p,c)
        eary.push(seq)
    }
    ps=null;
    cs=null;
    return([mp.get(id),Array.from(mp.values())])
}

////util
function $extract_vertexes(max_size,eary) {
    let arr = eary.map(seq=>fixy(max_size,seq));
    arr = arr.flat();
    return(new Set(arr))
}


//@@@
module.exports = {
    ////
    $self_,
    ////
    $is_empty,
    $is_root,
    $is_leaf,
    $is_lonely,
    $is_fstch,
    $is_lstch,
    ////
    $is_root_of,
    $is_parent_of,
    $is_ance_of,
    $is_inclusive_ance_of,
    $is_fstch_of,
    $is_lstch_of,
    $is_child_of,
    $is_des_of,
    $is_inclusive_des_of,
    $is_fsib_of,
    $is_rsib_of,
    $is_psib_of,
    $is_lsib_of,
    $is_sib_of,
    $is_inclusive_sib_of,
    ////
    $root_,
    $parent_,
    $luncle_,
    $runcle_,
    $gen_ance,
    $ance,
    $some_ances,
    $ances_,
    $plance,
    $some_plances,
    $plances_,
    $depth_,
    $ance_dist,
    ////
    $fstch_,
    $lstch_,
    $gen_child_from_fst,
    $gen_child_from_lst,
    $child,
    $some_children,
    $children_,
    $children_count_,
    ////
    $sibseq_,
    $gen_sib,
    $fstsib_,
    $lstsib_,
    $sib,
    $some_sibs,
    $sibs_,
    $sibs_count_,
    $gen_psib,
    $lsib_,
    $fstpsib_,
    $psib,
    $some_psibs,
    $psibs_,
    $psibs_count_,
    $gen_fsib,
    $rsib_,
    $lstfsib_,
    $fsib,
    $some_fsibs,
    $fsibs_,
    $fsibs_count_,
    $sib_dist,
    $rel_spl,
    $spl_,
    $get_with_spl,
    ////
    $lcin_,
    $rcin_,
    $gen_lmost,
    $dlmost_,
    $gen_rmost,
    $drmost_,
    $lsib_of_fst_ance_having_lsib_,
    $rsib_of_fst_ance_having_rsib_,
    ////
    $sdfs_next_,
    $gen_sdfs_next,
    $sdfs_,
    $sdfs_rel_index,
    $sdfs_index_,
    $gen_sdfs_next_leaf,
    $sdfs_leafs_,
    $gen_sdfs_next_nonleaf,
    $sdfs_rel_leaf_index,
    $sdfs_leaf_index_,
    $sdfs_nonleafs_,
    $sdfs_rel_nonleaf_index,
    $sdfs_nonleaf_index_,
    $length_,
    $width_,
    $nonleaf_length_,
    $sdfs_prev_,
    $gen_sdfs_next_srch_action,
    $sdfs_next_srch_action,
    $sdfs_next_srch_action_list_,
    $gen_sdfs_next_build_action,
    $sdfs_next_build_action,
    $sdfs_next_build_action_list_,
    $gen_sdfs_prev,
    $gen_sdfs_prev_leaf,
    $gen_sdfs_prev_nonleaf,
    $sdfs_prev_srch_action,
    $gen_sdfs_prev_srch_action,
    $sdfs_prev_srch_action_list_,
    $sdfs_prev_build_action,
    $gen_sdfs_prev_build_action,
    $sdfs_prev_build_action_list_,
    $rel_offset,
    $offset_,
    ////
    $gen_edfs_next,
    $edfs_next_,
    $gen_edfs_prev,
    $edfs_prev_,
    $edfs_,
    ////
    $sedfs_next,
    $gen_sedfs_next,
    $sedfs_prev,
    $gen_sedfs_prev,
    $sedfs_,
    ////
    $height_,
    $gen_des_lyr,
    $des_lyr,
    $lst_des_lyr_,
    $some_des_lyrs,
    $des_lyrs_,
    $gen_lyr,
    $gen_bfs,
    $bfs_,
    $gen_des_bfs,
    $des_bfs_,
    $lyr,
    $lst_lyr_,
    $some_lyrs,
    $lyrs_,
    $own_lyr_,
    $plyr_,
    $breadth_,
    $pbreadth_,
    $rel_own_lyr,
    $rel_plyr,
    $rel_breadth,
    $rel_pbreadth,
    $rel_bpl,
    $bpl_,
    $get_with_bpl,
    ////
    $noop,
    $new,
    $add_parent,
    $connto,
    $add_lsib,
    $add_lsibs,
    $add_rsib,
    $add_rsibs,
    $append_child,
    $append_children,
    $prepend_child,
    $prepend_children,
    $insert_child_at,
    $insert_children_at,
    $disconn,
    $rm_fstch,
    $rm_lstch,
    $rm_child,
    $rm_some_children,
    $rm_children,
    $erase,
    $erase_r,
    $replace_with,
    $replace_child_at,
    $clone,
    $swap,
    ////
    $extract_vertexes,
}



