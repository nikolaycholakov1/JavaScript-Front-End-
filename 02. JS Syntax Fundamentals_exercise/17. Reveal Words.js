function replaceWordByLength(words, template) {
  // Split the words string by ', ' delimiter
  const wordsArray = words.split(", ");

  // Split the template string by '*' delimiter
  const templateArray = template.split("*");

  // Loop through the template array
  for (let i = 0; i < templateArray.length; i++) {
    // Get the length of the current string segment
    const length = templateArray[i].length;

    // Loop through the words array
    for (let j = 0; j < wordsArray.length; j++) {
      // Check if the length of the current word is equal to the length of the current string segment
      if (wordsArray[j].length === length) {
        // Replace the current string segment with the current word
        templateArray[i] = wordsArray[j];

        // Break out of the words loop since we found a matching word
        break;
      }
    }
  }

  // Join the template array back into a string
  const result = templateArray.join("");

  // Return the result
  console.log(result);
}

replaceWordByLength(
  "great",
  "softuni is ***** place for learning new programming languages"
);

replaceWordByLength(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);

// Write a JS function, which receives two parameters.

// The first parameter will be a string with some words separated by ', '.

// The second parameter will be a string that contains templates containing '*'.

// Find the word with the same length as the template and replace it.

// Example Input:

// 'great', 'softuni is ***** place for learning

// Output:
// softuni is great place for learning new programming languages
