const api = require("nv-data-tree-apidef");
const {Act,FLAG_DICT} = require("nv-data-tree-actdef");
const edge = require("nv-data-tree-edge");
const eng = require("nv-data-tree-child-openg");


const ρ='prototype';
const  δρ= Object.defineProperty;

function _0(Node) {
    for(let n of api.IS) {
        Node[ρ][n] = function(){
            let forest = this[Node.SYM_DICT.get_forest]
            return(edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_))
        }
    }
}

function _1(Node) {
    Node[ρ].$is_isolated = function(){
        return(this.$is_root() && this.$is_leaf())
    }
}

function _2(Node) {
    for(let n of api.OF) {
        Node[ρ][n] = function(other){
            let forest = this[Node.SYM_DICT.get_forest]
            return(edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_,other.$id_))
        }
    }
}

function _3(Node) {
    for(let n of api.GETTER) {
        δρ(
            Node[ρ],
            n,
            {
                 get:function(){
                     let forest = this[Node.SYM_DICT.get_forest];
                     return(edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_))
                 }
            }
        )
    }
}

function _4(Node) {
    for(let n of api.GEN) {
        Node[ρ][n] = function * (){
            let forest = this[Node.SYM_DICT.get_forest]
            let g = edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_)
            for(let d of g) {
                d.d = Act.DIRECTION[d.d]
                yield(d)
            }
        }
    }
}

function _5(Node) {
    for(let n of api.GEN_ND) {
        Node[ρ][n] = function * (){
            let forest = this[Node.SYM_DICT.get_forest]
            let g = edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_)
            for(let id of g) {
                yield(forest.mp.get(id))
            }
        }
    }
}

function _6(Node) {
    for(let n of api.GEN_NDS) {
        Node[ρ][n] = function * (){
            let forest = this[Node.SYM_DICT.get_forest]
            let g = edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_)
            for(let ids of g) {
                yield(ids.map(id=>forest.mp.get(id)))
            }
        }
    }
}

function _7(Node) {
    for(let n of api.ND_GETTER) {
        δρ(
            Node[ρ],
            n,
            {
                 get:function(){
                     let forest = this[Node.SYM_DICT.get_forest];
                     let id = (edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_))
                     if(id===0 || id === -1 || id===undefined) {
                         return(null)
                     } else {
                         return(forest.mp.get(id))
                     }
                 }
            }
        )
    }
}

function _8(Node) {
    for(let n of api.NDS_GETTER) {
        δρ(
            Node[ρ],
            n,
            {
                 get:function(){
                     let forest = this[Node.SYM_DICT.get_forest];
                     let ids = (edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_))
                     ids = ids.filter(id=>(id!==0 || id !== -1 || id!==undefined))
                     return(ids.map(id=>forest.mp.get(id)))
                 }
            }
        )
    }
}

function _9(Node) {
    for(let n of api.NDMAT_GETTER) {
        δρ(
            Node[ρ],
            n,
            {
                 get:function(){
                     let forest = this[Node.SYM_DICT.get_forest];
                     let m = (edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_))
                     for(let i=0;i<m.length;i++) {
                         let lyr = m[i]
                         for(let j=0;j<lyr.length;j++) {
                             m[i][j] =forest.mp.get(lyr[j])
                         }
                     }
                     return(m)
                 }
            }
        )
    }
}

function _10(Node,apis) {
    for(let n of apis) {
        Node[ρ][n]= function(other){
            let forest = this[Node.SYM_DICT.get_forest];
            return(edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_,other))
        }
    }
}

function _11(Node) {
    for(let n of api.GET_WITH_ND) {
        Node[ρ][n]= function(other){
            let forest = this[Node.SYM_DICT.get_forest];
            return(edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_,other.$id_))
        }
    }
}

function _12(Node) {
    for(let n of api.GET_NDS_WITH_ND) {
        Node[ρ][n]= function(other){
            let forest = this[Node.SYM_DICT.get_forest];
            let ids = (edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_,other.$id_))
            ids = ids.filter(id=>(id!==0 || id !== -1 || id!==undefined))
            return(ids.map(id=>forest.mp.get(id)))
        }
    }
}

function _13(Node,apis) {
    for(let n of apis) {
        Node[ρ][n]= function(other){
            let forest = this[Node.SYM_DICT.get_forest];
            let id = (edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_,other))
            if(id===0 || id === -1 || id===undefined) {
                return(null)
            } else {
                return(forest.mp.get(id))
            }
        }
    }
}

