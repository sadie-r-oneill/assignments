
const readline = require("readline-sync")

const {question,keyInSelect} = require("readline-sync")

var num1 = parseInt("can you give me a number?")

var num2 = parseInt("can you give me another number?")

operation = ['add','subract','multiply','divide'] 

var userChoice = keyInSelect (operation, "Which operation would you like to do?")


if (userChoice === 0){

    console.log  (num1 + num2)

} else if (userChoice === 1){

    console.log (num1-num2)

} else if (userChoice === 2){

    console.log (num1 * num2)

} else if (userChoice === 3){

    console.log  (num2 / num2)
    
}




