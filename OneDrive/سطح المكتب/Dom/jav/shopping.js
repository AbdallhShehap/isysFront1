// create add item button

function addItem(){
    document.getElementById("inputValue");
    let EnterValue = inputValue.value;
    const output = document.createElement("p")
    output.textContent  = EnterValue 
    document.body.appendChild(output)
    
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    
    output.append(deleteBtn)

    deleteBtn.addEventListener('click', function(){
        output.remove()
    })
}
