'use strict';

const p = document.querySelectorAll('p');
console.log(p);



function loadScript(src) {
    const script = document.createElement('script');
script.src = src;
script.async = false; //убираем сво-во по-умолчю и скрипт грузится как обыно, последовательно
document.body.append(script);
}
loadScript("js/test.js");
loadScript("js/some.js");