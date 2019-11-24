
var numOfBoxes = 1

for(var i = 0; i < numOfBoxes; i++){
    var box = document.createElement('box')
    // box.classList.add('box')
    box.className = 'box'
    box.id = 'box' + i
    var iD = box.id
    box.style.height = '50pt' 

    box.addEventListener('click', function(e){
    changeColor(event.target.id)
    })

    } 

    function changeColor(boxId){
        var itemToChange = document.getElementById(boxId)

        console.log('Fired')

        itemToChange.style.backgroundColor = 'black' }

