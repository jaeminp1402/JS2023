'use strict';

class FormatError extends SyntaxError {
    constructor(message) {
      super(message);       // 부모 생성자 호출
      this.name = this.constructor.name; // name 자동설정
    }
}

let err = new FormatError("formatting error");

alert(err.message);
alert(err.name);
alert(err.stack);

alert(err instanceof SyntaxError);