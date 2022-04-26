const fs = require('fs');
const path = require('path');
const Type = require('./file-type')

GetFileDetails = function(input) {

    let FileArr = new Array();
    const FolderPath = fs.readdirSync(input);
    let n = 0;
    for(i = 0; i < FolderPath.length; i++) {
        if (!FolderPath[i].match(/.*\..*/))
            continue;
        switch (FolderPath[i]) {
            case '.git' :
                break;
            case 'main.js' :
                break;
            case 'package.json' :
                break;
            case 'README.md' :
                break;
            default :
                FileArr[n] = new Object();
                FileArr[n].Name = FolderPath[i].slice(0, FolderPath[i].indexOf('.'));
                FileArr[n].ExtName = path.extname(FolderPath[i]);
                FileArr[n].Type = Type(FileArr[n].ExtName);
                FileArr[n].Size = fs.statSync(FolderPath[i]).size;
                let Date = fs.statSync(FolderPath[i]).mtime;
                FileArr[n].ModifiDate = new Object();
                FileArr[n].ModifiDate.Day = Date.getDate()
                FileArr[n].ModifiDate.Month = Date.getMonth()
                FileArr[n].ModifiDate.Year = Date.getFullYear()
                n++;
                break;
        }
    }
    return FileArr;
}
module.exports = GetFileDetails;