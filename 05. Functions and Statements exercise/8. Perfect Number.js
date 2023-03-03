function perfectNumber(number) {
  let divisors = [];

  for (
    let currentNumber = 1;
    currentNumber <= Math.floor(number / 2);
    currentNumber++
  ) {
    if (number % currentNumber === 0) {
      divisors.push(currentNumber);
    }
  }

  let sum = 0;
  let divisorsSum = divisors.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    sum
  );

  if (number === divisorsSum) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
