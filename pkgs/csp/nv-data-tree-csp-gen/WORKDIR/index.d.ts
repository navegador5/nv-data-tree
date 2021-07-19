export type BL = boolean;
export type ID = number;
export type SLOTS = any[];
export type A = Array<ID>;
export type VD = void;
export type G = Generator;
export type IDX = number;
export type IDXA = Array<IDX>;
export type M = Array<A>;


/*
export function _0(ary:A,id:ID):G;
export function _1(cary:A,bary:A,id:ID):G;
export function _2(cary:A,bary:A,pr:A,id:ID):G;
export function _3(ary:A,id:ID):G;
export function _4(fc:A,rb:A,lyr:A):G;
export function _5(fc:A,rb:A,id:ID):G;
*/

export function lst0(g:G,init:ID):ID ;
export function which(g:G,which:IDX):ID; 
export function some(g:G,whiches:IDXA):A; 
export function of(g:G,other:ID):BL; 
export function count(g:G):number; 
export function seq(g:G,id:ID):IDX 
export function dist_after(g:G,self:ID,other:ID):number; 
export function dist_dual(g:G,self:ID,other:ID):number; 
export function reverse_then_push_self(g:G,self:ID):A; 


export function $ance  (pr:A,id:ID):G;
export function $drmost(lc:A,id:ID):G;
export function $dlmost(fc:A,id:ID):G;
export function $fch   (fc:A,rb:A,id:ID):G;
export function $lch   (lc:A,lb:A,id:ID):G;
export function $psib  (lb:A,id:ID):G;
export function $fsib  (rb:A,id:ID):G;
export function $sibff (fc:A,rb:A,pr:A,id:ID):G;
export function $sibfl (lc:A,lb:A,pr:A,id:ID):G;
export function $nlyr  (fc:A,rb:A,lyr:A):G;
export function $mat   (fc:A,rb:A,id:ID):G;


