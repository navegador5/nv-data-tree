const gn = require("../nv-data-tree-csp-gen/index");

const __ME = {}

__ME.$is_root_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                   (pr[ids[0]]===0 && ids[0]===ids[1]) || 
                   gn.lst0(gn.$ance(pr,ids[1]),0) === ids[0];

__ME.$is_parent_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                   pr[ids[1]] === ids[0];

__ME.$is_ance_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                    gn.of(gn.$ance(pr,ids[1]),ids[0]);


__ME.$is_inclusive_ance_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                             (
                                 (ids[0] === ids[1]) ||
                                 gn.of(gn.$ance(pr,ids[1]),ids[0])
                              );

__ME.$is_child_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                    gn.of(gn.$fch(fc,rb,ids[1]),ids[0]);

__ME.$is_fstch_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                     fc[ids[1]] === ids[0];

__ME.$is_lstch_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                     lc[ids[1]] === ids[0];

__ME.$is_des_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                   gn.of(gn.$ance(pr,ids[0]),ids[1]);

__ME.$is_inclusive_des_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                  (
                      (ids[0] === ids[1]) ||
                      gn.of(gn.$ance(pr,ids[0]),ids[1])
                  );

__ME.$is_fsib_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                   gn.of(gn.$fsib(rb,ids[1]),ids[0]);

__ME.$is_rsib_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                   rb[ids[1]] === ids[0];

__ME.$is_psib_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                   gn.of(gn.$psib(lb,ids[1]),ids[0]);

__ME.$is_lsib_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                   lb[ids[1]] === ids[0];

__ME.$is_sib_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                  (
                      (ids[0] !== ids[1]) &&
                      gn.of(gn.$sibff(fc,rb,pr,ids[1]),ids[0])
                  );

__ME.$is_inclusive_sib_of = (idpool,fc,rb,pr,lb,lc,ids,idxs,others)=>
                  (
                      (ids[0] === ids[1]) ||
                      gn.of(gn.$sibff(fc,rb,pr,ids[1]),ids[0])
                  );


module.exports = __ME


