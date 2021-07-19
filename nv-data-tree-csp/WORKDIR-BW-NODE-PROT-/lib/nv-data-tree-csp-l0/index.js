
const {fc,lb,rb,pr,lc,chs} = require("../nv-data-tree-bw-name-map/index");



const    $creat_txt_node =(s)            => document.createTextNode(s);
const    $creat_ele_node =(tag)          => document.createElement(tag);
const    $append_child   =(that,ch)      => that.appendChild(ch);
const    $prepend_child  =(that,ch)      => that.insertBefore(ch,that[fc]);
const    $add_rsib       =(that,sib)     => that[pr]['insertAfter'](sib,that);
const    $add_lsib       =(that,sib)     => that[pr]['insertBefore'](sib,that);
const    $disconn:       =(that)         => that[pr]['removeChild'](that)

const    _creat_ch = (s,f) => (s===undefined)?f(s):s; 


const    $append_txt_child =(that,s) => $append_child(that,_creat_ch(s,$creat_txt_node));
const    $append_ele_child =(that,s) => $append_child(that,_creat_ch(s,$creat_ele_node));

const    $prepend_txt_child =(that,s) => $prepend_child(that,_creat_ch(s,$creat_txt_node));
const    $prepend_ele_child =(that,s) => $prepend_child(that,_creat_ch(s,$creat_ele_node));

const    $add_txt_rsib =(that,s)      => $add_rsib(that,_creat_ch(s,$creat_txt_node));
const    $add_ele_rsib =(that,s)      => $add_rsib(that,_creat_ch(s,$creat_ele_node));

const    $add_txt_lsib =(that,s)      => $add_lsib(that,_creat_ch(s,$creat_txt_node));
const    $add_ele_lsib =(that,s)      => $add_lsib(that,_creat_ch(s,$creat_ele_node));


module.exports = {
    $creat_txt_node,$creat_ele_node,
    $append_child,$prepend_child,$add_rsib,$add_lsib,
    $disconn,
    $append_txt_child,$append_ele_child,
    $prepend_txt_child,$prepend_ele_child,
    $add_txt_rsib,$add_ele_rsib,
    $add_txt_lsib,$add_ele_lsib
}


