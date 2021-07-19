const {forlst} = require("../nv-facutil-basic/index");

const l0  = require("../nv-data-tree-csp-l0/index");

const __M = {}

const ERROR_DICT = {
    cant_add_sib_to_root           :    new Error("cant_add_sib_to_root"),
    only_root_can_add_parent       :    new Error("only_root_can_add_parent"),
    can_not_connto_nonleaf         :    new Error("can_not_connto_nonleaf"),
    already_in_a_tree              :    new Error("already_in_a_tree"),
    can_not_replace_tree_with_nonroot   :    new Error("can_not_replace_with_nonroot"),
    can_not_replace_node_with_non_isolated : new Error("ERROR_DICT.can_not_replace_with_non_isolated"),
    in_same_ance_chain             :    new Error("in_same_ance_chain")
}

__M['ERROR_DICT'] = ERROR_DICT;


__M.pend = (fn,forest,ctor,that,ch)=> {
    let {fc,rb,pr,lb,lc} = forest;
    let id = that.$id_;
    ch = ch??forest.node(ctor);
    if(ch===null) {} else {
        if(l0.$is_root(pr,ch.$id_)) {
            l0[fn](fc,rb,pr,lb,lc,id,ch.$id_)
        } else {
            throw(ERROR_DICT.already_in_a_tree)
        }
    }
    return(ch)
}

__M.asib = (fn,forest,ctor,that,sib) =>{
    let {fc,rb,pr,lb,lc} = forest;
    let id = that.$id_;
    if(l0.$is_root(pr,id)) {
        throw(ERROR_DICT.cant_add_sib_to_root)
    } else {
        sib = sib??forest.node(ctor);
        if(sib===null) {} else {
            if(l0.$is_root(pr,sib.$id_)) {
                l0[fn](fc,rb,pr,lb,lc,id,sib.$id_)
            } else {
                throw(ERROR_DICT.already_in_a_tree)
            }
        }
        return(sib)
    }
}

__M.multi_add = (fn,eng,forest,ctor,that,o,reverse) => {
    let rslt;
    if(o instanceof Array) {
        rslt = o;
    } else {
        rslt = Array.from({length:o}).map(r=>forest.node(ctor))
    }
    reverse?forlst(rslt,ond=>eng(fn,forest,ctor,that,ond)):rslt.forEach(ond=>eng(fn,forest,ctor,that,ond))
    return(rslt.filter(r=>r!==null))
}

__M.$insert_child_at = (mode,that,index,ond) => {
    let c = that.$children_count_ - 1;
    if(index<0) {index=0}
    if(index>c) {index=c}
    let bnd = that.$child(index);
    if(mode === 'before') {
        return((bnd===null)?that.$prepend_child(ond):bnd.$add_lsib(ond))
    } else {
        return((bnd===null)?that.$append_child(ond):bnd.$add_rsib(ond))
    }
}


__M.$insert_children_at = (mode,forest,ctor,that,index,o) => {
    let c = that.$children_count_ - 1;
    if(index<0) {index=0}
    if(index>c) {index=c}
    let children = (o instanceof Array)?o:Array.from({length:o}).map(r=>forest.node(ctor));
    let bnd = that.$child(index);
    if(mode === 'before') {
        return((bnd===null)?that.$prepend_children(children):bnd.$add_lsibs(children))
    } else {
        return((bnd===null)?that.$append_children(children):bnd.$add_rsibs(children))
    }
}

__M.$add_parent = (forest,ctor,that) => {
     if(that.$is_root()) {
        let pnd = forest.node(ctor);
        if(pnd === null) {} else {pnd.$prepend_child(that)}
        return(pnd)
    } else {
        throw(ERROR_DICT.only_root_can_add_parent)
    }
}


__M.$connto = (that,pnd)=> {
    if(pnd.$is_leaf()) {
        pnd.$prepend_child(that);
        return(that)
    } else {
        throw(ERROR_DICT.can_not_connto_nonleaf)
    }
}

