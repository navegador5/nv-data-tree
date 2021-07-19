const gn = require("nv-data-tree-csp-gen");
const {FLAG_DICT} =require("nv-data-tree-actdef");
const {iflet} = require("nv-facutil-basic");
const _0 = Array.from;

const __ME = {}

__ME.$gen_des_lyr = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let lyr = [ids[0]];
    while(lyr.length>0) {
        yield(lyr);
        lyr = _0(gn.$nlyr(fc,rb,lyr));
    }
}


const _1 = __ME.$gen_des_lyr;


__ME.$gen_lyr = function *(idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let rt = gn.lst0(gn.$ance(pr,ids[0]),ids[0]);
    yield* _1(idpool,fc,rb,pr,lb,lc,[rt],idxs,others)
}

const _2 = __ME.$gen_lyr;



__ME.$des_lyrs_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _0(_1(idpool,fc,rb,pr,lb,lc,ids,idxs,others))

__ME.$lyrs_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _0(_2(idpool,fc,rb,pr,lb,lc,ids,idxs,others))


__ME.$lst_des_lyr_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    gn.lst0(_1(idpool,fc,rb,pr,lb,lc,ids,idxs,others),ids[0])

__ME.$lst_lyr_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let rt = gn.lst0(gn.$ance(pr,ids[0]),ids[0]);
    return(gn.lst0(_2(idpool,fc,rb,pr,lb,lc,[rt],idxs,others),rt))
}

__ME.$own_lyr_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let g = _2(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    let rt = gn.lst0(gn.$ance(pr,ids[0]),ids[0]);
    let depth = gn.dist_after(gn.$ance(pr,ids[0]),ids[0],rt);
    return(gn.which(g,depth))
}

const _3 = __ME.$own_lyr_;



__ME.$plyr_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let p = pr[ids[0]];
    return((p===0)?[]:_3(idpool,fc,rb,pr,lb,lc,[p],idxs,others))
}


__ME.$bfs_des_next = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let rt = ids[1];
    let depth = gn.dist_after(gn.$ance(pr,ids[0]),ids[0],rt);
    if(depth === Infinity) {return([0,undefined])}
    let lyr = [rt];
    let c = 0
    while(lyr.length>0) {
        if(c === depth) {break}
        lyr = _0(gn.$nlyr(fc,rb,lyr));
        c = c+1;
    }
    let i;
    for(i=0;i<lyr.length;i++) {
        if(lyr[i] === ids[0]){break}
    }
    let flag;
    if(i === lyr.length-1) {
        lyr = _0(gn.$nlyr(fc,rb,lyr));
        if(lyr.length === 0) {
            return([0,undefined])
        } else if(lyr.length === 1) {
            flag = FLAG_DICT.lyrbst
        } else {
            flag = FLAG_DICT.lyrfst
        }
        return([lyr[0],flag])
    } else if(i === lyr.length-2) {
        return([lyr[lyr.length-1],FLAG_DICT.lyrlst])
    } else {
        return([lyr[i+1],FLAG_DICT.lyrmid])
    }

}

const  _bfs_step = (f,idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> 
    f(
        idpool,fc,rb,pr,lb,lc,
        [ids[0],gn.lst0(gn.$ance(pr,ids[0]),ids[0])],
        idxs,others
    )


__ME.$bfs_next_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _bfs_step(__ME.$bfs_des_next,idpool,fc,rb,pr,lb,lc,ids,idxs,others)



__ME.$bfs_des_prev = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let rt = ids[1];
    if(rt===ids[0]) {return([0,FLAG_DICT.lyrbst])}
    let depth = gn.dist_after(gn.$ance(pr,ids[0]),ids[0],rt);
    if(depth === Infinity) {return([0,undefined])}
    let lyr = [rt];
    let prev_lyr = [];
    let c = 0
    while(lyr.length>0) {
        if(c === depth) {break}
        prev_lyr=lyr;
        lyr = _0(gn.$nlyr(fc,rb,lyr));
        c = c+1;
    }
    let i;
    for(i=0;i<lyr.length;i++) {
        if(lyr[i] === ids[0]){break}
    }
    let flag;
    if(i === 0) {
        lyr = prev_lyr;
        if(lyr.length ===0) {
            //impossible
        }else if(lyr.length === 1) {
            flag = FLAG_DICT.lyrbst
        } else {
            flag = FLAG_DICT.lyrlst
        }
        return([lyr[lyr.length-1],flag])
    } else if(i === 1) {
        return([lyr[0],FLAG_DICT.lyrfst])
    } else {
        return([lyr[i-1],FLAG_DICT.lyrmid])
    }
}


__ME.$bfs_prev_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _bfs_step(__ME.$bfs_des_prev,idpool,fc,rb,pr,lb,lc,ids,idxs,others)



