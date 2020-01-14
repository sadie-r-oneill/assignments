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


// //Make a card for each person
// //The card should have their name and age listed
// //Give each card a box shaddow, 20pt padding, and 10pt margin


// //Separate each object with persons name and age using forEach()
// //create a card as an element

// people.forEach(function(personInfo){
//     const person = document.createElement('div')
//     person.textContent = `${personInfo.name}, ${personInfo.age}`

//     person.style.background = "blue"
//     person.style.width = "200px"
//     person.style.height = "200px"
//     person.style.boxShadow = "4px 4px 4px"
//     person.style.margin = "10px"

//     //get box id and append to person

//     const box = document.getElementById('box')
//     box.appendChild(person)

// })

//make a button where everytime you press it a new red box appears
//get button from html

submitBtn = document.getElementById('submit').onclick = function(redBox){
        const box = document.getElementById("box")
        box.style.backgroundColor = "Red"
        box.style.width = "400px"
        box.style.height = "400px"
        box.style.boxShadow = "4px 4px"
        box.style.margin = "10px"
        redBox()


       
}
        

    
