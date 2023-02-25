function listOfnames(names) {
  return [...names]
    .sort((aName, bName) => aName.localeCompare(bName))
    .map((name, index) => `${index + 1}.${name}`)
    .join("\n");
}

console.log(listOfnames(["John", "Bob", "Christina", "Ema"]));
