function charactersInRange(char1, char2) {
  let start = char1.charCodeAt();
  let end = char2.charCodeAt();
  let result = [];
  if (start > end) {
    [start, end] = [end, start];
  }
  for (let i = start + 1; i < end; i++) {
    result.push(String.fromCharCode(i));
  }

  console.log(...result);
}

charactersInRange("C", "#");
