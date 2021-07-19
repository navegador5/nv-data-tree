const Forest = require("nv-data-tree-csp-forest");
const {_MustLeaf,_Node} = require("nv-data-tree-csp-node");
const {
    add_repr,
    noexist,
    unknown,
    STYPE_DICT,
    is_undefined,
    is_null,
    is_normal_num,
    is_str,
    is_ary,
    is_dict,
} = require("nv-facutil-basic");

const {is_int_str} = require("nv-string-basic") 

function _is_ele(that) {
    let p = that.$parent_;
    if(p!==null) {
        return(p.is_ary())
    } else {
        return(false)
    }
}

function _is_prop(that) {
    let p = that.$parent_;
    if(p!==null) {
        return(p.is_obj())
    } else {
        return(false)
    }
}



function _get_key(that,k) {
    if(that.is_prop()) {
        return(k)
    } else if(that.is_ele()) {
        if(k === noexist) {
            return(that.$sibseq_)
        } else {
            return(k)
        }
    } else {
        return(noexist)
    }
}

function _is_lst_json_child(nd) {
    let fsibs = nd.$fsibs_;
    fsibs = fsibs.filter(r=>!r.is_undefined()&&!r.is_ref()&&!r.is_external())
    return(fsibs.length===0)
}

class _Leaf extends _MustLeaf {
    #key = noexist
    #value = noexist
    ////
    set key_(k)  {this.#key   = k }
    set value_(v)  {this.#value = v }
    ////
    get index_() {return(this.$sibseq_)}
    get value_() {return(this.#value)}
    ////
    is_ele()  {return(_is_ele(this))}
    is_prop() {return(_is_prop(this))}
    ////
    get key_() {return(_get_key(this,this.#key))}
    ////
    is_undefined() {return(this.constructor === _Undefined)}
    is_null()      {return(this.constructor === _Null)}
    is_number()    {return(this.constructor === _Number)}
    is_str()       {return(this.constructor === _String)}
    is_bool()      {return(this.constructor === _True || this.constructor === _False)}
    is_true()      {return(this.constructor === _True)}
    is_false()     {return(this.constructor === _False)}
    ////
    is_external()  {return(this.constructor === _External)}
    is_ref()       {return(this.constructor === _Ref)}
    ////
    is_ary()       {return(false)}
    is_obj()       {return(false)}
    ////
    is_leaf()      {return(true)}
    is_prim_leaf() {return(true)}
    is_non_prim_leaf() {return(false)}
    ////
    is_lst_json_child() {return(_is_lst_json_child(this))}
    ////
    stringify()    {return(JSON.stringify(this.#value))}
    json()         {return(this.#value)}
    ////
    get $_() {
        let proxy = new Proxy(this,{
            get:function (target,prop,receiver) {
                return(noexist)
            }
        })
        return(proxy)
    }
}

add_repr(_Leaf,(that)=>that.stringify(that))


////
class _Undefined extends _Leaf {}
add_repr(_Undefined,(that)=>undefined)

class _Null extends _Leaf {}
add_repr(_Null,(that)=>null)

class _True extends _Leaf {}
add_repr(_True,(that)=>true)

class _False extends _Leaf {}
add_repr(_False,(that)=>false)

function _creat_gpim(Cls,gvalue,forest,k=noexist) {
    let nd = forest.node(Cls);
    nd.key_ = k;
    nd.value_ = gvalue;
    return(nd)
}

const    creat_undefined =(forest,k=noexist)=>_creat_gpim(_Undefined,undefined,forest,k);
const    creat_null=(forest,k=noexist)=>_creat_gpim(_Null,null,forest,k);
const    creat_true=(forest,k=noexist)=>_creat_gpim(_True,true,forest,k);
const    creat_false=(forest,k=noexist)=>_creat_gpim(_False,false,forest,k);


class _String extends _Leaf {/*todo validate*/}
add_repr(_String,(that)=>"'"+that.value_+"'")

function creat_str(forest,v='',k=noexist) {
    let nd = forest.node(_String);
    nd.key_ = k;
    nd.value_ = v;
    return(nd)
}

class _Number extends _Leaf {/*todo validate*/}
add_repr(_Number,(that)=>that.value_)

function creat_number(forest,v=0,k=noexist) {
    let nd = forest.node(_Number);
    nd.key_ = k;
    nd.value_ = v;
    return(nd)
}

class _External extends _Leaf {
    /*todo validate*/
    stringify() {return(that.value_.toString())}
    json() {return(this.value_.toString())}
}
add_repr(_External,(that)=>'<ext> '+that.value_.toString())

function creat_external(forest,v=unknown,k=noexist) {
    let nd = forest.node(_External);
    nd.key_ = k;
    nd.value_ = v;
    return(nd)
}

class _Ref extends _Leaf {
    /*todo validate*/
    get ref_() {return(this.value_)}
    stringify() {return('<ref> '+that.value_.constructor.toString())}
    json() {return('<ref> '+that.value_.constructor.toString())}
}
add_repr(_Ref,(that)=>'<ref> '+that.value_.constructor.toString());

function creat_ref(forest,v=unknown,k=noexist) {
    let nd = forest.node(_Ref);
    nd.key_ = k;
    nd.value_ = v;
    return(nd)
}


////

function _stringify(o) {
    let s = ""
    let arr = o.$sedfs_.filter(e=>!(e[0].$is_leaf()&& e[1]==='close'))
    for(let [nd,flag] of arr) {
        if(nd.is_ary()) {
            if(flag==='open') {s=s+"["} else {s=s+']'}
        } else if(nd.is_obj()) {
            if(flag==='open') {s=s+"{"} else {s=s+'}'}
        } else if(nd.is_undefined()||nd.is_external() || nd.is_ref()){
            //undefined,external,ref NOT belong to jsonable 
        } else {
        
            if(nd.is_prop()) {s=s+JSON.stringify(nd.key_)+":"}
            s = s + nd.stringify();
            if(nd.is_lst_json_child()) {} else {s=s+','}
        }
    }
    return(s)
}

////

function _json_init(that) {
    let unhandled = []
    if(that.is_ary()) {
        unhandled = [{nd:that,j:[]}]
    } else if(that.is_obj()) {
        unhandled = [{nd:that,j:{}}]
    } else {
        unhandled = [{nd:that,j:that.json()}]
    }
    return(unhandled)
}

function _json_creat_j(that) {
    if(that.is_ary()) {
        return([])
    } else if(that.is_obj()) {
        return({})
    } else {
        return(that.json())
    }
}

function _json_wfs(unhandled) {
    ////
    let {nd,j}= unhandled[0];
    if(nd.is_leaf()) {
        return(j)
    } else {
        ////
        let next_unhandled = []
        while(unhandled.length>0) {
            for(let d of unhandled) {
                let {nd,j} = d;
                if(nd.is_prim_leaf()) {
                    //do nothing
                } else if(nd.is_non_prim_leaf()) {
                    //do nothing
                } else if(nd.is_external()) {
                    //do nothing
                } else if(nd.is_ref()) {
                    //do nothing
                } else if(nd.is_ary()) {
                    let children = nd.$children_;
                    children = children.map(
                        chnd=>{
                            let chj =_json_creat_j(chnd);
                            j.push(chj);
                            return({nd:chnd,j:chj});
                        }
                    );
                    children = children.filter(d=>!(d["nd"].is_leaf()));
                    next_unhandled = next_unhandled.concat(children);
                } else {
                    let children = nd.$children_;
                    children = children.map(
                        chnd=>{
                            let chj =_json_creat_j(chnd);
                            j[chnd.key_] = chj;
                            return({nd:chnd,j:chj});
                        }
                    );
                    children = children.filter(d=>!(d["nd"].is_leaf()));
                    next_unhandled = next_unhandled.concat(children);
                }
            }
            unhandled = next_unhandled;
            next_unhandled =[];
        }
        return(j)
    }
}


class _O extends _Node {
    #key = noexist
    #repr = false;
    set key_(k)  {this.#key   = k }
    ////
    is_undefined() {return(false)}
    is_null()      {return(false)}
    is_bool()      {return(false)}
    is_true()      {return(false)}
    is_false()     {return(false)}
    is_number()    {return(false)}
    is_str()       {return(false)}
    ////
    is_external()  {return(false)}
    is_ref()       {return(false)}
    ////
    is_ary()       {return(this.constructor === _Array)}
    is_obj()       {return(this.constructor === _Object)}
    ////
    is_leaf()      {return(this.$children_count_===0)}
    is_prim_leaf() {return(false)}
    is_non_prim_leaf() {return(this.is_leaf())}
    ////
    get index_() {return(this.$sibseq_)}
    ////
    is_ele()  {return(_is_ele(this))}
    is_prop() {return(_is_prop(this))}
    ////
    get key_()  {return(_get_key(this,this.#key))}
    ////
    is_lst_json_child() {return(_is_lst_json_child(this))}
    stringify() {return(_stringify(this))}
    json()      {
        let unhandled = _json_init(this);
        return(_json_wfs(unhandled))
    }
    ////
    get length() {return(this.$children_count_)}
    ////
    get repr_() {return(this.#repr)}
    show()    {this.#repr=true;return(this)}
    unshow()  {this.#repr=false}
    ////
    get $_() {
        let proxy = new Proxy(this,{
            get:function (target,prop,receiver) {
                if(is_int_str(prop)) {
                    prop = parseInt(prop)
                } else {}
                let nd = target.get(prop);
                if(nd!==null) {
                    return(nd.$_)
                } else {
                    return(null)
                }
            },
            set:function (target,prop,value,receiver) {
                let forest = target[target.constructor.SYM_DICT.get_forest];
                let nd = target.get(prop);
                if(nd!==null) {
                    return(null)
                } else {
                    let tmp = load_from_json(value,forest);
                    let nnd = tmp[0];
                    if(is_int_str(prop)) {
                        prop = parseInt(prop)
                    } else {}
                    return(target.set(prop,nnd).$_)
                }
            }
        });
        return(proxy)
  }
}


class _Array extends _O {
    ////
    get(index)                  { return(this.$child(index))}
    ////
    set(index,nd)               {
        if(index>=0 && index < this.$children_count_) {
            let oldch = this.$child(index);
            oldch.$add_rsib(nd);
            oldch.$disconn();
            return({old:oldch,new:nd})
        } else {
            return(null)
        }
    }
    set_undefined_at(index)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_undefined(forest);
        return(this.set(index,nd))
    }
    set_null_at(index)          {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_null(forest);
        return(this.set(index,nd))
    }
    set_true_at(index)          {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_true(forest);
        return(this.set(index,nd))
    }
    set_false_at(index)         {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_false(forest);
        return(this.set(index,nd))
    }
    set_number_at(index,n)      {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_number(forest,n);
        return(this.set(index,nd))
    }
    set_str_at(index,s)         {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_str(forest,s);
        return(this.set(index,nd))
    }
    set_ary_at(index)           {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Array); 
        return(this.set(index,nd))
    }
    set_obj_at(index)           {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Object);
        return(this.set(index,nd))
    }
    ////
    set_external_at(index,ext)         {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_external(forest,ext);
        return(this.set(index,nd))
    }
    set_ref_at(index,ond)         {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_ref(forest,ond);
        return(this.set(index,nd))
    }
    ////
    append(nd)           {
        return(this.$append_child(nd))
    }
    append_undefined()     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_undefined(forest);
        return(this.append(nd))
    }
    append_null()     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_null(forest);
        return(this.append(nd))
    }
    append_true()     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_true(forest);
        return(this.append(nd))
    }
    append_false()     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_false(forest);
        return(this.append(nd))
    }
    append_number(n)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_number(forest,n);
        return(this.append(nd))
    }
    append_str(s)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_str(forest,s);
        return(this.append(nd))
    }
    append_ary()     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Array); 
        return(this.append(nd))
    }
    append_obj()     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Object);
        return(this.append(nd))
    }
    ////
    append_external(ext)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_external(forest,ext);
        return(this.append(nd))
    }
    append_ref(ond)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_ref(forest,ond);
        return(this.append(nd))
    }
    ////
    prepend(nd)          {return(this.$prepend_child(nd))}
    prepend_undefined()     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_undefined(forest);
        return(this.prepend(nd))
    }
    prepend_null()     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_null(forest);
        return(this.prepend(nd))
    }
    prepend_true()     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_true(forest);
        return(this.prepend(nd))
    }
    prepend_false()     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_false(forest);
        return(this.prepend(nd))
    }
    prepend_number(n)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_number(forest,n);
        return(this.prepend(nd))
    }
    prepend_str(s)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_str(forest,s);
        return(this.prepend(nd))
    }
    prepend_ary()     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Array)
        return(this.prepend(nd))
    }
    prepend_obj()     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Object)
        return(this.prepend(nd))
    }
    ////
    prepend_external(ext)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_external(forest,ond);
        return(this.prepend(nd))
    }
    prepend_ref(ond)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_ref(forest,ond);
        return(this.prepend(nd))
    }
    ////
    insert_at(nd,index)  {
        if(index>=0 && index < this.$children_count_) {
            let oldch = this.$child(index);
            oldch.$add_lsib(nd);
            return(nd)
        } else {
            return(null)
        }
    }
    insert_undefined_at(index)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_undefined(forest);
        return(this.insert_at(nd,index))
    }
    insert_null_at(index)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_null(forest);
        return(this.insert_at(nd,index))
    }
    insert_true_at(index)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_true(forest);
        return(this.insert_at(nd,index))
    }
    insert_false_at(index)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_false(forest);
        return(this.insert_at(nd,index))
    }
    insert_number_at(n,index)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_number(forest,n);
        return(this.insert_at(nd,index))
    }
    insert_str_at(s,index)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_str(forest,s);
        return(this.insert_at(nd,index))
    }
    insert_ary_at(index)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Array)
        return(this.insert_at(nd,index))
    }
    insert_obj_at(index)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Object)
        return(this.insert_at(nd,index))
    }
    ////
    insert_external_at(ext,index)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_external(forest,ext);
        return(this.insert_at(nd,index))
    }
    insert_ref_at(ond,index)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_ref(forest,ond);
        return(this.insert_at(nd,index))
    }
    ////
}

