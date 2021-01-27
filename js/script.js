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
        
        event.preventDefault();// отмена действия по-умолчанию  
        
        if (addInput.value) {
            let favorite = document.querySelector('[type=checkbox]');
            
            if(favorite.checked){
                console.log('Добавляем любимый фильм');
            }
            if (addInput.value.length > 21){
                movieDB.movies.push(`${addInput.value}...`);
            } else {
                movieDB.movies.push(addInput.value);
            }
            sortFilms(movieDB.movies);
            createList(movieDB.movies, newList);
            
        }
            addForm.reset();
      });

      let createList = (movies, parent) => {
        
          

        parent.innerHTML = "";
          
          movies.forEach((item, i) => {
                parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
              <div class="delete"></div>
              </li>`;
            });
            document.querySelectorAll('.delete').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    createList(movieDB.movies, newList);
              });
            });
            //   let parenList = btns.parentElement;

            
      };
      
      delPromo.remove();
      chGenre.textContent = "ДРАМА";
      chBg.style.cssText = "background: url('../img/bg.jpg') center top;";


      
      createList(movieDB.movies, newList);
});


// console.log(promoList);

