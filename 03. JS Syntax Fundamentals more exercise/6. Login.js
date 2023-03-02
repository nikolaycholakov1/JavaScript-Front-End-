function login(input) {
  const username = input[0];
  const password = username.split("").reverse().join("");
  let tries = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === password) {
      return `User ${username} logged in.`;
    } else {
      tries++;
      if (tries === 4) {
        return `User ${username} blocked!`;
      }
      console.log("Incorrect password. Try again.");
    }
  }

  return "";
}

// console.log(login(["Acer", "login", "go", "let me in", "recA"]));
// console.log(login(["momo", "omom"]));
console.log(login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]));
