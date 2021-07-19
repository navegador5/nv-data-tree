const {FLAG_DICT} = require("../nv-data-tree-actdef/index");


const desckl    =  ["lib","cate","args","rtrn","getter"];


function creat_fac_ref(cfg) {
    let refs = []
    cfg.forEach(e=>{
        let ref = {};
        desckl.forEach((k,i) => {ref[k] =e[i]});
        ref.getter = ref.cate.includes("GETTER");
        refs.push(ref)
    });
    return(refs)
}


const args_id0  =       (that,nd,idxs,os)  => [[that.$id_],        [],  []]; 
const args_id01 =       (that,nd,idxs,os)  => [[that.$id_,nd.$id_],[],  []]; 
const args_id0_idxs =   (that,nd,idxs,os)  => [[that.$id_],        idxs,[]];
const args_id0_os   =   (that,nd,idxs,os)  => [[that.$id_],        [],  os];
const args_id0_o0   =   (that,nd,idxs,os)  => [[that.$id_],        [],  [o0]];

const rtrn_orig =  (forest,rslt)  => rslt;
const rtrn_nd   =  (forest,rslt)  => (rslt===0)?null:forest.slot(rslt);
const rtrn_nds  =  (forest,rslt)  => rslt.map(r=>rtrn_nd(forest,r));
const rtrn_nd_and_flag = (forest,rslt) => [
    rtrn_nd(forest,rslt[0]),
    FLAG_DICT[rslt[1]]
]

const rtrn_ndg  =  function *(forest,rslt) {
    for(let each of rslt) {
        yield(rtrn_nd(forest,each))
    }
}

const rtrn_ndsg = function *(forest,rslt) {
    for(let nds of rslt) {
        yield(rtrn_nds(forest,nds))
    }
}

const rtrn_ndmat = (forest,rslt) => rslt.map(nds=>rtrn_nds(forest,nds));

const rtrn_og = function *(forest,rslt) {yield*rslt}

const rtrn_ndflags = (forest,rslt) => rslt.map(r=>rtrn_nd_and_flag(forest,r));

const rtrn_ndflagg = function *(forest,rslt) {
    for(let [id,flag] of rslt) {
        yield([rtrn_nd(forest,id),FLAG_DICT[flag]])
    }
}


////
const IS = [
  '$is_empty',            
  '$is_root',
  '$is_fstch', '$is_midch', '$is_lstch',            
  '$is_leaf',  '$is_lonely',
  '$is_isolated'
]

const LYR_IS = [
    '$is_lyr_fst',
    '$is_lyr_bst',
    '$is_lyr_lst'
]

const GETTER = [
    '$depth_',
    '$children_count_',
    '$sibseq_',
    '$sibs_count_',
    '$psibs_count_',
    '$fsibs_count_',
    '$spl_',
    '$length_',
    '$width_',
    '$nonleaf_length_',
    '$offset_',
    '$sdfs_next_srch_action_list_',
    '$sdfs_next_build_action_list_',
    '$sdfs_prev_srch_action_list_',
    '$sdfs_prev_build_action_list_',
    '$height_',
    '$sdfs_index_',
    '$sdfs_leaf_index_',
    '$sdfs_nonleaf_index_',
    '$edfs_index_',
    '$edfs_leaf_index_',
    '$edfs_nonleaf_index_'
]


const BFS_GETTER = [
    '$bpl_',
    '$breadth_',
    '$pbreadth_',
    '$bfs_index_',
    '$bfs_leaf_index_',
    '$bfs_nonleaf_index_'
]



const $cfg_add_$args_id0_$rtrn_orig = [
    ["cspis" ,"IS"           ],
    ["cspbfs","LYR_IS"       ],
    ["cspbfs","BFS_GETTER",  ],
    ["cspget","GETTER",      ],
]


const add_$args_id0_$rtrn_orig = creat_fac_ref($cfg_add_$args_id0_$rtrn_orig);
add_$args_id0_$rtrn_orig.forEach(e=>{e.args=args_id0,e.rtrn=rtrn_orig});



