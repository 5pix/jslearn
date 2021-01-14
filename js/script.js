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
    //   delPromo = promo.querySelector('.promo__adv'), // my variant
      adv = promo.querySelectorAll('.promo__adv img'),
      chGenre = promo.querySelector('.promo__genre'),
      chBg = promo.querySelector('.promo__bg'),
      promoList = document.querySelectorAll('.promo__interactive-list > li');
      
      movieDB.movies.sort(); 
    // promoList.forEach((value, i) => {
    //     value.textContent = i + 1 +' '+ movieDB.movies[i];
    // });

    //   delPromo.remove(); //my variant
    //from lesson
      adv.forEach(item => { item.remove(); });

      chGenre.textContent = "ДРАМА";
    //   chBg.style.cssText = "background: url('../img/bg.jpg') center top;"; //my variant
      chBg.style.backgroundImage = "url('img/bg.jpg')";

    //   last  task from video lesson

    const movieList = document.querySelector('.promo__interactive-list'); //first element from page
    movieList.innerHTML = ""; // cleat content from HTML tag
    //add new data from js DB
    movieDB.movies.forEach((item, i) => {
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${item}
            <div class="delete"></div>
        </li>`;
    });