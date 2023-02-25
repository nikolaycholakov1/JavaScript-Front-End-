function pascalCaseSplitter(text) {
  let characters = text.split("");
  let output = [];

  for (let elem of characters) {
    let char = elem.charCodeAt();
    if (char >= 65 && char <= 90) {
      if (!!output.length) {
        output += ", ";
      }
      output += elem;
    } else {
      output += elem;
    }
  }

  console.log(output);
}

pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