////

const SDFS_ACTION = [
    //(direction) => []
    '$sdfs_next_srch_action',
    '$sdfs_next_build_action',
    '$sdfs_prev_srch_action',
    '$sdfs_prev_build_action',
]


const $cfg_add_$args_id0_o0_$rtrn_orig = [
    ["cspact","SDFS_ACTION", ],
]


const add_$args_id0_o0_$rtrn_orig = creat_fac_ref($cfg_add_$args_id0_o0_$rtrn_orig);
add_$args_id0_o0_$rtrn_orig.forEach(e=>{e.args=args_id0_o0,e.rtrn=rtrn_orig});


////

const ND_GETTER = [
    '$self_',
    '$root_','$parent_',
    '$fstch_','$lstch_',
    '$fstsib_',  '$lstsib_',
    '$lsib_',   '$fstpsib_', '$rsib_',   '$lstfsib_',
    '$dlmost_','$drmost_',
    '$lsib_of_fst_ance_having_lsib_','$rsib_of_fst_ance_having_rsib_',
    '$luncle_','$runcle_',
    '$lcin_','$rcin_',
    '$sdfs_next_',
    '$sdfs_prev_',
    '$edfs_next_',
    '$edfs_prev_',
]


const LYR_ND_GETTER = [
    '$lyr_next_',
    '$lyr_prev_'
]



const $cfg_add_$args_id0_$rtrn_nd = [
    ["ndget",    "ND_GETTER" ],
    ["cspbfs","LYR_ND_GETTER"],
]

const add_$args_id0_$rtrn_nd = creat_fac_ref($cfg_add_$args_id0_$rtrn_nd);
add_$args_id0_$rtrn_nd.forEach(e=>{e.args=args_id0,e.rtrn=rtrn_nd});


////

const OF = [
  '$is_root_of',          '$is_parent_of',
  '$is_ance_of',          '$is_inclusive_ance_of',
  '$is_child_of',         '$is_fstch_of',
  '$is_lstch_of',         '$is_des_of',
  '$is_inclusive_des_of', '$is_fsib_of',
  '$is_rsib_of',          '$is_psib_of',
  '$is_lsib_of',          '$is_sib_of',
  '$is_inclusive_sib_of'
]


const REL_LYR_IS = [
    '$is_des_lyr_fst',
    '$is_des_lyr_bst',
    '$is_des_lyr_lst'
]

const GET_WITH_ND = [
    '$ance_dist',
    '$sib_dist',
    '$sdfs_des_index',
    '$sdfs_des_leaf_index',
    '$sdfs_des_nonleaf_index',
    '$edfs_des_index',
    '$edfs_des_leaf_index',
    '$edfs_des_nonleaf_index',
    '$des_spl',
    '$des_offset',
]

const BFS_GET_WITH_ND = [
    '$des_breadth','$des_pbreadth','$des_bpl',
    '$bfs_des_index','$bfs_des_leaf_index','$bfs_des_nonleaf_index'
]


const $cfg_add_$args_id01_$rtrn_orig = [
    ["cspof",    "OF"],
    ["cspbfs",   "REL_LYR_IS"],
    ["getwnd",   "GET_WITH_ND"],
    ["cspbfs",   "BFS_GET_WITH_ND"]
]

const add_$args_id01_$rtrn_orig = 
    creat_fac_ref($cfg_add_$args_id01_$rtrn_orig);

add_$args_id01_$rtrn_orig.forEach(e=>{e.args=args_id01,e.rtrn=rtrn_orig});


////

const GET_ND_WITH_INDEX = [
    '$ance','$plance',
    '$child',
    '$sib','$psib','$fsib'
]

const $cfg_add_$args_id0_idx0_$rtrn_nd = [
    ['ndgetwi','GET_ND_WITH_INDEX']
]

const add_$args_id0_idx0_$rtrn_nd =
    creat_fac_ref($cfg_add_$args_id0_idx0_$rtrn_nd);

