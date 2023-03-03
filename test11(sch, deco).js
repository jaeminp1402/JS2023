'use strict';

/* 함수 데코레이팅(decorating), call / apply */
/* func.call(context, ...args)은 context를 this로 명시적으로 고정해서 함수를 호출함 */
/* func.apply(context, args)는 유사 배열 형태의 args만 사용가능 */

function cachingDecorator(func, hash) {
    let cache = new Map();     // Decorator() 호출 시 1회만 실행됨

    return function(...args) {  // 나머지 매개변수(rest parameter)
        let key = hash(args);  
        if( cache.has(key) ) {
            return cache.get(key);
        }
        let result = func.call(this, ...args);
        cache.set(key, result);
        return result;
    };
}
function hash(args) {   // arguments는 유사 배열 객체, args는 진짜 배열 객체
    return [].join.call(args);    // method 빌리기
}
let worker = {
    someMethod() { return 1; },
    slow(min, max) {
        alert(min + ',' + max);
        return min + max;
    }
}
worker.slow = cachingDecorator(worker.slow, hash);
alert( 'result: ' + worker.slow(5, 3) );
alert( 'result: ' + worker.slow(5, 3) );


/* Decorator 함수의 내부 logic은 최초 선언 시 1회만 실행되고, 이후에는 리턴 함수 logic이 실행됨 */
// function cachingDecorator(func) {
//     let cache = new Map();

//     return function(x) {
//         if( cache.has(x) ) {
//             return cache.get(x);
//         }
//         let result = func.call(this, x);
//         cache.set(x, result);
//         return result;
//     };
// }
// let worker = {
//     someMethod() { return 2; },
//     slow(x) {
//         alert(x);
//         return x * this.someMethod();
//     }
// }
// worker.slow = cachingDecorator(worker.slow);   
// alert( 'result: ' + worker.slow(2) );
// alert( 'result: ' + worker.slow(2) );


// function slow(x) {
//     alert(x);
//     return x;
// }
// slow = cachingDecorator(slow); 
// let res = slow(1);
// res = slow(1); // res는 동일하지만 alert 창이 표시 안됨



/* 호출 스케줄링(scheduling a call) */
/* 중첩 setTimeout -> 함수 수행시간을 제외하고 정확하게 timer 간격 지나서 함수 호출됨 */
// let delay = 2000;
// let timerId = setTimeout(function tick() {
//     console.log('...timtout...');
//     timerId = setTimeout(tick, delay);  // 재귀 호출
// }, delay);
// setTimeout(()=>clearInterval(timerId), 10000);

// function sayHi(who) {
//     alert(who+' 님, ');
// }
// // setTimeout(sayHi('Suji'),1000);  // 함수 호출이 바로 실행됨
// // setTimeout(sayHi, 1000, 'Suji'); // 함수 이름을 인자로 전달해야 timer가 정상 동작함
// let timerId = setInterval(sayHi, 2000, 'Suji');
// setTimeout(()=>clearInterval(timerId), 5000);



/* 기명 함수 표현식(NFE, Named Function Expression) */
/* 1. 함수 표현식 내부에서 자기 자신을 호출할 수 있다 
   2. 함수 내부에 다양한 custom property를 추가할 수 있다 */
// function makeCounter() {
//     let count = 0;
//     function counter() {   // 리턴값이 함수인 경우 이름을 지정하면 함수 property를 추가할 수 있다
//         return ++count;
//     };

//     counter.set = (num) => count = num; 
//     counter.decrease = () => --count;
//     return counter;
// }
// let counter = makeCounter();
// alert( counter() );
// counter.set(9); 
// counter.decrease();
// alert( counter() );


// let sayHi = function NFE(who) {
//     if( who ) alert( `Hello, ${who}` ); 
//     else NFE('Guest');
// }
// sayHi();
// sayHi('Suji');