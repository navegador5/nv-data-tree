const gn = require("../nv-data-tree-csp-gen/index");
const ndget = require("../nv-data-tree-csp-ndget/index");
const ndgen = require("../nv-data-tree-csp-ndgen/index");
const getwnd = require("../nv-data-tree-csp-getwnd/index");
const cspact = require("../nv-data-tree-csp-act/index");


const __ME = {}


////GETTER
__ME.$depth_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    gn.count(gn.$ance(pr,ids[0]));

__ME.$children_count_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    gn.count(gn.$fch(fc,rb,ids[0]));

__ME.$sibseq_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    gn.seq(gn.$sibff(fc,rb,pr,ids[0]),ids[0]);

__ME.$sibs_count_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    gn.count(gn.$sibff(fc,rb,pr,ids[0]));

__ME.$psibs_count_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    gn.count(gn.$psib(lb,ids[0]));

__ME.$fsibs_count_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    gn.count(gn.$fsib(rb,ids[0]));

__ME.$spl_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let ans = gn.reverse_then_push_self(gn.$ance(pr,ids[0]),ids[0]); 
    ans = ans.slice(1);
    let spl = ans.map(id=>gn.seq(gn.$sibff(fc,rb,pr,id),id));
    return(spl)
}

__ME.$length_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    gn.count(ndgen.$gen_sdfs_next(idpool,fc,rb,pr,lb,lc,ids,idxs,others));


__ME.$width_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    gn.count(ndgen.$gen_sdfs_next_leaf(idpool,fc,rb,pr,lb,lc,ids,idxs,others));

__ME.$nonleaf_length_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
    gn.count(ndgen.$gen_sdfs_next_nonleaf(idpool,fc,rb,pr,lb,lc,ids,idxs,others));


__ME.$offset_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let rt = ndget.$root_(idpool,fc,rb,pr,lb,lc,ids,idxs,others)
    return(getwnd.$des_offset(
        idpool,fc,rb,pr,lb,lc,[ids[0],rt],idxs,
    ))
}

/////////////////////

[
    'sdfs_next_srch_action_list',
    'sdfs_next_build_action_list',
    'sdfs_prev_srch_action_list',
    'sdfs_prev_build_action_list',
].forEach(
    fn => {
        __ME['$'+fn+'_'] = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
             Array.from(cspact['$gen_'+fn.replace("_list","")](idpool,fc,rb,pr,lb,lc,ids,idxs,others))
    }
);

//////////////////////

__ME.$height_ = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=> {
    let height = 1;
    let rslt = height;
    let g = cspact.$gen_sdfs_next_srch_action(idpool,fc,rb,pr,lb,lc,[ids[0]],idxs,others);
    for(let act of g) {
        if(act.k === '$fstch_') {
            height = height +1;
        } else if(act.k === '$parent_') {
            height = height -1
        } else {}
        if(height>rslt) {rslt=height}
    }
    return(rslt)
}

/////

const _dfs_index = (gfn,idpool,fc,rb,pr,lb,lc,ids,idxs,others) => {
    let rt =  ndget.$root_(idpool,fc,rb,pr,lb,lc,ids,idxs,others);
    let x  =  gfn.includes("sdfs")?rt:ndget.$dlmost_(idpool,fc,rb,pr,lb,lc,[rt],idxs,others);
    let g =  ndgen[gfn](idpool,fc,rb,pr,lb,lc,[x],idxs,others);
    return(gn.seq(g,ids[0]))
};


[
    "$gen_sdfs_next",
    "$gen_sdfs_next_leaf",
    "$gen_sdfs_next_nonleaf",
    "$gen_edfs_next",
    "$gen_edfs_next_leaf",
    "$gen_edfs_next_nonleaf"
].forEach(
    gfn => {
        let fn = gfn.replace("gen_","").replace("_next","") + "_index_";
        __ME[fn] = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
            _dfs_index(gfn,idpool,fc,rb,pr,lb,lc,ids,idxs,others)
    }
)

module.exports = __ME


