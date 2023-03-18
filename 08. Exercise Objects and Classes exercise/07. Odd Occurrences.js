function oddOccurances(sentence) {
  const words = sentence.toLowerCase().split(" ");
  const counts = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    counts[word] = counts[word] ? counts[word] + 1 : 1;
  }

  const oddElements = [];

  for (const word in counts) {
    if (counts[word] % 2 === 1) {
      oddElements.push(word);
    }
  }
  const sorted = oddElements.sort();

  console.log(sorted.join(" "));
}

oddOccurances("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddOccurances("Cake IS SWEET is Soft CAKE sweet Food");
