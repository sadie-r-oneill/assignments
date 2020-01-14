// const button = document.getElementById("submit")
// const box = document.getElementById("box")
// button.addEventListener("click",function(e){
//     //create box
//     const newBox = document.createElement("div")
//     newBox.classList.add("box")
//     //append box
//     box.appendChild(newBox)
    
// })


const people = [ 
    {
        name: 'Bart',
        age: 23
    },{
        name: "Tracy",
        age: 32
    },{
        name: 'Alex',
        age: 16
    },{
        name: "Sasha",
        age: 22
    }
]

//Make a card for each person
//The card should have their name and age listed
//Give each card a box shaddow, 20pt padding, and 10pt margin

//separate each object of people //forEach method
people.forEach(function(personData){
    const person = document.createElement("div")
person.textContent = `${personData.name}, ${personData.age}`

//style element 
person.style.background = "grey"
person.style.width = "200px"
person.style.height = "200px"
person.style.padding = "20pt"
person.style.margin = "10px"
person.style.boxShadow = "4px 4px"


const box = document.getElementById("box")
box.appendChild(person)
    
})
//create elements from separated objects 
// const person = document.createElement("div")
// person.textContent = `${personData.name}, ${personData.age}`

// //style element 
// person.style.background = "black"
// person.style.width = "200 px"
// person.style.height = "200 px"
// person.style.padding = "20 pt"
// person.style.margin = "10 pt"
// person.style.boxShadow = "4 px 4 px"

// const box = document.getElementById("box")
// box.appendChild(person)
