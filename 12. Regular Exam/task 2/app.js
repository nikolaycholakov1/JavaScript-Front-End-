window.addEventListener("load", solve);

function solve() {
  let totalPoints = 0;
  let tasks = 0;
  const allInputs = {
    title: document.getElementById("title"),
    description: document.getElementById("description"),
    label: document.getElementById("label"),
    estimatedPoints: document.getElementById("points"),
    assignee: document.getElementById("assignee"),
  };

  const currentTask = {
    title: null,
    description: null,
    label: null,
    estimatedPoints: null,
    assignee: null,
  };

  const otherDOMSelectors = {
    createTaskBtn: document.getElementById("create-task-btn"),
    deleteTaskBtn: document.getElementById("delete-task-btn"),
    tasksContainer: document.getElementById("tasks-section"),
    form: document.querySelector("form"),
    hidden: document.getElementById("task-id"),
    totalPoints: document.getElementById("total-sprint-points"),
  };

  otherDOMSelectors.createTaskBtn.addEventListener("click", createTaskhandler);

  function createTaskhandler(event) {
    event.preventDefault();
    tasks += 1;

    const allFieldsAreValid = Object.values(allInputs).every(
      (input) => input.value !== ""
    );

    if (!allFieldsAreValid) {
      return;
    }

    const { title, description, label, estimatedPoints, assignee } = allInputs;

    const article = htmlTagFactory("article", null, null, ["task-card"]);
    article.setAttribute("id", `task-${tasks}`);
    const labelStatus = htmlTagFactory("div", article, `${label.value}`, [
      "task-card-label",
      "feature",
    ]);
    htmlTagFactory("h3", article, `${title.value}`, ["task-card-title"]);
    htmlTagFactory("p", article, `${description.value}`, [
      "task-card-description",
    ]);
    htmlTagFactory(
      "div",
      article,
      `Estimated at ${estimatedPoints.value} pts`,
      ["task-card-points"]
    );
    htmlTagFactory("div", article, `Assigned to: ${assignee.value}`, [
      "task-card-assignee",
    ]);
    const buttonContainer = htmlTagFactory("div", article, "", [
      "task-card-actions",
    ]);

    if (labelStatus.textContent === "Feature") {
      labelStatus.classList.add("feature");
      labelStatus.innerHTML = "Feature &#8865";
    } else if (labelStatus.textContent === "Low Priority Bug") {
      labelStatus.classList.add("low-priority");
      labelStatus.innerHTML = "Low Priority Bug &#9737";
    } else if (labelStatus.textContent === "High Priority Bug") {
      labelStatus.classList.add("high-priority");
      labelStatus.innerHTML = "high Priority Bug &#9888";
    }

    const deleteBtn = htmlTagFactory("button", buttonContainer, "Delete");
    deleteBtn.addEventListener("click", deleteTaskHandler);

    for (const key in allInputs) {
      currentTask[key] = allInputs[key].value;
    }

    totalPoints = Number(estimatedPoints.value);
    otherDOMSelectors.totalPoints.textContent = `Total Points ${totalPoints}pts`;

    otherDOMSelectors.tasksContainer.appendChild(article);
    otherDOMSelectors.form.reset();
  }
  otherDOMSelectors.deleteTaskBtn.addEventListener("click", onDelete);

  function onDelete() {
    const taskRef = otherDOMSelectors.tasksContainer;
    const article = taskRef.querySelector("article");
    article.remove();

    otherDOMSelectors.deleteTaskBtn.disabled = true;
    otherDOMSelectors.createTaskBtn.disabled = false;
    otherDOMSelectors.form.reset();
    for (const key in allInputs) {
      allInputs[key].disabled = false;
    }
    totalPoints -= totalPoints;
    otherDOMSelectors.totalPoints.textContent = `Total Points ${totalPoints}pts`;
  }

  function deleteTaskHandler() {
    for (const key in currentTask) {
      allInputs[key].value = currentTask[key];
    }

    otherDOMSelectors.deleteTaskBtn.disabled = false;
    otherDOMSelectors.createTaskBtn.disabled = true;

    for (const key in allInputs) {
      allInputs[key].disabled = true;
    }
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
