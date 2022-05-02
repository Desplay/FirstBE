const fs = require('fs');
const path = require('path');
const Type = require('./get-file-type')

const GetFileDetailsInFolder = function(input) {
    var File = new Object();
    File.Path = input;
    var CheckFile = input.slice(input.lastIndexOf('/')+1, input.length)
        if (input.indexOf('.') === -1) {
            File = undefined;
        }
        else {
            switch (CheckFile) {
                case '.git' :
                    File = 'source';
                    break;
                case 'main.js' :
                    File = 'source';
                    break;
                case 'package.json' :
                    File = 'source';
                    break;
                case 'README.md' :
                    File = 'source';
                    break;
                default :
                    File.Name = input.slice(input.lastIndexOf('/')+1, input.lastIndexOf('.'))
                    File.FirstName = input.slice(input.lastIndexOf('/')+1, input.lastIndexOf('/')+2)
                    File.ExtName = path.extname(input)
                    File.Type = Type(File.ExtName)
                    File.Size = fs.statSync(input).size
                    var Date = fs.statSync(input).ctime
                    File.ModifiDate = new Object()
                    File.ModifiDate.Date = Date.getDate()
                    File.ModifiDate.Month = Date.getMonth()
                    File.ModifiDate.Year = Date.getUTCFullYear()
                    break;
            }
        }
    return File;
}



module.exports = GetFileDetailsInFolder;