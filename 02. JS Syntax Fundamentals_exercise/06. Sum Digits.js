// function sumDigits(number) {
//   let numberAsString = number.toString();
//   let sum = 0;

//   for (const digitAsString of numberAsString) {
//     let digit = Number(digitAsString);
//     sum += digit;
//   }
//   console.log(sum);
// }

function sumDigits(number) {
  let sum = 0;

  while (number > 0) {
    let lastDigit = number % 10;
    sum += lastDigit;
    number = Math.floor(number / 10);
  }

  console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
