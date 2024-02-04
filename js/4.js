// 4 Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).


let userNumber = parseInt(prompt("Enter an integer"));
let whatIsNumber


if (userNumber <= 1) {
      whatIsNumber = `The number ${userNumber} is not prime`;
} else {
      let i = 2;
      let isPrime = true;

      do {
            if (userNumber % i === 0) {
                  isPrime = false;
                  break;
            }
            i++;
      } while (i < userNumber);

      whatIsNumber = isPrime ? `The number ${userNumber} is prime` : `The number ${userNumber} is not prime`;
}

console.log(whatIsNumber);
alert(whatIsNumber);