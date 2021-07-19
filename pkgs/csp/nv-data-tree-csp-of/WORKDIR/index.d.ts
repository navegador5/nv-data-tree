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

export function $is_root_of          (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;
export function $is_parent_of        (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;
export function $is_ance_of          (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;
export function $is_inclusive_ance_of(idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;
export function $is_child_of         (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;
export function $is_fstch_of         (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;
export function $is_lstch_of         (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;
export function $is_des_of           (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;
export function $is_inclusive_des_of (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;
export function $is_fsib_of          (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;
export function $is_rsib_of          (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;
export function $is_psib_of          (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;
export function $is_lsib_of          (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;
export function $is_sib_of           (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;
export function $is_inclusive_sib_of (idpool:IDPOOL,fc:A,rb:A,pr:A,lb:A,lc:A,ids:A,idxs:IDXA,others:OA):BL;



