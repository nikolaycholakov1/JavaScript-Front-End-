function passwordValidator(password) {
  const isValidLength = (pass) => pass.length >= 6 && pass.length <= 10;
  const hasOnlyLetterssAndDigits = (pass) => /^[A-Za-z0-9]+$/g.test(pass);
  const hasAtleastTwoDigits = (pass) => [...pass.matchAll(/\d/g)].length >= 2;

  let passIsValid = true;
  if (!isValidLength(password)) {
    console.log("Password must be between 6 and 10 characters");
    passIsValid = false;
  }

  if (!hasOnlyLetterssAndDigits(password)) {
    console.log("Password must consist only of letters and digits");
    passIsValid = false;
  }
  if (!hasAtleastTwoDigits(password)) {
    console.log("Password must have at least 2 digits");
    passIsValid = false;
  }

  if (passIsValid) {
    console.log("Password is valid");
  }
}

passwordValidator("MyPass123");
