/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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
      chBg = promo.querySelector('.promo__bg');
      
const promoList = document.querySelectorAll('.promo__interactive-list > li');
    promoList.forEach((value, i) => {
        value.textContent = i + 1 +' '+ movieDB.movies[i];
        // console.log(value[i]);
        // i++;
    });
// promoList.movieDB.movies;

      delPromo.remove();
      chGenre.textContent = "ДРАМА";
      chBg.style.cssText = "background: url('../img/bg.jpg') center top;";

// console.log(promoList);

