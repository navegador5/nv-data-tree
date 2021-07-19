const {fc,lb,rb,pr,lc,chs} = require("../nv-data-tree-bw-name-map/index");

const __ME = {
    //$is_empty:
    $is_root:(that)=>that[pr]===null,
    $is_fstch:(that)=>that[pr][fc]===that,
    $is_midch:(that)=>that[pr][fc]!==that && that[pr][lc]!==that,
    $is_lstch:(that)=>that[pr][lc]===that,
    $is_leaf:(that)=>that[chs].length===0,
    $is_lonely:(that)=>that[pr]===null || that[pr][chs].length===1,
    //$is_isolated:
}


module.exports = __ME;
