const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      btns = document.querySelectorAll('button');

// btn.onclick = function() {
//     alert('ccccc');
// };
let i = 0;
const deleteElement = (e)=> {
    console.log(e.currentTarget);
    console.log(e.type);
    
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');
link.addEventListener('click', function(event){
    event.preventDefault(); //отмена действия по-умолчанию
    console.log(event.target);
});

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});