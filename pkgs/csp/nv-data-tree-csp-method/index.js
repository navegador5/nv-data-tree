const api=require("nv-data-tree-csp-apidef"),lib=api.require_lib(),l0=require("nv-data-tree-csp-l0"),{buildk_to_srchk}=require("nv-data-tree-actdef");function get_plugins(){let _={};for(var e in api)"add_"===e.slice(0,4)&&(_[e]=api[e]);return _}const plugins=get_plugins(),CATE_EXCEPTS=new Set(["IS"]);function get_eng(_){const t={};for(let e of _)CATE_EXCEPTS.has(e.cate)||api[e.cate].forEach(_=>{t[_]=lib[e.lib][_]});return t}function begin(_,e){var t=e[_.SYM_DICT.get_forest],{idpool:r,fc:n,rb:o,pr:i,lb:d,lc:p}=t;return[t,e[_.SYM_DICT.get_ctor],r,n,o,i,d,p]}const dcd_name=_=>{_=_.split("$");return{args:_[1],rtrn:_[2]}},pytp_zero_param=(_,e,t,r)=>{var[n,,o,i,d,p,a,_]=begin(_,r),r=t(o,i,d,p,a,_,[r.$id_],[],[]);return api[e](n,r)},pytp_one_nd_param=(_,e,t,r,n)=>{var[o,,i,d,p,a,s,_]=begin(_,r),n=t(i,d,p,a,s,_,[r.$id_,n.$id_],[],[]);return api[e](o,n)},pytp_one_idx_param=(_,e,t,r,n)=>{var[o,,i,d,p,a,s,_]=begin(_,r),n=t(i,d,p,a,s,_,[r.$id_],[n],[]);return api[e](o,n)},pytp_one_other_param=(_,e,t,r,n)=>{var[o,,i,d,p,a,s,_]=begin(_,r),n=t(i,d,p,a,s,_,[r.$id_],[],[n]);return api[e](o,n)},pytp_idxs_param=(_,e,t,r,n)=>{var[o,,i,d,p,a,s,_]=begin(_,r),n=t(i,d,p,a,s,_,[r.$id_],n,[]);return api[e](o,n)},__M={};function add_one_getter(_,e,t,r,n){Object.defineProperty(_.prototype,e,{get:function(){return r(_,n,t,this)}})}function add_one_nonop_cate(e,n,o){__M[e]=t=>{var _,r=get_eng(plugins[e]);for(_ in r){let e=r[_];"_"===_[_.length-1]?add_one_getter(t,_,e,o,n):t.prototype[_]=function(_){return o(t,n,e,this,_)}}}}function add_nonop_methods(){for(var _ in plugins){var{args:e,rtrn:t}=dcd_name(_);"args_id0_"===e?add_one_nonop_cate(_,t,pytp_zero_param):"args_id01_"===e?add_one_nonop_cate(_,t,pytp_one_nd_param):"args_id0_idx0_"===e?add_one_nonop_cate(_,t,pytp_one_idx_param):"args_id0_o0_"===e?add_one_nonop_cate(_,t,pytp_one_other_param):"args_id0_idxs_"===e&&add_one_nonop_cate(_,t,pytp_idxs_param)}}add_nonop_methods();const cspop=require("nv-data-tree-csp-op");function _add_one_bsc_add_op(n,_,o){api[_].forEach(r=>{n.prototype[r]=function(_){var[e,t]=begin(n,this);return o(r,e,t,this,_)}})}function _add_one_multi_add_op(r,_,n,o,i){r.prototype[_]=function(_){var[e,t]=begin(r,this);return cspop.multi_add(n,o,e,t,this,_,i)}}__M.add_bsc_add_op=_=>{_add_one_bsc_add_op(_,"BSC_PEND_OP",cspop.pend),_add_one_bsc_add_op(_,"BSC_ASIB_OP",cspop.asib)},__M.add_multi_add_op=_=>{_add_one_multi_add_op(_,"$prepend_children","$prepend_child",cspop.pend,!0),_add_one_multi_add_op(_,"$append_children","$append_child",cspop.pend,!1),_add_one_multi_add_op(_,"$add_lsibs","$add_lsib",cspop.asib,!1),_add_one_multi_add_op(_,"$add_rsibs","$add_rsib",cspop.asib,!0)},__M.add_$insert_child_before=t=>{t.prototype.$insert_child_before=function(_,e){var[]=begin(t,this);return cspop.$insert_child_at("before",this,_,e)}},__M.add_$insert_child_after=t=>{t.prototype.$insert_child_after=function(_,e){var[]=begin(t,this);return cspop.$insert_child_at("after",this,_,e)}},__M.add_$insert_children_before=n=>{n.prototype.$insert_children_before=function(_,e){var[t,r]=begin(n,this);return cspop.$insert_children_at("before",t,r,this,_,e)}},__M.add_$insert_children_after=n=>{n.prototype.$insert_children_after=function(_,e){var[t,r]=begin(n,this);return cspop.$insert_children_at("after",t,r,this,_,e)}},__M.add_$add_parent=t=>{t.prototype.$add_parent=function(){var[_,e]=begin(t,this);return cspop.$add_parent(_,e,this)}},__M.add_$connto=_=>{_.prototype.$connto=function(_){return cspop.$connto(this,_)}},__M.add_$add_parent_and_lsib=t=>{t.prototype.$add_parent_and_lsib=function(){var[_,e]=begin(t,this);return[cspop.$add_parent(_,e,this),cspop.asib("$add_lsib",_,e,this)]}},__M.add_$add_or_goto_parent=t=>{t.prototype.$add_or_goto_parent=function(){var[_,e]=begin(t,this);return null!==this.$parent_?this.$parent_:cspop.$add_parent(_,e,this)}},__M.add_$disconn=e=>{e.prototype.$disconn=function(){var[_]=begin(e,this);return cspop.$disconn(_,this)}},__M.add_$rm_fstch=_=>{_.prototype.$rm_fstch=function(){return cspop.$rm_fstch(this)}},__M.add_$rm_lstch=_=>{_.prototype.$rm_lstch=function(){return cspop.$rm_lstch(this)}},__M.add_$rm_child=_=>{_.prototype.$rm_child=function(_){return cspop.$rm_child(this,_)}},__M.add_$rm_children=_=>{_.prototype.$rm_children=function(){return cspop.$rm_children(this)}},__M.add_$rm_some_children=_=>{_.prototype.$rm_some_children=function(_){return cspop.$rm_some_children(this,_)}},__M.add_$replace_tree=r=>{r.prototype.$replace_tree=function(_){let[e,t]=begin(r,this);return _=_??e.tree(t),cspop.$replace_tree(this,_)}},__M.add_$replace_child_tree_at=_=>{_.prototype.$replace_child_tree_at=function(_,e){let t=this.$child(_);return null===t?null:t.$replace_tree(e)}},__M.add_$replace_node=r=>{r.prototype.$replace_node=function(_){let[e,t]=begin(r,this);return _=_??e.node(t),cspop.$replace_node(this,_)}},__M.add_$replace_child_node_at=_=>{_.prototype.$replace_child_node_at=function(_,e){let t=this.$child(_);return null===t?null:t.$replace_node(e)}},__M.add_$swap_tree=e=>{e.prototype.$swap_tree=function(_){var[]=begin(e,this);return cspop.$swap_tree(this,_)}},__M.add_$swap_node=e=>{e.prototype.$swap_node=function(_){var[]=begin(e,this);return cspop.$swap_node(this,_)}},__M.add_$clone=o=>{o.prototype.$clone=function(t=o.DFLT_CLONE_FUNC){var[]=begin(o,this);let _=this.$sdfs_next_build_action_list_;var e=this.$new();t(this,e);let r=this,n=e;return _.slice(1).forEach(_=>{var e=api.is_getter_fn(_.k);n=api.is_getter_fn(_.k)?n[_.k]:n[_.k]();_=e?_.k:buildk_to_srchk(_.k);r=r[_],t(r,n)}),e}},__M.add_$erase=t=>{t.prototype.$erase=function(){var[_,e]=begin(t,this);return cspop.$erase(_,e,this)}},__M.add_$erase_r=r=>{r.prototype.$erase_r=function(){let[e,t]=begin(r,this),_=this.$sdfs_;return _.forEach(_=>cspop.$erase(e,t,_)),_}},module.exports=__M;