add_repr(_Array,(that)=>{
    if(that.repr_) {
        return(that.$children_)
    } else {
        return(`[...<${that.length} unshow>...]`)
    }
})

function creat_ary(forest) {return(forest.node(_Array))}


class _Object extends _O {
    ////
    get(k)                  { 
        let children = this.$children_;
        for(let ch of children) {
            if(ch.key_ === k) {
                return(ch)
            }
        }
        return(null)
    }
    ////
    k2i(k)                  {
        let children = this.$children_;
        for(let i=0;i<children.length;i++) {
            let ch = children[i]
            if(ch.key_ === k) {
                return(i)
            }
        }
        return(-1)
    }
    ////
    i2k(index) {
        let ch = this.$child(index);
        if(ch!==null) {
            return(ch.key_)
        } else {
            return(noexist)
        }
    }
    ////
    set(k,nd)               {
        let index = this.k2i();
        if(index>=0) {
            let oldch = this.$child(index);
            oldch.$add_rsib(nd);
            oldch.$disconn();
            return({old:oldch,new:nd})
        } else {
            return(null)
        }
    }
    set_undefined(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_undefined(forest);
        return(this.set(k,nd))
    }
    set_null(k)          {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_null(forest);
        return(this.set(k,nd))
    }
    set_true(k)          {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_true(forest);
        return(this.set(k,nd))
    }
    set_false(k)         {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_false(forest);
        return(this.set(k,nd))
    }
    set_number(k,n)      {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_number(forest,n);
        return(this.set(k,nd))
    }
    set_str(k,s)         {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_number(forest,s);
        return(this.set(k,nd))
    }
    set_ary(k)           {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Array);
        return(this.set(k,nd))
    }
    set_obj(k)           {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Object);
        return(this.set(k,nd))
    }
    ////
    set_external(k,ext)      {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_external(forest,ext);
        return(this.set(k,nd))
    }
    set_ref(k,ond)         {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_number(forest,ond);
        return(this.set(k,nd))
    }
    ////
    append(k,nd)           {
        nd.key_ =k;
        let index = this.k2i(k);
        if(index<0) {
            return(this.$append_child(nd))
        } else {
            return(null)
        }
    }
    append_undefined(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_undefined(forest);
        return(this.append(k,nd))
    }
    append_null(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_null(forest);
        return(this.append(k,nd))
    }
    append_true(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_true(forest);
        return(this.append(k,nd))
    }
    append_false(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_false(forest);
        return(this.append(k,nd))
    }
    append_number(k,n)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_number(forest,n);
        return(this.append(k,nd))
    }
    append_str(k,s)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_str(forest,s);
        return(this.append(k,nd))
    }
    append_ary(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Array)
        return(this.append(k,nd))
    }
    append_obj(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Object)
        return(this.append(k,nd))
    }
    ////
    append_external(k,ext)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_external(forest,ext);
        return(this.append(k,nd))
    }
    append_ref(k,ond)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_ref(forest,ond);
        return(this.append(k,nd))
    }
    ////
    prepend(k,nd)           {
        nd.key_ =k;
        let index = this.k2i(k);
        if(index<0) {
            return(this.$prepend_child(nd))
        } else {
            return(null)
        }
    }
    prepend_undefined(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_undefined(forest);
        return(this.prepend(k,nd))
    }
    prepend_null(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_null(forest);
        return(this.prepend(k,nd))
    }
    prepend_true(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_true(forest);
        return(this.prepend(k,nd))
    }
    prepend_false(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_false(forest);
        return(this.prepend(k,nd))
    }
    prepend_number(k,n)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_number(forest,n);
        return(this.prepend(k,nd))
    }
    prepend_str(k,s)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_str(forest,s);
        return(this.prepend(k,nd))
    }
    prepend_ary(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Array)
        return(this.prepend(k,nd))
    }
    prepend_obj(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Object)
        return(this.prepend(k,nd))
    }
    ////
    prepend_external(k,ext)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_number(forest,ext);
        return(this.prepend(k,nd))
    }
    prepend_ref(k,ond)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_ref(forest,ond);
        return(this.prepend(k,nd))
    }
    ////
    insert_before(nd,k)  {
        nd.key_ = k;
        let index = this.k2i();
        if(index>=0) {
            let oldch = this.$child(index);
            oldch.$add_lsib(nd);
            return(nd)
        } else {
            return(null)
        }
    }
    insert_undefined_before(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_undefined(forest);
        return(this.insert_before(nd,k))
    }
    insert_null_before(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_null(forest);
        return(this.insert_before(nd,k))
    }
    insert_true_before(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_true(forest);
        return(this.insert_before(nd,k))
    }
    insert_false_before(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_false(forest);
        return(this.insert_before(nd,k))
    }
    insert_number_before(k,n)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_number(forest,n);
        return(this.insert_before(nd,k))
    }
    insert_str_before(s,index)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_str(forest,s);
        return(this.insert_before(nd,k))
    }
    insert_ary_before(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Array)
        return(this.insert_before(nd,k))
    }
    insert_obj_before(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Object)
        return(this.insert_before(nd,k))
    }
    ////
    insert_external_before(k,ext)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_external(forest,ext);
        return(this.insert_before(nd,k))
    }
    insert_ref_before(k,ond)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_ref(forest,ond);
        return(this.insert_before(nd,k))
    }
    ////
    insert_after(nd,k)  {
        nd.key_ = k;
        let index = this.k2i();
        if(index>=0) {
            let oldch = this.$child(index);
            oldch.$add_rsib(nd);
            return(nd)
        } else {
            return(null)
        }
    }
    insert_undefined_after(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_undefined(forest);
        return(this.insert_after(nd,k))
    }
    insert_null_after(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_null(forest);
        return(this.insert_after(nd,k))
    }
    insert_true_after(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_true(forest);
        return(this.insert_after(nd,k))
    }
    insert_false_after(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_false(forest);
        return(this.insert_after(nd,k))
    }
    insert_number_after(k,n)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_number(forest,n);
        return(this.insert_after(nd,k))
    }
    insert_str_after(k,s)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_str(forest,s);
        return(this.insert_after(nd,k))
    }
    insert_ary_after(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Array)
        return(this.insert_after(nd,k))
    }
    insert_obj_after(k)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = forest.node(_Object)
        return(this.insert_after(nd,k))
    }
    insert_external_after(k,ext)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_external(forest,ext);
        return(this.insert_after(nd,k))
    }
    insert_ref_after(k,ond)     {
        let forest = this[this.constructor.SYM_DICT.get_forest];
        let nd = creat_ref(forest,ond);
        return(this.insert_after(nd,k))
    }
}

