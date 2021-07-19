cp ../index.js method.js
uglifyjs method.js  -c -m -o method.js
cp method.js ../NPM/index.js
