const api = require("../nv-data-tree-csp-apidef/index");
////static import for bundle
const cspis = require("../nv-data-tree-csp-is/index");
const cspbfs = require("../nv-data-tree-csp-bfs/index");
const cspact = require("../nv-data-tree-csp-act/index");
const cspget = require("../nv-data-tree-csp-get/index");
const ndget = require("../nv-data-tree-csp-ndget/index");
const cspof = require("../nv-data-tree-csp-of/index");
const getwnd = require("../nv-data-tree-csp-getwnd/index");
const ndgetwi = require("../nv-data-tree-csp-ndgetwi/index");
const ndsgetwis = require("../nv-data-tree-csp-ndsgetwis/index");
const ndgen = require("../nv-data-tree-csp-ndgen/index");
const sedfs = require("../nv-data-tree-csp-sedfs/index");
const ndsget = require("../nv-data-tree-csp-ndsget/index");
const ndgetwo = require("../nv-data-tree-csp-ndgetwo/index");

const lib = {cspis,cspbfs,cspact,cspget,ndget,cspof,getwnd,ndgetwi,ndsgetwis,ndgen,sedfs,ndsget,ndgetwo}

const l0  = require("../nv-data-tree-csp-l0/index");
const {buildk_to_srchk} = require("../nv-data-tree-actdef/index");


////

function get_plugins() {
    let plugins = {}
    for(let k in api) {
        if(k.slice(0,4)==="add_") {
            plugins[k] = api[k]
        }
    }
    return(plugins)
}

const plugins = get_plugins();

////

const CATE_EXCEPTS = new Set([
    "IS"
]);

////

function get_eng(plugin) {
    const d = {}
    for(let cfg of plugin) {
        if(!CATE_EXCEPTS.has(cfg.cate)) {
            api[cfg.cate].forEach(each=> {d[each] =lib[cfg.lib][each]})
        }
    }
    return(d)
}

function begin(Node,that) {
    let forest = that[Node.SYM_DICT.get_forest];
    let ctor   = that[Node.SYM_DICT.get_ctor];
    let {idpool,fc,rb,pr,lb,lc} = forest;
    return([forest,ctor,idpool,fc,rb,pr,lb,lc])
}

const dcd_name = (name) => {
    let arr = name.split('$');
    return({
        args:arr[1],
        rtrn:arr[2]
    })
}


////

const pytp_zero_param = (Node,rtrn,_f,that)=> {
    let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,that);
    let ids = [that.$id_];
    let rslt = _f(idpool,fc,rb,pr,lb,lc,ids,[],[]);
    return(api[rtrn](forest,rslt))
}


const pytp_one_nd_param = (Node,rtrn,_f,that,nd) => {
    let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,that);
    let ids = [that.$id_,nd.$id_];
    let rslt = _f(idpool,fc,rb,pr,lb,lc,ids,[],[]);
    return(api[rtrn](forest,rslt))
}


const pytp_one_idx_param = (Node,rtrn,_f,that,index) => {
    let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,that);
    let ids = [that.$id_];
    let rslt = _f(idpool,fc,rb,pr,lb,lc,ids,[index],[]);
    return(api[rtrn](forest,rslt))
}

const pytp_one_other_param = (Node,rtrn,_f,that,other) => {
    let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,that);
    let ids = [that.$id_];
    let rslt = _f(idpool,fc,rb,pr,lb,lc,ids,[],[other]);
    return(api[rtrn](forest,rslt))
}

const pytp_idxs_param = (Node,rtrn,_f,that,idxs) => {
    let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,that);
    let ids = [that.$id_];
    let rslt = _f(idpool,fc,rb,pr,lb,lc,ids,idxs,[]);
    return(api[rtrn](forest,rslt))
}




const __M = {}

function add_one_getter(Node,fn,_f,pytp,rtrn) {
    Object.defineProperty(
        Node.prototype,
        fn,
        {
            get: function() {
                return(pytp(Node,rtrn,_f,this))
            }
        }
    )

}



