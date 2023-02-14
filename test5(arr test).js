'use strict';

/* 자료구조와 자료형 */

/* 배열 연습문제 */

function groupById(arr) {
    let res_obj = {};
    arr.forEach(item => {
        res_obj[item.id] = item;
    });

    return res_obj;
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
 let usersById = groupById(users);
alert( usersById );

// function unique(arr) {
//     /* your code */
//     let result = [];
//     arr.forEach(item => {
//         if( !result.includes(item)) {
//             result.push(item);
//         }    
//     });
//     return result;    
// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert( unique(strings) );



// function getAverageAge(arr) {
//     return arr.reduce( (sum, cur) => sum + cur.age, 0) / arr.length;
// }
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [ john, pete, mary ];
// let usersMapped = users.map(user => ({
//                         'fullName' : `${user.name} ${user.surname}`,
//                         'id' : user.id,
//                     })
// );



// function Calculator() {
//     this.methods = {
//         '+' : (a,b) => a + b,
//         '-' : (a,b) => a - b,
//     };

//     this.calculate = function(str) {
//         let arr = str.split(' '); // 숫자, +/-, 숫자
//         let a = +arr[0], b = +arr[2], op = arr[1];
//         return this.methods[op](a,b);
//     };

//     this.addMethod = function(op, func) {
//         this.methods[op] = func;
//     };
// }
// let calc = new Calculator();
// alert( calc.calculate("3 - 7") );
// calc.addMethod("**", (a, b) => a ** b);
// alert( calc.calculate("2 ** 3") );



// function copySorted(arr) {
//     return arr.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// alert( copySorted(arr) )


// function filterRange(arr, min, max) {
//     return arr.filter(
//         item => (item >= min && item <= max)
//     )
// }
// let arr = [5, 3, 8, 1];
// alert( filterRange(arr, 1, 4); ); // 3,1 



// function camelize(str) {
//     return str.split('-').map(
//         (word, index) => (index == 0) ? word : 
//                          (word == "") ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join('')
// }
// alert( camelize("-webkit-transition-") )



