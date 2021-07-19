const assert = require("assert");
const {
    $sibseq_,      
    $gen_sib,
    $fstsib_,      
    $lstsib_,
    $sib,          
    $some_sibs,
    $sibs_,        
    $sibs_count_,
    $gen_psib,     
    $lsib_,
    $fstpsib_,     
    $psib,
    $some_psibs,   
    $psibs_,
    $psibs_count_, 
    $gen_fsib,
    $rsib_,        
    $lstfsib_,
    $fsib,         
    $some_fsibs,
    $fsibs_,       
    $fsibs_count_,
    $rel_spl,
    $spl_,
    $get_with_spl
} = require("../../edge");


var max_size= 4096
var vertexes = new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])
var eary = [
      2,  4099,  4100,
  12293, 12294,     7,
  24584, 24585, 24586,
  36875, 36876, 36877,
  36878, 36879, 36880
]


assert($sibseq_ (max_size,eary,vertexes,1) === 0)
assert($sibseq_ (max_size,eary,vertexes,2) === 0)
assert($sibseq_ (max_size,eary,vertexes,3) === 0)
assert($sibseq_ (max_size,eary,vertexes,4) === 1)
assert($sibseq_ (max_size,eary,vertexes,5) === 0)
assert($sibseq_ (max_size,eary,vertexes,6) === 1)
assert($sibseq_ (max_size,eary,vertexes,7) === 1)
assert($sibseq_ (max_size,eary,vertexes,8) === 0)
assert($sibseq_ (max_size,eary,vertexes,9) === 1)
assert($sibseq_ (max_size,eary,vertexes,10) === 2)
assert($sibseq_ (max_size,eary,vertexes,11) === 0)
assert($sibseq_ (max_size,eary,vertexes,12) === 1)
assert($sibseq_ (max_size,eary,vertexes,13) === 2)
assert($sibseq_ (max_size,eary,vertexes,14) === 3)
assert($sibseq_ (max_size,eary,vertexes,15) === 4)
assert($sibseq_ (max_size,eary,vertexes,16) === 5)


var psibs= Array.from($gen_psib(max_size,eary,vertexes,1))
assert.deepStrictEqual(psibs,[])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,2))
assert.deepStrictEqual(psibs,[])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,3))
assert.deepStrictEqual(psibs,[])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,4))
assert.deepStrictEqual(psibs,[3])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,5))
assert.deepStrictEqual(psibs,[ ])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,6))
assert.deepStrictEqual(psibs,[5])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,7))
assert.deepStrictEqual(psibs,[2])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,8))
assert.deepStrictEqual(psibs,[ ])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,9))
assert.deepStrictEqual(psibs,[8])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,10))
assert.deepStrictEqual(psibs,[9,8])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,11))
assert.deepStrictEqual(psibs,[ ])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,12))
assert.deepStrictEqual(psibs,[11])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,13))
assert.deepStrictEqual(psibs,[12,11])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,14))
assert.deepStrictEqual(psibs,[13,12,11])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,15))
assert.deepStrictEqual(psibs,[14,13,12,11])
var psibs= Array.from($gen_psib(max_size,eary,vertexes,16))
assert.deepStrictEqual(psibs,[15,14,13,12,11])


var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,1))
assert.deepStrictEqual(fsibs,[])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,2))
assert.deepStrictEqual(fsibs,[7])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,3))
assert.deepStrictEqual(fsibs,[4])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,4))
assert.deepStrictEqual(fsibs,[])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,5))
assert.deepStrictEqual(fsibs,[6])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,6))
assert.deepStrictEqual(fsibs,[])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,7))
assert.deepStrictEqual(fsibs,[])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,8))
assert.deepStrictEqual(fsibs,[9,10])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,9))
assert.deepStrictEqual(fsibs,[10])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,10))
assert.deepStrictEqual(fsibs,[])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,11))
assert.deepStrictEqual(fsibs,[12,13,14,15,16])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,12))
assert.deepStrictEqual(fsibs,[13,14,15,16])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,13))
assert.deepStrictEqual(fsibs,[14,15,16])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,14))
assert.deepStrictEqual(fsibs,[15,16])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,15))
assert.deepStrictEqual(fsibs,[16])
var fsibs= Array.from($gen_fsib(max_size,eary,vertexes,16))
assert.deepStrictEqual(fsibs,[])


