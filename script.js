// querySelectors
let textInput = document.querySelector("#input-text")
let textButton = document.querySelector("#input-text-button");
let toDoList = document.querySelector("#to-do-list");
let taskList = document.querySelectorAll(".list-item")

let taskCount = 0;
let taskCountText = "task" + taskCount;

deleteTask();
completeTask();

//textButton onclick function, records value and creates new list item
textButton.onclick = function (event) {
    event.preventDefault();
    if (textInput.value !== '') {
        //adding li
        let newTask = document.createElement("li");
        newTask.className = "list-item list-group-item container";

        //adding checkbox
        let newCheckbox = document.createElement("input");
        newCheckbox.className= "form-check-input me-1 checkbox-class";
        newCheckbox.type = "checkbox";
        newCheckbox.value = "";
        newCheckbox.setAttribute("id", taskCountText);
        newTask.appendChild(newCheckbox)

        //adding label
        let newLabel = document.createElement("label");
        newLabel.className = "form-check-label";
        newLabel.htmlFor = taskCountText;
        newLabel.innerHTML = textInput.value;
        newTask.appendChild(newLabel);

        //adding trashcan
        let newTrashIcon = document.createElement("input");
        newTrashIcon.type = "image";
        newTrashIcon.className= "trash-icon float-end";
        newTrashIcon.src = "imgs/trashBin.png";
        newTask.appendChild(newTrashIcon)

        toDoList.appendChild(newTask);
    } else {
        alert("Please enter a valid task");
    }
    textInput.value = "";
    taskCount++;
    taskCountText = "" + taskCount;
    deleteTask();
    completeTask();
}

//Add onclick functionality to each list item
function deleteTask() {
    iconList = document.querySelectorAll(".trash-icon")
    iconList.forEach(icon => {
        icon.onclick = function () {
            console.log("deleted");
            icon.parentNode.remove();
        }
    });
}

function completeTask() {
    checkList = document.querySelectorAll(".checkbox-class");
    completedList = document.querySelector("#completed-list")

    checkList.forEach(box => {
        box.onchange = function () {
            console.log("deleted");
            if(box.checked){
                let temp = box.parentNode;
                box.parentNode.remove();
                completedList.appendChild(temp);
            }else{
                let temp = box.parentNode;
                box.parentNode.remove();
                toDoList.appendChild(temp);
            }
        }
    });
}