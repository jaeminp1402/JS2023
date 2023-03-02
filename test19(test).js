'use strict';

/* 생성자 함수를 class로 변경 */
/* 내부 함수는 'class필드'로 변경해서 this를 읽어버리지 않도록 한다 */
class Clock {
  constructor({ template }) {
    this.template = template;
  } 
  stop() { clearInterval(this.timer); }
  start() {
    this.render();
    this.timer = setInterval(this.render, 1000); 
  }
  render = () => {     // class 필드로 선언
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output);
  }
}
let clock = new Clock({template: 'h:m:s'});
clock.start();


// function Clock({ template }) {
//   let timer;
//   function render() {
//     let date = new Date();
//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;
//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;
//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);
//     console.log(output);
//   }

//   this.stop = function() {
//     clearInterval(timer);
//   };

//   this.start = function() {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }
// let clock = new Clock({template: 'h:m:s'});
// clock.start();



