const references = document.querySelectorAll("li"); 
const divOver = document.querySelectorAll("div#bar")

references.forEach(reference => {
    const div = document.createElement("div");
    div.classList.add("inactive")
    div.textContent = 52 ;
    reference.insertAdjacentElement("afterbegin", div)
});

divOver.forEach(div =>{
    div.addEventListener("mouseover", hover)
});

function hover(e){
    const div = e.target.previousElementSibling;
    div.classList.add("isItSight");
    div.classList.remove("inactive")
}

divOver.forEach(div =>{
    div.addEventListener("mouseout", unHover)
});

function unHover(e){
    const div = e.target.previousElementSibling;
    div.classList.remove("isItSight");
    div.classList.add("inactive")
}

