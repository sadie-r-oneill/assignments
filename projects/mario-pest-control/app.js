function sum (num1, num2, num3){
    var result = num1 * 5 + num2 * 7 + num3 *11
    return result
}
var submit = document.getElementById ("submitBtn")
var coinsOwed = document.getElementById("coinsOwed")

submit.addEventListener("click", function(e){
    e.preventDefault()
    var num1 = document.getElementById ("bobomb").value
    var num2 = document.getElementById ("goomba").value
    var num3 = document.getElementById ("cheepcheep").value
    var addResult = document.createElement("div") 
    addResult.style.backgroundColor = "red"
    coinsOwed.appendChild(addResult)
    addResult.textContent = "Princess owes you " + (Number(num1)+ Number (num2) + Number (num3)) + " for your work"
})
