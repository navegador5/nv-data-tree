const AF = Array.from;
const {fc,lb,rb,pr,lc,chs} = require("../nv-data-tree-bw-name-map/index");


function * keng(that,k) {
    let x = that[k];
    while(x!==null) {
        yield(x);
        x=x[k]
    }
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

function seq(g,nd) {
    let c = -1;
    let flag =false;
    for(let each of g) {c=c+1;if(each===nd){flag=true;break}}
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


////


function * $ance(that) {yield*keng(that,pr)}
function * $fch(that)  {yield*keng(that,fc)}
function * $lch(that)  {yield*keng(that,lc)}
function * $psib(that) {yield*keng(that,lb)}
function * $psib(that) {yield*keng(that,rb)}


function * $sibff(that) {
    let p = that[pr];
    let sib = p[fc];
    while(sib!==that) {
        yield(sib);
        sib = sib[rb];
    }
}

function * $sibfl(that) {
    let p = that[pr];
    let sib = p[lc];
    while(sib!==that) {
        yield(sib);
        sib = sib[lb];
    }
}

function $nlyr(lyr) {
    let rslt = [];
    for(let nd of lyr) {
        let children = nd[chs];
        for(let c of children) {
            rslt.push(c)
        }
    }
    return(rslt)
}


function * $mat(that) {
    let lyr = [that]
    while(lyr.length>0) {
        yield(lyr);
        lyr = $nlyr(lyr);
    }
}


const __ME = {
    keng,
    lst0,
    which,
    some,
    of,
    count,
    seq,
    dist_after,
    dist_dual,
    reverse_then_push_self,
    ////
    $ance,
    $drmost:(that)=>lst0($lch(that),that),
    $dlmost:(that)=>lst0($fch(that),that),
    $fch,
    $lch,
    $psib,
    $fsib,
    $sibff,
    $sibfl,
    $nlyr,
}


module.exports = __ME;


