function wordUppercase(inputString) {
  // Replace all dots followed by a space with a special string "#DOT#", and remove all other dots
  const processedString = inputString
    .replace(/\. /g, "#DOT#")
    .replace(/\./g, "");

  // Split the processed string into an array of words
  const words = processedString.split(" ");

  // Replace all occurrences of the special string "#DOT#" with a dot and a space
  const replacedWords = words.map((word) => word.replace(/#DOT#/g, ". "));

  // Filter out any words that are not "i" or "e"
  const filteredWords = replacedWords.filter(
    (word) => word !== "i" && word !== "e"
  );

  // Convert each word to upper case
  const upperCaseWords = filteredWords.map((word) => word.toUpperCase());

  // Join the upper case words into a single string separated by ", "
  const result = upperCaseWords.join(", ");

  // Print the result to the console
  console.log(result);
}

// wordUppercase("Hi, how are you?");
wordUppercase("Functions in JS can be nested, i.e. hold other functions");

// Write a JS program that extracts all words from a passed-in string and converts them to upper case. The extracted words in the upper case must be printed on a single line separated by ", ".

// The input comes as a single string argument - the text to extract and convert words from.

// The output should be a single line containing the converted string.
