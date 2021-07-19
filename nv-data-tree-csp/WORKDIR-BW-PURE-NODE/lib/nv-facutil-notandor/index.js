//非not
//全部是and all
const _0 = (...params)=>params.every(r=>r);
//其中至少有n个是
const _2 = (f,n,...params)=> {
    let c = 0;
    for(let each of params) {
        if(f(each)){c=c+1}
        if(c===n) {return(true)}
    }
    return(false)
}
const _3 = (n,...params)=>_2((r)=>r,n,...params)
//任意一个是or any
const _4 = (...params) => _3(1,...params)
//其中至少有n个不是



module.exports = {
    and:_0,
    or:_4,
}
