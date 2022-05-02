const CheckOptional = function(input) {
    if(input.indexOf('--type') === -1 && input.indexOf('--modify') === -1 && input.indexOf('--name') === -1 && input.indexOf('--size') === -1)
        return false;
    return true;
}

const CheckCommand = function(input) {
    if(input[0] === undefined) {
        console.log("please type something !");
        return false;
    }
    if(input[0].lastIndexOf('.') === -1) {
        console.log('WRONG COMMAND, please try again !');
        return false;
    }
    else if(input[1] === undefined) {
        console.log('WRONG COMMAND, please try again !')
        return false;
    }
    else if(input[0].lastIndexOf('.') > 0) {
            if(input[1] != undefined) {
                if(input[2] != undefined) {
                    if(input[3] != undefined) {
                        if(input[4] != undefined) {
                            if(!CheckOptional(input[1]) || !CheckOptional(input[2]) || !CheckOptional(input[3])) {
                                console.log('WRONG COMMAND, please try again !');
                                return false;
                            }
                            if(input[4].lastIndexOf('.') != 0) {
                                console.log("This file need output folder, please try again !");
                                return false;
                            }
                            return true
                        }
                        if(!CheckOptional(input[1]) || !CheckOptional(input[2])) {
                            console.log('WRONG COMMAND, please try again !');
                            return false;
                        }
                        if(input[3].lastIndexOf('.') != 0) {
                            console.log("This file need output folder, please try again !");
                            return false;
                        }
                        input[4] = input[3];
                        return true;
                    }
                    if(!CheckOptional(input[1])) {
                        console.log('WRONG COMMAND, please try again !');
                        return false;
                    }
                    if(input[2].lastIndexOf('.') != 0) {
                        console.log("This file need output folder, please try again !");
                        return false;
                    }
                    input[4] = input[2];
                    return true;
                }
                if(input[1].lastIndexOf('.') === 0) {
                    console.log('This file need optional to handing, please try again !');
                    return false;
                }
                console.log('WRONG COMMAND, please try again !');
                return false;
            }
    }
    else {
        if(input[1] != undefined) {
            if(input[2] != undefined) {
                if(input[3] != undefined) {
                    if(input[4] != undefined) {
                        if(!CheckOptional(input[1]) || !CheckOptional(input[2]) || !CheckOptional(input[3])) {
                            console.log('WRONG COMMAND, please try again !');
                            return false;
                        }
                        if(input[4].lastIndexOf('.') != 0) { 
                            console.log('WRONG OUTPUT, please try again !');
                            return false;
                        }
                        input[4] = input[0].slice(0, input[0].lastIndexOf('/'));
                            return true;
                    }
                    if(!CheckOptional(input[1]) || !CheckOptional(input[2])) {
                        console.log('WRONG COMMAND, please try again !');
                        return false;
                    }
                    if(!CheckOptional(input[3])) {
                        if(input[3].lastIndexOf('.') === 0) {
                            input[4] = input[3];
                            return true;
                        }
                        console.log('WRONG COMMAND, please try again !');
                        return false;
                    }
                    input[4] = input[0].slice(0, input[0].lastIndexOf('/'));
                    return true;
                }
                if(!CheckOptional(input[1])) {
                    console.log('WRONG COMMAND, please try again !');
                    return false;
                }
                if(!CheckOptional(input[2])) {
                    if(input[2].lastIndexOf('.') === 0) {
                    input[4] = input[2];
                    return true;
                    }
                    console.log('WRONG COMMAND, please try again !');
                    return false;
                    
                }
            }
            if(input[1].lastIndexOf('.') === 0) {
                console.log('This folder need optional to handing, please try again !');
                return false;
            }
            if(!CheckOptional(input[1])) {
                console.log('WRONG COMMAND, please try again !');
                return false;
            }
            input[4] = input[0].slice(0, input[0].lastIndexOf('/'));
            return true;
        }
    }
    return true;
}

module.exports = CheckCommand;