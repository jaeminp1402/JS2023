'use strict';

/* Promise화(callback을 promise로 변환하기) */
function promisify(f) {
  return function(...args) {
    return new Promise( (resolve, reject) => {
      function callback(err, result) {
        if( err ) reject(err);
        else resolve(result);
      }
      args.push(callback);
      f.call(this, ...args); // callback 함수를 추가해서 기존 함수 호출
    } )
  } 
}
let loadscriptPromise = promisify(loadscript);

// let loadscriptPromise = function(src) {
//   return new Promise( (resolve, reject ) => {
//     loadscript(src, (err, result) => {
//       if( err ) reject(err);
//       else resolve(result);
//     }) 
//   });
// }
loadscriptPromise('./my/hello.js')
.then(
  (result) => console.log(result),
  (err) => alert(err)
  );



/* callback function */
{/* <script src="…">를 동적으로 만들고 이를 문서에 추가 */}
function loadscript(src, callback) {    // script 로딩이 완료되면 callback 함수가 호출됨
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`${src} loading error...`));
    document.head.append(script);
}
// loadscript('./my/hello.js', function(error, result) {
//     if( error ) alert(error);
//     else console.log(result);
// });