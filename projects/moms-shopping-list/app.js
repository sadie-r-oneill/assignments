
const add = document["add-todo"]
const list = document.getElementById("items");


    add.addEventListener("submit", function(e){
    e.preventDefault()

    const newItem = document.createElement("li")
    newItem.textContent = add.title.value
    list.appendChild(newItem)

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "x"
    newItem.appendChild(deleteBtn)
    
    deleteBtn.addEventListener("click", function(e){
        e.preventDefault()
        e.target.parentNode.remove()
       
    })

}) 

const removeItem = document.getElementsByClassName("removeBtn")

for(let i = 0; i < removeItem.length; i++){
    console.log("fired", i)
    removeItem[i].addEventListener("click", function(e){
        e.target.parentNode.remove()
    })}
    
const editButton = document.getElementsByClassName("edit")

for(let i = 0; i < edit.length; i++){
    console.log("fired", i)
    edit[i].addEventListener("click", function(e){
        e.target.parentNode.editProduct()
    })}

    //ask about edit button
    

    



    







