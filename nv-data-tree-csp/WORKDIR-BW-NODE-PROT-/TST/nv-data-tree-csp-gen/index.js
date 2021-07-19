const AF = Array.from;


function * _0(ary,id) {
    let x = ary[id];
    while(x!==0) {
        yield(x);
        x = ary[x]
    }
}


function *_1(cary,bary,id) {
    let x = cary[id];
    while(x!==0) {
        yield(x);
        x = bary[x]
    }
}


const _2 = (cary,bary,pr,id) =>_1(cary,bary,pr[id])

function * _3(ary,id) {
    yield(id);
    yield*_0(ary,id);
}



function lst0(g,init) {
    let x = init;
    for(x of g) {};
    return(x)
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
    let c = 0;
    for(let each of g) {
        if(whiches.includes(c)) {rslt.push(each)}
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
    let flag =false;
    for(let each of g) {c=c+1;if(each===id){flag=true;break}}
    return(flag?c:-1)
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
        let ssign =0;
        let c=Infinity
        for(let x of g) {
            if(x===self) {
                if(ssign ===0) {c=0;ssign=1;} else {return(-c)}
            } else if(x===other) {
                if(ssign ===0) {c=0;ssign=1;} else {return(c)}
            } else {}
            c = c + 1
        }
        return(Infinity)
    }
}



function reverse_then_push_self(g,self) {
    let ary = AF(g);
    ary.reverse();
    ary.push(self);
    return(ary)
}


function * _4(fc,rb,lyr) {
    for(let id of lyr) {
        let cg = _1(fc,rb,id);
        yield * cg
    }
}

function * _5 (fc,rb,id) {
    let lyr = id?[id]:[];
    while(lyr.length) {
        yield(AF(lyr));
        lyr = AF(_4(fc,rb,lyr))
    }
}

const __ME = {
    lst0,
    which,
    some,
    of,
    count,
    seq,
    dist_after,
    dist_dual,
    reverse_then_push_self,
    $ance  :  (pr,id)=> _0(pr,id),
    $drmost:  (lc,id)=> _3(lc,id),
    $dlmost:  (fc,id)=> _3(fc,id),
    $fch   :  (fc,rb,id) => _1(fc,rb,id),
    $lch   :  (lc,lb,id) => _1(lc,lb,id),
    $psib  :  (lb,id) => _0(lb,id),
    $fsib  :  (rb,id) => _0(rb,id),
    $sibff :  (fc,rb,pr,id) => pr[id]?_2(fc,rb,pr,id):[id],
    $sibfl :  (lc,lb,pr,id) => pr[id]?_2(lc,lb,pr,id):[id],
    $nlyr  :  _4,
    $mat   :  _5
}



module.exports = __ME;


