// querySelectors
let textInput = document.querySelector("#input-text");
let dateInput = document.querySelector("#input-date");
let menuInput = document.querySelector("#input-menu");
let textButton = document.querySelector("#input-text-button");
let toDoList = document.querySelector("#to-do-list");
let taskList = document.querySelectorAll(".list-item");

let taskCount = 0;
let taskCountText = "task" + taskCount;

deleteTask();
completeTask();

//textButton onclick function, records value and creates new list item
textButton.onclick = function (event) {
  event.preventDefault();
  if (textInput.value) {
    //adding li
    let newTask = document.createElement("li");
    newTask.className = "list-item list-group-item container";

    //adding checkbox
    let newCheckbox = document.createElement("input");
    newCheckbox.className = "form-check-input me-1 checkbox-class";
    newCheckbox.type = "checkbox";
    newCheckbox.value = "";
    newCheckbox.setAttribute("id", taskCountText);
    newTask.appendChild(newCheckbox);

    //adding color circle, optional

    let newCircle = document.createElement("span");
    newCircle.className = "dot";
    if (menuInput.value == "high") {
      newCircle.style.backgroundColor = "red";
    } else if (menuInput.value == "med") {
      newCircle.style.backgroundColor = "blue";
    } else if (menuInput.value == "low"){
      newCircle.style.backgroundColor = "green";
    }

    newTask.appendChild(newCircle);

    //adding label
    let newLabel = document.createElement("label");
    newLabel.className = "form-check-label fs-6";
    newLabel.htmlFor = taskCountText;
    newLabel.innerHTML = textInput.value;
    newTask.appendChild(newLabel);

    //adding date, optional
    if (dateInput.value) {
      console.log(dateInput.value);
      let dateText = document.createElement("span");
      dateText.className = "date-text fs-6";
      dateText.innerHTML = " | Due: " + dateInput.value;
      newTask.appendChild(dateText);
    }

    //adding trashcan
    let newTrashIcon = document.createElement("input");
    newTrashIcon.type = "image";
    newTrashIcon.className = "trash-icon float-end";
    newTrashIcon.src = "imgs/trashBin.png";
    newTask.appendChild(newTrashIcon);

    toDoList.appendChild(newTask);
  } else {
    alert("Please enter a valid task");
  }
  textInput.value = "";
  dateInput.value = "";
  menuInput.value = "";
  taskCount++;
  taskCountText = "" + taskCount;
  deleteTask();
  completeTask();
};

//Add onclick functionality to each list item
function deleteTask() {
  iconList = document.querySelectorAll(".trash-icon");
  iconList.forEach((icon) => {
    icon.onclick = function () {
      console.log("deleted");
      icon.parentNode.remove();
    };
  });
}

//Add onclick functionality to each trash icon
function completeTask() {
  checkList = document.querySelectorAll(".checkbox-class");
  completedList = document.querySelector("#completed-list");

  checkList.forEach((box) => {
    box.onchange = function () {
      //moves task to correct section
      console.log("deleted");
      if (box.checked) {
        let temp = box.parentNode;
        box.parentNode.remove();
        completedList.appendChild(temp);
      } else {
        let temp = box.parentNode;
        box.parentNode.remove();
        toDoList.appendChild(temp);
      }
    };
  });
}