add_$args_id0_idx0_$rtrn_nd.forEach(e=>{e.args=args_id0_idxs,e.rtrn=rtrn_nd});


////

const GET_NDS_WITH_INDEXES = [
    '$some_ances',
    '$some_plances',
    '$some_children',
    '$some_sibs',
    '$some_psibs',
    '$some_fsibs',
]

const $cfg_add_$args_id0_idxs_$rtrn_nds = [
    ["ndsgetwis","GET_NDS_WITH_INDEXES"],
]

const add_$args_id0_idxs_$rtrn_nds =
    creat_fac_ref($cfg_add_$args_id0_idxs_$rtrn_nds);

add_$args_id0_idxs_$rtrn_nds.forEach(
    e=>{e.args=args_id0_idxs,e.rtrn=rtrn_nds}
);


////
const GEN_ND = [
    '$gen_ance',
    '$gen_child_from_fst','$gen_child_from_lst',
    '$gen_sib_from_fst','$gen_sib_from_lst',
    '$gen_psib','$gen_fsib',
    '$gen_lmost','$gen_rmost',
    '$gen_sdfs_next',
    '$gen_sdfs_next_leaf',
    '$gen_sdfs_next_nonleaf',
    '$gen_sdfs_prev',
    '$gen_sdfs_prev_leaf',
    '$gen_sdfs_prev_nonleaf',
    '$gen_edfs_next',
    '$gen_edfs_next_leaf',
    '$gen_edfs_next_nonleaf',
    '$gen_edfs_prev',
    '$gen_edfs_prev_leaf',
    '$gen_edfs_prev_nonleaf',
]


const GEN_LYR_ND = [
    '$gen_lyr_next',
    '$gen_lyr_prev',
]


const $cfg_add_$args_id0_$rtrn_ndg = [
    ["ndgen","GEN_ND"],
    ["cspbfs","GEN_LYR_ND"],
]

const add_$args_id0_$rtrn_ndg =
    creat_fac_ref($cfg_add_$args_id0_$rtrn_ndg);

add_$args_id0_$rtrn_ndg.forEach(
    e=>{e.args=args_id0,e.rtrn=rtrn_ndg}
);




////
const GEN_NDS = [
    '$gen_des_lyr',
    '$gen_lyr',
]

const $cfg_add_$args_id0_$rtrn_ndsg = [
    ["cspbfs","GEN_NDS"]
]

const add_$args_id0_$rtrn_ndsg =
    creat_fac_ref($cfg_add_$args_id0_$rtrn_ndsg);

add_$args_id0_$rtrn_ndsg.forEach(
    e=>{e.args=args_id0,e.rtrn=rtrn_ndsg}
);


////

const NDMAT_GETTER = [
    '$des_lyrs_',
    '$lyrs_',
]

const $cfg_add_$args_id0_$rtrn_ndmat = [
    ["cspbfs","NDMAT_GETTER"]
]

const add_$args_id0_$rtrn_ndmat =
    creat_fac_ref($cfg_add_$args_id0_$rtrn_ndmat);

add_$args_id0_$rtrn_ndmat.forEach(
    e=>{e.args=args_id0,e.rtrn=rtrn_ndmat}
);



////

const REL_LYR_ND_GETTER = [
    '$des_lyr_next',
    '$des_lyr_prev'
]


const $cfg_add_$args_id01_$rtrn_nd = [
    ["cspbfs","REL_LYR_ND_GETTER"],
]

const add_$args_id01_$rtrn_nd =
    creat_fac_ref($cfg_add_$args_id01_$rtrn_nd);

add_$args_id01_$rtrn_nd.forEach(
    e=>{e.args=args_id01,e.rtrn=rtrn_nd}
);



////

const BFS_ND_GETTER = [
    '$bfs_next_',
    '$bfs_prev_'
]


const SEDFS_AFTER_ND_GETTER = [
    '$sedfs_next_after_open_',
    '$sedfs_next_after_close_'
]

