function solve(numberAsString) {
  let num = Number(numberAsString);

  for (let i = 1; i <= 10; i++) {
    let result = i * num;
    console.log(`${num} X ${i} = ${result}`);
  }
}

solve(2);