var sibs= Array.from($gen_sib(max_size,eary,vertexes,1))
assert.deepStrictEqual(sibs,[1])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,2))
assert.deepStrictEqual(sibs,[2,7])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,3))
assert.deepStrictEqual(sibs,[3,4])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,4))
assert.deepStrictEqual(sibs,[3,4])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,5))
assert.deepStrictEqual(sibs,[5,6])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,6))
assert.deepStrictEqual(sibs,[5,6])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,7))
assert.deepStrictEqual(sibs,[2,7])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,8))
assert.deepStrictEqual(sibs,[8,9,10])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,9))
assert.deepStrictEqual(sibs,[8,9,10])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,10))
assert.deepStrictEqual(sibs,[8,9,10])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,11))
assert.deepStrictEqual(sibs,[11,12,13,14,15,16])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,12))
assert.deepStrictEqual(sibs,[11,12,13,14,15,16])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,13))
assert.deepStrictEqual(sibs,[11,12,13,14,15,16])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,14))
assert.deepStrictEqual(sibs,[11,12,13,14,15,16])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,15))
assert.deepStrictEqual(sibs,[11,12,13,14,15,16])
var sibs= Array.from($gen_sib(max_size,eary,vertexes,16))
assert.deepStrictEqual(sibs,[11,12,13,14,15,16])


assert($rsib_ (max_size,eary,vertexes,1) === 0)
assert($rsib_ (max_size,eary,vertexes,2) === 7)
assert($rsib_ (max_size,eary,vertexes,3) === 4)
assert($rsib_ (max_size,eary,vertexes,4) === 0)
assert($rsib_ (max_size,eary,vertexes,5) === 6)
assert($rsib_ (max_size,eary,vertexes,6) === 0)
assert($rsib_ (max_size,eary,vertexes,7) === 0)
assert($rsib_ (max_size,eary,vertexes,8) === 9)
assert($rsib_ (max_size,eary,vertexes,9) === 10)
assert($rsib_ (max_size,eary,vertexes,10) === 0)
assert($rsib_ (max_size,eary,vertexes,11) === 12)
assert($rsib_ (max_size,eary,vertexes,12) === 13)
assert($rsib_ (max_size,eary,vertexes,13) === 14)
assert($rsib_ (max_size,eary,vertexes,14) === 15)
assert($rsib_ (max_size,eary,vertexes,15) === 16)
assert($rsib_ (max_size,eary,vertexes,16) === 0)


assert($lsib_ (max_size,eary,vertexes,1) === 0)
assert($lsib_ (max_size,eary,vertexes,2) === 0)
assert($lsib_ (max_size,eary,vertexes,3) === 0)
assert($lsib_ (max_size,eary,vertexes,4) === 3)
assert($lsib_ (max_size,eary,vertexes,5) === 0)
assert($lsib_ (max_size,eary,vertexes,6) === 5)
assert($lsib_ (max_size,eary,vertexes,7) === 2)
assert($lsib_ (max_size,eary,vertexes,8) === 0)
assert($lsib_ (max_size,eary,vertexes,9) === 8)
assert($lsib_ (max_size,eary,vertexes,10) === 9)
assert($lsib_ (max_size,eary,vertexes,11) === 0)
assert($lsib_ (max_size,eary,vertexes,12) === 11)
assert($lsib_ (max_size,eary,vertexes,13) === 12)
assert($lsib_ (max_size,eary,vertexes,14) === 13)
assert($lsib_ (max_size,eary,vertexes,15) === 14)
assert($lsib_ (max_size,eary,vertexes,16) === 15)


assert($sibs_count_ (max_size,eary,vertexes,1) === 1)
assert($sibs_count_ (max_size,eary,vertexes,2) === 2)
assert($sibs_count_ (max_size,eary,vertexes,3) === 2)
assert($sibs_count_ (max_size,eary,vertexes,4) === 2)
assert($sibs_count_ (max_size,eary,vertexes,5) === 2)
assert($sibs_count_ (max_size,eary,vertexes,6) === 2)
assert($sibs_count_ (max_size,eary,vertexes,7) === 2)
assert($sibs_count_ (max_size,eary,vertexes,8) === 3)
assert($sibs_count_ (max_size,eary,vertexes,9) === 3)
assert($sibs_count_ (max_size,eary,vertexes,10) === 3)
assert($sibs_count_ (max_size,eary,vertexes,11) === 6)
assert($sibs_count_ (max_size,eary,vertexes,12) === 6)
assert($sibs_count_ (max_size,eary,vertexes,13) === 6)
assert($sibs_count_ (max_size,eary,vertexes,14) === 6)
assert($sibs_count_ (max_size,eary,vertexes,15) === 6)
assert($sibs_count_ (max_size,eary,vertexes,16) === 6)


assert($sib (max_size,eary,vertexes,1,0) === 1)
assert($sib (max_size,eary,vertexes,16,2) === 13)

assert($psib (max_size,eary,vertexes,1,0) === 0)
assert($psib (max_size,eary,vertexes,13,1) === 11)

assert($fsib (max_size,eary,vertexes,1,0) === 0)
assert($fsib (max_size,eary,vertexes,13,1) === 15)


assert.deepStrictEqual($spl_(max_size,eary,vertexes,13),[1,2,2])
assert.deepStrictEqual($rel_spl(max_size,eary,vertexes,13,7),[2,2])
assert.deepStrictEqual($get_with_spl(max_size,eary,vertexes,7,[2,2]),13)

