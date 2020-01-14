const xhr = new XMLHttpRequest()
//step one: GET
xhr.open("GET", "https://api.vschool.io/pokemon", true)
//step two: display the data
xhr.send()
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        pokemonList(data.objects[0].pokemon)
        console.log(data.objects)
        }
    }

    const pokemonList = arr => {
        for(let i = 0; i < arr.length; i ++){
            const h1 = document.createElement ("h1")
            h1.textContent = arr[i].name
            document.body.appendChild(h1)
        }
    }

        
    
