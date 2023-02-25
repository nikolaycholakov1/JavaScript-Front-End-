function ages(age) {
  let personAge = age;

  if (personAge < 0) {
    console.log("out of bounds");
  } else if (0 <= personAge && personAge <= 2) {
    console.log("baby");
  } else if (3 <= personAge && personAge <= 13) {
    console.log("child");
  } else if (14 <= personAge && personAge <= 19) {
    console.log("teenager");
  } else if (20 <= personAge && personAge <= 65) {
    console.log("adult");
  } else if (66 >= personAge) {
    console.log("elder");
  }
}

ages(-1);
ages(20);
ages(13);
ages(100);
ages(33);
ages(50);
