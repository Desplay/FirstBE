const CopyFile = require('./copy-file-to-folder')
const HandingCommand = require('./custom-command-type')

const HandingFile = function(input) {
    if(input[0].length === 1) { // Is file then:
        let TrueExtendCommand = HandingCommand(input[0][0], input[1]) && HandingCommand(input[0][0], input[2]) && HandingCommand(input[0][0], input[3])
        if(TrueExtendCommand)
            CopyFile(input[0][0], input[1], input[2], input[3], input[4]);
    }
    else { // Is folder then:
        let i = 0;
        while(i < input[0].length) {
            let TrueExtendCommand = HandingCommand(input[0][i], input[1]) && HandingCommand(input[0][i], input[2]) && HandingCommand(input[0][i], input[3])
            if(TrueExtendCommand)
                CopyFile(input[0][i], input[1], input[2], input[3], input[4]);
            i++;
        }
    }
    return;
}

module.exports = HandingFile;