'use strict';

/* 함수 데코레이팅(decorating), call / apply */
/* func.call(context, ...args)은 context를 this로 명시적으로 고정해서 함수를 호출함 */
/* func.apply(context, args)는 유사 배열 형태의 args만 사용가능 */

function delay(func, ms) {
    return function() {      
        setTimeout(() => func.apply(this, arguments), ms);
    };    
}
// 화살표 함수는 this, arguments를 지원하지 않으므로 화살표 함수 외부 lexical 환경에서 가져온다.
// 동일한 기능을 하는 일반함수를 사용하면 다음과 같이 작성해야 한다.
// function delay(fx, ms) {
//     return function(...args) {      
//         let ctx = this;
//         setTimeout( function() {
//             return fx.apply(ctx, args);
//         }, ms);
//     };    
// }


function f(x) {
    alert(x);
}
let f1000 = delay(f, 1000);
let f5000 = delay(f, 5000);
f1000('1000 test');
f5000('5000 test');


// function spy(func) {
//     function wrapper(...args) {
//         func.apply(this, args);
//         wrapper.calls.push(args);
//     };
//     wrapper.calls = [];     // 최초 1회만 실행됨
//     return wrapper;
// }
// function work(a, b) {
//         alert(a + b);
// }
// work = spy(work);

// work(1,2);
// work(4,5);

// for( let args of work.calls) {
//     console.log(args);
//     console.log(args.join());
// }


