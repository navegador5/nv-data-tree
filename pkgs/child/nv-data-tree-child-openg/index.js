const edge = require("nv-data-tree-edge");
const {
    is_int,
} = require("nv-facutil-basic")

function _0(Node,forest,ef,nd0,nd1) {
    nd1 = nd1??forest.tree(Node)
    if(nd1 !== null) {
        edge[ef](forest.max_size,forest.eary,forest.vertexes,nd0.$id_,nd1.$id_);
        return(nd1)
    } else {
        return(null)
    }
}

function _1(Node,forest,ef,nd0,nd1) {
    if(nd0.$is_root()) {
        return(null)
    } else {
        return(_0(Node,forest,ef,nd0,nd1))
    }
}

function _2(Node,forest,ef,nd) {
    let p = forest.tree(Node);
    if(p===null) {
        return(null)
    } else {
        edge[ef](forest.max_size,forest.eary,forest.vertexes,nd.$id_,p.$id_);
        return(p)
    }
}

function _3(Node,forest,ef,nd,other) {
    let rslt = edge[ef](forest.max_size,forest.eary,forest.vertexes,nd.$id_,other.$id_);
    if(rslt === -1 || rslt ===0) {
        return(null)
    } else {
        return(nd)
    }
}

function _4(Node,forest,ef,nd,ary) {
    let rslt;
    if(is_int(ary)) {
        rslt = Array.from({length:ary}).map(r=>forest.tree(Node));
        rslt=rslt.filter(r=>r!==null);
        ary = rslt.map(r=>r.$id_);
    } else {
        rslt = ary;
        ary = ary.map(r=>r.$id_);
    }
    edge[ef](forest.max_size,forest.eary,forest.vertexes,nd.$id_,ary);
    return(rslt)
}

function _5(Node,forest,ef,nd,ch,sibseq) {
    ch = ch??forest.tree(Node)
    if(ch !== null) {
        let rslt = edge[ef](forest.max_size,forest.eary,forest.vertexes,nd.$id_,ch.$id_,sibseq);
        if(rslt ===-1 || rslt ===0) {return(null)} else {return(ch)}
    } else {
        return(null)
    }
}

function _6(Node,forest,ef,nd,ary,sibseq) {
    let rslt;
    if(is_int(ary)) {
        rslt = Array.from({length:ary}).map(r=>forest.tree(Node));
        rslt=rslt.filter(r=>r!==null);
        ary = rslt.map(r=>r.$id_);
    } else {
        rslt = ary;
        ary = ary.map(r=>r.$id_);
    }
    console.log(rslt)
    edge[ef](forest.max_size,forest.eary,forest.vertexes,nd.$id_,ary,sibseq);
    return(rslt)
}

function _7(Node,forest,ef,nd) {
    let id = edge[ef](forest.max_size,forest.eary,forest.vertexes,nd.$id_);
    if(id===0) {return(null)} else {return(forest.mp.get(id))}
}

function _8(Node,forest,ef,nd,sibseq) {
    let id = edge[ef](forest.max_size,forest.eary,forest.vertexes,nd.$id_,sibseq);
    if(id ===0) {return(null)} else {return(forest.mp.get(id))}
}

function _9(Node,forest,ef,nd) {
    let ids = edge[ef](forest.max_size,forest.eary,forest.vertexes,nd.$id_);
    let nds = ids.map(id=>forest.mp.get(id))
    return(nds)
}

function _10(Node,forest,ef,nd,ary) {
    let ids = edge[ef](forest.max_size,forest.eary,forest.vertexes,nd.$id_,ary);
    let nds = ids.map(id=>forest.mp.get(id))
    return(nds)
}

function _11(Node,forest,ef,nd,other) {
    edge[ef](forest.max_size,forest.eary,forest.vertexes,nd.$id_,other.$id_);
}

function _12(Node,forest,ef,nd) {
    let ids = edge[ef](forest.max_size,forest.eary,forest.vertexes,nd.$id_);
    ids.forEach(id=>{
        let nd = forest.mp.get(id);
        nd[Node.SYM_DICT.release_forest]();
        forest.mp.delete(id)
    })
}

