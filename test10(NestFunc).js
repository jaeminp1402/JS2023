'use strict';

/************************** */
/* 중첩함수(nested function) */
/************************** */
// - NF의 외부 함수 코드는 최초 1회만 실행됨 
// - NF는 외부 함수에 정의된 변수에 접근/수정할 수 있음 
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;      // j is local var,  i is outer var
    let shooter = function() { 
      alert( j ); 
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}
let army = makeArmy();
army[0](); // 0
army[5](); // 5


// function byField(fieldName) {
//         return function(a,b) {
//             return a[fieldName] > b[fieldName] ? 1 : -1;
//         };
// }
// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];
// // console.log( users.sort(byField('name')) );
// console.log( users.sort(byField('age')) );


// function inBetween(a,b) {
//     return function(item) {
//         return (a <= item) && (item <= b);
//     }
// }
// function inArray(arr) {
//     return function(item) {
//         return (item in arr);
//     }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
// // alert( arr.filter( function(item) {
// //     return (3 <= item) && (item <= 6);
// // } ) );



/* 렉시컬 환경, closure(클로저 - 외부 변수에 접근할 수 있는 함수) */
// function Counter() {
//     let count = 0;

//     this.up = function() { 
//         return ++count;
//     };
//     this.down = function() { 
//         return --count;
//     } ;   
// }
// let counter = new Counter();
// alert( counter.up() )
// alert( counter.up() )
// alert( counter.down() )


/**************************************************** */
/* spread syntax, 전개 문법(배열의 인수 목록으로 확장됨) */
/**************************************************** */
// let arr = [1, 2, 3];
// let obj = { a: 1, b: 2, c: 3 };
// let copy_arr = [...arr];
// let copy_obj = {...obj};
// alert(copy_arr);
// alert(copy_obj);

// let str = "Hello";
// alert( [...str] );
// alert( Array.from(str) );  // iterable 객체 -> array로 변환

/************************************************** */
/* 나머지 매개변수(함수에서 여러 개의 인자를 받는 경우) */
/************************************************** */
// function showName(...args) {
//     for(let arg of args) alert(arg); 
// }
// let arr = ["Bora", "Lee"];
// showName(arr);
// showName(...arr);  