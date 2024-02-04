
// 2 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

let exchangeRate = 27;
let convertToHrn;

for (i = 10 ; i <=100 ; i +=10){
    convertToHrn = i * exchangeRate;
console.log(`${i}$ = ${convertToHrn}HRN`)
};