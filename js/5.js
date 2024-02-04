// 5 Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. 
//(Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let userNumber = parseInt(prompt("Enter an integer"));
let base = 3;
let exponent = 0;
let power;
let canGetByPower = false;
let res;


do {

    res = Math.pow(base, exponent);
    if (userNumber / res === 1) {
        canGetByPower = true;
        finalExponent = exponent;
    }
    exponent++

} while (res < userNumber);


console.log(canGetByPower ? `The number ${userNumber} can get by power ${base} on ${finalExponent}` : `The number ${userNumber} cannot get by power ${base}.`);
alert(canGetByPower ? `The number ${userNumber} can get by power ${base} on ${finalExponent}` : `The number ${userNumber} cannot get by power ${base}.`);