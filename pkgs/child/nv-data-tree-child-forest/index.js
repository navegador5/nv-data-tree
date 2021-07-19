const edge = require("nv-data-tree-edge");
const {
    SNidPool,
    creat_id,
    jdcp,
} = require("nv-facutil-basic")

const {false_e} = require("nv-facutil-defp");

const nd_loadump  = require("nv-data-tree-loadump");

const DFLT_LOAD_FUNC = (Node,forest,entry)=> {
    let nd = new Node(forest,entry[0])
    Object.assign(nd,entry[1])
    return([entry[0],nd])
}

function _load(arg,Node,load_func=DFLT_LOAD_FUNC) {
    let forest = new Forest(arg.struct.max_size,arg.fid)
    forest.eary = arg.struct.eary;
    forest.vertexes = edge.$extract_vertexes(forest.max_size,forest.eary);
    forest.idpool = new SNidPool(forest.max_size,forest.vertexes);
    let entries = arg.data.map(e=>load_func(Node,forest,e))
    forest.mp = new Map(entries);
    return(forest)
}

function _construct(that,max_size,fid) {
    that.fid = fid??creat_id();
    that.max_size = max_size;
    that.eary = [];
    that.vertexes = new Set();
    that.mp = new Map();
    that.idpool = new SNidPool(that.max_size,that.vertexes);
    false_e(that,'eary','vertexes','mp')
    Object.seal(that)
}


class Forest {
    constructor(max_size=SNidPool.SQUARE_MAXID,fid) {
        _construct(this,max_size,fid)
    }
    get trees_(){
        let ary = Array.from(this.mp.values())
        ary=ary.filter(nd=>nd.$is_root())
        return(ary)
    }
    get isolates_() {
        let ary = Array.from(this.mp.values())
        ary=ary.filter(nd=>nd.$is_isolated())
        return(ary)
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
    node(Node) {return(this.tree(Node))}
    erase_isolated(Node){
        for(let [id,nd] of this.mp) {
            if(nd.$is_isolated()){
                nd[Node.SYM_DICT.release_forest]();
                this.mp.delete(id);
                this.vertexes.delete(id);
            }
        }
    }
    dump(dump_func=jdcp) {
        let fid = this.fid;
        let struct = {
            max_size:this.max_size,
            eary:this.eary
        }
        let entries =  Array.from(this.mp.entries());
        let data = entries.map(e=>[e[0],dump_func(e[1])]);
        return({fid,struct,data})
    }
    load_nd_from_dump(Node,jnd,load_func=nd_loadump.DFLT_LOAD_FUNC) {
        return(nd_loadump.load_from_dump(jnd,this,Node,load_func))
    }
    merge(forest,load_func=nd_loadump.DFLT_LOAD_FUNC) {
        let ary = forest.trees_;
        let ntrees= ary.map(
            rt=>{
                let jnd = rt.$dump();
                let nd = this.load_nd_from_dump(rt.constructor,jnd,load_func);
                return(nd)
            }
        );
        return(ntrees)
    }
    [Symbol.iterator]() {
        let g = (function *() {
            for(let nd of this.mp.values()) {
                if(nd.$is_root()){yield(nd)}
            }
        })();
        return(g)
    }
}

Forest.load_from_dump = (j,Node,load_func=DFLT_LOAD_FUNC)=>{return(_load(j,Node,load_func))}
Forest.DFLT_LOAD_FUNC = DFLT_LOAD_FUNC

module.exports = Forest

