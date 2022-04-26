// Code by Desplay !
const Handing = require('./src/main-module.js');
const agrument = process.argv.splice(2);

if (agrument[0].indexOf('.') === -1) {
    console.log("Input ERROR !");
    console.log("Please type right command !");
    return;
}
Handing(agrument);