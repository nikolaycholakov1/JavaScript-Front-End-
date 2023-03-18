function deleteByEmail() {
  const result = document.getElementById("result");
  const input = document.querySelector('input[name="email"]');
  const evenTds = Array.from(document.querySelectorAll("td:nth-child(even)"));

  let emailValue = input.value;
  let foundElement = evenTds.find((td) => td.textContent === emailValue);
  if (foundElement) {
    // console.log(foundElement);
    foundElement.parentNode.remove();
    input.value = "";
    result.textContent = "Deleted.";
  } else {
    result.textContent = "Not found.";
  }
}
