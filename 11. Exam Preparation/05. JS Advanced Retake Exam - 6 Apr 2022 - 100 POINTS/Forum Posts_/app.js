window.addEventListener("load", solve);

function solve() {
  const inputDOMSelectors = {
    title: document.getElementById("post-title"),
    category: document.getElementById("post-category"),
    content: document.getElementById("post-content"),
  };

  const otherDOMSelectors = {
    publishBtn: document.getElementById("publish-btn"),
    reviewContainer: document.getElementById("review-list"),
    publishedContainer: document.getElementById("published-list"),
    clearBtn: document.getElementById("clear-btn"),
  };

  tempPostData = {};

  otherDOMSelectors.publishBtn.addEventListener("click", onPublish);
  function onPublish(event) {
    event.preventDefault();
    let allFieldsAreValid = Object.values(inputDOMSelectors).every(
      (input) => input.value !== ""
    );

    if (!allFieldsAreValid) {
      console.log("asd");
      return;
    }

    const { title, category, content } = inputDOMSelectors;

    tempPostData = {
      title: title.value,
      category: category.value,
      content: content.value,
    };

    const liItem = htmlTagFactory("li", otherDOMSelectors.reviewContainer, "", [
      "rpost",
    ]);
    const article = htmlTagFactory("article", liItem);
    htmlTagFactory("h4", article, `${title.value}`);
    htmlTagFactory("p", article, `Category: ${category.value}`);
    htmlTagFactory("p", article, `Content: ${content.value}`);

    const editBtn = htmlTagFactory("button", liItem, "Edit", [
      "action-btn",
      "edit",
    ]);
    const approveBtn = htmlTagFactory("button", liItem, "Approve", [
      "action-btn",
      "approve",
    ]);

    editBtn.addEventListener("click", onEdit);
    approveBtn.addEventListener("click", onApprove);
    clearAllValues();
  }

  function onEdit() {
    this.parentNode.remove();
    for (const key in tempPostData) {
      inputDOMSelectors[key].value = tempPostData[key];
    }
  }
  function onApprove() {
    const postRef = this.parentNode;
    const editBtn = postRef.querySelector(".edit");
    const approveBtn = postRef.querySelector(".approve");
    otherDOMSelectors.publishedContainer.appendChild(postRef);
    editBtn.remove();
    approveBtn.remove();
  }

  otherDOMSelectors.clearBtn.addEventListener("click", onClear);
  function onClear() {
    otherDOMSelectors.publishedContainer.innerHTML = "";
  }

  function clearAllValues() {
    Object.values(inputDOMSelectors).forEach((input) => {
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
