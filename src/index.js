const references = document.querySelector("ul"); 
import {data} from '../data.js';

data.forEach( day => {
        const item = 
            `
            <div class="inactive">${day.amount}</div>
            <div id="bar"></div>
            <span>${day.day}</span>            
            `
        
        const li = document.createElement('li');
        li.innerHTML = item;
        references.appendChild(li);

        const bar = li.querySelector('#bar'); 
        bar.addEventListener('mouseover', hover)
        bar.addEventListener('mouseout', unHover)
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

