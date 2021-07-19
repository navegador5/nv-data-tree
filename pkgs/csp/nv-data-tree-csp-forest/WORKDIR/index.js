const {
    AidPool,
    creat_id,
    jdcp,
} = require("nv-facutil-basic")

const {false_e} = require("nv-facutil-defp");

const nd_loadump  = require("nv-data-tree-loadump");
const ary_defrag = require("nv-array-defrag");


const PROPS = ['fc','pr','rb','lb','lc'];

const DFLT_LOAD_FUNC = (Node,forest,data,id)=> {
    let nd = new Node(forest,id);
    Object.assign(nd,data);
    return(nd)
}

function _load(arg,Node,load_func=DFLT_LOAD_FUNC) {
    let forest = new Forest(arg.maxid,arg.fid);
    let ids = arg.struct.ids;
    let data = arg.data;
    let {slots_} = forest;
    ids.forEach(
        (id,i)=>{
            slots_[id] = load_func(Node,forest,data[i],id)
            PROPS.forEach(prop=>{forest[prop][id] = arg.struct[prop][i]})
        }
    );
    let idpool = new AidPool(arg.maxid,slots_,0,0);
    forest.idpool = idpool;
    return(forest)
}


function _defrag(that) {
    let slots = that.slots_;
    let imp = ary_defrag.defrag(slots,0,1);
    let oist = new Set(Array.from(imp.keys()));
    for(let i=1;i<=oist.size;i++) {
        let nd = slots[i];
        nd[nd.constructor.SYM_DICT.set_id](i)
    }
    PROPS.forEach(
        r=> {
            let arr = that[r];
            for(let i=1;i<arr.length;i++) {
                if(oist.has(i)) {arr[i] = imp.get(arr[i])??0}
            }
            for(let [oi,ni] of imp) {
                let tmp = arr[oi]
                arr[oi] = 0;
                arr[ni] = tmp;

            }
        }
    );
    return(that)
}

function _construct(that,max_size,fid) {
    that.fid = fid??creat_id();
    that.max_size = max_size;
    that.idpool = new AidPool(that.max_size,undefined,0,0);
    let slots = that.idpool.rented_;
    PROPS.forEach(r=>{that[r]=slots.slice(0)});
    false_e(that,...PROPS);
    Object.seal(that)
}


class Forest {
    constructor(max_size = 10000,fid) {_construct(this,max_size,fid);}
    get slots_() {return(this.idpool.rented_)}
    slot(i) {return(this.slots_[i])}
    * gen_entry() {
        let lngth = this.slots_.length;
        for(let i=1;i<lngth;i++) {
            let nd = this.slot(i);
            if(nd!==0) {yield([nd,i])}
        }
    }
    get ids_()   {return(this.slots_.filter((r,i)=>r!==0).map(r=>r.$id_))}
    get nodes_() {return(this.slots_.filter(r=>r!==0))}
    get trees_() {return(this.nodes_.filter(nd=>nd.$is_root()))}
    get isolates_() {return(this.trees_.filter(nd=>nd.$is_leaf()))}
    tree(Node) {
        let id = this.idpool.rent();
        if(id<0) {
            return(null)
        } else {
            let nd = new Node(this,id);
            this.slots_[id] = nd;
            return(nd);
        }
    }
    node(Node) {return(this.tree(Node))}
    erase_isolated() {
        let g = this.gen_entry();
        let rslt = []
        for(let [nd,id] of g) {if(nd.$is_isolated()) {nd.$erase();rslt.push(nd)}}
        return(rslt)
    }
    dump(dump_func=jdcp) {
        let maxid = this.idpool.maxid_;
        let fid = this.fid;
        let nds = this.slots_.filter(r=>r!==0);
        let ids = nds.map(r=>r.$id_);
        let struct = {ids}
        PROPS.forEach(
            r=>{
                struct[r]= ids.map(id=>this[r][id])
            }
        );
        let data = nds.map(nd=>dump_func(nd));
        return({fid,maxid,struct,data})
    }
    load_nd_from_dump(Node,jnd,load_func=nd_loadump.DFLT_LOAD_FUNC) {
        return(nd_loadump.load_from_dump(jnd,this,Node,load_func))
    }
    load_nd_from_nest(Node,jnd,load_func=nd_loadump.nest.DFLT_NEST_LOAD_FUNC,ck='_children') {
        return(nd_loadump.nest.load(this,Node,jnd,load_func,ck))
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
    defrag(){return(_defrag(this))}
    [Symbol.iterator]() {
        return(
            (function *(){
                let g = this.gen_entry();
                for(let [nd,id] of g) {if(nd.$is_root()){yield(nd)}}
            })()
        )
    }
}

Forest.PROPS = PROPS;
Forest.DFLT_LOAD_FUNC = DFLT_LOAD_FUNC;
Forest.load_from_dump = (j,Node,load_func=DFLT_LOAD_FUNC)=>{return(_load(j,Node,load_func))}


module.exports = Forest

