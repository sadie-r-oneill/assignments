function sum(num1, num2, num3){
    var result = num1 * 5 + num2 * 7 + num3 * 11
    return result
}
var submit = document.getElementById ("submitBtn")
var coinsOwed = document.getElementById("coinsOwed")

submit.addEventListener("click", function(e){
    e.preventDefault()
    coinsOwed.innerHTML = ("")
    var num1 = document.getElementById("bobomb").value
    var num2 = document.getElementById("goomba").value
    var num3 = document.getElementById("cheepcheep").value
    var addResult = document.createElement("div") 
    addResult.style.backgroundColor = "red"
    const result = sum(num1, num2, num3)
    addResult.textContent = "Princess owes you " + result + " for your work"
    coinsOwed.appendChild(addResult) 

    console.log(addResult)
   
})
    
