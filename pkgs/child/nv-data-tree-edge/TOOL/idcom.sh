cp ../index.js edge.js
node compress.js edge.js
uglifyjs edge.js  -c -m -o edge.js
cp edge.js ../NPM/index.js
