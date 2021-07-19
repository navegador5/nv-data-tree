const _parse = require("@babel/parser").parse;
const _gen = require('@babel/generator').default
const nvjson=require('nvjson')
const efdir = require("efdir");

function parse_to_sdfs(code_str,source='script',noloc=true,typ="typescript") {
    //source = 'script | module'
    //typ="typescript" | "flow"
    let ast= _parse(
        code_str,
        {
            sourceType:'script',
            ranges:false,
            plugins:[
                typ,'decorators-legacy',"jsx",
                "classProperties",'classPrivateProperties',
                'classPrivateMethods'
            ]
        }
    );
    let tree = nvjson.jobj2tree(ast);
    let sdfs = tree.$sdfs();
    if(noloc){
        sdfs.forEach(
            r=>{
                try {
                    delete r.val.loc
                    delete r.val.start
                    delete r.val.end
                } catch(err) {
                }

            }
        )
        return(sdfs)
    } else {
        return(sdfs)
    }
}


function unparse(ast,decoratorsBeforeExport=true) {
    if(ast.type === "CommentLine"){
        return(ast.value)
    } else if(ast.type === "CommentBlock") {
        return(ast.value)
    } else if(ast.type === "TemplateElement") {
        return(ast.value.cooked)
    }  else {
        return(_gen(ast,{comments:true,decoratorsBeforeExport:decoratorsBeforeExport}).code)
    }
}

function get_identifiers(sdfs) {
    var nds = sdfs.filter(r=>typeof(r.val)==='object' && r.val !== null &&r.val.type !== undefined);
    var ids = nds.filter(r=>r.val.type === 'Identifier');
    return(ids)
}

function creat_compress_ref(ids,filter) {
    let names = ids.map(r=>r.val.name)
    names = names.filter(n=>filter(n))
    names = Array.from(new Set(names))
    var d = {}
    names.forEach((r,i)=>{d[r]='ε'+i})
    return([d,names.length])
}

function compress_ids(fn,filter=(r)=>r.startsWith('$')||r.startsWith('_')) {
    let code = efdir.rfile(fn)
    code = code.split("@@@")[0]
    let sdfs = parse_to_sdfs(code)
    let ids = get_identifiers(sdfs)
    let [d,lngth] = creat_compress_ref(ids,filter)
    ids.forEach(
        r=> {
            if(d[r.val.name]!== undefined) {
                r.val.name = d[r.val.name]
            }
        }
    );
    code = unparse(sdfs[0].val);
    for(let k in d) {
        if(k.startsWith('_')) {delete d[k]}
    }
    let ex = "module.exports=\n"+JSON.stringify(d).replace(/"/g,'') +"\n"
    console.log(ex)
    code = code +'\n' + ex
    return({
       code,
       ref:d,
       lngth
    })
}

module.exports = {
    unparse,
    parse_to_sdfs,
    get_identifiers,
    creat_compress_ref,
    compress_ids,
}

