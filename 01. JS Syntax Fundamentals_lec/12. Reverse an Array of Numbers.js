function solve(n, input_array) {
  let new_arr = [];
  let output = "";

  for (let i = 0; i < n; i++) {
    new_arr.push(input_array[i]);
  }

  let reversed_array = new_arr.reverse();
  output = reversed_array.join(" ");
  console.log(output);
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);
