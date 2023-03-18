function parseEmployees(input) {
  //   let employees = {};
  //   for (const employee of input) {
  //     employees[employee] = employee.length;
  //   }

  let employees = input.reduce((data, employee) => {
    data[employee] = employee.length;
    return data;
  }, {});

  for (const key in employees) {
    console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
  }
}

parseEmployees([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