__M.$disconn = (forest,that) => {
    if(that.$is_root()) {
    } else {
        let {fc,rb,pr,lb,lc} = forest
        l0.$disconn(fc,rb,pr,lb,lc,that.$id_);
    }
    return(that)
}

__M.$rm_fstch = (that) => {
    if(that.$is_leaf()) {
        return(null)
    } else {
        let fch = that.$fstch_;
        fch.$disconn();
        return(fch)
    }
}


__M.$rm_lstch = (that) => {
    if(that.$is_leaf()) {
        return(null)
    } else {
        let lch = that.$lstch_;
        lch.$disconn();
        return(lch)
    }
}


__M.$rm_child = (that,index) => {
    if(that.$is_leaf()) {
        return(null)
    } else {
        let ch = that.$child(index);
        ch.$disconn();
        return(ch)
    }
}

__M.$rm_children = (that) => {
    if(that.$is_leaf()) {
        return([])
    } else {
        let children = that.$children_;
        children.forEach(ch=>{ch.$disconn()})
        return(children)
    }
}

__M.$rm_some_children = (that,indexes) => {
    if(that.$is_leaf()) {
        return([])
    } else {
        let children = that.$some_children(indexes);
        children.forEach(ch=>{ch.$disconn()})
        return(children)
    }
}

////

function _uprplc(that,ond) {
    if(that.$is_root()) {

    } else {
        let lsib = that.$lsib_;
        if(lsib === null) {
            let p = that.$parent_;
            that.$disconn();
            p.$prepend_child(ond);
        } else {
            that.$disconn();
            lsib.$add_rsib(ond);
        }
    }
}


__M.$replace_tree = (that,ond) => {
    if(ond.$is_root()) {
        _uprplc(that,ond);
        return(ond)
    } else {
        throw(ERROR_DICT.can_not_replace_tree_with_nonroot)
    }
}

__M.$replace_node = (that,ond) => { 
    if(ond.$is_isolated()) {
        ////转移children
        let children = that.$rm_children();
        ond.$append_children(children);
        ////上游parent
        _uprplc(that,ond);
        return(ond)
    } else {
        throw(ERROR_DICT.can_not_replace_node_with_non_isolated)
    }
}



////

function _can_swap_tree(nd0,nd1) {
    return(!nd0.$is_inclusive_ance_of(nd1) && !nd1.$is_inclusive_ance_of(nd0) )
}

__M.$swap_tree = (that,ond) => {
    if(!_can_swap_tree(that,ond)){throw(ERROR_DICT.in_same_ance_chain)}
    if(that.$is_root()) {
        if(ond.$is_root()) {
            //do nothing
        } else {
            let dummy = ond.$replace_tree();
            dummy.$replace_tree(that);
            dummy.$erase();
        }
    } else  {
        if(ond.$is_root()) {
            let dummy = that.$replace_tree();
            dummy.$replace_tree(ond);
            dummy.$erase();
        } else {
            let dummy0 = that.$replace_tree();
            let dummy1 = ond.$replace_tree();
            dummy0.$replace_tree(ond);
            dummy1.$replace_tree(that);
            dummy0.$erase();
            dummy1.$erase();
        }
    }
    return(ond)
}


__M.$swap_node = (that,ond) => {
    let dummy0 = that.$replace_node();
    let dummy1 = ond.$replace_node();
    dummy0.$replace_node(ond)
    dummy1.$replace_node(that)
    dummy0.$erase();
    dummy1.$erase();
    return(ond)
}


////

__M.$erase = (forest,ctor,that) => {
    let id = that.$id_;
    let children = that.$rm_children()
    that.$disconn();
    forest.idpool.rtrn(id);
    forest.slots_[id]=0
    forest.fc[id]=0
    forest.rb[id]=0
    forest.pr[id]=0
    forest.lb[id]=0
    forest.lc[id]=0
    that[ctor.SYM_DICT.release_forest]()
    return(children)
}


module.exports = __M
