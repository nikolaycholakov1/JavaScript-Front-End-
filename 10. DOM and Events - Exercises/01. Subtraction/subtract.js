function subtract() {
  const resultBox = document.getElementById("result");
  const firstNum = document.getElementById("firstNumber");
  const secondNum = document.getElementById("secondNumber");
  resultBox.textContent = Number(firstNum.value) - Number(secondNum.value);
}
