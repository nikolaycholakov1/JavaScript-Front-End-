window.addEventListener("load", solve);

function solve() {
  const storyInfo = {
    firstName: null,
    LastName: null,
    age: null,
    storyTitle: null,
    genre: null,
    storyContent: null,
  };

  const allInputs = {
    firstName: document.getElementById("first-name"),
    LastName: document.getElementById("last-name"),
    age: document.getElementById("age"),
    storyTitle: document.getElementById("story-title"),
    genre: document.getElementById("genre"),
    storyContent: document.getElementById("story"),
  };

  const otherDOMSelectors = {
    publishBtn: document.getElementById("form-btn"),
    previewContainer: document.getElementById("preview-list"),
    main: document.getElementById("main"),
  };

  otherDOMSelectors.publishBtn.addEventListener("click", onPublish);

  function onPublish() {
    const allFieldsAreValid = Object.values(allInputs).every(
      (input) => input.value !== ""
    );

    if (!allFieldsAreValid) {
      return;
    }

    const { firstName, LastName, age, storyTitle, genre, storyContent } =
      allInputs;

    const liItem = htmlTagFactory("li", null, "", ["story-info"]);
    const article = htmlTagFactory("article", liItem);
    htmlTagFactory("h4", article, `Name: ${firstName.value} ${LastName.value}`);
    htmlTagFactory("p", article, `Age: ${age.value}`);
    htmlTagFactory("p", article, `Title: ${storyTitle.value}`);
    htmlTagFactory("p", article, `Genre: ${genre.value}`);
    htmlTagFactory("p", article, storyContent.value);

    const saveBtn = htmlTagFactory("button", liItem, "Save Story", [
      "save-btn",
    ]);
    const editBtn = htmlTagFactory("button", liItem, "Edit Story", [
      "edit-btn",
    ]);
    const deleteBtn = htmlTagFactory("button", liItem, "Delete Story", [
      "delete-btn",
    ]);

    saveBtn.addEventListener("click", onSave);
    editBtn.addEventListener("click", onEdit);
    deleteBtn.addEventListener("click", onDelete);

    for (const key in allInputs) {
      storyInfo[key] = allInputs[key].value;
    }

    otherDOMSelectors.previewContainer.appendChild(liItem);

    clearAllInputs();
    otherDOMSelectors.publishBtn.disabled = true;
  }

  function onSave() {
    otherDOMSelectors.main.innerHTML = "";
    htmlTagFactory("h1", otherDOMSelectors.main, "Your scary story is saved!");
  }

  function onEdit() {
    for (const key in allInputs) {
      allInputs[key].value = storyInfo[key];
    }
    otherDOMSelectors.publishBtn.disabled = false;
    otherDOMSelectors.previewContainer.innerHTML = "";
    htmlTagFactory("h3", otherDOMSelectors.previewContainer, "Preview");
  }

  function onDelete() {
    const itemToDelete = this.parentNode.parentNode;
    itemToDelete.remove();
    otherDOMSelectors.publishBtn.disabled = false;
  }

  function clearAllInputs() {
    Object.values(allInputs).forEach((input) => {
      input.value = "";
    });
  }

  function htmlTagFactory(
    tagType,
    tagParent,
    tagContent,
    tagClasses,
    tagId,
    tagAttributes,
    useInnerHtml
  ) {
    const htmlElement = document.createElement(tagType);

    if (useInnerHtml) {
      htmlElement.innerHTML = tagContent;
    } else {
      if (tagContent && tagType !== "input") {
        htmlElement.textContent = tagContent;
      }

      if (tagContent && tagType === "input") {
        htmlElement.value = tagContent;
      }

      if (tagClasses && tagClasses.length > 0) {
        htmlElement.classList.add(...tagClasses);
      }

      if (tagId) {
        htmlElement.tagId = tagId;
      }

      // { src: 'link' , href: 'http'}
      if (tagAttributes) {
        for (const key in tagAttributes) {
          htmlElement.setAttribute(key, tagAttributes[key]);
        }
      }

      if (tagParent) {
        tagParent.appendChild(htmlElement);
      }
    }

    return htmlElement;
  }
}
