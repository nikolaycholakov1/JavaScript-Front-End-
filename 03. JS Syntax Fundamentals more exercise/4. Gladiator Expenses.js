function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let expenses = 0;
  let shieldIsBroken = false;

  for (let i = 1; i <= lostFights; i++) {
    if (i % 2 === 0 || i % 3 === 0) {
      if (i % 2 === 0 && i % 3 === 0) {
        expenses += shieldPrice;
        shieldIsBroken = true;
      } else if (i % 2 === 0) {
        expenses += helmetPrice;
      } else {
        expenses += swordPrice;
      }
    }
    if (shieldIsBroken && i % 2 === 0) {
      expenses += armorPrice;
      shieldIsBroken = false;
    }
  }

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5);

// As a gladiator, Peter has to repair his broken equipment when he loses a fight. His equipment consists of a helmet, sword, shield, and armor. You will receive Peter`s lost fights count.

// · Every second lost game, his helmet is broken.

// · Every third lost game, his sword is broken.

// · When both his sword and helmet are broken in the same lost fight, his shield also breaks.

// · Every second time, when his shield brakes, his armor also needs to be repaired.

// You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment.

// Input / Constraints

// You will receive 5 parameters to your function:

// · The first parameter - lost fights count - is an integer in the range [0, 1000].

// · The second parameter - helmet price - is the floating-point number in the range [0, 1000].

// · The third parameter - sword price - is the floating-point number in the range [0, 1000].

// · The fourth parameter - shield price - is the floating-point number in the range [0, 1000].

// · The fifth parameter - armor price - is the floating-point number in the range [0, 1000].

// Output

// · As output you must print Peter`s total expenses for new equipment rounded to the second decimal point: "Gladiator expenses: {expenses} aureus"
