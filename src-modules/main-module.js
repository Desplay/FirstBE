const CheckCommand = require('./sub-modules/check-command')
const FileDetails = require('./sub-modules/check-file-or-folder')
const FileHanding = require('./sub-modules/handing-module')

const MainModule = function (input) {
  if(!CheckCommand(input))
    return;
  if (FileDetails(input[0]) != undefined) {
    input[0] = FileDetails(input[0]);
    FileHanding(input);
  }
  return;
}

module.exports = MainModule;