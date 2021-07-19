const eng = require("nv-data-tree-child-openg");
const {
    add_all_nonops,
    add_all_chdes_ops
} = require("nv-data-tree-child-method");

const {add_disp} = require("nv-data-tree-child-repr");
const {add_deep_steq,add_deep_lseq} = require("nv-data-tree-cmp");
const {add_dump} = require("nv-data-tree-loadump");
const {add_ance_relation} = require("nv-data-tree-relation");
const {add_mlv} = require("nv-data-tree-visit");


const SYM_DICT = {
    release_forest:Symbol("release_forest"),
    get_forest:Symbol("get_forest"),
    get_ctor:Symbol("get_ctor"),
}

class _Node {
    #forest
    #id
    #ctor
    constructor(forest,id) {
        this.#ctor = this.constructor;
        this.#forest = forest;
        this.#id = id
    }
    get [SYM_DICT.get_forest]() {return(this.#forest)}
    get [SYM_DICT.get_ctor]()   {return(this.#ctor)}
    [SYM_DICT.release_forest]() {this.#forest = null}
    get $fid_() {return(this.#forest.fid)}
    get $id_() {return(this.#id)}
    $noop()     {}
    $add_rsib(rsib) {
        return(eng.$add_rsib(this.#ctor,this.#forest,this,rsib))
    }
    $add_lsib(lsib) {
        return(eng.$add_lsib(this.#ctor,this.#forest,this,lsib))
    }
    $add_parent() {
        return(eng.$add_parent(this.#ctor,this.#forest,this))
    }
    $connto(leaf) {
        return(eng.$connto(this.#ctor,this.#forest,this,leaf))
    }
    $add_rsibs(rsibs) {
        return(eng.$add_rsibs(this.#ctor,this.#forest,this,rsibs))
    }
    $add_lsibs(lsibs) {
        return(eng.$add_lsibs(this.#ctor,this.#forest,this,lsibs))
    }
    $disconn() {
        return(eng.$disconn(this.#ctor,this.#forest,this))
    }
    $replace_with(nd) {
        return(eng.$replace_with(this.#ctor,this.#forest,this,nd))
    }
    $swap(other) {
        return(eng.$swap(this.#ctor,this.#forest,this,other))
    }
    $erase(){
        return(eng.$erase(this.#ctor,this.#forest,this))
    }
    $clone(f=eng.DFLT_CLONE_FUNC) {
        return(eng.$clone(this.#ctor,this.#forest,this,f))
    }
}

_Node.SYM_DICT = SYM_DICT
Object.defineProperty(_Node,"name",{value:""});


function _add_dflt_plugins(Node) {
    add_all_nonops(Node);
    add_disp(Node,true);
    add_dump(Node);
    add_ance_relation(Node);
    add_deep_steq(Node);
    add_deep_lseq(Node);
    add_mlv(Node);
}

class Node extends _Node {} 
Object.defineProperty(Node,"name",{value:"λ"});
_add_dflt_plugins(Node);
add_all_chdes_ops(Node);


class MustLeaf extends _Node {}
Object.defineProperty(MustLeaf,"name",{value:"ε"});
_add_dflt_plugins(MustLeaf);


module.exports = {
    _Node,
    Node,
    MustLeaf
}
