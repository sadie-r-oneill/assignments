function newTodoItem(todo){
    //creating container
    const container = document.createElement("div")
    container.setAttribute("id", todo._id)
    document.getElementById("todo-list").appendChild(container)

    //create title
    const title = document.createElement("h1")
    title.textContent = todo.title
    container.appendChild(title)

    //Checking if completed
    if(todo.completed){
        title.style.textDecoration = "line-through"
    }             
    
    //create image
    const itemImg = document.createElement("img")
    itemImg.setAttribute("class", "image")
    itemImg.src = todo.imgUrl
    itemImg.style.width = "200px"
    container.appendChild(itemImg)

    //created checkbox
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("placeholder","completed")
    checkbox.addEventListener("click", function(e){
        e.preventDefault()
        if(checkbox.checked){
            title.style.textDecoration = "line-through"
            axios.put(`https://api.vschool.io/sadie/todo/${todo._id}`, {completed:true})
        }else {
            title.style.textDecoration = "none"
            axios.put(`https://api.vschool.io/sadie/todo/${todo._id}`, {completed:false})
        }
    })
    container.appendChild(checkbox)

    //Create delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class", "delete")
    deleteBtn.textContent = "delete"
    const toDoId = todo._id
    deleteBtn.addEventListener("click", function(e){
        e.preventDefault()
        axios.delete(`https://api.vschool.io/sadie/todo/${toDoId}`)
        .then(response => console.log(response))
        .catch(error => console.log(error))

        container.parentNode.removeChild(container)        
    })  
    container.appendChild(deleteBtn)
}

function todoList(){
    axios.get("https://api.vschool.io/sadie/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i ++){
            newTodoItem(response.data[i])
        }
    })
    .catch(error => console.log(error))
}

const form = document.getElementById("form")
form.addEventListener("submit", function(e){
    e.preventDefault()
    const newToDo = {
        title: form["title"].value,
        price: form["price"].value,
        description: form["description"].value,
        imgUrl: form["image"].value,
    }
    console.log(newToDo)
    axios.post("https://api.vschool.io/sadie/todo", newToDo)
    // while (document.getElementById("container").hasChildNodes()){
    //     document.getElementById("container").removeChild(container.childNodes[0])
        newTodoItem(newToDo)
    }
)
 

todoList()
  
   