add_repr(_Object,(that)=>{
    if(that.repr_) {
        let d = {}
        let children = that.$children_;
        children.forEach(nd=>d[nd.key_]=nd);
        return(d)
    } else {
        return(`[...<${that.length} unshow>...]`)
    }
});

function creat_obj(forest) {return(forest.node(_Object))}



////

function is_nd(o) {
    return((o instanceof _Leaf) || (o instanceof _O))
}

function is_jleaf(j) {
    if(is_ary(j)) {
        return(j.length===0)
    } else if(is_dict(j)) {
        return(Object.keys(j).length===0)
    } else {
        return(true)
    }
}


function _load_init(j,forest,max_size=10000) {
    forest = forest??(new Forest(max_size));
    if(is_ary(j)) {
        let unhandled = [{nd:creat_ary(forest),j,k:noexist}]
        return([unhandled,forest])
    } else if(is_undefined(j)){
        let unhandled = [{nd:creat_undefined(forest),j,k:noexist}]
        return([unhandled,forest])
    } else if(is_normal_num(j)) {
        let unhandled = [{nd:creat_number(forest,j),j,k:noexist}]
        return([unhandled,forest])
    } else if(is_str(j)) {
        let unhandled = [{nd:creat_str(forest,j),j,k:noexist}]
        return([unhandled,forest])
    } else if(is_null(j)) {
        let unhandled = [{nd:creat_null(forest,j),j,k:noexist}]
        return([unhandled,forest])
    } else if(j===true) {
        let unhandled = [{nd:creat_true(forest,j),j,k:noexist}]
        return([unhandled,forest])
    } else if(j===false) {
        let unhandled = [{nd:creat_false(forest,j),j,k:noexist}]
        return([unhandled,forest])
    } else if(is_nd(j)) {
        let unhandled = [{nd:creat_ref(forest,j),j,k:noexist}]
        return([unhandled,forest])
    } else if(is_dict(j)) {
        let unhandled = [{nd:creat_obj(forest),j,k:noexist}]
        return([unhandled,forest])
    } else {
        let unhandled = [{nd:creat_external(forest,j),j,k:noexist}]
        return([unhandled,forest])
    }
}

