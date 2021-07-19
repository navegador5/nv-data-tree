const fs= require("fs")
const efdir = require("efdir");
const path = require("path")
const {compress_ids} = require("./tool")
var rslt = compress_ids(process.argv[2])
var p = path.resolve(process.argv[2])
var pd =  path.parse(p)
var cpdst = path.join(pd.dir,pd.name+".bak")
fs.copyFileSync(p,cpdst)
efdir.wfile(p,rslt.code)
var cfgdst = path.join(pd.dir,pd.name+".ref.json")
efdir.wjson(cfgdst,rslt.ref)

