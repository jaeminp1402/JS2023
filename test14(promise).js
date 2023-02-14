'use strict';

/* promise와 promise chaining */

/* fetch(url)는 promise 객체를 리턴함 */
function showAvatar(userInfo) {
  return new Promise( function(resolve, reject) { 
    let img = document.createElement('img');
    img.src = userInfo.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);
    setTimeout(() => {
      img.remove();
      resolve(userInfo);}, 3000);
  });
}
fetch('https://api.github.com/users/lukas')
  .then(response => response.json())
  .then(showAvatar)   //.then(userInfo => showAvatar(userInfo))를 간략하게 표시
  // timeout 후 실행되는 작업
  .then(userInfo => alert(userInfo.name + ' done!!!'));


/* promise chaining - .then은 promise가 반환됨 */ 

// function loadscript(src) {  
//     return new Promise( function(resolve, reject) {
//         let script = document.createElement('script');  //<script src="…">를 동적으로 만들고 이를 문서에 추가
//         script.src = src;
//         script.onload = () => resolve('loading OK...');
//         script.onerror = () => reject(new Error(`${src} loading error...`));
//         document.head.append(script);
//     });
// }
// loadscript('./my/hello.js')
//   .then(
//     result => loadscript('./hello.js'),
//     error => alert(error)
//   )
//   .then(
//     result => one(),
//     error => alert(error)
//   )


// new Promise( function(resolve, reject) {
//     setTimeout(()=>resolve(1), 2000)
// }).then( function(result) {
//     console.log(result);
//     return new Promise( function(resolve, reject) {
//         setTimeout(()=>resolve(result * 2), 2000)
//     });
// }).then( function(result) {
//     console.log(result);
//     return new Promise( function(resolve, reject) {
//         setTimeout(()=>resolve(result * 2), 2000)
//     });
// }).then( function(result) {
//     console.log(result);
// })


/* promise 함수 */
// function loadscript(src) {  
//     return new Promise( function(resolve, reject) {
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = () => resolve('loading OK...');
//         script.onerror = () => reject(new Error(`${src} loading error...`));
//         document.head.append(script);
//     });
// }
// let promise = loadscript('./my/hello.js');
// promise.then(
//     result => alert(result),
//     error => alert(error)
// );


// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve('OK'), 3000);
//     setTimeout(() => reject(new Error('Fail...')), 2000);
// });
// promise.finally(() => alert('promise is ready...'));
// promise.then(
//     function(result) { alert(result) },
//     function(error) { alert(error) }
// );
// promise.catch(f) 함수는 promise.then(null, f)와 동일



/* callback 함수 */
// <script src="…">를 동적으로 만들고 이를 문서에 추가
// function loadscript(src, callback) {    // script 로딩이 완료되면 callback 함수가 호출됨
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(null);
//     script.onerror = () => callback(new Error(`${src} loading error...`));
//     document.head.append(script);
// }
// loadscript('./my/hello.js', function(error) {
//     if( error ) alert(error);
//     else alert('loading ok...');
// });