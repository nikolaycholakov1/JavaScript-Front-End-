window.addEventListener("load", solve);

function solve() {
  const allUserInputs = {
    title: document.getElementById("task-title"),
    category: document.getElementById("task-category"),
    content: document.getElementById("task-content"),
  };

  const otherDOMSelectors = {
    publishBtn: document.getElementById("publish-btn"),
    taskForReviewContainer: document.getElementById("review-list"),
    taskToUpload: document.getElementById("published-list"),
    form: document.querySelector("form"),
  };

  const currentTask = {
    title: null,
    category: null,
    content: null,
  };

  otherDOMSelectors.publishBtn.addEventListener("click", publishTaskHandler);
  function publishTaskHandler(event) {
    event.preventDefault();
    const allFieldsAreValid = Object.values(allUserInputs).every(
      (input) => input.value !== ""
    );

    if (!allFieldsAreValid) {
      return;
    }

    const { title, category, content } = allUserInputs;

    const liItem = htmlTagFactory("li", null, "", ["rpost"]);
    const articleItem = htmlTagFactory("article", liItem, "");
    htmlTagFactory("h4", articleItem, `${title.value}`);
    htmlTagFactory("p", articleItem, `Category: ${category.value}`);
    htmlTagFactory("p", articleItem, `Content: ${content.value}`);

    const editBtn = htmlTagFactory("button", liItem, "Edit", [
      "action-btn",
      "edit",
    ]);
    const postBtn = htmlTagFactory("button", liItem, "Post", [
      "action-btn",
      "post",
    ]);

    otherDOMSelectors.taskForReviewContainer.appendChild(liItem);
    for (const key in allUserInputs) {
      currentTask[key] = allUserInputs[key].value;
    }
    otherDOMSelectors.form.reset();

    editBtn.addEventListener("click", editTaskHandler);
    postBtn.addEventListener("click", postTaskHandler);
  }

  function editTaskHandler() {
    for (const key in currentTask) {
      allUserInputs[key].value = currentTask[key];
    }
    this.parentNode.remove();
  }

  function postTaskHandler() {
    const taskRef = otherDOMSelectors.taskForReviewContainer;
    const liItem = taskRef.querySelector("li");
    const editBtn = liItem.querySelector(".edit");
    const postBtn = liItem.querySelector(".post");
    editBtn.remove();
    postBtn.remove();

    otherDOMSelectors.taskToUpload.appendChild(liItem);
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
