// There are 5 levers next to the wall, and as an experienced adventurer you know if you pull the wrong one you'll meet your final demise.

// Since we are programming adventurers, write a program that returns an array of every word that appears more than once in the phrase. Your final array should have just one instance of the repeated words. So if you were to find a word multiple times, your final array should have it just once.

// Create a function that accepts the pirate's inscription.
// Create an array to store all repeated words.
// Only list the repeated words once in the new array.
// Return the new array.

//filter method

//3 lever
//2 far
//3 pull
//

// function pirateInscription()



const pirateStr = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."
const newPirate = pirateStr.split(" ")


//set method

const pirateArr = new Set(newPirate)
const removeWords = [...pirateArr]


//slice()

const pirateSplit = removeWords.slice(2, 13)
const pirateSplit2 = removeWords.slice(13, 26)
const newArr = pirateSplit.shift()
const newArr1 = pirateSplit2.shift()
const newArr2 = pirateSplit2.pop()
const finalArr = newArr.concat(newArr1, newArr2)
console.log(finalArr) 