const SEDFS_BEFORE_ND_GETTER = [
    '$sedfs_prev_before_open_',
    '$sedfs_prev_before_close_'
]


const $cfg_add_$args_id0_$rtrn_nd_and_flag = [
    ["cspbfs","BFS_ND_GETTER"],
    ["sedfs","SEDFS_AFTER_ND_GETTER"],
    ["sedfs","SEDFS_BEFORE_ND_GETTER"]
]

const add_$args_id0_$rtrn_nd_and_flag =
    creat_fac_ref($cfg_add_$args_id0_$rtrn_nd_and_flag);

add_$args_id0_$rtrn_nd_and_flag.forEach(
    e=>{e.args=args_id0,e.rtrn=rtrn_nd_and_flag}
);

////
const REL_BFS_ND_GETTER = [
    '$bfs_des_next',
    '$bfs_des_prev'
]

const $cfg_add_$args_id01_$rtrn_nd_and_flag = [
    ["cspbfs","REL_BFS_ND_GETTER"]
]

const add_$args_id01_$rtrn_nd_and_flag =
    creat_fac_ref($cfg_add_$args_id01_$rtrn_nd_and_flag);

add_$args_id01_$rtrn_nd_and_flag.forEach(
    e=>{e.args=args_id01,e.rtrn=rtrn_nd_and_flag}
);


////

const NDS_GETTER = [
    '$ances_','$plances_',
    '$children_',
    '$sibs_','$psibs_','$fsibs_',
    '$sdfs_','$sdfs_leafs_','$sdfs_nonleafs_',
    '$edfs_',
]

const BFS_NDS_GETTER = [
    '$lst_des_lyr_',
    '$lst_lyr_','$own_lyr_','$plyr_',
]


const $cfg_add_$args_id0_$rtrn_nds = [
    ["ndsget","NDS_GETTER"],
    ["cspbfs","BFS_NDS_GETTER"]
]

const add_$args_id0_$rtrn_nds =
    creat_fac_ref($cfg_add_$args_id0_$rtrn_nds);

add_$args_id0_$rtrn_nds.forEach(
    e=>{e.args=args_id0,e.rtrn=rtrn_nds}
);



////
const GET_NDMAT_WITH_INDEXES = [
    '$some_des_lyrs',
    '$some_lyrs',
]

const $cfg_add_$args_id0_idxs_$rtrn_ndmat = [
    ["cspbfs","GET_NDMAT_WITH_INDEXES"]
]

const add_$args_id0_idxs_$rtrn_ndmat =
    creat_fac_ref($cfg_add_$args_id0_idxs_$rtrn_ndmat);

add_$args_id0_idxs_$rtrn_ndmat.forEach(
    e=>{e.args=args_id0_idxs,e.rtrn=rtrn_ndmat}
);



////

const GET_NDS_WITH_INDEX = [
    '$des_lyr',
    '$lyr'
]

const $cfg_add_$args_id0_idx0_$rtrn_nds = [
    ["cspbfs","GET_NDS_WITH_INDEX"]
]


const add_$args_id0_idx0_$rtrn_nds =
    creat_fac_ref($cfg_add_$args_id0_idx0_$rtrn_nds);

add_$args_id0_idx0_$rtrn_nds.forEach(
    e=>{e.args=args_id0_idxs,e.rtrn=rtrn_nds}
);


////

const GET_NDS_WITH_ND = [
    '$des_own_lyr',
    '$des_plyr',
]

const $cfg_add_$args_id01_$rtrn_nds = [
    ["cspbfs","GET_NDS_WITH_ND"]
]

const add_$args_id01_$rtrn_nds =
    creat_fac_ref($cfg_add_$args_id01_$rtrn_nds);

add_$args_id01_$rtrn_nds.forEach(
    e=>{e.args=args_id01,e.rtrn=rtrn_nds}
);


////
const GEN_LYR_ND_WITH_ND = [
    '$gen_des_lyr_next',
    '$gen_des_lyr_prev',
]

