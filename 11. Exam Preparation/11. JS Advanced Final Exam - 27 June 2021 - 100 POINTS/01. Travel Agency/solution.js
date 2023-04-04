window.addEventListener("load", solution);

function solution() {
  const submitBtn = document.getElementById("submitBTN");
  const editBtn = document.getElementById("editBTN");
  const continueBtn = document.getElementById("continueBTN");
  const block = document.getElementById("block");
  const preview = document.getElementById("infoPreview");

  const inputValues = Array.from(
    document.getElementById("form").querySelectorAll("input")
  );
  inputValues.pop();
  const labelValues = Array.from(
    document.getElementById("form").querySelectorAll("label")
  );

  submitBtn.addEventListener("click", () => {
    const fullName = inputValues[0];
    const email = inputValues[1];

    if (fullName.value && email.value !== "") {
      for (let i = 0; i < inputValues.length; i++) {
        const liElement = document.createElement("li");
        liElement.textContent = `${labelValues[i].textContent} ${inputValues[i].value}`;

        preview.appendChild(liElement);
      }

      for (const input of inputValues) {
        input.value = "";
      }

      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;
    }
  });

  editBtn.addEventListener("click", () => {
    const listItems = Array.from(preview.childNodes);

    for (let i = 0; i < inputValues.length; i++) {
      inputValues[i].value = listItems[i].textContent.split(": ")[1];
      listItems[i].remove();
    }

    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;
  });

  continueBtn.addEventListener("click", () => {
    block.innerHTML = "";

    let h3 = document.createElement("h3");
    h3.textContent = "Thank you for your reservation!";
    block.appendChild(h3);
  });
}
