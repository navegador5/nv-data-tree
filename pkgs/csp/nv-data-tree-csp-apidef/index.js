const{FLAG_DICT}=require("nv-data-tree-actdef"),LIBS={cspis:"nv-data-tree-csp-is",cspbfs:"nv-data-tree-csp-bfs",cspact:"nv-data-tree-csp-act",cspget:"nv-data-tree-csp-get",ndget:"nv-data-tree-csp-ndget",cspof:"nv-data-tree-csp-of",getwnd:"nv-data-tree-csp-getwnd",ndgetwi:"nv-data-tree-csp-ndgetwi",ndsgetwis:"nv-data-tree-csp-ndsgetwis",ndgen:"nv-data-tree-csp-ndgen",sedfs:"nv-data-tree-csp-sedfs",ndsget:"nv-data-tree-csp-ndsget",ndgetwo:"nv-data-tree-csp-ndgetwo"};function require_lib(){let _={};for(var r in LIBS)_[r]=require(LIBS[r]);return _}const desckl=["lib","cate","args","rtrn","getter"];function creat_fac_ref(_){let r=[];return _.forEach(d=>{let s={};desckl.forEach((_,r)=>{s[_]=d[r]}),s.getter=s.cate.includes("GETTER"),r.push(s)}),r}const args_id0=(_,r,d,s)=>[[_.$id_],[],[]],args_id01=(_,r,d,s)=>[[_.$id_,r.$id_],[],[]],args_id0_idxs=(_,r,d,s)=>[[_.$id_],d,[]],args_id0_os=(_,r,d,s)=>[[_.$id_],[],s],args_id0_o0=(_,r,d,s)=>[[_.$id_],[],[o0]],rtrn_orig=(_,r)=>r,rtrn_nd=(_,r)=>0===r?null:_.slot(r),rtrn_nds=(r,_)=>_.map(_=>rtrn_nd(r,_)),rtrn_nd_and_flag=(_,r)=>[rtrn_nd(_,r[0]),FLAG_DICT[r[1]]],rtrn_ndg=function*(_,r){for(var d of r)yield rtrn_nd(_,d)},rtrn_ndsg=function*(_,r){for(var d of r)yield rtrn_nds(_,d)},rtrn_ndmat=(r,_)=>_.map(_=>rtrn_nds(r,_)),rtrn_og=function*(_,r){yield*r},rtrn_ndflags=(r,_)=>_.map(_=>rtrn_nd_and_flag(r,_)),rtrn_ndflagg=function*(_,r){for(var[d,s]of r)yield[rtrn_nd(_,d),FLAG_DICT[s]]},IS=["$is_empty","$is_root","$is_fstch","$is_midch","$is_lstch","$is_leaf","$is_lonely","$is_isolated"],LYR_IS=["$is_lyr_fst","$is_lyr_bst","$is_lyr_lst"],GETTER=["$depth_","$children_count_","$sibseq_","$sibs_count_","$psibs_count_","$fsibs_count_","$spl_","$length_","$width_","$nonleaf_length_","$offset_","$sdfs_next_srch_action_list_","$sdfs_next_build_action_list_","$sdfs_prev_srch_action_list_","$sdfs_prev_build_action_list_","$height_","$sdfs_index_","$sdfs_leaf_index_","$sdfs_nonleaf_index_","$edfs_index_","$edfs_leaf_index_","$edfs_nonleaf_index_"],BFS_GETTER=["$bpl_","$breadth_","$pbreadth_","$bfs_index_","$bfs_leaf_index_","$bfs_nonleaf_index_"],$cfg_add_$args_id0_$rtrn_orig=[["cspis","IS"],["cspbfs","LYR_IS"],["cspbfs","BFS_GETTER"],["cspget","GETTER"]],add_$args_id0_$rtrn_orig=creat_fac_ref($cfg_add_$args_id0_$rtrn_orig);add_$args_id0_$rtrn_orig.forEach(_=>{_.args=args_id0,_.rtrn=rtrn_orig});const SDFS_ACTION=["$sdfs_next_srch_action","$sdfs_next_build_action","$sdfs_prev_srch_action","$sdfs_prev_build_action"],$cfg_add_$args_id0_o0_$rtrn_orig=[["cspact","SDFS_ACTION"]],add_$args_id0_o0_$rtrn_orig=creat_fac_ref($cfg_add_$args_id0_o0_$rtrn_orig);add_$args_id0_o0_$rtrn_orig.forEach(_=>{_.args=args_id0_o0,_.rtrn=rtrn_orig});const ND_GETTER=["$self_","$root_","$parent_","$fstch_","$lstch_","$fstsib_","$lstsib_","$lsib_","$fstpsib_","$rsib_","$lstfsib_","$dlmost_","$drmost_","$lsib_of_fst_ance_having_lsib_","$rsib_of_fst_ance_having_rsib_","$luncle_","$runcle_","$lcin_","$rcin_","$sdfs_next_","$sdfs_prev_","$edfs_next_","$edfs_prev_"],LYR_ND_GETTER=["$lyr_next_","$lyr_prev_"],$cfg_add_$args_id0_$rtrn_nd=[["ndget","ND_GETTER"],["cspbfs","LYR_ND_GETTER"]],add_$args_id0_$rtrn_nd=creat_fac_ref($cfg_add_$args_id0_$rtrn_nd);add_$args_id0_$rtrn_nd.forEach(_=>{_.args=args_id0,_.rtrn=rtrn_nd});const OF=["$is_root_of","$is_parent_of","$is_ance_of","$is_inclusive_ance_of","$is_child_of","$is_fstch_of","$is_lstch_of","$is_des_of","$is_inclusive_des_of","$is_fsib_of","$is_rsib_of","$is_psib_of","$is_lsib_of","$is_sib_of","$is_inclusive_sib_of"],REL_LYR_IS=["$is_des_lyr_fst","$is_des_lyr_bst","$is_des_lyr_lst"],GET_WITH_ND=["$ance_dist","$sib_dist","$sdfs_des_index","$sdfs_des_leaf_index","$sdfs_des_nonleaf_index","$edfs_des_index","$edfs_des_leaf_index","$edfs_des_nonleaf_index","$des_spl","$des_offset"],BFS_GET_WITH_ND=["$des_breadth","$des_pbreadth","$des_bpl","$bfs_des_index","$bfs_des_leaf_index","$bfs_des_nonleaf_index"],$cfg_add_$args_id01_$rtrn_orig=[["cspof","OF"],["cspbfs","REL_LYR_IS"],["getwnd","GET_WITH_ND"],["cspbfs","BFS_GET_WITH_ND"]],add_$args_id01_$rtrn_orig=creat_fac_ref($cfg_add_$args_id01_$rtrn_orig);add_$args_id01_$rtrn_orig.forEach(_=>{_.args=args_id01,_.rtrn=rtrn_orig});const GET_ND_WITH_INDEX=["$ance","$plance","$child","$sib","$psib","$fsib"],$cfg_add_$args_id0_idx0_$rtrn_nd=[["ndgetwi","GET_ND_WITH_INDEX"]],add_$args_id0_idx0_$rtrn_nd=creat_fac_ref($cfg_add_$args_id0_idx0_$rtrn_nd);add_$args_id0_idx0_$rtrn_nd.forEach(_=>{_.args=args_id0_idxs,_.rtrn=rtrn_nd});const GET_NDS_WITH_INDEXES=["$some_ances","$some_plances","$some_children","$some_sibs","$some_psibs","$some_fsibs"],$cfg_add_$args_id0_idxs_$rtrn_nds=[["ndsgetwis","GET_NDS_WITH_INDEXES"]],add_$args_id0_idxs_$rtrn_nds=creat_fac_ref($cfg_add_$args_id0_idxs_$rtrn_nds);add_$args_id0_idxs_$rtrn_nds.forEach(_=>{_.args=args_id0_idxs,_.rtrn=rtrn_nds});const GEN_ND=["$gen_ance","$gen_child_from_fst","$gen_child_from_lst","$gen_sib_from_fst","$gen_sib_from_lst","$gen_psib","$gen_fsib","$gen_lmost","$gen_rmost","$gen_sdfs_next","$gen_sdfs_next_leaf","$gen_sdfs_next_nonleaf","$gen_sdfs_prev","$gen_sdfs_prev_leaf","$gen_sdfs_prev_nonleaf","$gen_edfs_next","$gen_edfs_next_leaf","$gen_edfs_next_nonleaf","$gen_edfs_prev","$gen_edfs_prev_leaf","$gen_edfs_prev_nonleaf"],GEN_LYR_ND=["$gen_lyr_next","$gen_lyr_prev"],$cfg_add_$args_id0_$rtrn_ndg=[["ndgen","GEN_ND"],["cspbfs","GEN_LYR_ND"]],add_$args_id0_$rtrn_ndg=creat_fac_ref($cfg_add_$args_id0_$rtrn_ndg);add_$args_id0_$rtrn_ndg.forEach(_=>{_.args=args_id0,_.rtrn=rtrn_ndg});const GEN_NDS=["$gen_des_lyr","$gen_lyr"],$cfg_add_$args_id0_$rtrn_ndsg=[["cspbfs","GEN_NDS"]],add_$args_id0_$rtrn_ndsg=creat_fac_ref($cfg_add_$args_id0_$rtrn_ndsg);add_$args_id0_$rtrn_ndsg.forEach(_=>{_.args=args_id0,_.rtrn=rtrn_ndsg});const NDMAT_GETTER=["$des_lyrs_","$lyrs_"],$cfg_add_$args_id0_$rtrn_ndmat=[["cspbfs","NDMAT_GETTER"]],add_$args_id0_$rtrn_ndmat=creat_fac_ref($cfg_add_$args_id0_$rtrn_ndmat);add_$args_id0_$rtrn_ndmat.forEach(_=>{_.args=args_id0,_.rtrn=rtrn_ndmat});const REL_LYR_ND_GETTER=["$des_lyr_next","$des_lyr_prev"],$cfg_add_$args_id01_$rtrn_nd=[["cspbfs","REL_LYR_ND_GETTER"]],add_$args_id01_$rtrn_nd=creat_fac_ref($cfg_add_$args_id01_$rtrn_nd);add_$args_id01_$rtrn_nd.forEach(_=>{_.args=args_id01,_.rtrn=rtrn_nd});const BFS_ND_GETTER=["$bfs_next_","$bfs_prev_"],SEDFS_AFTER_ND_GETTER=["$sedfs_next_after_open_","$sedfs_next_after_close_"],SEDFS_BEFORE_ND_GETTER=["$sedfs_prev_before_open_","$sedfs_prev_before_close_"],$cfg_add_$args_id0_$rtrn_nd_and_flag=[["cspbfs","BFS_ND_GETTER"],["sedfs","SEDFS_AFTER_ND_GETTER"],["sedfs","SEDFS_BEFORE_ND_GETTER"]],add_$args_id0_$rtrn_nd_and_flag=creat_fac_ref($cfg_add_$args_id0_$rtrn_nd_and_flag);add_$args_id0_$rtrn_nd_and_flag.forEach(_=>{_.args=args_id0,_.rtrn=rtrn_nd_and_flag});const REL_BFS_ND_GETTER=["$bfs_des_next","$bfs_des_prev"],$cfg_add_$args_id01_$rtrn_nd_and_flag=[["cspbfs","REL_BFS_ND_GETTER"]],add_$args_id01_$rtrn_nd_and_flag=creat_fac_ref($cfg_add_$args_id01_$rtrn_nd_and_flag);add_$args_id01_$rtrn_nd_and_flag.forEach(_=>{_.args=args_id01,_.rtrn=rtrn_nd_and_flag});const NDS_GETTER=["$ances_","$plances_","$children_","$sibs_","$psibs_","$fsibs_","$sdfs_","$sdfs_leafs_","$sdfs_nonleafs_","$edfs_"],BFS_NDS_GETTER=["$lst_des_lyr_","$lst_lyr_","$own_lyr_","$plyr_"],$cfg_add_$args_id0_$rtrn_nds=[["ndsget","NDS_GETTER"],["cspbfs","BFS_NDS_GETTER"]],add_$args_id0_$rtrn_nds=creat_fac_ref($cfg_add_$args_id0_$rtrn_nds);add_$args_id0_$rtrn_nds.forEach(_=>{_.args=args_id0,_.rtrn=rtrn_nds});const GET_NDMAT_WITH_INDEXES=["$some_des_lyrs","$some_lyrs"],$cfg_add_$args_id0_idxs_$rtrn_ndmat=[["cspbfs","GET_NDMAT_WITH_INDEXES"]],add_$args_id0_idxs_$rtrn_ndmat=creat_fac_ref($cfg_add_$args_id0_idxs_$rtrn_ndmat);add_$args_id0_idxs_$rtrn_ndmat.forEach(_=>{_.args=args_id0_idxs,_.rtrn=rtrn_ndmat});const GET_NDS_WITH_INDEX=["$des_lyr","$lyr"],$cfg_add_$args_id0_idx0_$rtrn_nds=[["cspbfs","GET_NDS_WITH_INDEX"]],add_$args_id0_idx0_$rtrn_nds=creat_fac_ref($cfg_add_$args_id0_idx0_$rtrn_nds);add_$args_id0_idx0_$rtrn_nds.forEach(_=>{_.args=args_id0_idxs,_.rtrn=rtrn_nds});const GET_NDS_WITH_ND=["$des_own_lyr","$des_plyr"],$cfg_add_$args_id01_$rtrn_nds=[["cspbfs","GET_NDS_WITH_ND"]],add_$args_id01_$rtrn_nds=creat_fac_ref($cfg_add_$args_id01_$rtrn_nds);add_$args_id01_$rtrn_nds.forEach(_=>{_.args=args_id01,_.rtrn=rtrn_nds});const GEN_LYR_ND_WITH_ND=["$gen_des_lyr_next","$gen_des_lyr_prev"],$cfg_add_$args_id01_$rtrn_ndg=[["cspbfs","GEN_LYR_ND_WITH_ND"]],add_$args_id01_$rtrn_ndg=creat_fac_ref($cfg_add_$args_id01_$rtrn_ndg);add_$args_id01_$rtrn_ndg.forEach(_=>{_.args=args_id01,_.rtrn=rtrn_ndg});const GEN=["$gen_sdfs_next_srch_action","$gen_sdfs_next_build_action","$gen_sdfs_prev_srch_action","$gen_sdfs_prev_build_action"],$cfg_add_$args_id0_$rtrn_og=[["cspact","GEN"]],add_$args_id0_$rtrn_og=creat_fac_ref($cfg_add_$args_id0_$rtrn_og);add_$args_id0_$rtrn_og.forEach(_=>{_.args=args_id0,_.rtrn=rtrn_og});const GET_ND_WITH_PL=["$get_with_spl"],$cfg_add_$args_id0_o0_$rtrn_nd=[["ndgetwo","GET_ND_WITH_PL"]],add_$args_id0_o0_$rtrn_nd=creat_fac_ref($cfg_add_$args_id0_o0_$rtrn_nd);add_$args_id0_o0_$rtrn_nd.forEach(_=>{_.args=args_id0_os,_.rtrn=rtrn_nd});const SEDFS_ND_GETTER=["$sedfs_next","$sedfs_prev"],$cfg_add_$args_id0_o0_$rtrn_nd_and_flag=[["sedfs","SEDFS_ND_GETTER"]],add_$args_id0_o0_$rtrn_nd_and_flag=creat_fac_ref($cfg_add_$args_id0_o0_$rtrn_nd_and_flag);add_$args_id0_o0_$rtrn_nd_and_flag.forEach(_=>{_.args=args_id0_os,_.rtrn=rtrn_nd_and_flag});const SEDFS_NDS_GETTER=["$sedfs_"],BFS_NDFLAGS_GETTER=["$bfs_","$des_bfs_"],$cfg_add_$args_id0_$rtrn_ndflags=[["cspbfs","BFS_NDFLAGS_GETTER"],["sedfs","SEDFS_NDS_GETTER"]],add_$args_id0_$rtrn_ndflags=creat_fac_ref($cfg_add_$args_id0_$rtrn_ndflags);add_$args_id0_$rtrn_ndflags.forEach(_=>{_.args=args_id0,_.rtrn=rtrn_ndflags});const BFS_GEN_ND_AND_FLAG=["$gen_bfs","$gen_des_bfs"],SEDFS_GEN_NEXT_AFTER_ND=["$gen_sedfs_next_after_open","$gen_sedfs_next_after_close"],SEDFS_GEN_PREV_BEFORE_ND=["$gen_sedfs_prev_before_open","$gen_sedfs_prev_before_close"],$cfg_add_$args_id0_$rtrn_ndflagg=[["cspbfs","BFS_GEN_ND_AND_FLAG"],["sedfs","SEDFS_GEN_NEXT_AFTER_ND"],["sedfs","SEDFS_GEN_PREV_BEFORE_ND"]],add_$args_id0_$rtrn_ndflagg=creat_fac_ref($cfg_add_$args_id0_$rtrn_ndflagg);add_$args_id0_$rtrn_ndflagg.forEach(_=>{_.args=args_id0,_.rtrn=rtrn_ndflagg});const SEDFS_GEN_ND_AND_FLAG=["$gen_sedfs_next","$gen_sedfs_prev"],$cfg_add_$args_id0_o0_$rtrn_ndflagg=[["sedfs","SEDFS_GEN_ND_AND_FLAG"]],add_$args_id0_o0_$rtrn_ndflagg=creat_fac_ref($cfg_add_$args_id0_o0_$rtrn_ndflagg);add_$args_id0_o0_$rtrn_ndflagg.forEach(_=>{_.args=args_id0_os,_.rtrn=rtrn_ndflagg});const BSC_PEND_OP=["$prepend_child","$append_child"],BSC_ASIB_OP=["$add_rsib","$add_lsib"],BSC_ADD_OP=[...BSC_PEND_OP,...BSC_ASIB_OP],MULTI_PEND_OP=["$prepend_children","$append_children"],MULTI_ASIB_OP=["$add_rsibs","$add_lsibs"],MULTI_ADD_OP=[...MULTI_PEND_OP,...MULTI_ASIB_OP],INSERT_OP=["$insert_child_before","$insert_child_after","$insert_children_before","$insert_children_after"],UPSTREAM_OP=["$connto","$add_parent","$add_parent_and_lsib","$add_or_goto_parent"],DISCONN_OP=["$disconn","$rm_fstch","$rm_lstch","$rm_children","$rm_child","$rm_some_children"],OP=["$noop","$erase","$erase_r","$replace_tree","$replace_child_tree_at","$replace_node","$replace_child_node_at","$swap_tree","$swap_node","$clone"],CHDES_OP_WITH_ZERO=["$rm_fstch","$rm_lstch","$rm_children","$erase_r"],CHDES_OP_WITH_ONE=["$append_child","$prepend_child","$append_children","$prepend_children","$rm_child","$rm_some_children"],CHDES_OP_WITH_SIBSEQ=["$insert_child_at","$insert_children_at","$replace_child_at"],RELATION_ANCE=["$cmmn_ances","$fst_cmmn_ance","$dist","$path_to"],CMP=["$deep_lseq","$deep_steq"],COND_LEAF=["$cond_leaf_sdfs_next","$gen_cond_leaf_sdfs_next","$cond_leaf_sedfs_next","$gen_cond_leaf_sedfs_next"],REPR=["$is_repr_enabled","$enable_repr","$disable_repr"],UI=["$is_disp_enabled","$expand","$foldup","$expand_all","$foldup_all"],VISIT=["$more_less","$gen_visit","$visit"],DUMP=["$dump","$to_nest"],FOREST=["ids_","slots_","slot","gen_entry","nodes_","trees_","isolates_","tree","node","erase_isolated","dump","load_nd_from_dump","load_nd_from_nest","merge","defrag"],UTIL=["$extract_vertexes"],is_getter_fn=_=>_.endsWith("_"),RM_METHOD_ARY_OF_MUSTLEAF=["$append_child","$append_children","$prepend_child","$prepend_children","$insert_child_after","$insert_child_before","$insert_children_after","$insert_children_before"];module.exports={is_getter_fn:is_getter_fn,LIBS:LIBS,require_lib:require_lib,args_id0:args_id0,args_id01:args_id01,args_id0_idxs:args_id0_idxs,args_id0_o0:args_id0_o0,args_id0_os:args_id0_os,rtrn_orig:rtrn_orig,rtrn_nd:rtrn_nd,rtrn_nds:rtrn_nds,rtrn_ndg:rtrn_ndg,rtrn_ndsg:rtrn_ndsg,rtrn_ndmat:rtrn_ndmat,rtrn_nd_and_flag:rtrn_nd_and_flag,rtrn_og:rtrn_og,rtrn_ndflags:rtrn_ndflags,rtrn_ndflagg:rtrn_ndflagg,IS:IS,LYR_IS:LYR_IS,BFS_GETTER:BFS_GETTER,GETTER:GETTER,add_$args_id0_$rtrn_orig:add_$args_id0_$rtrn_orig,SDFS_ACTION:SDFS_ACTION,add_$args_id0_o0_$rtrn_orig:add_$args_id0_o0_$rtrn_orig,ND_GETTER:ND_GETTER,LYR_ND_GETTER:LYR_ND_GETTER,BFS_ND_GETTER:BFS_ND_GETTER,add_$args_id0_$rtrn_nd:add_$args_id0_$rtrn_nd,OF:OF,REL_LYR_IS:REL_LYR_IS,GET_WITH_ND:GET_WITH_ND,BFS_GET_WITH_ND:BFS_GET_WITH_ND,add_$args_id01_$rtrn_orig:add_$args_id01_$rtrn_orig,GET_ND_WITH_INDEX:GET_ND_WITH_INDEX,add_$args_id0_idx0_$rtrn_nd:add_$args_id0_idx0_$rtrn_nd,GET_NDS_WITH_INDEXES:GET_NDS_WITH_INDEXES,add_$args_id0_idxs_$rtrn_nds:add_$args_id0_idxs_$rtrn_nds,GEN_ND:GEN_ND,GEN_LYR_ND:GEN_LYR_ND,add_$args_id0_$rtrn_ndg:add_$args_id0_$rtrn_ndg,GEN_NDS:GEN_NDS,add_$args_id0_$rtrn_ndsg:add_$args_id0_$rtrn_ndsg,NDMAT_GETTER:NDMAT_GETTER,add_$args_id0_$rtrn_ndmat:add_$args_id0_$rtrn_ndmat,REL_LYR_ND_GETTER:REL_LYR_ND_GETTER,add_$args_id01_$rtrn_nd:add_$args_id01_$rtrn_nd,SEDFS_AFTER_ND_GETTER:SEDFS_AFTER_ND_GETTER,SEDFS_BEFORE_ND_GETTER:SEDFS_BEFORE_ND_GETTER,add_$args_id0_$rtrn_nd_and_flag:add_$args_id0_$rtrn_nd_and_flag,REL_BFS_ND_GETTER:REL_BFS_ND_GETTER,add_$args_id01_$rtrn_nd_and_flag:add_$args_id01_$rtrn_nd_and_flag,NDS_GETTER:NDS_GETTER,BFS_NDS_GETTER:BFS_NDS_GETTER,add_$args_id0_$rtrn_nds:add_$args_id0_$rtrn_nds,GET_NDMAT_WITH_INDEXES:GET_NDMAT_WITH_INDEXES,add_$args_id0_idxs_$rtrn_ndmat:add_$args_id0_idxs_$rtrn_ndmat,GET_NDS_WITH_INDEX:GET_NDS_WITH_INDEX,add_$args_id0_idx0_$rtrn_nds:add_$args_id0_idx0_$rtrn_nds,GET_NDS_WITH_ND:GET_NDS_WITH_ND,add_$args_id01_$rtrn_nds:add_$args_id01_$rtrn_nds,GEN_LYR_ND_WITH_ND:GEN_LYR_ND_WITH_ND,add_$args_id01_$rtrn_ndg:add_$args_id01_$rtrn_ndg,GEN:GEN,add_$args_id0_$rtrn_og:add_$args_id0_$rtrn_og,GET_ND_WITH_PL:GET_ND_WITH_PL,add_$args_id0_o0_$rtrn_nd:add_$args_id0_o0_$rtrn_nd,SEDFS_ND_GETTER:SEDFS_ND_GETTER,add_$args_id0_o0_$rtrn_nd_and_flag:add_$args_id0_o0_$rtrn_nd_and_flag,BFS_NDFLAGS_GETTER:BFS_NDFLAGS_GETTER,SEDFS_NDS_GETTER:SEDFS_NDS_GETTER,add_$args_id0_$rtrn_ndflags:add_$args_id0_$rtrn_ndflags,BFS_GEN_ND_AND_FLAG:BFS_GEN_ND_AND_FLAG,SEDFS_GEN_NEXT_AFTER_ND:SEDFS_GEN_NEXT_AFTER_ND,SEDFS_GEN_PREV_BEFORE_ND:SEDFS_GEN_PREV_BEFORE_ND,add_$args_id0_$rtrn_ndflagg:add_$args_id0_$rtrn_ndflagg,SEDFS_GEN_ND_AND_FLAG:SEDFS_GEN_ND_AND_FLAG,add_$args_id0_o0_$rtrn_ndflagg:add_$args_id0_o0_$rtrn_ndflagg,BSC_PEND_OP:BSC_PEND_OP,BSC_ASIB_OP:BSC_ASIB_OP,BSC_ADD_OP:BSC_ADD_OP,MULTI_PEND_OP:MULTI_PEND_OP,MULTI_ASIB_OP:MULTI_ASIB_OP,MULTI_ADD_OP:MULTI_ADD_OP,INSERT_OP:INSERT_OP,UPSTREAM_OP:UPSTREAM_OP,DISCONN_OP:DISCONN_OP,OP:OP,COND_LEAF:COND_LEAF,REPR:REPR,UI:UI,CMP:CMP,RELATION_ANCE:RELATION_ANCE,CHDES_OP_WITH_ZERO:CHDES_OP_WITH_ZERO,CHDES_OP_WITH_ONE:CHDES_OP_WITH_ONE,CHDES_OP_WITH_SIBSEQ:CHDES_OP_WITH_SIBSEQ,VISIT:VISIT,DUMP:DUMP,FOREST:FOREST,UTIL:UTIL,RM_METHOD_ARY_OF_MUSTLEAF:RM_METHOD_ARY_OF_MUSTLEAF};