function add_one_nonop_cate(name,rtrn,pytp) {
    __M[name] = (Node)=> {
        let d = get_eng(plugins[name])
        for(let fn in d) {
             let _f = d[fn];
             let getter = (fn[fn.length-1] === '_')
             if(getter) {
                 add_one_getter(Node,fn,_f,pytp,rtrn)
             } else {
                 Node.prototype[fn] =  function (arg) {return(pytp(Node,rtrn,_f,this,arg))}
             }
        }
    }
}



function add_nonop_methods() {
    for(let name in plugins) {
        let {args,rtrn} = dcd_name(name);
        if(args === 'args_id0_') {
            add_one_nonop_cate(name,rtrn,pytp_zero_param);
        } else if(args === 'args_id01_') {
            add_one_nonop_cate(name,rtrn,pytp_one_nd_param);
        } else if(args ==='args_id0_idx0_' ) {
            add_one_nonop_cate(name,rtrn,pytp_one_idx_param);
        } else if(args ==='args_id0_o0_') {
            add_one_nonop_cate(name,rtrn,pytp_one_other_param);
        } else if(args === 'args_id0_idxs_') {
            add_one_nonop_cate(name,rtrn,pytp_idxs_param);
        } else {
            //impossible
        }
    }
}

add_nonop_methods();

////
////

const cspop = require("../nv-data-tree-csp-op/index");

function _add_one_bsc_add_op(Node,cate,eng) {
    api[cate].forEach(
        fn=> {
            Node.prototype[fn] = function  (ond) {
                let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
                return(eng(fn,forest,ctor,this,ond))
            }
        }
    )
}

__M['add_bsc_add_op'] = (Node)=> {
     _add_one_bsc_add_op(Node,'BSC_PEND_OP',cspop.pend);
     _add_one_bsc_add_op(Node,'BSC_ASIB_OP',cspop.asib);
}


////
function _add_one_multi_add_op(Node,fn,efn,eng,reverse) {
    Node.prototype[fn] = function  (o) {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        return(cspop.multi_add(efn,eng,forest,ctor,this,o,reverse))
    }
}

__M['add_multi_add_op'] = (Node)=> {
     _add_one_multi_add_op(Node,'$prepend_children','$prepend_child', cspop.pend,true);
     _add_one_multi_add_op(Node,'$append_children' ,'$append_child',  cspop.pend,false);
     _add_one_multi_add_op(Node,'$add_lsibs'       ,'$add_lsib',      cspop.asib,false);
     _add_one_multi_add_op(Node,'$add_rsibs'       ,'$add_rsib',      cspop.asib,true);
}

////



__M['add_$insert_child_before'] = (Node) => {
    Node.prototype.$insert_child_before = function (index,ond) {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        return(cspop.$insert_child_at('before',this,index,ond))
    }
}

__M['add_$insert_child_after'] = (Node) => {
    Node.prototype.$insert_child_after = function (index,ond) {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        return(cspop.$insert_child_at('after',this,index,ond))
    }
}


__M['add_$insert_children_before'] = (Node) => {
    Node.prototype.$insert_children_before = function (index,o) {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        return(cspop.$insert_children_at('before',forest,ctor,this,index,o))
    }
}

__M['add_$insert_children_after'] = (Node) => {
    Node.prototype.$insert_children_after = function (index,o) {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        return(cspop.$insert_children_at('after',forest,ctor,this,index,o))
    }
}



////

__M['add_$add_parent'] = (Node) => {
    Node.prototype.$add_parent = function () {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        return(cspop.$add_parent(forest,ctor,this))
    }
}


__M['add_$connto'] = (Node) => {
    Node.prototype.$connto = function (pnd) {
        return(cspop.$connto(this,pnd))
    }
}

