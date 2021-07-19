esbuild  index.js --bundle  --minify --global-name=nvtree --external:util --target=chrome90 > nv-data-tree-csp-bw.js
uglifyjs nv-data-tree-csp-bw.js -m -c -o ../nv-data-tree-csp-bw.js