function _14(Node,apis) {
    for(let n of apis) {
        Node[ρ][n]= function(other){
            let forest = this[Node.SYM_DICT.get_forest];
            let ids = (edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_,other))
            if(ids===0 || ids ===-1||ids===undefined) {
                return([])
            } else {
                ids = ids.filter(id=>(id!==0 || id !== -1 || id!==undefined))
                return(ids.map(id=>forest.mp.get(id)))
            }
        }
    }
}

function _15(Node) {
    for(let n of api.GET_NDMAT_WITH_INDEXES) {
        Node[ρ][n]= function(indexes){
             let forest = this[Node.SYM_DICT.get_forest];
             let m = (edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_,indexes))
             for(let i=0;i<m.length;i++) {
                 let lyr = m[i]
                 for(let j=0;j<lyr.length;j++) {
                     m[i][j] =forest.mp.get(lyr[j])
                 }
             }
             return(m)
        }
    }
}

function _16(Node) {
    for(let n of api.SEDFS_GEN_ND) {
        Node[ρ][n] = function * (flag=FLAG_DICT.open){
            let forest = this[Node.SYM_DICT.get_forest]
            let g = edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_,flag)
            for(let e of g) {
                e[0] = forest.mp.get(e[0])
                e[1]=FLAG_DICT[e[1]]
                yield(e)
            }
        }
    }
}

function _17(Node) {
    for(let n of api.SEDFS_NDS_GETTER) {
        δρ(
            Node[ρ],
            n,
            {
                 get:function(){
                     let forest = this[Node.SYM_DICT.get_forest];
                     let es = (edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_))
                     es = es.filter(e=>(e[0]!==0 || e[0] !== -1 || e[0]!==undefined))
                     return(es.map(e=>[forest.mp.get(e[0]),FLAG_DICT[e[1]]]))
                 }
            }
        )
    }
}

function _18(Node) {
    for(let n of api.SEDFS_ND_GETTER) {
        Node[ρ][n] = function (flag=FLAG_DICT.open){
            let forest = this[Node.SYM_DICT.get_forest]
            let e = edge[n](forest.max_size,forest.eary,forest.vertexes,this.$id_,flag)
            if(e[0]!==0) {
                e[0] = forest.mp.get(e[0])
            } else {
                e[0] = null
            }
            e[1]=FLAG_DICT[e[1]]
            return(e)
        }
    }
}

function _19(Node) {
    Node[ρ][Symbol.iterator] = function () {return(this.$gen_sedfs_next(0))}
}


function add_all_nonops(Node) {
    _0(Node);_1(Node);_2(Node);_3(Node);
    _4(Node);_5(Node);_6(Node);_7(Node);
    _8(Node);_9(Node);
    _10(Node,api.SDFS_ACTION);
    _11(Node);_12(Node);
    _13(Node,api.GET_ND_WITH_INDEX);_13(Node,api.GET_ND_WITH_PL);
    _14(Node,api.GET_NDS_WITH_INDEX);_14(Node,api.GET_NDS_WITH_INDEXES)
    _15(Node);_16(Node);_17(Node);_18(Node);
    _19(Node);
}


function _20(Node) {
    for(let n of api.CHDES_OP_WITH_ZERO) {
        Node[ρ][n] = function (){
            return(eng[n](this[Node.SYM_DICT.get_ctor],this[Node.SYM_DICT.get_forest],this))
        }
    }
}

function _21(Node) {
    for(let n of api.CHDES_OP_WITH_ONE) {
        Node[ρ][n] = function (ones){
            return(eng[n](this[Node.SYM_DICT.get_ctor],this[Node.SYM_DICT.get_forest],this,ones))
        }
    }
}

function _22(Node) {
    for(let n of api.CHDES_OP_WITH_SIBSEQ) {
        Node[ρ][n] = function (sibseq,ones){
            return(eng[n](this[Node.SYM_DICT.get_ctor],this[Node.SYM_DICT.get_forest],this,sibseq,ones))
        }
    }
}

function add_all_chdes_ops(Node) {_20(Node);_21(Node);_22(Node)}


module.exports = {
    _add_is:_0,
    _add_is_isolated:_1,
    _add_of:_2,
    _add_getter:_3,
    _add_gen:_4,
    _add_gen_nd:_5,
    _add_gen_nds:_6,
    _add_nd_getter:_7,
    _add_nds_getter:_8,
    _add_ndmat_getter:_9,
    _add_get_with_:_10,
    _add_get_with_nd:_11,
    _add_get_nds_with_nd:_12,
    _add_get_nd_with_:_13,
    _add_get_nds_with_:_14,
    _add_get_ndmat_with_indexes:_15,
    _add_sedfs_gen_nd:_16,
    _add_sedfs_nds_getter:_17,
    _add_sedfs_nd_getter:_18,  
    _add_iter:_19,
    add_all_nonops,
    add_all_chdes_ops,
}

