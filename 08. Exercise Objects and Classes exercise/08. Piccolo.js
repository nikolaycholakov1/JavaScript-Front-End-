function piccolo(input) {
  let parkingLot = [];

  for (const line of input) {
    let [command, id] = line.split(", ");

    if (command === "IN" && !parkingLot.includes(id)) {
      parkingLot.push(id);
    } else if (command === "OUT" && parkingLot.includes(id)) {
      let index = parkingLot.indexOf(id);
      parkingLot.splice(index, 1);
    }
  }

  if (parkingLot.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    let sortedIds = parkingLot.sort((numA, numB) => numA.localeCompare(numB));
    sortedIds.forEach((id) => {
      console.log(id);
    });
  }
}

piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
