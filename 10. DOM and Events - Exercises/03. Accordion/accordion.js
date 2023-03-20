function accordion() {
  const hiddenText = document.getElementById("extra");
  const button = document.getElementsByClassName("button")[0];

  if (hiddenText.style.display === "none") {
    hiddenText.style.display = "block";
    button.textContent = "Less";
  } else {
    hiddenText.style.display = "none";
    button.textContent = "More";
  }
}

// const button = document.getElementsByClassName("button")[0];
// const hiddenText = document.querySelector("#extra");
// button.addEventListener("click", showMore);

// function showMore() {
//   hiddenText.style.display = "block";
//   button.textContent = "Less";
// }

// if (button.textContent === "Less") {
//   button.addEventListener("click", showLess);

//   function showLess() {
//     hiddenText.style.display = "none";
//     button.textContent = "More";
//   }
// }
