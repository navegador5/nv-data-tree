

function false_e(o,...props) {props.forEach(k=>Object.defineProperty(o,k,{enumerable:false}))}

function add_getter(Cls,name,f) {
    Object.defineProperty(
        Cls.prototype,
        name,
        {
            get:function() {return(f(this))}
        }
    );
}

function add_setter(Cls,name,f) {
    Object.defineProperty(
        Cls.prototype,
        name,
        {
            set:function(v) {return(f(this,v))}
        }
    );
}



module.exports = {
    false_e,
    add_getter,
    add_setter,
}