const $cfg_add_$args_id01_$rtrn_ndg = [
    ["cspbfs","GEN_LYR_ND_WITH_ND"]
]

const add_$args_id01_$rtrn_ndg =
    creat_fac_ref($cfg_add_$args_id01_$rtrn_ndg);

add_$args_id01_$rtrn_ndg.forEach(
    e=>{e.args=args_id01,e.rtrn=rtrn_ndg}
);


////
const GEN = [
    '$gen_sdfs_next_srch_action',
    '$gen_sdfs_next_build_action',
    '$gen_sdfs_prev_srch_action',
    '$gen_sdfs_prev_build_action',
]

const $cfg_add_$args_id0_$rtrn_og = [
    ["cspact","GEN"]
]

const add_$args_id0_$rtrn_og =
    creat_fac_ref($cfg_add_$args_id0_$rtrn_og);

add_$args_id0_$rtrn_og.forEach(
    e=>{e.args=args_id0,e.rtrn=rtrn_og}
);


////


const  GET_ND_WITH_PL = [
   '$get_with_spl',
]


const $cfg_add_$args_id0_o0_$rtrn_nd = [
    ["ndgetwo", "GET_ND_WITH_PL"]
]

const add_$args_id0_o0_$rtrn_nd =
    creat_fac_ref($cfg_add_$args_id0_o0_$rtrn_nd);

add_$args_id0_o0_$rtrn_nd.forEach(
    e=>{e.args=args_id0_os,e.rtrn=rtrn_nd}
);


////

const SEDFS_ND_GETTER = [
    '$sedfs_next',
    '$sedfs_prev',
]

const $cfg_add_$args_id0_o0_$rtrn_nd_and_flag = [
    ["sedfs",  "SEDFS_ND_GETTER"]
]

const add_$args_id0_o0_$rtrn_nd_and_flag =
    creat_fac_ref($cfg_add_$args_id0_o0_$rtrn_nd_and_flag);

add_$args_id0_o0_$rtrn_nd_and_flag.forEach(
    e=>{e.args=args_id0_os,e.rtrn=rtrn_nd_and_flag}
);


////


const SEDFS_NDS_GETTER = [
    //[[nd,flag].....]
    '$sedfs_'
]

const BFS_NDFLAGS_GETTER = [
    '$bfs_','$des_bfs_'
]


const $cfg_add_$args_id0_$rtrn_ndflags = [
    ["cspbfs","BFS_NDFLAGS_GETTER"],
    ["sedfs","SEDFS_NDS_GETTER"]
]

const add_$args_id0_$rtrn_ndflags =
    creat_fac_ref($cfg_add_$args_id0_$rtrn_ndflags);

add_$args_id0_$rtrn_ndflags.forEach(
    e=>{e.args=args_id0,e.rtrn=rtrn_ndflags}
);


////

//WITH FST MID LST FLAG
const BFS_GEN_ND_AND_FLAG = [
    '$gen_bfs',
    '$gen_des_bfs'
]

const SEDFS_GEN_NEXT_AFTER_ND = [
    '$gen_sedfs_next_after_open',
    '$gen_sedfs_next_after_close'
]

const SEDFS_GEN_PREV_BEFORE_ND = [
    '$gen_sedfs_prev_before_open',
    '$gen_sedfs_prev_before_close'
]


const $cfg_add_$args_id0_$rtrn_ndflagg = [
    ["cspbfs","BFS_GEN_ND_AND_FLAG"],
    ["sedfs","SEDFS_GEN_NEXT_AFTER_ND"],
    ["sedfs","SEDFS_GEN_PREV_BEFORE_ND"],
]

const add_$args_id0_$rtrn_ndflagg =
    creat_fac_ref($cfg_add_$args_id0_$rtrn_ndflagg);

add_$args_id0_$rtrn_ndflagg.forEach(
    e=>{e.args=args_id0,e.rtrn=rtrn_ndflagg}
);


////

