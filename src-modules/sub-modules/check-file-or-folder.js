const FileDetails = require('./get-file-details')
const fs = require('fs')
const path = require('path')

const HandingFolder = function(input) {
    if (input.lastIndexOf('.') === -1) {
      console.log('Input is not file or folder, please try again !');
      return;
    }
    if (input.lastIndexOf('.') > 0) {
      if (!fs.existsSync(input)) {
        console.log("This file does not exist in that directory, please try again!")
        return;
      }
      if (input.includes('./src-modules')) {
        console.log("This file located in source folder, you cant handling this file, please try again!")
        return;
      }
      var File = new Array();
      File[0] = FileDetails(input);
      if (File[0] === 'source') {
        console.log('This is source file, you cant handling this file, please try again !')
        return;
      }
      return File;
    }
    else {
        if (input === './src-modules') {
            console.log('This is source folder, you cant handling this file, please try again !')
            return;
        }
        if (!fs.existsSync(input)) {
            console.log("This folder does not exist in that directory, please try again!")
            return;
        }
        if (input.includes('./src-modules')) {
            console.log('This folder located in source folder, you cant handling this file, please try again !')
            return;
        }
        var FileArr = new Array();
        if(input.lastIndexOf('/') != input.length)
            input += '/';
        const isFile = fileName => {
            return fs.lstatSync(fileName).isFile()
        }
        fs.readdirSync(input).map(fileName => {
        return path.join(input, fileName)
        }).filter(isFile)
        const CheckFolder = fs.readdirSync(input);
        var Folder = new Array();
        var n = 0;
         for(i = 0; i < CheckFolder.length; i++) {
            if (isFile(input + CheckFolder[i])) {
                Folder[n] = CheckFolder[i];
                n++;
            }
        }
      for(i = 0, n = 0; i < Folder.length; i++) {
        if(FileDetails(input+Folder[i]) != null && FileDetails(input+Folder[i]) != 'source') {
          FileArr[n] = FileDetails(input+Folder[i]);
          n++;
        }
      }
      return FileArr;
    }
}
module.exports = HandingFolder;