function meetings(input) {
  let meetingsLog = {};
  for (const meeting of input) {
    let [day, name] = meeting.split(" ");

    if (meetingsLog.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      meetingsLog[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (const key in meetingsLog) {
    console.log(`${key} -> ${meetingsLog[key]}`);
  }
}

// meetings([
//   "Friday Bob",
//   "Saturday Ted",
//   "Monday Bill",
//   "Monday John",
//   "Wednesday George",
// ]);

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
