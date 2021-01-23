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
    
document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            "Моган",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    movieDB.movies.sort();

    const promo = document.querySelector('.promo'), 
        delPromo = promo.querySelectorAll('.promo__adv img'), //выбор в виде псевдо коллекции всех элементов
        chGenre = promo.querySelector('.promo__genre'),
        chBg = promo.querySelector('.promo__bg'),
        movieList = promo.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        chekbox = addForm.querySelector('[type = "checkbox"]');
        
    //обработчик события нажатия кнопки
    addForm.addEventListener('submit', (event)=>{
        event.preventDefault(); // отмена перезагрузки страницы при срабатвании события

        let newFilm = addInput.value; // получение значения введенных в форме
        const favorite = chekbox.checked; // отмеченный чекбокс

        if (newFilm) {
            //обрезание строки до 21 символа
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            // проверка на постановку галочки
            if (favorite) {
                console.log('Добавляем любимый фильм');
                
            }
            movieDB.movies.push(newFilm); // вставляем новый элемент в массив movieDB
            sortArr(movieDB.movies); // сортировка массива

            createMovieList(movieDB.movies, movieList); //создание нового списка на странице
        }
        
        
        event.target.reset(); // очистка формы (сброс)

    });

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {

        parent.innerHTML = "";
        sortArr(films); //сортировка после удаления эл-та

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>`;
        });

        // обработчки на событие нажатия на корзину
        // выбор ээлемента, а затем перебор всех кнопок(эл-ов) с обращением к индексам мыссива по порядку
        document.querySelectorAll('.delete').forEach((btn, i)=> { 
            btn.addEventListener('click', () => {
                btn.parentElement.remove(); //обращение к родительскому эл-ту (div) и удаляем его
                movieDB.movies.splice(i, 1); // удаление эл-та из массива с помощью функции splice()

                // рекурсия для изменения нумерации после удаления
                createMovieList(films, parent); 
            });
        });
    }

    //Удаление рекламы
    const deleteAdv = function(array) {
        array.forEach(item => {
            item.remove();
            
        });
    };

    const makeChanges = () => {
        chGenre.textContent = "ДРАМА";
        chBg.style.cssText = "background: url('../img/bg.jpg') center top;";
    };

    createMovieList(movieDB.movies, movieList);
    
    deleteAdv(delPromo);
    makeChanges();

   /* const promoList = document.querySelectorAll('.promo__interactive-list > li');
        promoList.forEach((value, i) => {
            value.textContent = i + 1 +' '+ movieDB.movies[i];
            // console.log(value[i]);
            // i++;
        }); 
    */

        // delPromo.remove();
        
    // newMovie.textContent = 'sdasdsd';

    

    // console.log(newMovie.value);
});

