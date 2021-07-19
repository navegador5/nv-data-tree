const api = require("nv-data-tree-apidef")
const edge = require("nv-data-tree-edge")
const {
    SNidPool,
    creat_id,
    is_int,
} = require("nv-facutil-basic")

const eng = require("./openg")

const SYM_DICT = {
    release_forest:Symbol("release_forest")
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
    [SYM_DICT.release_forest]() {this.#forest = null}
    get $fid_() {return(this.#forest.fid)}
    get $id_() {return(this.#id)}
    $noop()     {}
    $append_child(ch) {
        return(eng.$append_child(this.#ctor,this.#forest,this,ch))
    }
    $prepend_child(ch) {
        return(eng.$prepend_child(this.#ctor,this.#forest,this,ch))
    }
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
    $append_children(chs) {
        return(eng.$append_children(this.#ctor,this.#forest,this,chs))
    }
    $prepend_children(chs) {
        return(eng.$prepend_children(this.#ctor,this.#forest,this,chs))
    }
    $add_rsibs(rsibs) {
        return(eng.$add_rsibs(this.#ctor,this.#forest,this,rsibs))
    }
    $add_lsibs(lsibs) {
        return(eng.$add_lsibs(this.#ctor,this.#forest,this,lsibs))
    }
    $insert_child_at(sibseq,ch) {
        return(eng.$insert_child_at(this.#ctor,this.#forest,this,ch,sibseq))
    }
    $insert_children_at(sibseq,chs) {
        return(eng.$insert_children_at(this.#ctor,this.#forest,this,chs,sibseq))
    }
    $disconn() {
        return(eng.$disconn(this.#ctor,this.#forest,this))
    }
    $rm_fstch() {
        return(eng.$rm_fstch(this.#ctor,this.#forest,this))
    }
    $rm_lstch() {
        return(eng.$rm_lstch(this.#ctor,this.#forest,this))
    }
    $rm_child(sibseq) {
        return(eng.$rm_child(this.#ctor,this.#forest,this,sibseq))
    }
    $rm_children() {
        return(eng.$rm_children(this.#ctor,this.#forest,this))
    }
    $rm_some_children(sibseqs) {
        return(eng.$rm_some_children(this.#ctor,this.#forest,this,sibseqs))
    }
    $replace_with(nd) {
        return(eng.$replace_with(this.#ctor,this.#forest,this,nd))
    }
    $replace_child_at(sibseq,ch) {
        return(eng.$replace_child_at(this.#ctor,this.#forest,this,ch,sibseq))
    }
    $swap(other) {
        return(eng.$swap(this.#ctor,this.#forest,this,other))
    }
    $erase(){
        return(eng.$erase(this.#ctor,this.#forest,this))
    }
    $erase_r() {
        return(eng.$erase_r(this.#ctor,this.#forest,this))
    }
    $clone() {
        return(eng.$clone(this.#ctor,this.#forest,this))
    }
    ////
    $is_root() {
        return(edge.$is_root(this.#forest.max_size,this.#forest.eary,this.#forest.vertexes,this.$id_))
    }
    $is_leaf() {
        return(edge.$is_leaf(this.#forest.max_size,this.#forest.eary,this.#forest.vertexes,this.$id_))
    }
    $is_isolated() {
        return(this.$is_root() && this.$is_leaf())
    }
}

_Node.SYM_DICT = SYM_DICT






class Forest {
    constructor(max_size=SNidPool.SQUARE_MAXID) {
        this.fid = creat_id()
        this.max_size = max_size;
        this.eary = []
        this.vertexes = new Set();
        this.idpool = new SNidPool(max_size,this.vertexes);
        this.mp = new Map();
        Object.seal(this)
    }
    tree(Node) {
        let id = this.idpool.rent();
        if(id<0){
            return(null)
        } else {
            edge.$new(this.max_size,this.eary,this.vertexes,id);
            let nd = new Node(this,id);
            this.mp.set(id,nd);
            return(nd)
        }
    }
    erase_isolated(){
        for(let [id,nd] of this.mp) {
            if(nd.$is_isolated()){
                nd[_Node.SYM_DICT.release_forest]();
                this.mp.delete(id);
                this.vertexes.delete(id);
            }
        }
    }
}






const assert = require("assert")






var forest = new Forest(4096)
var nd1 = forest.tree(_Node) 
var nd2 = nd1.$append_child()
var nd3 = nd2.$append_child()
var nd4 = nd2.$append_child()
var nd5 = nd4.$append_child()
var nd6 = nd4.$append_child()
var nd7 = nd1.$append_child()
var nd8 = nd7.$append_child()
var nd9 = nd7.$append_child()
var nd10 = nd7.$append_child()
var nd11 = nd10.$append_child()
var nd12 = nd10.$append_child()
var nd13 = nd10.$append_child()
var nd14 = nd10.$append_child()
var nd15 = nd10.$append_child()
var nd16 = nd10.$append_child()

assert.deepStrictEqual(
    Array.from(forest.mp.values()).map(r=>r.$id_),
    [
       1,  2,  3,  4,  5,  6,
       7,  8,  9, 10, 11, 12,
      13, 14, 15, 16
    ]
)

assert.deepStrictEqual(
    forest.eary,
    [
      2,  4099,  4100,
      12293, 12294,     7,
      24584, 24585, 24586,
      36875, 36876, 36877,
      36878, 36879, 36880
    ]
)

//for(let i=1;i<17;i++) {global["nd"+i].tag="nd"+i}

////




var forest = new Forest(4096)
var nd1 = forest.tree(_Node) 
var nd2 = nd1.$append_child()
var nd3 = nd2.$append_child()
var nd4 = nd2.$append_child()
var nd5 = nd4.$append_child()
var nd6 = nd5.$add_rsib()
var nd7 = nd1.$append_child()
var nd8 = nd7.$append_child()
var nd9 = nd8.$add_rsib()
var nd10 = nd9.$add_rsib()
var nd11 = nd10.$append_child()
var nd12 = nd11.$add_rsib()
var nd13 = nd12.$add_rsib()
var nd14 = nd13.$add_rsib()
var nd15 = nd14.$add_rsib()
var nd16 = nd15.$add_rsib()

//for(let i=1;i<17;i++) {global["nd"+i].tag="nd"+i}

assert.deepStrictEqual(
    forest.eary,
    [
      2,  4099,  4100,
      12293, 12294,     7,
      24584, 24585, 24586,
      36875, 36876, 36877,
      36878, 36879, 36880
    ]
)





const {fiseq} = require("nv-number-basic")
//for(let i=1;i<17;i++) {console.log(global["nd"+i].$id_)}


var forest = new Forest(4096)
var nd1 = forest.tree(_Node) 
var nd2 = nd1.$append_child()
var nd4 = nd2.$append_child()
var nd3 = nd4.$add_lsib()
var nd6 = nd4.$append_child()
var nd5 = nd6.$add_lsib()
var nd7 = nd1.$append_child()
var nd10 = nd7.$append_child()
var nd9 = nd10.$add_lsib()
var nd8 = nd9.$add_lsib()
var nd16 = nd10.$append_child()
var nd15 = nd16.$add_lsib()
var nd14 = nd15.$add_lsib()
var nd13 = nd14.$add_lsib()
var nd12 = nd13.$add_lsib()
var nd11 = nd12.$add_lsib()


//for(let i=1;i<17;i++) {global["nd"+i].tag="nd"+i}
const {fixy} = require("nv-number-basic")

var ary = forest.eary.map(r=>fixy(4096,r))


/////


var forest = new Forest(4096)

var nd2 = forest.tree(_Node) 
var nd1 = nd2.$add_parent()
var nd4 = forest.tree(_Node)
var nd3 = forest.tree(_Node)
nd3.$connto(nd2)
nd3.$add_rsib(nd4)
var [nd5,nd6] = nd4.$append_children(2)
var nd7 = nd2.$add_rsib()
var [nd8,nd9,nd10] = nd7.$prepend_children(3)
var nd11 = nd10.$append_child()
var nd16 = nd10.$append_child()
var nd12 = nd10.$insert_child_at(1)
var [nd13,nd14,nd15] = nd10.$insert_children_at(2,3)
//for(let i=1;i<17;i++) {global["nd"+i].tag="nd"+i}
var ary = forest.eary.map(r=>fixy(4096,r))


//
nd10.$disconn()
nd10.$rm_some_children([0,3])
//nd10.$rm_children()
nd10.$rm_fstch()
nd10.$erase()
forest.erase_isolated()
//


var nd17 = nd2.$clone()

nd4.$replace_with(nd17)

var nd22 = nd2.$clone()
nd22.tag='nd22'

nd2.$replace_child_at(0,nd22)
nd2.$swap(nd7)