function _ary_add_nd(next_unhandled,pnd,chj) {
    if(is_undefined(chj)) {
        pnd.append_undefined();
    } else if(is_null(chj)) {
        pnd.append_null();
    } else if(chj===true) {
        pnd.append_true();
    } else if(chj===false) {
        pnd.append_false();
    } else if(is_normal_num(chj)) {
        pnd.append_number(chj);
    } else if(is_str(chj)) {
        pnd.append_str(chj);
    } else if(is_nd(chj)) {
        pnd.append_ref(chj);
    } else if(is_ary(chj)) {
        let chnd = pnd.append_ary();
        if(chj.length>0) {
            next_unhandled.push({nd:chnd,j:chj,k:noexist})
        } else {}
    } else if(is_dict(chj)) {
        let chnd = pnd.append_obj();
        if(Object.keys(chj).length>0) {
            next_unhandled.push({nd:chnd,j:chj,k:noexist})
        } else {}
    } else {
        pnd.append_external(chj);
    }
}


function _dict_add_nd(next_unhandled,pnd,chj,k) {
    if(is_undefined(chj)) {
        pnd.append_undefined(k);
    } else if(is_null(chj)) {
        pnd.append_null(k);
    } else if(chj===true) {
        pnd.append_true(k);
    } else if(chj===false) {
        pnd.append_false(k);
    } else if(is_normal_num(chj)) {
        pnd.append_number(k,chj);
    } else if(is_str(chj)) {
        pnd.append_str(k,chj);
    } else if(is_nd(chj)) {
        pnd.append_ref(k,chj);
    } else if(is_ary(chj)) {
        let chnd = pnd.append_ary(k);
        if(chj.length>0) {
            next_unhandled.push({nd:chnd,j:chj,k})
        } else {}
    } else if(is_dict(chj)) {
        let chnd = pnd.append_obj(k);
        if(Object.keys(chj).length>0) {
            next_unhandled.push({nd:chnd,j:chj,k})
        } else {}
    } else {
        pnd.append_external(k,chj);
    }
}





