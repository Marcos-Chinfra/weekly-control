const references = document.querySelector("ul"); 
import {data} from '../data.js';


let amounts = [];
data.forEach( item => {
    amounts.push(item.amount)
});
data.forEach( item => {
        const listElement = 
            `
            <div class="inactive">${item.amount}</div>
            <div id="bar"></div>
            <span>${item.day}</span>            
            `
        
        const li = document.createElement('li');
        li.innerHTML = listElement;
        references.appendChild(li);

        const bar = li.querySelector('#bar');
        bar.addEventListener('mouseover', hover)
        bar.addEventListener('mouseout', unHover)

        const bigger = Math.max(...amounts)
        const height = (140 * item.amount) / bigger;
        bar.style.height = `${height}px`
});





function hover(e){
    const div = e.target.previousElementSibling;
    div.classList.add("isItSight");
    div.classList.remove("inactive")
}


function unHover(e){
    const div = e.target.previousElementSibling;
    div.classList.remove("isItSight");
    div.classList.add("inactive")
}

