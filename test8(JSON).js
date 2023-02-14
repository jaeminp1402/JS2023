'use strict';

/* 자료구조와 자료형 */

/* JSON */

let room = { number: 23 };
let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};
// 순환 참조 
room.occupiedBy = meetup;
meetup.self = meetup;
let json = JSON.stringify(meetup, function replacer(key, value) {  // 객체 값을 JSON 형식의 문자열로 변환      
        return (key != "" && value == meetup) ? undefined : value; // 최초 호출 시 {"": this} 래퍼객체가 생성됨. 
    });
alert( json );


// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meet_obj = JSON.parse(str, 
//         (key, value) => (key == 'date') ? new Date(value) : value );
// alert( meet_obj.date.getDate() );

