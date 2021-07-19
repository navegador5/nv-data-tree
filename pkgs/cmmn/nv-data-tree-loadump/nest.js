const {jdcp} = require("nv-facutil-basic");

const sym_pele = Symbol("pele");

function _creat_ele(pele,nd,ck,dump_func) {
    let ele = {}
    let data = dump_func(nd);
    Object.assign(ele,data);
    ele[ck] = [];
    ele[sym_pele] = pele;
    return(ele)
}

function init_ctx(rt,ck='_children',dump_func=jdcp) {
    let ctx = {
        ck,
        dump_func,
        ////
        ref:rt,            
        ////
        ele:_creat_ele(null,rt,ck,dump_func),
    }
    return(ctx)
}

const _OPS = {
    $prepend_child: (ctx)=> {
        ////
        let ep = ctx.ele;
        let np = ep[ctx.ck];
        let ref = ctx.ref;
        ////
        let chnd = ref.$fstch_;
        let chele = _creat_ele(ep,chnd,ctx.ck,ctx.dump_func);
        np.push(chele);
        ////
        ctx.ref = chnd;
        ctx.ele = chele;
        ////
        return(ctx)
    },
    $add_rsib: (ctx)=> {
        ////
        let ep = ctx.ele[sym_pele];
        let np = ep[ctx.ck];
        let ref = ctx.ref;
        ////        
        let rsibnd = ref.$rsib_;
        let rsibele = _creat_ele(ep,rsibnd,ctx.ck,ctx.dump_func);
        np.push(rsibele)
        ////
        ctx.ref = rsibnd;
        ctx.ele = rsibele;
        ////
        return(ctx)
    },
    $parent_: (ctx) => {
        ////
        let ep = ctx.ele[sym_pele];    
        let pnd = ctx.ref.$parent_; 
        ////
        ctx.ref = pnd;
        ctx.ele = ep;
        return(ctx)
    }
}

function dump(nd,dump_func=jdcp,ck='_children') {
    let acts = nd.$sdfs_next_build_action_list_;
    let ctx = init_ctx(nd,ck,dump_func);
    let rtele = ctx.ele;
    acts = acts.slice(1);
    for(let act of acts) {_OPS[act.k](ctx)}
    return(jdcp(rtele))
}

const DFLT_NEST_LOAD_FUNC = (nd,data,ck)=> {
    for(let k in data) {
        if(k !== ck) {
            nd[k] = data[k]
        }
    }
}

function load(forest,Node,j,load_func=DFLT_NEST_LOAD_FUNC,ck='_children') {
    let rt = forest.node(Node);
    load_func(rt,j,ck);
    let unhandled = [{j,nd:rt}];
    let next_unhandled =[]
    while(unhandled.length>0) {
        for(let ele of unhandled) {
            let jchildren = ele.j[ck];
            let pnd = ele.nd;
            for(let j of jchildren) {
                let nd = forest.node(Node);
                load_func(nd,j,ck);
                pnd.$append_child(nd);
                next_unhandled.push({j,nd})
            }
        }
        unhandled = next_unhandled;
        next_unhandled = [];
    }
    return(rt)
}


module.exports = {
    dump,
    DFLT_NEST_LOAD_FUNC,
    load,
}


