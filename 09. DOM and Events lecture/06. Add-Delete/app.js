function addItem() {
  const ulContainer = document.getElementById("items");
  const input = document.getElementById("newItemText");
  const newLi = document.createElement("li");
  const newAnchor = document.createElement("a");

  newLi.textContent = input.value;
  ulContainer.appendChild(newLi);
  newAnchor.textContent = "[Delete]";
  // newAnchor.setAttribute("href", "#");
  newAnchor.href = "#";
  newAnchor.addEventListener("click", deleteHandler);
  newLi.appendChild(newAnchor);
  input.value = "";

  function deleteHandler(e) {
    const anchor = e.currentTarget;
    anchor.parentElement.remove();
  }
}
