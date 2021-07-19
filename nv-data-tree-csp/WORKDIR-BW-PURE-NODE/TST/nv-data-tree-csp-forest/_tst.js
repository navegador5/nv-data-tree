const ary_defrag = require("../../lib/nv-array-defrag/index");
const PROPS = ['fc','pr','rb','lb','lc'];


const sym = Symbol("")
class C {
    constructor(n){this.n=n}
    [sym](v) {this.n=v}
}
C.SYM_DICT = {set_id:sym}

var that = {
    slots_:[0,new C(1),new C(2),0,0,new C(5),0,0,new C(8),new C(9)],
    fc    :[0,      2,        0,0,0,       8,0,0,       0,       0],
    rb    :[0,      0,        5,0,0,       0,0,0,       9,       0],
    pr    :[0,      0,        1,0,0,       1,0,0,       5,       5],
    lc    :[0,      5,        0,0,0,       9,0,0,       0,       0],
    lb    :[0,      0,        0,0,0,       2,0,0,       0,       8],
}

var should_be = {
    slots_:[0,{ n:1 },{ n: 2 },{ n: 3 },{ n: 4 },{ n: 5 },0,0,0,0],
    fc    :[ 0, 2, 0, 4, 0, 0, 0, 0, 0, 0 ],
    rb    :[ 0, 0, 3, 0, 5, 0, 0, 0, 0, 0 ],
    pr    :[ 0, 0, 1, 1, 3, 3, 0, 0, 0, 0 ],
    lc    :[ 0, 3, 0, 5, 0, 0, 0, 0, 0, 0 ],
    lb    :[ 0, 0, 0, 2, 0, 4, 0, 0, 0, 0 ],
}



function _defrag(that) {
    let slots = that.slots_;
    let imp = ary_defrag.defrag(slots,0,1);
    let oist = new Set(Array.from(imp.keys()));
    for(let i=1;i<=oist.size;i++) {
        let nd = slots[i];
        nd[nd.constructor.SYM_DICT.set_id](i)
    }
    PROPS.forEach(
        r=> {
            let arr = that[r];
            for(let i=1;i<arr.length;i++) {
                if(oist.has(i)) {arr[i] = imp.get(arr[i])??0}
            }
            for(let [oi,ni] of imp) {
                let tmp = arr[oi]
                arr[oi] = 0;
                arr[ni] = tmp;

            }
        }
    )
}

const assert = require("assert")
_defrag(that)
assert.deepStrictEqual(JSON.stringify(that),JSON.stringify(should_be))