////
__M['add_$add_parent_and_lsib'] = (Node) => {
    Node.prototype.$add_parent_and_lsib = function () {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        let p    = cspop.$add_parent(forest,ctor,this)
        let lsib = cspop.asib('$add_lsib',forest,ctor,this)
        return([p,lsib])
    }
}

__M['add_$add_or_goto_parent'] = (Node) => {
    Node.prototype.$add_or_goto_parent = function () {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        return(this.$parent_ !== null?this.$parent_:cspop.$add_parent(forest,ctor,this))
    }
}



////

__M['add_$disconn'] = (Node) => {
    Node.prototype.$disconn = function () {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        return(cspop.$disconn(forest,this));
    }
}

__M['add_$rm_fstch'] = (Node) => {
    Node.prototype.$rm_fstch = function () {
        return(cspop.$rm_fstch(this))
    }
}


__M['add_$rm_lstch'] = (Node) => {
    Node.prototype.$rm_lstch = function () {
        return(cspop.$rm_lstch(this))
    }
}


__M['add_$rm_child'] = (Node) => {
    Node.prototype.$rm_child = function (index) {
        return(cspop.$rm_child(this,index))
    }
}


__M['add_$rm_children'] = (Node) => {
    Node.prototype.$rm_children = function () {
        return(cspop.$rm_children(this))
    }
}


__M['add_$rm_some_children'] = (Node) => {
    Node.prototype.$rm_some_children = function (indexes) {
        return(cspop.$rm_some_children(this,indexes))
    }
}


////

__M['add_$replace_tree'] = (Node) => {
    Node.prototype.$replace_tree = function (ond) {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        ond = ond??forest.tree(ctor);
        return(cspop.$replace_tree(this,ond))
    }
}

__M['add_$replace_child_tree_at'] = (Node) => {
    Node.prototype.$replace_child_tree_at = function (index,ond) {
        let child = this.$child(index);
        return((child === null)?null:child.$replace_tree(ond))
    }
}


__M['add_$replace_node'] = (Node) => {
    Node.prototype.$replace_node = function (ond) {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        ond = ond??forest.node(ctor);
        return(cspop.$replace_node(this,ond))
    }
}

__M['add_$replace_child_node_at'] = (Node) => {
    Node.prototype.$replace_child_node_at = function (index,ond) {
        let child = this.$child(index);
        return((child === null)?null:child.$replace_node(ond))
    }
}


////

__M['add_$swap_tree'] = (Node) => {
    Node.prototype.$swap_tree = function (ond) {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        return(cspop.$swap_tree(this,ond))
    }
}


__M['add_$swap_node'] = (Node) => {
    Node.prototype.$swap_node = function (ond) {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        return(cspop.$swap_node(this,ond))
    }
}


////
__M['add_$clone'] = (Node) => {
    Node.prototype.$clone = function (f=Node.DFLT_CLONE_FUNC) {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        let actions = this.$sdfs_next_build_action_list_;
        let rt = this.$new();
        f(this,rt);
        let ond = this;
        let nnd = rt;
        actions.slice(1).forEach(
            act=>{
                let cond = api.is_getter_fn(act.k);
                nnd=api.is_getter_fn(act.k)?nnd[act.k]:nnd[act.k]();
                let k = cond?act.k:buildk_to_srchk(act.k);
                ond = ond[k];
                f(ond,nnd)
            }
        );
        return(rt)
    }
}



////
__M['add_$erase'] = (Node) => {
    Node.prototype.$erase = function () {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        return(cspop.$erase(forest,ctor,this))
    }
}

__M['add_$erase_r'] = (Node) => {
    Node.prototype.$erase_r = function () {
        let [forest,ctor,idpool,fc,rb,pr,lb,lc] = begin(Node,this);
        let nds = this.$sdfs_;
        nds.forEach(nd=>cspop.$erase(forest,ctor,nd));
        return(nds)
    }
}


////
module.exports = __M;

