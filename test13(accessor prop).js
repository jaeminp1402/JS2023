'use strict';

/* 객체 property flag(플래그) & descriptor(설명자)  */
/* 접근자 프로퍼티(accessor property) */

// 기존 User(name, age)와 호환성을 위해서 age 프로퍼티를 getter를 사용해서 구현함
function User(name, birthday) {   
    this.name = name;
    this.birthday = birthday;
    // age는 현재 날짜와 생일을 기준으로 계산함
    Object.defineProperty(this, 'age', {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}
let john = new User('John', new Date(1992,6,1));
alert(john.birthday);
alert(john.age);


// let user = {
//     name: "John",
//     surname: "Smith",
//     fullname() {
//         return `${this.name} ${this.surname}`;
//     },
//     get fullName() {
//         return `${this.name} ${this.surname}`;
//     },
//  } ;
// alert( user.fullname() );   // John Smith
// alert( user.fullName );     // John Smith