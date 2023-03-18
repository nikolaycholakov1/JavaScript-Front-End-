function colorize() {
  const tableRows = Array.from(document.querySelectorAll("tr"));
  let step = 1;
  tableRows.forEach((tr) => {
    step += 1;
    if (step % 2 !== 0) {
      tr.style.background = "teal";
    }
  });
}
