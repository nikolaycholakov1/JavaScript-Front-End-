function loadingBar(percent) {
  let iterations = percent / 10;
  let bar = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."];
  let output = "";

  if (percent > 0) {
    for (let step = 0; step < iterations; step++) {
      bar[step] = "%";
    }
  }

  output = bar.join("");
  if (percent === 100) {
    console.log("100% Complete!");
    console.log(`[${output}]`);
  } else {
    console.log(`${percent}% [${output}]`);
    console.log("Still loading...");
  }
}

loadingBar(50);
