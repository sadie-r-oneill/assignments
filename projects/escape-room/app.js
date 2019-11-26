const readline = require("readline-sync");

var answerToQuestion = readline.question("Welcome to the escape room! You must find the key and unlock the door!");
var question = readline.question ("Choose the first step you'd like to take to make it out alive! Key in the number to make your choice.  Be careful, if you choose to put your hand in the hole YOU WILL DIE!");
var options = readline.question([" 1. Put hand in Hole"," 2. Find the Key"," 3.Open the door"]);


index = readline.keyInSelect(options, "Which option will you take to proceed?");{
console.log ("Okay," + options [1,2] + "You are safe!");
}

