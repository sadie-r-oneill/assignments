//conditionals
//boolean=> true, false
if(color===red){
console.log ("The color is red.")
}
else if(color===blue){

console.log("The color is blue.")

}else {
    console.log
}

//Comparison Operators
//Strictly Equals: === (checking for data type and value)
//Loosely Equals: == Will cooerce to make it equal if possible 
console.log(2=="2") //true
//> < >= <=

var age=20

if (age < 21){
    console.log ("no drinks for you.")
}

//Falsey Values:
//undefined
//null
//0
//NaN
//""
//false

if (2){
    console.log ("truthy")e
}

// Logical Operators
var user= {
    age:20,
    isAdmin:false
}
if (user.age<21&& user.admin=== true){
    console.log ("You are allowed.")
} else{
    console.log ("You are not allowed.")
}

// && => both the statement to the left and right 
// ||

// if you have more than 3 "else if" statements, use a switch 

var color= "green"

switch(color){

case "green":
console.log ("The color is green")
break;
case "blue"
console.log("The color is blue")
break;
default: 

// Ternary
var name= "rick"
if(name=== "rick"){
    console.log ("RIIICK")
} else{
    console.log ("NOTTT RICK")
}

if (2!==){
    //do something
}

//Loops (for,while)

//starting point
//ending point
//what to count by
//iteration =>every time the for-loop is running

for(var i=0;i <10;i++){
    //this code is repeated "n" times
}console.log("hello)")

var gameover= false
var counter=0

while(!gameover){
    counter ++
    console.log("game is still running")
    if(counter > 100){
        gameover= true
    }
}
console.log("game over")

//Loops & Arrays
var animals = ["zebra","horse","guinea pig","otter","hippopotamus","dog"]

for(var i = 0; i < 6; i < animals.length; i++){
    console.log(animals[i])
}

// % returns the remainder

var animals = ["zebra","horse","guinea pig"]

for (var i = 0; i < animals.length; i ++){
    console.log (animals[i] + "s")
}

var harryPotterCharacters = [
    {name: "Harry Potter", age: 12},
    {name: "Belatrix Lestrange", age:47}
    {name: "Severus Snape", age: 48}
]

// for(var harryPotterCharacters)