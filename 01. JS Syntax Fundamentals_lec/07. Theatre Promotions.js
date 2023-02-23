function solve(day, age) {
  let day_type = day;
  let current_age = Number(age);

  let ticket_price = 0;

  if (day_type === "Weekday") {
    if (0 <= current_age && current_age <= 18) {
      ticket_price = 12;
    } else if (18 <= current_age && current_age <= 64) {
      ticket_price = 18;
    } else if (64 <= current_age && current_age <= 122) {
      ticket_price = 12;
    }
  } else if (day_type === "Weekend") {
    if (0 <= current_age && current_age <= 18) {
      ticket_price = 15;
    } else if (18 <= current_age && current_age <= 64) {
      ticket_price = 20;
    } else if (64 <= current_age && current_age <= 122) {
      ticket_price = 15;
    }
  } else if (day_type === "Holiday") {
    if (0 <= current_age && current_age <= 18) {
      ticket_price = 5;
    } else if (18 <= current_age && current_age <= 64) {
      ticket_price = 12;
    } else if (64 <= current_age && current_age <= 122) {
      ticket_price = 10;
    }
  }
  if (ticket_price === 0) {
    console.log("Error!");
  } else {
    console.log(`${ticket_price}$`);
  }
}

solve("Weekday", 42);
solve("Holiday", -12);
solve("Holiday", 1);
