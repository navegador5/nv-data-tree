const __N   = Number;
const _infi = Infinity; 
const __O   = Object;
const __J   = JSON;
const _S$   = Symbol;   
const _S    = String;
const _A    = Array;
const _BI   = BigInt;
const U8A   = Uint8Array;
const U16A  = Uint16Array;
const U32A  = Uint32Array;
const BU64A = BigUint64Array;
const BI64A = BigInt64Array;

const _pI  = parseInt; 


const __t     = true;
const __f     = false; 
const __un    = undefined;

const __OFE = __O.fromEntries;
const __OSHI = (Cls,o)=>(o instanceof Cls);
const __STST = _S$.toStringTag;


const __DP = 'defineProperty';
const __GOPD   = 'getOwnPropertyDescriptor';
const __CTOR  = 'constructor';
const __l     = 'length';
const __ptyp  = 'prototype';

const {or,and} = require("../nv-facutil-notandor/index");


////
const is_ary = Array.isArray;

////
let __ME  = module.exports;

////util
const typof  = (o,s)   => typeof(o)===s;
const instof = (o,I)   => (o instanceof I);

const eqany =(o,...params) => {
    for(let each of params) {
        if(o===each) {return(true)}
    }
    return(false)
}


//// env



function is_node() {
    try {
        document.createTextNode("");
    } catch(e) {
        return(true)
    }
}

////repr

const ZWNJ = "\u200c";


function add_repr(cls,repr,...other_args) {
    is_node()?
        cls[__ptyp][require("util").inspect.custom] = function () {return(repr(this,...other_args))} :
        cls[__ptyp].repr = function () {return(repr(this,...other_args))}
}

function add_string_tag(cls,repr,...other_args) {
    __O[__DP](
        cls[__ptyp],
        __STST,
        {
            get:function () {return(repr(this,...other_args))}
        }
    )
}


//// special

const root = _S$("root");
const empty = _S$("empty");
const unknown = _S$("unknown");
const impossible = _S$("impossible");
const never = _S$("never");
const maybe = _S$("maybe");
const any = _S$("any");
const noexist = _S$("noexist");
const hole  = _S$("hole");

//


//// cmmn op
const jdcp = (j)=>(__J.parse(__J.stringify(j)))
////

function iflet(...args) {
    let lngth = args[__l];
    let pairs = args.slice(0,lngth-1);
    let els = args[lngth-1];
    for(let i=0;i<lngth-1;i=i+2) {
        let cond = args[i];
        let rslt = args[i+1];
        let judge;
        if(cond) {return(rslt)} else {}
    }
    return(els)
}


////

////

////set_safely


////stack op

/////

//// nothing

////nulish op
////symbol number string


////bigint


__ME = {
    __O,__DP,
    ////
    is_node,
    ////
    jdcp,
    iflet,
    ////
    forlst: (arr,f)=> {for(let i=arr.length-1;i>-1;i--) {f(arr[i],i)}},
    ////
    ////
    root,empty,unknown,impossible,never,maybe,any,noexist,hole,
    ////
    ZWNJ,
    ////
    add_repr,add_string_tag
    ////
}


////

//// typed Array

//// instance of

////special object pm px sg,ag 


//// cls func 


//// dtype

////stype

//// id
const {nanoid}   = require("nanoid");
__ME["creat_id"] = ()=>nanoid(36);
const ID_REGEX = /\-/g;
_tmp = () => __ME['creat_id']().replace(ID_REGEX,'');
__ME.creat_nodash_id = _tmp;
__ME.creat_idary = ()=>[0,0,0,0].map((r,i)=>_pI('0x'+_tmp().slice(i*8,i*8+8)));
__ME.creat_bigint_id = ()=> _BI("0x"+_tmp()); 
__ME.get_abbr = (id)=>id.substr(0,8);


////idpool
const _idpool_repr = (that)=>({minid_:that.minid_,maxid_:that.maxid_,used_:that.used_,lefted_:that.lefted_})

