[
  '$is_empty',     '$is_fstch',
  '$is_root',      '$is_lstch',
  '$is_leaf',      '$is_lonely',
  '$is_isolated',  'link_pc',
  'link_rl',       '$disconn',
  '_pend',         '$prepend_child',
  '$append_child', '_asib',
  '$add_rsib',     '$add_lsib'
].forEach(
    (n,i) => {
        module.exports[n] = __M["_"+i]
    }
);













