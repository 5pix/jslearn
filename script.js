// console.log(document.head);
// console.log(document.documentElement);

// console.log(document.body.childNodes); // все узлы внутри родителя (псевдо коллекция. Перебирается циклом for-of)

// console.log(document.body.firstChild); // первый дочернний узел
// console.log(document.body.firstElementChild); // первый дочернний эл-т
// console.log(document.body.lastChild); // последний дочерний узел

// console.log(document.querySelector('#current').parentNode); //Получение родительского узла (м.б. пустой текстовый узел [например перенос текста])
// console.log(document.querySelector('#current').parentElement); //получение родительского элемента

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // получение следуюзего элемента
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); // получение предыдущего элемента

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue; //остановливает повторение цикла и начинает заново с другим э-том
        // break; //останавливаетс полностью работу цикла
    }    
    console.log(node);
    
}