const SEDFS_GEN_ND_AND_FLAG = [
    //(flag)=>[nd,flag]
    '$gen_sedfs_next',
    '$gen_sedfs_prev',
]
const $cfg_add_$args_id0_o0_$rtrn_ndflagg = [
    ["sedfs","SEDFS_GEN_ND_AND_FLAG"]
]

const add_$args_id0_o0_$rtrn_ndflagg =
    creat_fac_ref($cfg_add_$args_id0_o0_$rtrn_ndflagg);

add_$args_id0_o0_$rtrn_ndflagg.forEach(
    e=>{e.args=args_id0_os,e.rtrn=rtrn_ndflagg}
);





////

const BSC_PEND_OP = [
    '$prepend_child','$append_child',
]

const BSC_ASIB_OP = [
    '$add_rsib','$add_lsib'
]

const BSC_ADD_OP = [
    ...BSC_PEND_OP,
    ...BSC_ASIB_OP
]

////

const MULTI_PEND_OP = [
    '$prepend_children','$append_children'
]

const MULTI_ASIB_OP = [
    '$add_rsibs','$add_lsibs'
]

const MULTI_ADD_OP = [
    ...MULTI_PEND_OP,
    ...MULTI_ASIB_OP
]

////

const INSERT_OP = [ 
    '$insert_child_before',
    '$insert_child_after',
    '$insert_children_before',
    '$insert_children_after'
]

////
const UPSTREAM_OP = ['$connto','$add_parent','$add_parent_and_lsib','$add_or_goto_parent']


////

const DISCONN_OP = [
    '$disconn','$rm_fstch','$rm_lstch','$rm_children', '$rm_child','$rm_some_children'
]

////

const OP = [
    '$noop',
    '$erase','$erase_r',
    '$replace_tree','$replace_child_tree_at',
    '$replace_node','$replace_child_node_at',
    '$swap_tree',
    '$swap_node',
    '$clone',
]

const CHDES_OP_WITH_ZERO = [
    '$rm_fstch','$rm_lstch','$rm_children','$erase_r'
]

const CHDES_OP_WITH_ONE = [
    '$append_child','$prepend_child',
    '$append_children','$prepend_children',
    '$rm_child','$rm_some_children'
]

const CHDES_OP_WITH_SIBSEQ = [
    '$insert_child_at','$insert_children_at','$replace_child_at'
]

////

const RELATION_ANCE = [
    "$cmmn_ances",
    "$fst_cmmn_ance",
    "$dist",
    "$path_to"
]


const CMP = [
    '$deep_lseq',
    '$deep_steq'
]

////

const COND_LEAF = [
    '$cond_leaf_sdfs_next',
    '$gen_cond_leaf_sdfs_next',
    '$cond_leaf_sedfs_next',
    '$gen_cond_leaf_sedfs_next',
]

const REPR = [
    '$is_repr_enabled',
    '$enable_repr',
    '$disable_repr',
]

const UI = [
    '$is_disp_enabled',
    '$expand',
    '$foldup',
    '$expand_all',
    '$foldup_all'
]

////
const VISIT = [
    '$more_less',
    '$gen_visit',
    '$visit'
]

////
const DUMP = [
    '$dump',
    '$to_nest',
]

////
const FOREST = [
    'ids_',
    'slots_',
    'slot',
    'gen_entry',
    'nodes_',
    'trees_',
    'isolates_',
    'tree',
    'node',
    'erase_isolated',
    'dump',
    'load_nd_from_dump',
    'load_nd_from_nest',
    'merge',
    'defrag'
]

////only-for-child-vertexes
const UTIL = [
    '$extract_vertexes',
]
////

const is_getter_fn = (fn)=>fn.endsWith("_");


const RM_METHOD_ARY_OF_MUSTLEAF = [
    "$append_child",
    "$append_children",
    "$prepend_child",
    "$prepend_children",
    "$insert_child_after",
    "$insert_child_before",
    "$insert_children_after",
    "$insert_children_before"
]