__ME.$gen_des_bfs = function * (idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let lyr = [ids[0]];
    yield([ids[0],FLAG_DICT.lyrbst]);
    while(lyr.length>0) {
        lyr = _0(gn.$nlyr(fc,rb,lyr));
        if(lyr.length ===0) {
        }else if(lyr.length===1) {
            yield([lyr[0],FLAG_DICT.lyrbst])
        } else {
            yield([lyr[0],FLAG_DICT.lyrfst]);
            for(let i=1;i<lyr.length-1;i++) {
                yield([lyr[i],FLAG_DICT.lyrmid]);
            }
            yield([lyr[lyr.length-1],FLAG_DICT.lyrlst]);
        }
    }
}

const _6 = __ME.$gen_des_bfs;

__ME.$gen_bfs = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
    _6(
        idpool,fc,rb,pr,lb,lc,
        [gn.lst0(gn.$ance(pr,ids[0]),ids[0])]
        ,idxs,others
    );

const _5 = __ME.$gen_bfs;

__ME.$bfs_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
    _0(_5(idpool,fc,rb,pr,lb,lc,ids,idxs,others))

__ME.$des_bfs_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
    _0(_6(idpool,fc,rb,pr,lb,lc,ids,idxs,others))


////
__ME.$some_des_lyrs = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
    gn.some(_1(idpool,fc,rb,pr,lb,lc,ids,idxs,others),idxs)

__ME.$some_lyrs = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
    gn.some(_2(idpool,fc,rb,pr,lb,lc,ids,idxs,others),idxs)

__ME.$des_lyr = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
    gn.which(_1(idpool,fc,rb,pr,lb,lc,ids,idxs,others),idxs[0])

__ME.$lyr = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
    gn.which(_2(idpool,fc,rb,pr,lb,lc,ids,idxs,others),idxs[0])


__ME.$des_own_lyr = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let rt = ids[1];
    let depth = gn.dist_after(gn.$ance(pr,ids[0]),ids[0],rt);
    if(depth === Infinity) {
        return([])
    } else {
        let g = _1(idpool,fc,rb,pr,lb,lc,[rt],idxs,others);
        return(gn.which(g,depth))
    }
}

const _4 = __ME.$des_own_lyr;


__ME.$des_plyr = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let p = pr[ids[0]];
    return(
        (p===0)?[]:_4(idpool,fc,rb,pr,lb,lc,[p,ids[1]],idxs,others)
    )
}

__ME.$breadth_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _3(idpool,fc,rb,pr,lb,lc,ids,idxs,others).indexOf(ids[0])


__ME.$pbreadth_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    __ME.$plyr_(idpool,fc,rb,pr,lb,lc,ids,idxs,others).indexOf(pr[ids[0]])


__ME.$des_breadth = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _4(idpool,fc,rb,pr,lb,lc,ids,idxs,others).indexOf(ids[0])

__ME.$des_pbreadth = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    __ME.$des_plyr(idpool,fc,rb,pr,lb,lc,ids,idxs,others).indexOf(pr[ids[0]])


