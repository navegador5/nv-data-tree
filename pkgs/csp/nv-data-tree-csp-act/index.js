const ndget=require("nv-data-tree-csp-ndget"),{Act,srchk_to_buildk,FLAG_DICT}=require("nv-data-tree-actdef"),__ME={$sdfs_next_srch_action:(t,_,e,n,c,d,r,i,s)=>{s=s[0],r=r[0];if(s===Act.DIRECTION.up){s=e[r];if(0!==s)return new Act("$rsib_",Act.DIRECTION.right,s);s=n[r];return 0===s?new Act("$end_",Act.DIRECTION.up,s):new Act("$parent_",Act.DIRECTION.up,s)}_=_[r];if(0!==_)return new Act("$fstch_",Act.DIRECTION.down,_);e=e[r];if(0!==e)return new Act("$rsib_",Act.DIRECTION.right,e);r=n[r];return 0===r?new Act("$end_",Act.DIRECTION.up,r):new Act("$parent_",Act.DIRECTION.up,r)},$sdfs_next_build_action:(t,_,e,n,c,d,r,i,s)=>{let I=__ME.$sdfs_next_srch_action(t,_,e,n,c,d,r,i,s);return I.k=I.d===Act.DIRECTION.right||I.d===Act.DIRECTION.down?srchk_to_buildk(I.k):I.k,I},$sdfs_prev_srch_action:(t,_,e,n,c,d,r,i,s)=>{s=s[0],r=r[0];if(s===Act.DIRECTION.up){s=c[r];if(0!==s)return new Act("$lsib_",Act.DIRECTION.left,s);s=n[r];return 0===s?new Act("$end_",Act.DIRECTION.up,s):new Act("$parent_",Act.DIRECTION.up,s)}if(0===_[r]){c=c[r];if(0!==c)return new Act("$lsib_",Act.DIRECTION.left,c);n=n[r];return 0===n?new Act("$end_",Act.DIRECTION.up,n):new Act("$parent_",Act.DIRECTION.up,n)}r=d[r];return new Act("$lstch_",Act.DIRECTION.down,r)},$sdfs_prev_build_action:(t,_,e,n,c,d,r,i,s)=>{let I=__ME.$sdfs_prev_srch_action(t,_,e,n,c,d,r,i,s);return I.k=I.d===Act.DIRECTION.left||I.d===Act.DIRECTION.down?srchk_to_buildk(I.k,!0):"$parent_"===I.k&&0===e[r[0]]?"$add_or_goto_parent":I.k,I},$gen_sdfs_next_srch_action:function*(_,e,n,c,d,r,i,s,t){var I=ndget.$drmost_(_,e,n,c,d,r,i,s,t);yield{k:"$self_",d:Act.DIRECTION.down};i=i[0];if(i!==I){let t=__ME.$sdfs_next_srch_action(_,e,n,c,d,r,[i],s,[Act.DIRECTION.down]);for(;0!==t.id&&(yield{k:t.k,d:t.d},t.id!==I);)t=__ME.$sdfs_next_srch_action(_,e,n,c,d,r,[t.id],s,[t.d])}},$gen_sdfs_next_build_action:function*(t,_,e,n,c,d,r,i,s){var I;for(I of __ME.$gen_sdfs_next_srch_action(t,_,e,n,c,d,r,i,s))I.k=I.d===Act.DIRECTION.right||I.d===Act.DIRECTION.down?srchk_to_buildk(I.k):I.k,yield I},$gen_sdfs_prev_srch_action:function*(_,e,n,c,d,r,i,s,t){var I=ndget.$root_(_,e,n,c,d,r,i,s,t);yield{k:"$self_",d:Act.DIRECTION.left,id:i[0]};i=i[0];if(i!==I){let t=__ME.$sdfs_prev_srch_action(_,e,n,c,d,r,[i],s,[Act.DIRECTION.left]);for(;0!==t.id&&(yield{k:t.k,d:t.d,id:t.id},t.id!==I);)t=__ME.$sdfs_prev_srch_action(_,e,n,c,d,r,[t.id],s,[t.d])}},$gen_sdfs_prev_build_action:function*(t,_,e,n,c,d,r,i,s){var I;for(I of __ME.$gen_sdfs_prev_srch_action(t,_,e,n,c,d,r,i,s))I.k=I.d===Act.DIRECTION.left||I.d===Act.DIRECTION.down?srchk_to_buildk(I.k,!0):"$parent_"===I.k&&0===e[I.id]?"$add_or_goto_parent":I.k,yield I}};module.exports=__ME;