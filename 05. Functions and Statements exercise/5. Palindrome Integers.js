function checkPalindrome(numbers) {
  const isPalindrome = (num) =>
    Number([...num.toString()].reverse().join("")) === num;

  numbers.forEach((num) => {
    console.log(isPalindrome(num));
  });

  //   function isPalindrome(num) {
  //     let reversed = Number([...num.toString()].reverse().join(""));

  //     return num === reversed;
  //   }
}

checkPalindrome([123, 323, 421, 121]);