const DFTT_CLONE_FUNC = (nd,nnd)=> {
    for(let k in nd) {nnd[k]=nd[k]}
}


function _13(Node,forest,ef,nd,f=DFTT_CLONE_FUNC) {
    let [rt,ary] = edge[ef](forest.max_size,forest.eary,forest.vertexes,nd.$id_,forest.idpool);
    if(rt ===0 || rt===-1||rt ===undefined) {return(null)} else {
        ary.forEach(id=>{
            let nnd = new Node(forest,id);
            if(nnd!==null){
                f(nd,nnd);
                forest.mp.set(id,nnd)
            }
        })
        return(forest.mp.get(rt))
    }
}

function _14(Node,forest,ef,nd) {
    forest.mp.delete(nd.$id_);
    nd[Node.SYM_DICT.release_forest]();
    return(_9(Node,forest,ef,nd))
}


module.exports = {
    $append_child:function(Node,forest,nd0,nd1){
        return(_0(Node,forest,'$append_child',nd0,nd1))
    },
    $prepend_child:function(Node,forest,nd0,nd1){
        return(_0(Node,forest,'$prepend_child',nd0,nd1))
    },
    $add_rsib:function(Node,forest,nd0,nd1){
        return(_1(Node,forest,'$add_rsib',nd0,nd1))
    },
    $add_lsib:function(Node,forest,nd0,nd1){
        return(_1(Node,forest,'$add_lsib',nd0,nd1))
    },
    $add_parent:function(Node,forest,nd){
        return(_2(Node,forest,'$add_parent',nd))
    },
    $connto:function(Node,forest,nd0,nd1){
        return(_3(Node,forest,'$connto',nd0,nd1))
    },
    $append_children:function(Node,forest,nd,ary){
        return(_4(Node,forest,'$append_children',nd,ary))
    },
    $prepend_children:function(Node,forest,nd,ary){
        return(_4(Node,forest,'$prepend_children',nd,ary))
    },
    $add_rsibs:function(Node,forest,nd,ary){
        return(_4(Node,forest,'$add_rsibs',nd,ary))
    },
    $add_lsibs:function(Node,forest,nd,ary){
        return(_4(Node,forest,'$add_lsibs',nd,ary))
    },
    $insert_child_at:function(Node,forest,nd,ch,sibseq){
        return(_5(Node,forest,'$insert_child_at',nd,ch,sibseq))
    },
    $insert_children_at:function(Node,forest,nd,ary,sibseq){
        return(_6(Node,forest,'$insert_children_at',nd,ary,sibseq))
    },
    $disconn:function(Node,forest,nd){
        return(_7(Node,forest,'$disconn',nd))
    },
    $rm_fstch:function(Node,forest,nd){
        return(_7(Node,forest,'$rm_fstch',nd))
    },
    $rm_lstch:function(Node,forest,nd){
        return(_7(Node,forest,'$rm_lstch',nd))
    },
    $rm_child:function(Node,forest,nd,sibseq){
        return(_8(Node,forest,'$rm_child',nd,sibseq))
    },
    $rm_children:function(Node,forest,nd){
        return(_9(Node,forest,'$rm_children',nd))
    },
    $rm_some_children:function(Node,forest,nd,ary){
        return(_10(Node,forest,'$rm_some_children',nd,ary))
    },
    $replace_with:function(Node,forest,nd0,nd1){
        _3(Node,forest,'$replace_with',nd0,nd1);
        return(nd1)
    },
    $replace_child_at:function(Node,forest,nd,ch,sibseq){
        return(_5(Node,forest,'$replace_child_at',nd,ch,sibseq))
    },
    $swap:function(Node,forest,nd0,nd1){
        _11(Node,forest,'$swap',nd0,nd1)
    },
    $erase:function(Node,forest,nd){
        return(_14(Node,forest,'$erase',nd))
    },
    $erase_r:function(Node,forest,nd){
        _12(Node,forest,'$erase_r',nd)
    },
    DFTT_CLONE_FUNC,
    $clone:function(Node,forest,nd,f=DFTT_CLONE_FUNC){
        return(_13(Node,forest,'$clone',nd,f))
    },
}

