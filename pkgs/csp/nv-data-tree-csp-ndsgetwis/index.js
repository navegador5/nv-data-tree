const gn=require("nv-data-tree-csp-gen"),__ME={$some_ances:(e,s,n,g,o,m,_,$,r)=>gn.some(gn.$ance(g,_[0]),$),$some_plances:(e,s,n,g,o,m,_,$,r)=>{_=gn.reverse_then_push_self(gn.$ance(g,_[0]),_[0]);return gn.some(_,$)},$some_children:(e,s,n,g,o,m,_,$,r)=>gn.some(gn.$fch(s,n,_[0]),$),$some_sibs:(e,s,n,g,o,m,_,$,r)=>gn.some(gn.$sibff(s,n,g,_[0]),$),$some_psibs:(e,s,n,g,o,m,_,$,r)=>gn.some(gn.$psib(o,_[0]),$),$some_fsibs:(e,s,n,g,o,m,_,$,r)=>gn.some(gn.$fsib(n,_[0]),$)};module.exports=__ME;