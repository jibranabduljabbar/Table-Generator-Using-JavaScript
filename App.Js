

function add(){
    
    getPera = document.getElementById("error")
    getInput = document.getElementById("inp")
    getUl = document.getElementById("ul")
    getDiv = document.getElementById('tablediv')
    
if(getInput.value == ""){
    getPera.className = "error"
    getPera.innerHTML = "Input Field Required"
    getUL.value = ""
    
}

var createUL = document.createElement('ul')

    for(var i = 1; i <= 10; i++){
        
        
        var createElement = document.createElement('li')
        var table = getInput.value + " " + "x" +" "+ i +" "+ "=" +" "+ getInput.value * i
        var CreateTextNode = document.createTextNode(table)
        createElement.appendChild(CreateTextNode)
        createUL.appendChild(createElement)


    }
    getDiv.appendChild(createUL)
    getInput.value = ""
    getPera.innerHTML = ""
    getPera.className = "succus"
}




