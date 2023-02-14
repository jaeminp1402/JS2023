'use strict';

/* object */
// 객체에 할당된 함수를 method라고 부름
// method에서 객체 변수를 사용할 경우에는 this 키워드를 사용함
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        alert(this.step);
        return this;
    }
}
ladder.up().up().down().up().down().showStep();


let calculator = {
    read() {
        this.f_value = +prompt('input first value:',0);
        this.s_value = +prompt('input second value:',0);
    },
    sum() {return this.f_value + this.s_value},
    mul() {return this.f_value * this.s_value},
};
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());



/* function */
// function pow(x,n) {
//     let result = x;
//     for(let i=1; i<n; i++) {
//         result *= x;
//     }
//     return result;
// }

// let x = +prompt('input x:');
// let n;
// do {
//     n = +prompt('input n:')
//     if(n<1) alert('n must be greater than 1')
// } while(n<1) 

// alert(`the answer is ${pow(x,n)}`)



/* Prime Number */
// let num = prompt('enter num(>=2):')

// prime:
// for(let i=2; i<=num; i++) {
//     for(let j=2; j<i; j++) {
//         if(!(i%j)) continue prime;
//     }
//     console.log(i);
// }
