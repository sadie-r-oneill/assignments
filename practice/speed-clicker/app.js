const button = document.mybtn
localStorage.setItem("mybtn", "click")

mybtn.addEventListener("click",function(e){
  e.preventDefault()
})

localStorage.getItem("mybtn")


