const {add_repr,add_string_tag,get_abbr} = require("nv-facutil-basic")

const PREFIX_DICT = { t: '├── ', v: '│   ', l: '└── ', ws: '    ' }

function _creat_prefix(nd,dist=0) {
    let prefix=[];
    if(nd.$is_root()) {
        
    } else if(nd.$is_lstch()) {
        prefix.unshift(PREFIX_DICT.l)
    } else {
        prefix.unshift(PREFIX_DICT.t)
    }
    let ances = nd.$ances_;
    for(let i=0;i<ances.length-1;i++) {
        let ance = ances[i]
        if(ance.$is_lstch() ) {
            prefix.unshift(PREFIX_DICT.ws)
        } else {
            prefix.unshift(PREFIX_DICT.v)
        }
    }
    prefix=prefix.slice(dist)
    return(prefix.join(""))
}


const DFLT_SDFS_LFN = (nd) =>{
    return(nd.$id_)
}


function _sdfs_repr(nd,lfn=DFLT_SDFS_LFN,max_lines=100) {
    if(nd[nd.constructor.SYM_DICT.get_forest]===null){return('[erased]{}')}
    let head = '['+_creat_string_tag(nd)+'] ' +JSON.stringify(nd,null,4)
    let ary =[];
    if(!nd.$is_leaf()){
        let lngth = nd.$length_;
        let sdfs = nd.$sdfs_ 
        let dist = nd.$depth_
        sdfs = sdfs.slice(0,max_lines)
        ary = sdfs.map(nd=>"    "+_creat_prefix(nd,dist)+lfn(nd))
        if(lngth>max_lines) {
            ary.push("... "+lngth-max_lines+' more items')
        }
        return(head + ' (\n'+ary.join("\n") + '\n)')
    } else {
        return(head)
    }
}

const DFLT_SEDFS_LFN = (nd,flag) =>{ 
    if(flag==='open') {
        return('<'+nd.$id_+'>')
    } else {
        return('</'+nd.$id_+'>')
    }
}

function _sedfs_repr(nd,lfn=DFLT_SEDFS_LFN,max_lines=100) {
    if(nd[nd.constructor.SYM_DICT.get_forest]===null){return('[erased]{}')}
    let head = '['+_creat_string_tag(nd)+'] ' +JSON.stringify(nd,null,4)
    let ary =[];
    if(!nd.$is_leaf()){
        let sedfs = nd.$sedfs_ 
        let lngth = sedfs.length;
        let dist = nd.$depth_;
        sedfs = sedfs.slice(0,max_lines)
        let ary = sedfs.map(
            e=>{
                let [nd,flag] = e;
                let s = "    ".repeat(nd.$depth_-dist);
                return("    "+s+lfn(nd,flag))
            }
        );
        if(lngth>max_lines) {
            ary.push("... "+lngth-max_lines+' more items')
        }
        return(head + ' (\n'+ary.join("\n") + '\n)')
    } else {
        return(head)
    }
}

function _creat_string_tag(nd) {
    if(nd[nd.constructor.SYM_DICT.get_forest]!==null) {
        return(get_abbr(nd.$fid_)+':'+nd.$id_)
    } else {
        return('')
    }
}

function _add_repr(Node,lfn=DFLT_SDFS_LFN,max_lines=100) {
    add_repr(Node,_sdfs_repr,lfn,max_lines)
}


function _add_string_tag(Node) {
    add_string_tag(Node,(nd)=>{
        return(_creat_string_tag(nd))
    })
}

function add_disp(Node,enable_repr=true,...args) {
    if(enable_repr) {
        _add_repr(Node,...args)
    } else {
        _add_string_tag(Node)
    }
}



module.exports = {
    PREFIX_DICT,
    DFLT_SDFS_LFN,
    _sdfs_repr,
    DFLT_SEDFS_LFN,
    _sedfs_repr,
    _add_repr,
    _add_string_tag,
    add_disp,
}

