const button = document.getElementsByTagName("button")[0];
const result = document.getElementById("result");

button.addEventListener("click", handleClick);

function handleClick() {
  if (result.style.display === "none") {
    result.style.display = "block";
  } else {
    result.style.display = "none";
  }
}
