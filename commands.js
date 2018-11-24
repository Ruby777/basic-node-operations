const fs = require("fs");

//write out data
function done(output){
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

//where we will store our commands
function evaluateCmd(userInput){
    
    //parses the user input to understand whic command was typd
    const userInputArray = userInput.split(" ");
    const command = userInputArray[0];


    switch (command){
        case "echo":
            //we will add the functionality of echo next within the object commandLibrary
            commandLibrary.echo(userInputArray.slice(1).join(" "));
            break;

        case "cat":
            commandLibrary.cat(userInputArray.slice(1));
            break;
    }
}
//where we will store the logic for our commands
const commandLibrary = {
    //defining the echo command
    "echo": function(userInput) {
        done(userInput);
    },


    //defining the cat command
    "cat": function(fullPath){
        const fileName = fullPath[0];
        fs.readFile(fileName, (err, data) =>{
            if (err) throw err;
            done(data);
        });
    }
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