const _is_lyr_fst = (f,idpool,fc,rb,pr,lb,lc,ids,idxs,others) => {
    let lyr = f(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    return(lyr[0] === ids[0])
}

const _is_lyr_lst = (f,idpool,fc,rb,pr,lb,lc,ids,idxs,others) => {
    let lyr = f(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    return(lyr[lyr.length-1] === ids[0])
}

const _is_lyr_bst = (ff,lf,idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    ff(idpool,fc,rb,pr,lb,lc,ids,idxs,others) &&
    lf(idpool,fc,rb,pr,lb,lc,ids,idxs,others)


__ME.$is_lyr_fst = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _is_lyr_fst(_3,idpool,fc,rb,pr,lb,lc,ids,idxs,others)


__ME.$is_lyr_lst = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _is_lyr_lst(_3,idpool,fc,rb,pr,lb,lc,ids,idxs,others)


__ME.$is_lyr_bst = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _is_lyr_bst(__ME.$is_lyr_fst,__ME.$is_lyr_lst,idpool,fc,rb,pr,lb,lc,ids,idxs,others)

__ME.$is_des_lyr_fst = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _is_lyr_fst(_4,idpool,fc,rb,pr,lb,lc,ids,idxs,others)

__ME.$is_des_lyr_lst = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _is_lyr_lst(_4,idpool,fc,rb,pr,lb,lc,ids,idxs,others)

__ME.$is_des_lyr_bst = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _is_lyr_bst(__ME.$is_des_lyr_fst,__ME.$is_des_lyr_lst,idpool,fc,rb,pr,lb,lc,ids,idxs,others)


function * _gen_lyr_next(f,idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let lyr = f(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    let index = lyr.indexOf(ids[0]);
    if(index <0) {
    } else if(index === lyr.length-1){
    } else {
        for(let each of lyr.slice(index)) {yield(each)}
    }
}


__ME.$gen_lyr_next = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> 
    _gen_lyr_next(_3,idpool,fc,rb,pr,lb,lc,ids,idxs,others)

__ME.$gen_des_lyr_next = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
    _gen_lyr_next(_4,idpool,fc,rb,pr,lb,lc,ids,idxs,others)


function * _gen_lyr_prev(f,idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    let lyr = f(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    let index = lyr.indexOf(ids[0]);
    if(index>0) {
        let slc = lyr.slice(index);
        for(let i=index-1;i>-1;i--) {yield(lyr[i])}
    }
}

__ME.$gen_lyr_prev = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _gen_lyr_prev(_3,idpool,fc,rb,pr,lb,lc,ids,idxs,others);


__ME.$gen_des_lyr_prev = (idpool,fc,rb,pr,lb,lc,ids,idxs,others) =>
    _gen_lyr_prev(_4,idpool,fc,rb,pr,lb,lc,ids,idxs,others);



__ME.$lyr_next_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let lyr = _3(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    let index = lyr.indexOf(ids[0]);
    return(iflet(index<0,0,index === lyr.length-1,0,lyr[index+1]))
}

__ME.$lyr_prev_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let lyr = _3(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    let index = lyr.indexOf(ids[0]);
    return(iflet(index<0,0,index === 0,0,lyr[index-1]))
}

__ME.$des_lyr_next = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let lyr = _4(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    let index = lyr.indexOf(ids[0]);
    return(iflet(index<0,0,index === lyr.length-1,0,lyr[index+1]))
}

__ME.$des_lyr_prev = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let lyr = _4(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    let index = lyr.indexOf(ids[0]);
    return(iflet(index<0,0,index === 0,0,lyr[index-1]))
}


function _bfs_index(mode,gf,bcondf,icondf,idpool,fc,rb,pr,lb,lc,ids,idxs,others) {
    if(!icondf(ids[0]))   {return(-1)}
    if(ids[1] === ids[0]) {return(0)}
    let arr = !mode?ids:[ids[1],ids[0]];
    let g = gf(idpool,fc,rb,pr,lb,lc,arr,idxs,others)
    g = gf(idpool,fc,rb,pr,lb,lc,arr,idxs,others)
    let c = -1;
    if(mode===1 &&!gn.of(gn.$ance(pr,ids[0]),ids[1])) {
    } else {
        for(let [it,flag] of g) {
            if(bcondf(it,ids[0])){
                c=c+1;break;
            } else if(icondf(it)) {c=c+1} else {}
        }
    }
    return(c)
}

__ME.$bfs_index_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _bfs_index(
        0,
        _5,
        (it,orig) => (it === orig),
        (it) => true,
        idpool,fc,rb,pr,lb,lc,ids,idxs,others
    )

__ME.$bfs_leaf_index_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _bfs_index(
        0,
        _5,
        (it,orig) => (it === orig)&& (fc[it]===0),
        (it) => (fc[it]===0),
        idpool,fc,rb,pr,lb,lc,ids,idxs,others
    )

__ME.$bfs_nonleaf_index_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _bfs_index(
        0,
        _5,
        (it,orig) => (it === orig)&& (fc[it]!==0),
        (it) => (fc[it]!==0),
        idpool,fc,rb,pr,lb,lc,ids,idxs,others
    )


__ME.$bfs_des_index = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _bfs_index(
        1,
        _6,
        (it,orig) => (it === orig),
        (it) => true,
        idpool,fc,rb,pr,lb,lc,ids,idxs,others
    )


__ME.$bfs_des_leaf_index = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _bfs_index(
        1,
        _6,
        (it,orig) => (it === orig)&& (fc[it]===0),
        (it) => (fc[it]===0),
        idpool,fc,rb,pr,lb,lc,ids,idxs,others
    )

__ME.$bfs_des_nonleaf_index = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    _bfs_index(
        1,
        _6,
        (it,orig) => (it === orig)&& (fc[it]!==0),
        (it) => (fc[it]!==0),
        idpool,fc,rb,pr,lb,lc,ids,idxs,others
    )


__ME.$des_bpl = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let bpl =[];
    let rt = ids[1];
    let glyr = _1(idpool,fc,rb,pr,lb,lc,[rt],idxs,others);
    let gance = gn.$ance(pr,ids[0]);
    let ans = _0(gance);
    if(!ans.includes(rt) && ids[0]!==rt) {
        return([-1])
    } else {
        ans.reverse();
        ans.push(ids[0]);
        ans = ans.slice(ans.indexOf(rt));
        for(let an of ans) {
            let lyr = glyr.next().value;
            let bseq = lyr.indexOf(an);
            bpl.push(bseq)
        }
        return(bpl)
    }
}

__ME.$bpl_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let rt = gn.lst0(gn.$ance(pr,ids[0]),ids[0]);
    return(__ME.$des_bpl(idpool,fc,rb,pr,lb,lc,[ids[0],rt],idxs,others))
}


module.exports = __ME;

