var readline = require('readline-sync');
let input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
let shift = parseInt(readline.question('How many letters would you like to shift? '));
let newStr = ('');
const alphabet = 'abcdefghijklmnopqrstuvwxyz'


    shift = shift % 26
    for(let i = 0; i< input.length; i ++){
        if(input[i]===' '){
        newStr += input[i];
        }
        else{
            const index = alphabet.indexOf(input[i]);
            newStr += alphabet[(index + shift)]
        }
        
         
    
    }
console.log(newStr)



