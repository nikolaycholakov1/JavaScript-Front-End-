function horseRace(input) {
  let horses = input.shift().split("|");
  let firstPositionIndex = horses.length - 1;

  for (let index = 0; index < input.length; index++) {
    let tokens = input[index].split(" ");
    let command = tokens[0];

    if (command === "Retake") {
      let horse1 = tokens[1];
      let horse2 = tokens[2];
      let idx1 = horses.indexOf(horse1);
      let idx2 = horses.indexOf(horse2);
      if (idx1 < idx2) {
        [horses[idx1], horses[idx2]] = [horses[idx2], horses[idx1]];
        console.log(`${horse1} retakes ${horse2}.`);
      }
    } else if (command === "Trouble") {
      let currentHorse = tokens[1];
      let idx = horses.indexOf(currentHorse);

      if (idx > 0) {
        let temp = horses[idx];
        horses[idx] = horses[idx - 1];
        horses[idx - 1] = temp;
        console.log(`Trouble for ${currentHorse} - drops one position.`);
      }
    } else if (command === "Rage") {
      let horse1 = tokens[1];
      let horse1Idx = horses.indexOf(horse1);
      let secondPosIdx = 1;

      horses.push(horses.splice(horses.indexOf(horse1), 1)[0]);

      console.log(`${horse1} rages 2 positions ahead.`);
    } else if (command === "Miracle") {
      let horse1 = horses[0];
      horses.push(horses.splice(horses.indexOf(horse1), 1)[0]);
      console.log(`What a miracle - ${horse1} becomes first.`);
    } else if (command === "Finish") {
      console.log(horses.join("->"));
      let winner = horses[horses.length - 1];
      console.log(`The winner is: ${winner}`);
      break;
    }
  }
}

// horseRace([
//   "Onyx|Domino|Sugar|Fiona",
//   "Trouble Onyx",
//   "Retake Onyx Sugar",
//   "Rage Domino",
//   "Miracle",
//   "Finish",
// ]);

horseRace([
  "Fancy|Lilly",
  "Retake Lilly Fancy",
  "Trouble Lilly",
  "Trouble Lilly",
  "Finish",
  "Rage Lilly",
]);

// write a JS program with the following description:
// You will receive an array representing the current positions of the horses separated by the pipe symbol: "|". The order of the horses is right to left (the one on the far right is 1st and the one on the far left is last).
// After that, you will be receiving 4 types of commands. When the program receives "Finish", it should stop executing commands.
// The commands can be:
// - Retake {overtaking-horse} {overtaken-horse}
// if the overtaking horse is to the left of the overtaken horse, swap the position of the two horses. Then, print the following on the console:
// "{overtaking-horse} retakes {overtaken-horse}."
// - Trouble {horse-name}
// the given horse drops by one position, if it's not in the last position already. If the horse does drop, on the console should be printed:
// "Trouble for {horse-name} - drops one position."
// - Rage {horse-name}
// the given horse rages 2 positions ahead. If the horse is in second position before the command is given, the horse just goes to the first position. If it's already in the first position, it stays in the first position. Then, on the console should be printed:
// "{horse-name} rages 2 positions ahead."
// - Miracle
// the horse in the last position gets enormous power and becomes the first. Then, on the console should be printed:
// "What a miracle - {horse-name} becomes first."
// Constraints
// The names of the horses will always be unique.
// All given commands will be valid.
// Output
// Every command should print its own template sentence. After the program receives "Finish", it should print the updated positions of the horses, separated by arrows ("->"):
// "{horse3}->{horse2}->{horse1}"
// After the updated positions are printed, the winner should be printed as well:
// "The winner is: {horse1}"

// for this input:
// ([
//   "Bella|Alexia|Sugar",
//   "Retake Alexia Sugar",
//   "Rage Bella",
//   "Trouble Bella",
//   "Finish",
// ])

// the desired output is:
// Alexia retakes Sugar.
// Bella rages 2 positions ahead.
// Trouble for Bella - drops one position.
// Sugar->Bella->Alexia
// The winner is: Alexia
