
const references = document.querySelectorAll("li"); 
const divOver = document.querySelectorAll("div#bar")
console.log(divOver)

references.forEach(reference => {
    const div = document.createElement("div");
    div.classList.add("none")
    reference.insertAdjacentElement("afterbegin", div)});

divOver.forEach(div =>{
    div.addEventListener("mouseover", hover)
})

function hover(e){
    e.target.classList.toggle("isItSight");
}
