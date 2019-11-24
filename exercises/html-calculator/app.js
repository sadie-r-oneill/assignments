var one = document.one

one.addEventListener('submit', function(e){
    var formOne = one.addOne

    e.preventDefault ()

    var numOne= Number(formOne.value)
    
    console.log( Number(formOne.value))

})

var two = document.two

two.addEventListener('submit',function(e){

    var formTwo = two.multiplyOne

    e.preventDefault ()

    var numTwo = Number (formTwo.value)
    console.log(Number)(formTwo.value)

})


function addition (num1,num2){
    var additionSum = num1 + num2
    return additionSum
}
var addButton = document.getElementById("addButton")

addButton.addEventListener("click",function(e){
 var addOne = document.getElementById("addOne").value
 var addTwo = document.getElementById("addTwo").value
 var newElement = document.createElement("div")
 newElement.textContent = ("the sum of your two numbers is:" + addition (Number(addOne),Number(addTwo)) )
var newId = document.getElementById('id')

newId.appendChild(newElement)

}
)




//input values will always be strings
//Look up how to convert string to number
//Number(str) : Output the string as a number