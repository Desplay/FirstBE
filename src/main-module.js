const Details = require('./sub-modules/get-file-details')

HandingFolder = function(input) {
    if (input[0].indexOf('.') === -1) {
        console.log("Input ERROR !");
        console.log("Please type right command !");
        return;
    }
        let Arr = Details(input[0]);
    console.log(Arr);
    return;
}

module.exports = HandingFolder;