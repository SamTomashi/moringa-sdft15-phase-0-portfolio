/***
 * DOM(Document Object Model): A representation of all objects inside a document(HTML, XML, etc.)
 * Event listeners: Is when the DOM listens to user's activities on the web page. The DOM listens to all events triggered in the page by the user
 */
/**
 * Click,
 * submit,
 * keyup
 * keydown
 * mouseover
 * change
 * input
 * load
 */

// const container = document.getElementById("container")
// const container = document.querySelector("#container")
// console.log(container)


const ol = document.querySelector("#african-countries")
const btnAdd = document.querySelector("#btn-add")
const newCountryInput = document.querySelector("#new-country")

btnAdd.addEventListener("click", function(){
    const li = document.createElement("li")
    li.innerText = newCountryInput.value

    const btnRemove = document.createElement("button")
    btnRemove.textContent = "X"

    btnRemove.addEventListener("click", function(e){
        e.target.parentNode.remove()
    })

    btnRemove.setAttribute("class", "bg-danger text-white border border-white m-4")
    li.appendChild(btnRemove)

    ol.appendChild(li)
})


