"use strict";

 const box = document.getElementById("box"),
    btns = document.getElementsByTagName('button'),//коллекция элементов
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'), //родитель для всех дочерних сердечек
        hearts = wrapper.querySelectorAll('.heart'),
        oneHeart = wrapper.querySelector('.heart');

    // box.style.backgroundColor = 'blue';
    // box.style.width = '500px';

    box.style.cssText = `background-color: blue; width: 500px`;

btns[2].style.borderRadius = '100%'; // обращения к одному элементу коллекции
circles[1].style.backgroundColor = 'red';

// for(let i =0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div'); //существует только в JS на странице его нет.
// const text = document.createTextNode("text");

div.classList.add('black');

// document.body.append(div); // вставка в конец какого-л элемента.
wrapper.append(div);
// wrapper.appendChild(div); //old

// wrapper.prepend(div); // вставка в начало какого-л элемента

// hearts[0].before(div);  // вставка перед конкретным элементом
// wrapper.insertBefore(div, hearts[1]); //old
// hearts[0].after(div); // вставка  после конкретного элемента

// circles[0].remove(); //удаление элемента
// wrapper.removeChild(hearts[1]);// old

// hearts[0].replaceWith(circles[0]); //заменить один элемент другим
wrapper.replaceChild(circles[0], hearts[0]); //old

div.innerHTML = "<h1>hello world</h1>"; //любой HTML текст

// div.textContent = "Hello"; //работает только с текстом

div.insertAdjacentHTML('afterend', '<h2>HELlo</h2>'); 
// вставка HTML текста в зависимости от положения в первом параметре
