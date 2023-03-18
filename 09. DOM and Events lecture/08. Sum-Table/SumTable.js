function sumTable() {
  const firstTable = Array.from(document.getElementsByTagName("td"));
  const sumBtn = document.getElementsByTagName("button");
  const sumBox = document.getElementById("sum");
  console.log(sumBtn);
  let sum = 0;
  let step = 1;
  firstTable.forEach((td) => {
    step += 1;
    if (step % 2 !== 0) {
      sum += Number(td.textContent);
    }
  });

  sumBox.textContent = sum;
}
