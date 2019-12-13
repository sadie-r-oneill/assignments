const readline = require("readline-sync");

const {question,keyInSelect} = require("readline-sync")

console.log 
    ("Welcome to the escape room! Good luck making it out alive.")

console.log ("What will your first move be?")

let options = ['Put hand in hole','find key','open door']
let playerChoice = readline.keyInSelect(options,"So what would you like to do first?")

let hasKey = false
let count = 0

    while(!hasKey){
    let options = readline.keyInSelect(["Put hand in hole","find key", "open door"])
      console.log(options)
      
    if(options === 2){
      console.log ("You must find the key before you can open the door. Keep on searching.")
      
    }else if(options ===1){
      console.log ("Great job finding the key! What would you like to do now?")
      hasKey = true

    }else if(options === 0){
      console.log ("Nooo dummy!! You just lost the game! GAME OVER!")
      break
        }
    }

    while(hasKey){

        let options = readline.keyInSelect(["Put hand in hole","find key", "open door"])
            console.log(options)   
        
        if(options === 0){
            console.log ("Oh no! The hole you put your hand in just killed you. Sorry pal, game over!")
            break
        
        }else if(options ===1){
            console.log ("You already have the key! What will you do now?!")
    
        }else if(options ===2){
            console.log ("Congratulations, you made it out of the escape room alive!")
            break
            }
        }
 
  






