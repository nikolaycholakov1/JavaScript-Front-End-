function solve(text, searchedword) {
  let words = text.split(" ");
  let count = 0;
  for (const word of words) {
    if (word === searchedword) count += 1;
  }

  console.log(count);
}

solve("This is a word", "is");
