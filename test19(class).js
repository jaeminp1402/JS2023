'use strict';

/*************** */
/* Class(클래스) */
/*************** */

/* class 필드로 binding된 method 만들기 */
class Button {
  type = 'normal';  // class 필드

  constructor(value) { this.value = value;}
  click = () => {   // method를 객체에 binding
    alert(this.value);
  }
}
let btn = new Button('Press button');
console.log(btn.type);
setTimeout(btn.click, 1500);  // btn.click 함수를 다른 함수의 파라미터로 사용해도 binding되어 있으므로 this를 읽어버리지 않는다


/* get, set 이용해서 class 내부 property 조작 */
// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() { return this._name;}
//   set name(value) {
//     if (value.length < 4) {
//       alert('name is too short'); 
//       return; 
//     }
//     this._name = value;
//   }
// }
// let user = new User('suji');
// alert(user.name);   // 'suji' 
// user = new User('kim'); // 에러 메시지
// alert(user.name);   // 'undefined'


/* class 표현식 */
// let User = class {
//   sayHi() { alert('hello') }
// };
// new User().sayHi();


/* 기본적인 class 사용법 */
// class User {
//   constructor(name) { this.name = name; } // class method 선언문에는 ,나 ;가 없다
//   sayHi() { alert(this.name);   }
// } // class 선언문에는 함수 선언문과 달리 ;가 없다

// let user1 = new User("Suji");
// user1.sayHi();
// alert(user1.name); // 'Suji'
// let user2 = new User;  // 인자가 없으면 <new Class이름> 으로 사용가능
// user2.sayHi();   // 'undefined'
// alert(User === User.prototype.constructor); // true
// User(); // class constructor는 new없이 호출할 수 없다
