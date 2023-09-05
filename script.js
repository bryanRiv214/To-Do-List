// querySelectors
let textInput = document.querySelector("#input-text")
let textButton = document.querySelector("#input-text-button");
let toDoList = document.querySelector("#to-do-list");
let taskList = document.querySelectorAll(".list-item")

//can remove, only for placeholder task
giveTasksOnClick();

//textButton onclick function, records value and creates new list item
textButton.onclick = function (event) {
    event.preventDefault();
    if (textInput.value !== '') {
        let newTask = document.createElement("li");
        newTask.classList.add("list-item");
        newTask.innerText = textInput.value;
        toDoList.appendChild(newTask);
    } else {
        alert("Please enter a valid task");
    }
    textInput.value = "";
    giveTasksOnClick();
}

//Add onclick functionality to each list item
function giveTasksOnClick() {
    taskList = document.querySelectorAll(".list-item")
    taskList.forEach(task => {
        task.onclick = function () {
            task.remove();
        }
    });
}
