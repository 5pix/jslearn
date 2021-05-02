"use strict";

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// const width = box.scrollWidth; 
// const height = box.scrollHeight; //размерм с полосой прокрутки

// console.log(width, height);

btn.addEventListener('click', function(){

    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
    
});

console.log(box.getBoundingClientRect()); // получение координат элемента

const style = window.getComputedStyle(box);
console.log(style.display);


console.log(document.documentElement.scrollTop); // посмотреть сколько прокручено на странице всего документа


