const CheckCommand = require('./sub-modules/check-command');
const FileDetails = require('./sub-modules/check-file-or-folder')
const FileHanding = require('./sub-modules/handing-module')

const MainModule = function (input) {
  if(CheckCommand(input) === false)
    return;
  input[0] = FileDetails(input[0]);
  FileHanding(input);
  return;
}
module.exports = MainModule;