'use strict';

const testFunc = (function () {
  let delay = 200;
  return function (param) {
    alert(param + ' ' + (delay++));
  };
})();
testFunc("test1");
testFunc("test2");

// const testFunc = (function () {
//   let delay = 200;
//   return function (param) {
//     alert(param + ' ' + (delay++));
//   };
// });
// let tf = testFunc();
// tf("test3");
// tf("test4");