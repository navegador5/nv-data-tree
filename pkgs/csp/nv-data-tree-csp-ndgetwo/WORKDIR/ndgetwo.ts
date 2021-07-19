export type BL = boolean;
export type ID = number;
export type SLOTS = any[];
export type A = Array<ID>;
export type VD = void;
export type G = Generator;
export type IDX = number;
export type IDXA = Array<IDX>;
export type OA = any[];

export declare interface IDPOOL {
    minid_:number;
    maxid_:number;
    used_:number;
    lefted_:number;
    rented_: SLOTS;
    is_full: ()=>BL;
    reset: ()=>VD;
    rent: ()=>ID;
    rtrn: (id:ID)=>VD;
}

import * as gn from "nv-data-tree-csp-gen";


const _0 = (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):ID=> {
    let id:ID = ids[0];
    let spl:IDXA = others[0];
    for(let i:ID of spl) {
        id = gn.which(gn.$fch(fc,rb,id),i)
        if(id===0) {break}
    }
    return(id)
}

export {
    _0 as $get_with_spl
}
