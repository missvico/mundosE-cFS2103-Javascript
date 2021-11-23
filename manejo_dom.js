
const buttonInput = document.getElementById("main-button")
const mainInput = document.getElementById("main-input")
const primerParrafo = document.getElementById("primer-parrafo")
const listElements = document.querySelectorAll("li")

let input

buttonInput.addEventListener("click", function(event){
    alert(input)
})

primerParrafo.addEventListener("click", function(event){
    this.classList.toggle('special');
})

mainInput.addEventListener("change", function(event){
    input= event.target.value
})

listElements.forEach(function(li){
    li.addEventListener("click",function(event){
        this.classList.toggle('done');
    })
})
