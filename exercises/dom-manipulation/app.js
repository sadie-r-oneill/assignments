// console.dir(document)
// console.dir(window)

// var myDivs =document.getElementsByTagName('div')[1]

// // console.log(myDivs[0])

// var oneDive =document.getElementsByClassName("div-one")
// // console.log("div one")

// var elementWithId = document.getElementById("my-id")

// console.log(elementWithId)

// var queryExOne =document.querySelector(".div-2")

// console.log(queryExOne)

// var queryAllSelect= document.querySelectorAll("div-one")

// console.log(queryAllSelect)

// query exOne.textcontent = "good-bye"

// var myBtn = document.getElementById("btn")

// function myFunc(){

//     queryExOne.textContent = "good-bye"

// }
// myBtn.addEventListener("click",myFunc)

// if (queryExOne.textContent === "good-bye"){

//     queryExOne.textContent= "Hello" }

// } else {
    
// }

// console.dir 

var nameForm = document ["name-form"]
nameForm.addEventListener("submit", function (event){
   event.preventDefault()
   console.log(nameForm[name-form].value)}

   var firstName = nameForm ["first-name"].value
   var lastName = nameForm ["last-name"].value


//1. Create Element



varFirstNameH1 = document.createElement ("h1")



// 2. Edit the element


fulNameH1 = document.textContent = firstName + " " + lastName

//  <h1></h1>



//  3. Append the element (add it to the DOM)

var nameList = docunment.getElementbyId ("name-list")
nameList.appendchild(fulnameH1)