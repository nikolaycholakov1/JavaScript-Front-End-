function oddAndEvenSum(number) {
  let numberToString = [...number.toString()];
  let oddSum = 0;
  let evenSum = 0;

  numberToString.forEach((num) => {
    if (num % 2 === 0) {
      evenSum += Number(num);
    } else {
      oddSum += Number(num);
    }
  });

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
