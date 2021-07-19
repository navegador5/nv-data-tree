const cspis  = require("../nv-data-tree-csp-is/index");
const ndget  = require("../nv-data-tree-csp-ndget/index");
const {ZWNJ,__DP,__O} = require("../nv-facutil-basic/index");

const SYM_DICT = {
    release_forest:Symbol("release_forest"),
    get_forest:Symbol("get_forest"),
    get_ctor:Symbol("get_ctor"),
    set_id:Symbol("set_id"),
}


class _Node {
    #forest
    #id
    #ctor
    constructor(forest,id) {
        this.#ctor = this.constructor;
        this.#forest = forest;
        this.#id = id;
    }
    get [SYM_DICT.get_forest]() {return(this.#forest)}
    get [SYM_DICT.get_ctor]()   {return(this.#ctor)}
    [SYM_DICT.release_forest]() {this.#forest = null}
    [SYM_DICT.set_id](nid)      {this.#id = nid}
    ////
    get $fid_() {return(this.#forest.fid)}
    get $id_() {return(this.#id)}
    ////
    $noop()     {}
    $new(Node=_Node)      {return(this.#forest.node(Node))}
    ////IS  fast than using defineProperty get
    $is_empty() {
        let {idpool,fc,rb,pr,lb,lc} = this.#forest;
        return(cspis.$is_empty(idpool,fc,rb,pr,lb,lc,[this.#id],[],[]))
    }
    $is_root()  {
        let {idpool,fc,rb,pr,lb,lc} = this.#forest;
        return(cspis.$is_root(idpool,fc,rb,pr,lb,lc,[this.#id],[],[]))
    }
    $is_fstch()  {
        let {idpool,fc,rb,pr,lb,lc} = this.#forest;
        return(cspis.$is_fstch(idpool,fc,rb,pr,lb,lc,[this.#id],[],[]))
    }
    $is_midch()  {
        let {idpool,fc,rb,pr,lb,lc} = this.#forest;
        return(cspis.$is_midch(idpool,fc,rb,pr,lb,lc,[this.#id],[],[]))
    }
    $is_lstch()  {
        let {idpool,fc,rb,pr,lb,lc} = this.#forest;
        return(cspis.$is_lstch(idpool,fc,rb,pr,lb,lc,[this.#id],[],[]))
    }
    $is_leaf()  {
        let {idpool,fc,rb,pr,lb,lc} = this.#forest;
        return(cspis.$is_leaf(idpool,fc,rb,pr,lb,lc,[this.#id],[],[]))
    }
    $is_lonely()  {
        let {idpool,fc,rb,pr,lb,lc} = this.#forest;
        return(cspis.$is_lonely(idpool,fc,rb,pr,lb,lc,[this.#id],[],[]))
    }
    $is_isolated()  {
        let {idpool,fc,rb,pr,lb,lc} = this.#forest;
        return(cspis.$is_isolated(idpool,fc,rb,pr,lb,lc,[this.#id],[],[]))
    }
}


_Node.SYM_DICT = SYM_DICT;
_Node.DFLT_CLONE_FUNC = (nd,nnd)=> {Object.assign(nnd,nd)}


const method = require("../nv-data-tree-csp-method/index")
for(let k in method) {if(k!=='ERROR_DICT') {method[k](_Node)}}

const {add_ance_relation} = require("../nv-data-tree-csp-relation/index");
add_ance_relation(_Node);


const {
    add_deep_steq,
    add_deep_lseq,
} = require("../nv-data-tree-cmp/index");
add_deep_steq(_Node);
add_deep_lseq(_Node);


const {
    add_cond_leaf_sdfs_next,
    add_gen_cond_leaf_sdfs_next,
    add_cond_leaf_sedfs_next,
    add_gen_cond_leaf_sedfs_next,
} = require("../nv-data-tree-cond-leaf/index");
add_cond_leaf_sdfs_next(_Node);
add_gen_cond_leaf_sdfs_next(_Node);
add_cond_leaf_sedfs_next(_Node);
add_gen_cond_leaf_sedfs_next(_Node);



const {_add_string_tag} = require("../nv-data-tree-repr/index");
_add_string_tag(_Node);


const {add_mlv} = require("../nv-data-tree-visit/index");
add_mlv(_Node);


const {
    add_dump,
    load_from_dump,
} = require("../nv-data-tree-loadump/index");

add_dump(_Node);

__O[__DP](_Node,"name",{value:ZWNJ});


////

class _TermNode extends _Node {
    #repr = true
    $is_repr_enabled()  {return(this.#repr)}
    $enable_repr()      {this.#repr = true}
    $disable_repr()     {this.#repr = false}
}


const {_add_repr} = require("../nv-data-tree-repr/index");

_add_repr(_TermNode,2);

__O[__DP](_TermNode,"name",{value:ZWNJ});

////

class _UiNode extends _Node {
    #disp = false
    $is_disp_enabled() {return(this.#disp)}
    $expand()      {this.#disp = true}
    $expand_all()  {this.$sdfs_.forEach(nd=>nd.$expand())}
    $foldup()      {this.#disp = false}
    $foldup_all()  {this.$sdfs_.forEach(nd=>nd.$foldup())}
}

const {_add_disp} = require("../nv-data-tree-repr/index");

_add_disp(_UiNode);

__O[__DP](_UiNode,"name",{value:ZWNJ});

////

function _new_tagged_nds(that,tag,n) {
    let ctor = that.constructor;
    let forest = that[ctor.SYM_DICT.get_forest];
    let nds = Array.from({length:n}).map(r=>forest.node(ctor));
    nds.forEach(nd=>nd.$tag_=tag);
    return(nds)
}

class _TagNode extends _Node {
    #tag = ''
    constructor(forest,id,tag='') {
        super(forest,id);
        this.#tag = tag
    }
    get $tag_()      {return(this.#tag)}
    set $tag_(tag)   {this.#tag = tag}
    $prepend(tag='',n=1) {
        let nds = _new_tagged_nds(this,tag,n);
        this.$prepend_children(nds);
        return(nds)
    }
    $append(tag='',n=1)  {
        let nds = _new_tagged_nds(this,tag,n);
        this.$append_children(nds);
        return(nds)
    }
    $insert_before(index,tag='',n=1)  {
        let nds = _new_tagged_nds(this,tag,n);
        this.$insert_children_before(index,nds);
        return(nds)
    }
    $insert_after(index,tag='',n=1)  {
        let nds = _new_tagged_nds(this,tag,n);
        this.$insert_children_after(index,nds);
        return(nds)
    }
    $arsib(tag='',n=1)   {
        let nds = _new_tagged_nds(this,tag,n);
        this.$add_rsibs(nds);
        return(nds)
    }
    $alsib(tag='',n=1)   {
        let nds = _new_tagged_nds(this,tag,n);
        this.$add_lsibs(nds);
        return(nds)
    }
    $aparent(tag='') {
        let nds = _new_tagged_nds(this,tag,1);
        return(this.$add_parent(nds[0]))
    }

}

const {_add_sedfs_repr} = require("../nv-data-tree-repr/index");

_add_sedfs_repr(_TagNode,2)

__O[__DP](_TagNode,"name",{value:ZWNJ});



////

module.exports = {
    _Node,
    _TermNode,
    _UiNode,
    _TagNode,
}

