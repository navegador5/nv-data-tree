const gn=require("nv-data-tree-csp-gen"),ndgen=require("nv-data-tree-csp-ndgen"),__ME={};function _dfs_des_index(e,_,n,s,d,f,i,r,t,g){var a=r[0],r=r[1];return gn.of(gn.$ance(d,a),r)?gn.seq(ndgen[e](_,n,s,d,f,i,[r],t,g),a):-1}__ME.$ance_dist=(e,_,n,s,d,f,i,r,t)=>gn.dist_after(gn.$ance(s,i[0]),i[0],i[1]),__ME.$sib_dist=(e,_,n,s,d,f,i,r,t)=>gn.dist_dual(gn.$sibff(_,n,s,i[0]),i[0],i[1]),__ME.$sdfs_des_index=(e,_,n,s,d,f,i,r,t)=>i[0]===i[1]?0:_dfs_des_index("$gen_sdfs_next",e,_,n,s,d,f,i,r,t),__ME.$sdfs_des_leaf_index=(e,_,n,s,d,f,i,r,t)=>i[0]===i[1]&&0===_[i[0]]?0:_dfs_des_index("$gen_sdfs_next_leaf",e,_,n,s,d,f,i,r,t),__ME.$sdfs_des_nonleaf_index=(e,_,n,s,d,f,i,r,t)=>i[0]===i[1]&&0!==_[i[0]]?0:_dfs_des_index("$gen_sdfs_next_nonleaf",e,_,n,s,d,f,i,r,t),__ME.$edfs_des_index=(e,_,n,s,d,f,i,r,t)=>i[0]===i[1]?0:_dfs_des_index("$gen_edfs_prev",e,_,n,s,d,f,i,r,t),__ME.$edfs_des_leaf_index=(e,_,n,s,d,f,i,r,t)=>i[0]===i[1]&&0!==_[i[0]]?0:_dfs_des_index("$gen_edfs_prev_leaf",e,_,n,s,d,f,i,r,t),__ME.$edfs_des_nonleaf_index=(e,_,n,s,d,f,i,r,t)=>i[0]===i[1]&&0!==_[i[0]]?0:_dfs_des_index("$gen_edfs_prev_nonleaf",e,_,n,s,d,f,i,r,t),__ME.$des_spl=(e,_,n,s,d,f,i,r,t)=>{let g=[];var a,$=i[1];if($===i[0])return[];let x=!1;for(a of gn.$ance(s,i[0])){if(a===$){x=!0;break}var l=gn.seq(gn.$sibff(_,n,s,a),a);g.unshift(l)}return x?(g.push(gn.seq(gn.$sibff(_,n,s,i[0]),i[0])),g):[-1]},__ME.$des_offset=(e,_,n,s,d,f,i,r,t)=>{var g,a=i[1];let $=0,x=!1,l=!1;for(g of ndgen.$gen_sdfs_next(e,_,n,s,d,f,[a],r,t)){if(i[0]===g){if(l=!0,0===_[g])return $;x=!0}else if(0===_[g]&&x)return $;0===_[g]&&($+=1)}return l?$:-1},module.exports=__ME;