module.exports = {
    is_getter_fn,
    ////
    args_id0,
    args_id01,
    args_id0_idxs,
    args_id0_o0,
    args_id0_os,
    rtrn_orig,
    rtrn_nd,
    rtrn_nds,
    rtrn_ndg,
    rtrn_ndsg,
    rtrn_ndmat,
    rtrn_nd_and_flag,
    rtrn_og,
    rtrn_ndflags,
    rtrn_ndflagg,
    ////
    IS,LYR_IS,BFS_GETTER,GETTER,
    add_$args_id0_$rtrn_orig,
    ////
    SDFS_ACTION,
    add_$args_id0_o0_$rtrn_orig,
    ////
    ND_GETTER,LYR_ND_GETTER,BFS_ND_GETTER, 
    add_$args_id0_$rtrn_nd,
    ////
    OF,REL_LYR_IS,GET_WITH_ND,BFS_GET_WITH_ND,
    add_$args_id01_$rtrn_orig,
    ////
    GET_ND_WITH_INDEX,
    add_$args_id0_idx0_$rtrn_nd,
    ////
    GET_NDS_WITH_INDEXES,
    add_$args_id0_idxs_$rtrn_nds,
    ////
    GEN_ND,GEN_LYR_ND,
    add_$args_id0_$rtrn_ndg,
    ////
    GEN_NDS,
    add_$args_id0_$rtrn_ndsg,
    ////
    NDMAT_GETTER,
    add_$args_id0_$rtrn_ndmat,
    ////
    REL_LYR_ND_GETTER,
    add_$args_id01_$rtrn_nd,
    ////
    SEDFS_AFTER_ND_GETTER,SEDFS_BEFORE_ND_GETTER,
    add_$args_id0_$rtrn_nd_and_flag,
    ////
    REL_BFS_ND_GETTER,
    add_$args_id01_$rtrn_nd_and_flag,
    ////
    NDS_GETTER,BFS_NDS_GETTER,
    add_$args_id0_$rtrn_nds,
    ////
    GET_NDMAT_WITH_INDEXES,
    add_$args_id0_idxs_$rtrn_ndmat,
    ////
    GET_NDS_WITH_INDEX,
    add_$args_id0_idx0_$rtrn_nds,
    ////
    GET_NDS_WITH_ND,
    add_$args_id01_$rtrn_nds,
    ////
    GEN_LYR_ND_WITH_ND,
    add_$args_id01_$rtrn_ndg,
    ////
    GEN,
    add_$args_id0_$rtrn_og,
    ////
    GET_ND_WITH_PL,
    add_$args_id0_o0_$rtrn_nd,
    ////
    SEDFS_ND_GETTER,
    add_$args_id0_o0_$rtrn_nd_and_flag,
    ////
    BFS_NDFLAGS_GETTER,
    SEDFS_NDS_GETTER,
    add_$args_id0_$rtrn_ndflags,
    ////
    BFS_GEN_ND_AND_FLAG,SEDFS_GEN_NEXT_AFTER_ND,SEDFS_GEN_PREV_BEFORE_ND,
    add_$args_id0_$rtrn_ndflagg,
    ////
    SEDFS_GEN_ND_AND_FLAG,
    add_$args_id0_o0_$rtrn_ndflagg,
    ////
    BSC_PEND_OP,
    BSC_ASIB_OP,
    BSC_ADD_OP,
    ////
    MULTI_PEND_OP,
    MULTI_ASIB_OP,
    MULTI_ADD_OP,
    ////
    INSERT_OP,
    UPSTREAM_OP,
    ////
    DISCONN_OP,
    ////
    OP,
    ////
    COND_LEAF,
    ////
    REPR,
    UI,
    ////
    CMP,
    RELATION_ANCE,
    CHDES_OP_WITH_ZERO,
    CHDES_OP_WITH_ONE,
    CHDES_OP_WITH_SIBSEQ,
    VISIT,
    ////
    DUMP,
    ////
    FOREST,
    ////
    UTIL,
    ////
    RM_METHOD_ARY_OF_MUSTLEAF,
}
