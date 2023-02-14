'use strict';

/* object */

/* 객체를 원시형으로 변환하기 */
let user = {
    name: "John",
    money: 1000,
  
    // hint가 "string"인 경우
    toString() { return `{name: "${this.name}"}`; },  

    // hint가 "number"나 "default"인 경우
    valueOf() { return this.money; }  
  };
  
alert(user);        // toString -> {name: "John"}
alert(user + 500);  // valueOf -> 1500


/* optional chaining(?.) - 중첩 객체를 에러없이 안전하게 접근할 수 있음 
   단, 존재하지 않아도 괜찮은 대상에만 사용해야 함. 그렇지 않으면 에러를 조기에 발견하지 못하고 디버깅이 어려워짐  */
// let user = {}
// alert( user.address?.street) // 에러없이 undefined를 리턴함

// let user1 = {
//     admin() { alert("Admin Account"); }
//   }  
// let user2 = {};
// user1.admin(); 
// user2.admin?.();  //함수가 선언되어 있지 않아도 에러가 발생하지 않고 지나간다
// alert('No Error');


/* 아래 객체 calculator와 동일한 동작을 하지만 생성자를 사용하면 같은 속성을 가지는 여러 객체를 만들 수 있다 */
// function Calculator() {
//     this.read = function() {
//         this.f_value = +prompt('input first value:',0);
//         this.s_value = +prompt('input second value:',0);
//     };
//     this.sum = function() {return this.f_value + this.s_value};
//     this.mul = function() {return this.f_value * this.s_value};
// };
// let calculator = new Calculator();
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let calculator = {
//     read() {
//         this.f_value = +prompt('input first value:',0);
//         this.s_value = +prompt('input second value:',0);
//     },
//     sum() {return this.f_value + this.s_value},
//     mul() {return this.f_value * this.s_value},
// };


/* 생성자 함수 이름은 대문자. 함수 내부에서 암시적으로 this가 생성되고 마지막에 this가 반환됨
   아래 두 함수는 동일한 효과를 나타내지만 사용방법은 다르다. */
// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
// let user1 = new User('Marry', 28);
// for(let key in user1) {   
//     alert(key + ' ' + user1[key]);
// }


// function User(name, age) {
//     return {
//         name,  // name: name과 동일 (property value shorthand)
//         age,
//     }
// }
// let user1 = User('Marry', 28);
// let user2 = User('John', 38);
// alert(user1.name + ' ' + user1.age)
// for(let key in user2) {    // key를 변수로 선언해 주어야 함
//     alert(key + ' ' + user2[key]);
// }