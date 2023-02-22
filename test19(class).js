'use strict';

// import {sayHi} from './hello.js';
// sayHi('Suji');

function loadscript(src) {  
    return new Promise( function(resolve, reject) {
        let script = document.createElement('script');  //<script src="…">를 동적으로 만들고 이를 문서에 추가
        script.src = src;
        script.onload = () => resolve('loading OK...');
        script.onerror = () => reject(new Error(`${src} loading error...`));
        document.head.append(script);
    });
}
const add_script = async() => {
  await loadscript('./my/hello.js');
  sayHi('Suji');
};

add_script();

