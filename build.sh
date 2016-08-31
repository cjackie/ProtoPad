#! /bin/bash

browserify=./node_modules/browserify/bin/cmd.js
babel=./node_modules/.bin/babel

rm -f www/test.js
$babel test.jsx > test.js
$browserify test.js -o www/test.js
rm test.js

rm -f www/app.js
$babel app.jsx > app.js
$browserify app.js -o www/app.js
rm app.js

echo "done."

