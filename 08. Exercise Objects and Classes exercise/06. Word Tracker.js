function wordTracker(input) {
  let searchedWords = input.shift().split(" ");
  let words = {};
  for (const word of searchedWords) {
    let count = input.filter((w) => w === word).length;
    words[word] = count;
  }

  let sortedWords = Object.entries(words).sort((wordA, wordB) => {
    let [_nameA, countA] = wordA;
    let [_nameB, countB] = wordB;

    return countB - countA;
  });

  for (const [word, count] of sortedWords) {
    console.log(`${word} - ${count}`);
  }
}

wordTracker([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",

  "to",
  "count",
  "the",
  "occurrences",
  "of",

  "the",
  "words",
  "this",
  "and",
  "sentence",

  "because",
  "this",
  "is",
  "your",
  "task",
]);
