'use strict';

/********************* */
/* try..catch..finally */
/********************* */
// finally는 throw 또는 return으로 함수가 종료되기 전에 반드시 실행된다
// error 객체는 name, message, stack property를 갖는다


// custom error
class ValidationError extends Error {
    constructor(message) {
      super(message);       // 부모 생성자 호출
    //   this.name = "ValidationError"; // name 재설정
      this.name = this.constructor.name; // name 자동설정
    }
}
class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("No property: " + property);
      this.property = property;
    }
}

// 브라우저 환경에서는 catch가 없는 예상치 못한 에러가 발생했을 때 window.onerror() 함수가 실행됨
window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
};
// read_data('{ "name": "Suji" }');

function read_data(str)
{
    try {
        let user = JSON.parse(str);    
        if( !user.name ) {  // 이 경우에는 catch error가 발생하지 않으므로 수동으로 error를 발생시킴
            throw new PropertyRequiredError("name")
        }    
        if( !user.age ) {  
            throw new PropertyRequiredError("age")
        }      
        blabla();   // unexpected error
        alert(user.name);           
    } catch(err) {          
        if( err instanceof ValidationError ) {
            console.log('Invalid data: ' + err.message + '=>' + err.name);
        } else if( err instanceof SyntaxError ) {
            console.log('Syntax Error: ' + err.message);
        } else {
            throw err;
        }
    }
}

try {
    read_data('{ "age": 30 }');
    // read_data('{ bad json}');
    // read_data('{ "name": "Suji", "age": 25 }');
} catch(e) {
    alert('[ExtER]: ' + e);
}


// try {
//     let user = JSON.parse(json_str);
//     if( !user.name ) {  // 이 경우에는 catch error가 발생하지 않으므로 수동으로 error를 발생시킴
//         throw new SyntaxError("name should be defined!!!")
//     }         
//     alert(user.name);           
// } catch(err) {          
//     console.log(err);
// }

