const container = document.querySelector('.container');
const sizeEl = document.querySelector('.size');
let size = sizeEl.value;
const color = document.querySelector('.color');
const resetBtn = document.querySelector('.btn');

let draw = false;

function populate(size) {
    if (size > 100 || size < 8){
        alert(`enter a value between 100 and 8`);
        return;
    }else {
        container.style.setProperty("--size", size);
    for (i = 0; i <size*size; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        container.appendChild(div);

        div.addEventListener('mouseover', () => {
            if(!draw) return;
            div.style.backgroundColor = color.value
        });

        div.addEventListener('mousedown', () => {
            div.style.backgroundColor = color.value
        });
    }
    }
}

window.addEventListener('mousedown', ()=> {
    draw = true;
});

window.addEventListener('mouseup', ()=> {
    draw = false;
})

resetBtn.addEventListener('click', ()=> {
    container.innerHTML= "";
    size = sizeEl.value
    populate(size);
})

populate(size);