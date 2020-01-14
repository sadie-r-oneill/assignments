// let name = "John"
// let age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) 
//     return arr.map([carrot]); => {
//         return { type: "carrot", name: carrot }
    
//     }

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter((person) => {
//         return person.friendly
//     })
// }
// console.log(people)

// const doMathSum = (a, b) => {
//     return a + b
// }

// const produceProduct = (a, b) => {
//     return a * b
// }

// const firstName = "Jane"
// const lastName = "Doe"
// let age = 100

// function printString(firstName, lastName, age)
//     return `Hi ${firstName} + ${lastName}`, `How does it feel to be ${age}?`

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = (arr) => { 
     return arr.filter(animal => {
         if (animal.type === "dog") {
             return true
         } else {
             return false
         }
     })
 }
    

