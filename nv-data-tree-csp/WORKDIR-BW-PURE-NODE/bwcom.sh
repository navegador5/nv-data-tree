esbuild  index.js --bundle  --minify --global-name=nvtree --external:util --target=chrome90 > nv-data-tree-csp-bw-node.js
uglifyjs nv-data-tree-csp-bw-node.js -m -c -o ../nv-data-tree-csp-bw-node.js
