function fruits(fruit, grams, price) {
  let fruitKilos = grams / 1000;
  let money = fruitKilos * price;

  console.log(
    `I need $${money.toFixed(2)} to buy ${fruitKilos.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

fruits("orange", 2500, 1.8);
