'use strict';

/********************* */
/* 함수 바인딩(binding) */
/********************* */
// - 함수 호출 시점의 함수 상태(this, 인수값)를 고정시킴 
let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' loginOk' : ' loginFail') );
    }
  };
function askPassword(ok, fail) {
    let password = prompt('password');
    if( password == 'rockstar') ok();
    else fail();
}
askPassword(user.login.bind(user, true), user.login.bind(user, false));


/******************************* */
/* 부분 적용(partial application) */
/******************************* */
// function mul(a, b) {
//     return a * b;
// }
// let triple = mul.bind(null, 3); // mul의 첫번째 인자인 a값을 3으로 고정
// alert( triple(10) );



// let user = {
//     firstName: "John",
//     sayHi() {
//       alert(`Hello, ${this.firstName}!`);
//     }
// };
// user.sayHi();
// setTimeout(user.sayHi.bind(user), 1000);
// // setTimeout(()=>user.sayHi(), 1000);
// user = { sayHi() { alert("different message"); } };
// console.log('function is changed but ...');
