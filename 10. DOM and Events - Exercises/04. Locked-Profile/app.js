function lockedProfile() {
  const buttons = Array.from(document.getElementsByTagName("button"));
  buttons.forEach((button) => {
    button.addEventListener("click", toggleInformation);
  });

  function toggleInformation(e) {
    const btn = e.currentTarget;
    const currentProfile = btn.parentElement;
    const children = Array.from(currentProfile.children);
    const additionalInformationDiv = children[9];
    const unlockedRadioInput = children[4];

    if (unlockedRadioInput.checked) {
      if (btn.textContent === "Show more") {
        additionalInformationDiv.style.display = "block";
        btn.textContent = "Hide it";
      } else {
        additionalInformationDiv.style.display = "none";
        btn.textContent = "Show more";
      }
    }
  }
}
