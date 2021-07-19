const {FLAG_DICT} = require("nv-data-tree-actdef");

function _sdfs_next(condf,nd) {
    if(!condf(nd)) {
        return(nd.$sdfs_next_)
    } else {
        let rsib = nd.$rsib_;
        return(
            (rsib !== null)?rsib:nd.$rsib_of_fst_ance_having_rsib_
        )
    }
}

function * _gen_sdfs_next(condf,nd) {
    let drmost  = nd.$drmost_;
    let term = drmost.$sdfs_next_;
    while(nd!==term) {
        yield(nd);
        nd = _sdfs_next(condf,nd);
    }
}

////

function _sedfs_next(condf,nd,flag) {
    if(!condf(nd)) {
        return(nd.$sedfs_next(flag))
    } else {
        if(flag === FLAG_DICT.open) {
            return([nd,'close'])
        } else {
            return(nd.$sedfs_next_after_close_)
        }
    }
}

function * _gen_sedfs_next(condf,nd) {
    let flag = 'open';
    let [term,tflag] = nd.$sedfs_next(FLAG_DICT['close']);
    while(nd!==term || flag!==tflag) {
        yield([nd,flag]);
        [nd,flag] = _sedfs_next(condf,nd,FLAG_DICT[flag])
    }
}


function add_cond_leaf_sdfs_next(Node) {
    Node.prototype.$cond_leaf_sdfs_next = function(condf) {
        return(_sdfs_next(condf,this))
    }
}

function add_gen_cond_leaf_sdfs_next(Node) {
    Node.prototype.$gen_cond_leaf_sdfs_next = function *(condf) {
        yield * _gen_sdfs_next(condf,this)
    }
}


function add_cond_leaf_sedfs_next(Node) {
    Node.prototype.$cond_leaf_sedfs_next = function(condf,flag) {
        return(_sedfs_next(condf,this,flag))
    }
}

function add_gen_cond_leaf_sedfs_next(Node) {
    Node.prototype.$gen_cond_leaf_sedfs_next = function *(condf) {
        yield * _gen_sedfs_next(condf,this)
    }
}


module.exports = {
    add_cond_leaf_sdfs_next,
    add_gen_cond_leaf_sdfs_next,
    add_cond_leaf_sedfs_next,
    add_gen_cond_leaf_sedfs_next,
}




