declare type BL = boolean;
declare type ID = number;
declare type SLOTS = any[];
declare type A = Array<ID>;
declare type VD = void;
declare const _0: (slots: SLOTS, id: ID) => BL;
declare const _1: (lb: A, id: ID) => BL;
declare const _2: (pr: A, id: ID) => BL;
declare const _3: (rb: A, id: ID) => BL;
declare const _4: (fc: A, id: ID) => BL;
declare const _5: (rb: A, lb: A, id: ID) => BL;
declare const _6: (fc: A, pr: A, id: ID) => BL;
declare const _7: (cary: A, pr: A, p: ID, c: ID) => VD;
declare const _8: (rb: A, lb: A, r: ID, l: ID) => VD;
declare const _9: (fc: A, rb: A, pr: A, lb: A, lc: A, id: ID) => ID;
declare const _11: (fc: A, rb: A, pr: A, lb: A, lc: A, id: ID, ch: ID) => ID;
declare const _12: (fc: A, rb: A, pr: A, lb: A, lc: A, id: ID, ch: ID) => ID;
declare const _14: (fc: A, rb: A, pr: A, lb: A, lc: A, id: ID, sib: ID) => ID;
declare const _15: (fc: A, rb: A, pr: A, lb: A, lc: A, id: ID, sib: ID) => ID;
export { _0 as $is_empty, _1 as $is_fstch, _2 as $is_root, _3 as $is_lstch, _4 as $is_leaf, _5 as $is_lonely, _6 as $is_isolated, _7 as link_pc, _8 as link_rl, _9 as $disconn, _11 as $prepend_child, _12 as $append_child, _14 as $add_rsib, _15 as $add_lsib };