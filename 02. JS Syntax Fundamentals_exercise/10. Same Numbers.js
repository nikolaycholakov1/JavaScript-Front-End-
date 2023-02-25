function checkSameDigits(num) {
  let digits = num.toString().split("");

  let allSame = digits.every((digit) => digit === digits[0]);

  let sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);

  console.log(allSame);
  console.log(sum);
}

checkSameDigits(2222222);

checkSameDigits(1234);
