// 1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

let startNumber = 20;
let finishNumber = 30;
let str = `${startNumber} `;
let res = startNumber;

do {
    res += 0.5;
    str += `${res} `;
} while (res < finishNumber);

console.log(str);