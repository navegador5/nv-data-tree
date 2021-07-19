const api=require("nv-data-tree-apidef"),{Act,FLAG_DICT}=require("nv-data-tree-actdef"),edge=require("nv-data-tree-edge"),eng=require("nv-data-tree-child-openg"),ρ="prototype",δρ=Object.defineProperty;function _0(_){for(let t of api.IS)_[ρ][t]=function(){var e=this[_.SYM_DICT.get_forest];return edge[t](e.max_size,e.eary,e.vertexes,this.$id_)}}function _1(e){e[ρ].$is_isolated=function(){return this.$is_root()&&this.$is_leaf()}}function _2(i){for(let _ of api.OF)i[ρ][_]=function(e){var t=this[i.SYM_DICT.get_forest];return edge[_](t.max_size,t.eary,t.vertexes,this.$id_,e.$id_)}}function _3(_){for(let t of api.GETTER)δρ(_[ρ],t,{get:function(){var e=this[_.SYM_DICT.get_forest];return edge[t](e.max_size,e.eary,e.vertexes,this.$id_)}})}function _4(i){for(let _ of api.GEN)i[ρ][_]=function*(){var e,t=this[i.SYM_DICT.get_forest];for(e of edge[_](t.max_size,t.eary,t.vertexes,this.$id_))e.d=Act.DIRECTION[e.d],yield e}}function _5(i){for(let _ of api.GEN_ND)i[ρ][_]=function*(){let e=this[i.SYM_DICT.get_forest];var t;for(t of edge[_](e.max_size,e.eary,e.vertexes,this.$id_))yield e.mp.get(t)}}function _6(i){for(let _ of api.GEN_NDS)i[ρ][_]=function*(){let t=this[i.SYM_DICT.get_forest];var e;for(e of edge[_](t.max_size,t.eary,t.vertexes,this.$id_))yield e.map(e=>t.mp.get(e))}}function _7(i){for(let _ of api.ND_GETTER)δρ(i[ρ],_,{get:function(){let e=this[i.SYM_DICT.get_forest];var t=edge[_](e.max_size,e.eary,e.vertexes,this.$id_);return 0===t||-1===t||void 0===t?null:e.mp.get(t)}})}function _8(i){for(let _ of api.NDS_GETTER)δρ(i[ρ],_,{get:function(){let t=this[i.SYM_DICT.get_forest],e=edge[_](t.max_size,t.eary,t.vertexes,this.$id_);return e=e.filter(e=>0!==e||-1!==e||void 0!==e),e.map(e=>t.mp.get(e))}})}function _9(t){for(let e of api.NDMAT_GETTER)δρ(t[ρ],e,{get:function(){let _=this[t.SYM_DICT.get_forest],i=edge[e](_.max_size,_.eary,_.vertexes,this.$id_);for(let t=0;t<i.length;t++){var r=i[t];for(let e=0;e<r.length;e++)i[t][e]=_.mp.get(r[e])}return i}})}function _10(i,e){for(let _ of e)i[ρ][_]=function(e){var t=this[i.SYM_DICT.get_forest];return edge[_](t.max_size,t.eary,t.vertexes,this.$id_,e)}}function _11(i){for(let _ of api.GET_WITH_ND)i[ρ][_]=function(e){var t=this[i.SYM_DICT.get_forest];return edge[_](t.max_size,t.eary,t.vertexes,this.$id_,e.$id_)}}function _12(r){for(let i of api.GET_NDS_WITH_ND)r[ρ][i]=function(e){let t=this[r.SYM_DICT.get_forest],_=edge[i](t.max_size,t.eary,t.vertexes,this.$id_,e.$id_);return _=_.filter(e=>0!==e||-1!==e||void 0!==e),_.map(e=>t.mp.get(e))}}function _13(i,e){for(let _ of e)i[ρ][_]=function(e){let t=this[i.SYM_DICT.get_forest];e=edge[_](t.max_size,t.eary,t.vertexes,this.$id_,e);return 0===e||-1===e||void 0===e?null:t.mp.get(e)}}function _14(r,e){for(let i of e)r[ρ][i]=function(e){let t=this[r.SYM_DICT.get_forest],_=edge[i](t.max_size,t.eary,t.vertexes,this.$id_,e);return 0===_||-1===_||void 0===_?[]:(_=_.filter(e=>0!==e||-1!==e||void 0!==e),_.map(e=>t.mp.get(e)))}}function _15(n){for(let t of api.GET_NDMAT_WITH_INDEXES)n[ρ][t]=function(e){let _=this[n.SYM_DICT.get_forest],i=edge[t](_.max_size,_.eary,_.vertexes,this.$id_,e);for(let t=0;t<i.length;t++){var r=i[t];for(let e=0;e<r.length;e++)i[t][e]=_.mp.get(r[e])}return i}}function _16(r){for(let i of api.SEDFS_GEN_ND)r[ρ][i]=function*(e=FLAG_DICT.open){let t=this[r.SYM_DICT.get_forest];var _;for(_ of edge[i](t.max_size,t.eary,t.vertexes,this.$id_,e))_[0]=t.mp.get(_[0]),_[1]=FLAG_DICT[_[1]],yield _}}function _17(i){for(let _ of api.SEDFS_NDS_GETTER)δρ(i[ρ],_,{get:function(){let t=this[i.SYM_DICT.get_forest],e=edge[_](t.max_size,t.eary,t.vertexes,this.$id_);return e=e.filter(e=>0!==e[0]||-1!==e[0]||void 0!==e[0]),e.map(e=>[t.mp.get(e[0]),FLAG_DICT[e[1]]])}})}function _18(r){for(let i of api.SEDFS_ND_GETTER)r[ρ][i]=function(e=FLAG_DICT.open){let t=this[r.SYM_DICT.get_forest],_=edge[i](t.max_size,t.eary,t.vertexes,this.$id_,e);return 0!==_[0]?_[0]=t.mp.get(_[0]):_[0]=null,_[1]=FLAG_DICT[_[1]],_}}function _19(e){e[ρ][Symbol.iterator]=function(){return this.$gen_sedfs_next(0)}}function add_all_nonops(e){_0(e),_1(e),_2(e),_3(e),_4(e),_5(e),_6(e),_7(e),_8(e),_9(e),_10(e,api.SDFS_ACTION),_11(e),_12(e),_13(e,api.GET_ND_WITH_INDEX),_13(e,api.GET_ND_WITH_PL),_14(e,api.GET_NDS_WITH_INDEX),_14(e,api.GET_NDS_WITH_INDEXES),_15(e),_16(e),_17(e),_18(e),_19(e)}function _20(t){for(let e of api.CHDES_OP_WITH_ZERO)t[ρ][e]=function(){return eng[e](this[t.SYM_DICT.get_ctor],this[t.SYM_DICT.get_forest],this)}}function _21(_){for(let t of api.CHDES_OP_WITH_ONE)_[ρ][t]=function(e){return eng[t](this[_.SYM_DICT.get_ctor],this[_.SYM_DICT.get_forest],this,e)}}function _22(i){for(let _ of api.CHDES_OP_WITH_SIBSEQ)i[ρ][_]=function(e,t){return eng[_](this[i.SYM_DICT.get_ctor],this[i.SYM_DICT.get_forest],this,e,t)}}function add_all_chdes_ops(e){_20(e),_21(e),_22(e)}module.exports={_add_is:_0,_add_is_isolated:_1,_add_of:_2,_add_getter:_3,_add_gen:_4,_add_gen_nd:_5,_add_gen_nds:_6,_add_nd_getter:_7,_add_nds_getter:_8,_add_ndmat_getter:_9,_add_get_with_:_10,_add_get_with_nd:_11,_add_get_nds_with_nd:_12,_add_get_nd_with_:_13,_add_get_nds_with_:_14,_add_get_ndmat_with_indexes:_15,_add_sedfs_gen_nd:_16,_add_sedfs_nds_getter:_17,_add_sedfs_nd_getter:_18,_add_iter:_19,add_all_nonops:add_all_nonops,add_all_chdes_ops:add_all_chdes_ops};