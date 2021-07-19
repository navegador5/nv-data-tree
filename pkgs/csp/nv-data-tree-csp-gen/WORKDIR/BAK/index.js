
function _creat_gn0(ary,id) {
    let g = (function * () {
        let x = ary[id];
        while(x!==0) {
            yield(x);
            x = ary[x]
        }
    })();
    return(g)
}

function lst0(g,init) {
    let x = init;
    for(x of g) {};
    return(x)
}


function _creat_gn1(cary,bary,id) {
    let g = (function * () {
        let x = cary[id];
        while(x!==0) {
            yield(x);
            x = bary[x]
        }
    })();
    return(g)
}


function _creat_gn2(cary,bary,pr,id) {
    let p = pr[id];
    let g =  _creat_gn1(cary,bary,p);
    return(g)
}


function which(g,which) {
    let c = 0
    for(let each of g) {
        if(c===which) {return(each)}
        c = c+1;
    }
    return(0)
}



function some(g,whiches) {
    let rslt = [];
    for(let each of g) {
        if(indexes.includes(c)) {rslt.push(each)}
        c = c+1;
    }
    return(rslt)
}

function of(g,other) {
    for(let each of g) {
        if(each === other) {return(true)}
    }
    return(false)
}

function count(g) {
    let c = 0;
    for(let each of g) {c=c+1}
    return(c)
}

function seq(g,id) {
    let c = -1;
    for(let each of g) {c=c+1;if(each===id){break}}
    return(c)
}



function dist_after(g,self,other) {
    if(self === other) {
        return(0)
    } else {
        let c = 1
        for(let x of g) {
            if(x === other){return(c)}
            c = c +1;
        }
        return(Infinity)
    }
}

function dist_dual(g,self,other) {
    if(self === other) { 
        return(0)
    } else {
        let sign =0;
        let c=Infinity
        for(let x of g) {
            if(x===self) {
                if(sign ===0) {c=0;sign=1;} else {return(-c)}
            } else if(x===other) {
                if(sign ===0) {c=0;sign=1;} else {return(c)}
            } else {}
            c = c + 1
        }
        return(c)
    }
}



function reverse_then_push_self(g,self) {
    let ary = Array.from(g);
    ary.reverse();
    ary.push(self);
    return(ary)
}


function * _gen_nlyr(fc,rb,lyr) {
    for(let id of lyr) {
        let cg = _creat_gn1(fc,rb,id);
        yield * cg
    }
}



const __ME = {
    lst0,
    $ance  :  (pr,id)=> _creat_gn0(pr,id),
    $drmost:  (lc,id)=> _creat_gn0(lc,id),
    $dlmost:  (fc,id)=> _creat_gn0(fc,id),
    $fch   :  (fc,rb,id) => _creat_gn1(fc,rb,id),
    $lch   :  (lc,lb,id) => _creat_gn1(lc,lb,id),
    $psib  :  (lb,id) => _creat_gn0(lb,id),
    $fsib  :  (rb,id) => _creat_gn0(rb,id),
    $sibff :  (fc,rb,pr,id) => _creat_gn2(fc,rb,pr,id),
    $sibfl :  (lc,lb,pr,id) => _creat_gn2(lc,lb,pr,id),
    $nlyr  :  _gen_nlyr,  
    which,
    some,
    of,
    count,
    seq,
    dist_after,
    dist_dual,
    reverse_then_push_self,
}



module.exports = __ME;


