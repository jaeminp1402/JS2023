'use strict';

/* Promise Methods */


// Promise.allSettled은 어떤 promise가 reject되더라도 .then()의 성공함수만 실행됨
// 성공함수의 인자값으로 성공, 실패값이 전달됨 -> [ {status: 'fulfilled'}, {status: 'rejected'}]
Promise.allSettled([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve, reject) => setTimeout(() => reject(new Error(2)), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(console.log); 


// Promise.all은 하나라도 reject가 되면 .then()의 실패함수만 실행됨
// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error(2)), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(alert, console.log);    



// let urls = [
//   'https://api.github.com/users/KirinDave',
//   'https://api.github.com/users/Violet-Bora-Lee',
//   'https://no-such-url'
// ];
// let requests = urls.map(url=>fetch(url));
// Promise.allSettled(requests)
//   .then(results => {
//     results.forEach((result, index) => {
//       if( result.status == 'fulfilled' ) {
//         console.log(`${urls[index]}: ${result.value.status}`)
//       }
//       if( result.status == 'rejected' ) {
//         console.log(`${urls[index]}: ${result.reason}`)
//       }
//     },
//     error => alert(error));
//   })


// let names = ['KirinDave', 'jamesgolick', 'lukas']
// let requests = names.map(name=>fetch(`https://api.github.com/users/${name}`));
// Promise.all(requests)
//   .then(responses => {
//     responses.map(res => console.log(`${res.url}: ${res.status}`));
//     return responses;
//   })
//   .then(responses => {
//     Promise.all( responses.map(res => res.json()) );
//   })
//   .then(userInfos => {
//     userInfos.forEach(user => console.log(`${user.name}: ${user.followers}`));
//   })
//   .catch(error => alert(error));



/* 에러 핸들링 */
// new Promise( (resolve, reject) => {
//   throw new Error('eeeerrrrroooo');
// }).catch(error => {
//   if( error instanceof URIError) {
//     // 에러 처리
//   } else {
//     throw error;
//   }
// })
// .then(() => alert('this then is executed...'))
// // 체이닝 위치에 상관없이 error가 발생하면 마지막 catch가 실행됨
// .catch(error => {    
//   alert(error);
// });

// // catch에서 처리가 안되는 에러를 처리하는 함수
// window.addEventListener('unhandledrejection', function(event) {
//   alert(event.reason);
// });