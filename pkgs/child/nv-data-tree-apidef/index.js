const IS = [
  '$is_empty',            
  '$is_root',
  '$is_fstch', '$is_lstch',            
  '$is_leaf',  '$is_lonely',
]

const APP_IS = [
    '$is_isolated'
]

const BFS_IS = [
    '$is_lyr_fst',
    '$is_lyr_lst'
]

////


////

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
    '$bpl_',
    '$sdfs_index_',
    '$sdfs_leaf_index_',
    '$sdfs_nonleaf_index_',
    '$breadth_',
    '$pbreadth_'
]

const EDFS_GETTER = [
    '$edfs_index_',
    '$edfs_leaf_index_',
    '$edfs_nonleaf_index_'
]
const BFS_GETTER = [
    '$bfs_index_',
    '$bfs_leaf_index_',
    '$bfs_nonleaf_index_'
]

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

const BFS_ND_GETTER = [
    '$bfs_next_',
    '$bfs_prev_'
]


const NDS_GETTER = [
    '$ances_','$plances_',
    '$children_',
    '$sibs_','$psibs_','$fsibs_',
    '$sdfs_','$sdfs_leafs_','$sdfs_nonleafs_',
    '$edfs_',
    '$lst_des_lyr_',
    '$lst_lyr_','$own_lyr_','$plyr_',
    '$bfs_','$des_bfs_',
]


const NDMAT_GETTER = [
    '$des_lyrs_',
    '$lyrs_',
]

////

const GET_ND_WITH_INDEX = [
    '$ance','$plance',
    '$child',
    '$sib','$psib','$fsib'
]

const GET_NDS_WITH_ND = [
    '$rel_own_lyr',
    '$rel_plyr',
]

const GET_NDS_WITH_INDEX = [
    '$des_lyr',
    '$lyr'
]

const GET_NDS_WITH_INDEXES = [
    '$some_ances',
    '$some_plances',
    '$some_children',
    '$some_sibs',
    '$some_psibs',
    '$some_fsibs',
]



const GET_WITH_ND = [
    '$ance_dist',
    '$sib_dist',
    '$sdfs_rel_index',
    '$sdfs_rel_leaf_index',
    '$sdfs_rel_nonleaf_index',
    '$rel_spl',
    '$rel_offset',
    '$rel_breadth',
    '$rel_pbreadth',
    '$rel_bpl',
]


const EDFS_GET_WITH_ND = [
    '$edfs_rel_index',
    '$edfs_rel_leaf_index',
    '$edfs_rel_nonleaf_index',
]

const BFS_GET_WITH_ND = [
    '$bfs_rel_index',
    '$bfs_rel_leaf_index',
    '$bfs_rel_nonleaf_index',
]

const GET_NDMAT_WITH_INDEXES = [
    '$some_des_lyrs',
    '$some_lyrs',
]


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


const GEN = [
    '$gen_sdfs_next_srch_action', 
    '$gen_sdfs_next_build_action',
    '$gen_sdfs_prev_srch_action',
    '$gen_sdfs_prev_build_action',
]

//for csp-tree delete $gen_sib,$gen_bfs,$gen_des_bfs
//                   
const GEN_ND = [
    '$gen_ance',
    '$gen_child_from_fst','$gen_child_from_lst',
    '$gen_sib' ,'$gen_psib','$gen_fsib',
    '$gen_lmost','$gen_rmost',
    '$gen_sdfs_next',
    '$gen_sdfs_next_leaf',
    '$gen_sdfs_next_nonleaf',
    '$gen_sdfs_prev',
    '$gen_sdfs_prev_leaf',
    '$gen_sdfs_prev_nonleaf',
    '$gen_edfs_next',
    '$gen_edfs_prev',
    '$gen_bfs',
    '$gen_des_bfs'
]


const GEN_SIB_ND = [
    '$gen_sib_from_fst','$gen_sib_from_lst'
]

const GEN_BFS_ND = [
    '$gen_bfs',
    '$gen_des_bfs'
]

const GEN_LYR_ND = [
    '$gen_lyr_next',
    '$gen_lyr_prev',
]

const GEN_LYR_ND_WITH_ND = [
    '$gen_des_lyr_next',
    '$gen_des_lyr_prev',
]

const GEN_NDS = [
    '$gen_des_lyr',
    '$gen_lyr',
]

const  GET_ND_WITH_PL = [
   '$get_with_spl',
   '$get_with_bpl'
]


////
const SDFS_ACTION = [
    //(direction) => []
    '$sdfs_next_srch_action',
    '$sdfs_next_build_action',
    '$sdfs_prev_srch_action',
    '$sdfs_prev_build_action',
]

////
const SEDFS_ND_GETTER = [
    '$sedfs_next',
    '$sedfs_prev',
]

const SEDFS_NDS_GETTER = [
    //[[nd,flag].....]
    '$sedfs_'
]

const SEDFS_GEN_ND = [
    //(flag)=>[nd,flag]
    '$gen_sedfs_next',
    '$gen_sedfs_prev',
]



////

const OP = [
    '$noop','$erase','$erase_r',
    '$disconn','$rm_fstch','$rm_lstch',
    '$rm_children',
    '$connto','$add_parent',
    '$prepend_child','$prepend_children',
    '$append_child','$append_children','$insert_child_at','$insert_children_at',
    '$add_lsib','$add_lsibs','$add_rsib','$add_rsibs',
    '$rm_child','$rm_some_children',
    '$replace_with','$replace_child_at','$clone','$swap'
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

const UTIL = [
    '$extract_vertexes'
]



const CMP = [
    '$deep_lseq',
    '$deep_steq'
]

////
const RELATION_ANCE = [
    "$cmmn_ances",
    "$fst_cmmn_ance",
    "$dist",
    "$path_to"
]

////
const VISIT = [
    '$more_less',
    '$gen_visit',
    '$visit'
]


module.exports = {
    IS,
    BFS_IS,
    APP_IS,
    GETTER,
    EDFS_GETTER,
    BFS_GETTER,
    ND_GETTER,
    BFS_ND_GETTER,
    NDS_GETTER,
    NDMAT_GETTER,
    GET_ND_WITH_INDEX,
    GET_NDS_WITH_ND,
    GET_NDS_WITH_INDEX,
    GET_NDS_WITH_INDEXES,
    GET_WITH_ND,
    EDFS_GET_WITH_ND,
    BFS_GET_WITH_ND,
    GET_NDMAT_WITH_INDEXES,
    OF,
    GEN,
    GEN_ND,
    GEN_SIB_ND,
    GEN_BFS_ND,
    GEN_LYR_ND,
    GEN_LYR_ND_WITH_ND,
    GEN_NDS,
    GET_ND_WITH_PL,
    SDFS_ACTION,
    SEDFS_ND_GETTER,
    SEDFS_NDS_GETTER,
    SEDFS_GEN_ND,
    OP,
    UTIL,
    CMP,
    RELATION_ANCE,
    CHDES_OP_WITH_ZERO,
    CHDES_OP_WITH_ONE,
    CHDES_OP_WITH_SIBSEQ,
    VISIT,
}
