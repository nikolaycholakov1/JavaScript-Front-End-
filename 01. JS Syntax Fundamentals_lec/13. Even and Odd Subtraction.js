function solve(arr) {
  let odd_sum = 0;
  let even_sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num % 2 === 0) {
      even_sum += num;
    } else {
      odd_sum += num;
    }
  }
  console.log(even_sum - odd_sum);
}

// solve([1, 2, 3, 4, 5, 6]);
// solve([3, 5, 7, 9]);
solve([2, 4, 6, 8, 10]);
