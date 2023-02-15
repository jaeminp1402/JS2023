'use strict';

/* 자료구조와 자료형 */

/*********** */
/* MAP & SET */
/*********** */
// map은 객체와 유사하지만 key에 다양한 자료형을 허용한다는 점에서 차이가 있다.
// set은 중복을 허용하지 않는다


// function sumSalary(obj) {
//     let sum = 0;
//     for(let val of Object.values(obj))
//         sum += val;
    
//     return sum;
// }
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
// alert( sumSalary(salaries) );



// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;  // 데이터가 없는 경우 초기값 설정하는 방법으로 많이 사용함
//   visitsCountMap.set(user, count + 1);
// }
// let visitsCountMap = new WeakMap(); // 맵에 사용자와 사용자의 방문 횟수를 저장함
// let john = { name : 'john'};
// countUser(john);
// countUser(john);
// john = null;  // john과 함께 저장된 방문 횟수 데이터도 같이 삭제됨



// function aclean(arr) {
//     let map = new Map();
//     for(let word of arr) {
//         let new_word = Array.from(word.toLowerCase()).sort().join('');
//         map.set(new_word, word);
//     }

//     return Array.from(map.values());
// }
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// alert( aclean(arr) );



// function unique(arr) {
//     /* your code */
//     return Array.from(new Set(arr));
// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert( unique(strings) );



// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]);  
// for (let vegetable of recipeMap.keys()) {
//     alert(vegetable); // cucumber, tomatoes, onion
// }  
// for (let amount of recipeMap.values()) {
//     alert(amount); // 500, 350, 50
// }    
// for (let entry of recipeMap) { // recipeMap.entries()와 동일합니다.
//     alert(entry); // cucumber,500 ...
// }
// /* map을 일반 객체로 변환 */
// let prices = Object.fromEntries(recipeMap);
// alert( prices.onion );
// /* 객체를 map으로 변환 */
// let map = new Map(Object.entries(prices));
// alert( map.get('cucumber') );



/* iterable 객체 */
// let arrayLike = {    // 유사 배열 객체
//     0: "Hello",
//     1: "World",
//     length: 2
// };
/* 유사 배열을 일반 배열로 변환 */  
// let arr = Array.from(arrayLike); // 배열 method를 사용할 수 있게 해 줌
// alert(arr.pop()); 


