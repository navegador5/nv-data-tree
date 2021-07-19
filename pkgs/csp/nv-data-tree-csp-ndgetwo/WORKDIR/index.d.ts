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

export function $get_with_spl (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):ID; 
