const CopyFile = require('./copy-file-to-folder')

const HandingFile = function(input) {
    if(input[0].length === 1) {
            CopyFile(input[0][0], input[1], input[2], input[3], input[4]);
    } 
    else {
        var i = 0;
        while(i < input[0].length){
            CopyFile(input[0][i], input[1], input[2], input[3], input[4]);
            i++;
        }
    }
    return;
}

module.exports = HandingFile;