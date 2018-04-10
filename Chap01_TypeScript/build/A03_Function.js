"use strict";
// A03_Function.ts
// 함수의 매개변수에 타입이 없으면 에러
function calcTxtOne(state, amount, person) {
    if (state === 'NY') {
        return amount * 0.05 - person * 500;
    }
    else if (state === 'NJ') {
        return amount * 0.03 - person * 300;
    }
    return -1;
}
// 함수 리터럴
var calcTxtTwo = function calcTxtTwo(state, amount, person) {
    if (state === 'NY') {
        return amount * 0.05 - person * 500;
    }
    else if (state === 'NJ') {
        return amount * 0.03 - person * 300;
    }
    return -1;
};
var txtOne = calcTxtOne('NY', 5000, 2);
var txtTwo = calcTxtTwo('NY', 5000, 2);
console.log("One: " + txtOne + ", Two: " + txtTwo);
// 매개변수는 기본 값을 설정할 수 있다 [es2015]
// 초기화가 된 매개변수는 가장 마지막에 기술한다.
function calcTxtThree(amount, person, state) {
    if (state === void 0) { state = 'NY'; }
    if (state === 'NY') {
        return amount * 0.05 - person * 500;
    }
    else if (state === 'NJ') {
        return amount * 0.03 - person * 300;
    }
    return -1;
}
var txtThree = calcTxtThree(5000, 2);
var txtFour = calcTxtThree(5000, 2, 'NY');
console.log("Three: " + txtThree + ", Four: " + txtFour);
// 매개변수 값 지정을 생략하게 할 수도 있음. (?)
// 생략 가능한 매개변수도 맨 뒤에 와야 함
function calcTxtFour(amount, person, state) {
    // 생략된 변수가 없어도 정상적으로 처리되도록 할 필요가 있다.
    state = state || 'NJ';
    if (state === 'NY') {
        return amount * 0.05 - person * 500;
    }
    else if (state === 'NJ') {
        return amount * 0.03 - person * 300;
    }
    return -1;
}
var txtFive = calcTxtFour(5000, 2);
var txtSix = calcTxtFour(5000, 2, 'NY');
console.log("Five: " + txtFive + ", Six: " + txtSix);
//# sourceMappingURL=A03_Function.js.map