function * _anid_gen(maxid,rented,empty,initv) {
    let lngth = rented[__l];
    while(__t) {
        for(let i=1;i<lngth;i++) {
            if(rented[i]!== empty) {
            } else {
                rented[i]= initv
                yield(i);
            }
        }
    }
}


function _creat_anid_cls(Cls) {
    const SYM_INCR_USED = _S$()
    const SYM_DECR_USED = _S$()
    const SYM_GET_EMPTY = _S$()
    const SYM_GET_RENTED = _S$()
    const SYM_GET_INITV = _S$()
    const SYM_GET_G = _S$()
    const SYM_RESET_G = _S$()
    class _ANidPool {
        #rented
        #maxid
        #g
        #used
        #empty
        #initv
        constructor(maxid,rented,empty,initv) {
            if(Cls === _A) {
                rented = rented??_A.from({length:_pI(maxid+1)}).map(r=>empty)
            } else {
                rented = rented??(new Cls(_pI(maxid+1)))
            }
            this.#maxid = (Cls===BU64A)?_BI(maxid):maxid;
            this.#used = rented.filter(r=>r!==empty).length;
            this.#rented = rented;
            this.#empty = empty;
            this.#initv = initv;
            this.#g = _anid_gen(_pI(maxid),this.#rented,this.#empty,this.#initv)
        }
        get rented_() {return(this.#rented)}
        [SYM_INCR_USED]() {this.#used = this.#used+1}
        [SYM_DECR_USED]() {this.#used = this.#used-1}
        get used_ ()  {return(this.#used)}
        get minid_()  {return(Cls===BU64A?1n:1)}
        get maxid_()  {return(this.#maxid)}
        get lefted_ (){return(_pI(this.#maxid) - this.used_)}
        is_full()   {return(this.lefted_ === 0)}
        get [SYM_GET_EMPTY]() {return(this.#empty)}
        get [SYM_GET_RENTED]() {return(this.#rented)}
        get [SYM_GET_INITV]() {return(this.#initv)}
        get [SYM_GET_G]() {return(this.#g)}
        [SYM_RESET_G]() {
            this.#g = _anid_gen(_pI(this.#maxid),this.#rented,this.#empty,this.#initv)
        }
        reset() {
            this.#used = 0;
            for(let i=1;i<this.#rented[__l];i++) {
                this.#rented[i] = this.#empty
            }
            this[SYM_RESET_G]();
        }
    }
    if(Cls === BU64A) {
        _ANidPool[__ptyp].rent = function () {
            if(this.used_ === _pI(this.maxid_)) {
                this[SYM_RESET_G]();
                return(-this[SYM_GET_INITV])
            } else {
                this[SYM_INCR_USED]();
                return(_BI(this[SYM_GET_G].next().value))
            }
        }
        _ANidPool[__ptyp].rtrn = function (nid) {
            if(this[SYM_GET_RENTED][_pI(nid)]!==this[SYM_GET_EMPTY]) {
                this[SYM_DECR_USED]();
                this[SYM_GET_RENTED][_pI(nid)] = this[SYM_GET_EMPTY]
            }
        }
    } else {
        _ANidPool[__ptyp].rent = function () {
            if(this.used_ === this.maxid_) {
                this[SYM_RESET_G]();
                return(-this[SYM_GET_INITV])
            } else {
                this[SYM_INCR_USED]();
                return(this[SYM_GET_G].next().value)
            }
        }
        _ANidPool[__ptyp].rtrn = function (nid) {
            if(this[SYM_GET_RENTED][nid]!==this[SYM_GET_EMPTY]) {
                this[SYM_DECR_USED]();
                this[SYM_GET_RENTED][nid] = this[SYM_GET_EMPTY]
            }
        }
    }
    add_repr(_ANidPool,_idpool_repr)
    return(_ANidPool)
}

__ME.AidPool    = _creat_anid_cls(_A);


//ERROR_DICT

//
module.exports = __ME
