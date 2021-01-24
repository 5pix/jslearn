/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener("DOMContentLoaded", (event) => {

    const movieDB = {
        movies: [
            "МОГАН",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


const promo = document.querySelector('.promo'), 
      delPromo = promo.querySelector('.promo__adv'),
      chGenre = promo.querySelector('.promo__genre'),
      chBg = promo.querySelector('.promo__bg'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input')
      ;
let   newList = document.querySelector('.promo__interactive-list');

    const sortFilms = (films) => {
        films.sort();
    };

      // вешаем на форму обработчик события нажатия кнопки отправить
      addForm.addEventListener('submit', (event) => {
        // отмена действия по-умолчанию  
        event.preventDefault();
        
        if (addInput.value) {
            movieDB.movies.push(addInput.value);
                       
           
        }
            addForm.reset();
      });

      let createList = (movies) => {
          newList.innerHTML = "";

          movies.forEach((item, i) => {
              newList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
                <div class="delete"></div>
                </li>`;
          });
      };
      
// const promoList = document.querySelectorAll('.promo__interactive-list > li');
//     promoList.forEach((value, i) => {
//         value.textContent = i + 1 +' '+ movieDB.movies[i];
//         // console.log(value[i]);
//         // i++;
//     });
// promoList.movieDB.movies;

      delPromo.remove();
      chGenre.textContent = "ДРАМА";
      chBg.style.cssText = "background: url('../img/bg.jpg') center top;";


      sortFilms(movieDB.movies);
      createList(movieDB.movies);
});


// console.log(promoList);

