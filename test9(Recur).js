'use strict';

let fibo = [0,1,1];
function fib(n) {
    if( fibo[n] ) return fibo[n];
    else {
        fibo[n] = fib(n-1) + fib(n-2);
        return fibo[n];
    }
}
alert( fib(77) );



// function factorial(n) {
//     if (n == 1) {
//         return 1;
//     } else {
//         return n * factorial(n-1);
//     }
// }
// alert( factorial(5) );



/* Linked List */
// function printListR(list) {  
//     if( list.next ) {
//         printListR(list.next);
//     }
//     alert(list.value);
// }
// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
//   printListR(list);



/* 재귀함수  */
// function sumSalaries(department) {
//     if( Array.isArray(department) ) {
//         return department.reduce( (prev, cur) => prev + cur.salary, 0);
//     } else {
//         let sum = 0;
//         for( let sub of Object.values(department) ) {
//             sum += sumSalaries(sub);
//         }
//         return sum; // 하위 부서의 salary 합을 구해서 리턴함
//     }
// }
// let company = {
//     sales: [
//         {name: 'John', salary: 1000},
//         {name: 'Alice', salary: 1500}
//     ],
//     dev: {
//         sites: [
//             {name: 'Peter', salary: 2000},
//         ],
//         internals: [
//             {name: 'Jack', salary: 1500},
//         ]
//     }
// }
// alert( sumSalaries(company));
