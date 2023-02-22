'use strict';

/********************************************/
/* 구조 분해 할당(destructuring assignment) */
/* Date 객체                                */
/********************************************/
// DA는 Object.entries() 함수를 이용해서 객체를 key, value로 

// 25.12.97 20:20:00 format으로 출력하는 함수
function formatDate(date) {
    let now = new Date();
    let diff_ms = now - date;

    if( diff_ms < 1000 ) return '현재';
    if( diff_ms <= 1000*60 ) return `${diff_ms/1000}초 전`;
    if( diff_ms <= 1000*3600 ) return `${diff_ms/60000}분 전`;
    // 문자열로 변환 후 뒤에 2개만 가져옴(1자리인 경우는 앞에 0이 포함됨)
    let n_format = ['0' + date.getDate(),
                    '0' + (date.getMonth()+1),
                    '' + date.getFullYear(),
                    '0' + date.getHours(),
                    '0' + date.getMinutes(),
                ].map(item => item.slice(-2)); 

    return n_format.slice(0,3).join('.') + ' ' + n_format.slice(3).join(':')
}
alert( formatDate(new Date(new Date - 86400 * 1000)) );


// function getDateAgo(date, days) {
//     let new_date = new Date(date);
//     new_date.setDate(date.getDate() - days);
// 
//     return new_date.getDate();
// }
// let date = new Date(2015, 0, 2); // 2015년 1월 2일
// alert( getDateAgo(date, 2) ); // 31, (2014년 12월 31일)


// function getWeekDay(date) {
//     let day = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
// 
//     return day[date.getDay()];
// }
// let date = new Date(2012, 0, 3);  // 2012년 1월 3일

// let date = new Date('2012-02-20T03:12');
// alert(date)



/* 구조 분해 할당(destructuring assignment) */
// function topSalary(obj) {
//     let max_salary = 0, max_name = null;
//     for(let [k, v] of Object.entries(obj)) {
//         if( v > max_salary ) {
//             max_salary = v;
//             max_name = k;
//         }
//     }
//     return max_name;
// }
// let salaries = { "John": 100, "Pete": 300, "Mary": 250 };
// alert(topSalary(salaries));


// let user = { name: "John", years: 30 };
// let {name, years: age, isAdmin = false} = user;
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false
