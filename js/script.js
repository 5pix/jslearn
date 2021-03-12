"use strict";

const now = new Date();

// console.log(now.getFullYear()); //год
// console.log(now.getMonth()); //месяц
// console.log(now.getDate()); //номер числа в месяце
// console.log(now.getDay()); //номер дня недели
// console.log(now.getHours()); //часы
// console.log(now.getUTCHours()); // часы в UTC зоне (-3 часа)
// console.log(now.getTimezoneOffset()); //разница между тек. час. поясом и UTC (в минутах)

// console.log(now.getTime()); //милисек. от 1970 года

/*  сеттеры */

// console.log(now.setHours(18));
// console.log(now);

let start = new Date();

for (let i = 0; i < 10000; i++){
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} милисек`)
