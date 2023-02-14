'use strict';

/* 자료구조와 자료형 */

/* 배열 */
let army = {
    minAge : 18,
    maxAge : 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age <= this.maxAge;
    }
}
let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];
//let solders = users.filter( item => army.canJoin(item))
let solders = users.filter(army.canJoin, army);
alert( solders )


// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];  
// let user = users.find(item => item.id == 1);


function getMaxSubSum(arr) {
    let maxSum = 0;
    for(let i = 0; i < arr.length; i++) {
        let max = 0;
        let sum = 0;
        for(let j=i; j < arr.length; j++) {
            sum += arr[j];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}
//alert( getMaxSubSum([2, -1, 2, 3, -9]) ) // 6


function sumInput() {
    let arr = [];
    while(1) {
        let input = prompt('input number: ');
        if( input == '' || input == null || !isFinite(input)) break;
        arr.push(+input);
    }
    
    let sum = 0;
    for(let item of arr) sum += item;
    return sum;
}



/* 문자열 */
// let str = "As sly as a fox, as strong as an ox";
// let target = "as";
// let pos = -1;
// while( (pos = str.indexOf(target, pos+1)) != -1) {  // find 기능
//     alert(`index pos: ${pos}`);
// }
// alert('slice: ' + str.slice(3,10));
// alert('slice2: ' + str.slice(-5,-1));
// alert('substring: ' + str.substring(10,3));
// alert('substr: ' + str.substr(3,6));

// let str = '';
// for(let i = 65; i <= 220; i++) {
//     str += String.fromCharCode(i);
// }
// alert(str)

function ucFirst(str) {
    if(!str) return str; // str이 null인 경우 처리

    return str[0].toUpperCase() + str.slice(1,);
}

function checkSpam(str) {
    let l_str = str.toLowerCase();

    return ( l_str.includes('viagra') || l_str.includes('xxx') )
}

function truncate(str, maxlength) {
    if( str.length <= maxlength) return str;

    return str.slice(0,maxlength-1) + "…";
}




/* 숫자형 */
// alert( parseInt('100px'));   // 100
// alert( parseFloat('12.5$')); // 12.5
// alert( parseInt('2n9c', 36));   // n진수 문자열 파싱도 가능
// alert( 1.35.toFixed(1)); // "1.4" - toFixed(n) 소숫점 n 번째까지 반올림 후 문자형으로 변환
//
// function readNumber() {
//     while(1) {
//         let input = prompt('number:');
//         if( input == null || input == '') return null;
//         else if( isFinite(input) ) return +input;
//     }
// }
// alert( readNumber() )

