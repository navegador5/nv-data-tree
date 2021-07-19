cp ../index.js openg.js
uglifyjs openg.js  -c -m -o openg.js
cp openg.js ../NPM/index.js
