const fs = require("fs");

//write out data
function done(output){
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

//where the commands will be stored
function evaluateCmd(userInput){
    
    //parses the user input to understand which command was typed
    const userInputArray = userInput.split(" ");
    const command = userInputArray[0];


    switch (command){
        case "echo":
            //adding the functionality of echo next within the object commandLibrary
            commandLibrary.echo(userInputArray.slice(1).join(" "));
        break;

        case "cat":
            commandLibrary.cat(userInputArray.slice(1));
        break;

        case "head":
            commandLibrary.head(userInputArray.slice(4));
        break;

        case "tail":
            commandLibrary.head(userInputArray.slice(4));
        break;

        default:
            console.log("That is not a valid entry. Please try again.");
    }
}
//where the logic for our commands will be stored
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
    },

    //defining the head command
      "head": function(fullPath){
        const fileName = fullPath[2];
        fs.readFile(fileName, (err, data) =>{
            if (err) throw err;
            done(data);
        });
    },

    //defining the tail command
      "tail": function(fullPath){
        const fileName = fullPath[0];
        fs.readFile(fileName, (err, data) =>{
            if (err) throw err;
            done(data);
        });
    }
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