function load_from_json(j,_forest,max_size=10000) {
    let [unhandled,forest] = _load_init(j,_forest,max_size);
    let rt = unhandled[0].nd;
    if(is_jleaf(j)) {
        return([rt,forest])
    } else {
        let next_unhandled = []
        while(unhandled.length>0) {
            for(let d of unhandled) {
                let {nd,j,k} = d;
                if(nd.is_ary()) {
                    let jchildren = j;
                    for(let chj of jchildren) {
                        _ary_add_nd(next_unhandled,nd,chj)
                    }
                } else if(nd.is_obj()) {
                    let jchildren = j;
                    for(let k in jchildren) {
                        let chj = jchildren[k]
                        _dict_add_nd(next_unhandled,nd,chj,k)
                    }
                } else {
                    //impossible
                }
            }
            unhandled = next_unhandled;
            next_unhandled = [];
        }
        return([rt,forest])
    }
}


module.exports = {
    noexist,
    unknown,
    ////
    GPRIM_ARR:[undefined,null,true,false],
    ////
    creat_undefined,
    creat_null,
    creat_true,
    creat_false,
    ////
    creat_str,
    creat_number,
    ////
    creat_ary,
    creat_obj,
    ////
    creat_external,
    creat_ref,
    is_nd,
    ////
    is_jleaf,
    load_from_json,
}
