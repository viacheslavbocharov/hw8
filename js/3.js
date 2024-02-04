// 3 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.


let userNumber = parseInt(prompt("Enter an integer N"))
let numberSquared = 0;
let allSquaredNumbers = '';


for (i = 1; i <= 100; i++) {
    numberSquared = i * i;
    if (numberSquared > userNumber) {
        break;
    }
    allSquaredNumbers += `${i}, `;
}

allSquaredNumbers = allSquaredNumbers.slice(0, -2);
console.log(`All integers from 1 to 100, the square of which does not exceed the number ${userNumber} are: ${allSquaredNumbers}.`);