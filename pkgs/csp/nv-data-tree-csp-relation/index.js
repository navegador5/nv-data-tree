const{RELATION_ANCE}=require("nv-data-tree-csp-apidef");function _cmmn_ances_engine(n,c){if(null===n[n.constructor.SYM_DICT.get_forest]||null===c[c.constructor.SYM_DICT.get_forest])return[];if(n.$fid_!==c.$fid_)return[];{let e=n.$plances_;var _=c.$plances_;let t=-1;var r=(e.length<=_.length?e:_).length;for(let n=0;n<r&&e[n]===_[n];n++)t=n;return 0<=t?[e.slice(0,t+1),e,_]:[]}}function cmmn_ances(n,e){e=_cmmn_ances_engine(n,e);return 0<e.length?e[0]:null}function fst_cmmn_ance(n,e){e=_cmmn_ances_engine(n,e);return 0<e.length?e[0][e[0].length-1]:null}function dist(n,e){var t=_cmmn_ances_engine(n,e);if(0<t.length){var[n,e,t]=t;return t.length-n.length+e.length-n.length}return 1/0}function path_to(n,c){c=_cmmn_ances_engine(n,c);if(0<c.length){let[n,e,t]=c;return e=e.slice(n.length),e.reverse(),t=t.slice(n.length),e.concat(t)}return[]}const D={$cmmn_ances:cmmn_ances,$fst_cmmn_ance:fst_cmmn_ance,$dist:dist,$path_to:path_to};function add_ance_relation(n){for(let e of RELATION_ANCE)n.prototype[e]=function(n){return D[e](this,n)}}module.exports={add_ance_relation:add_ance_relation};