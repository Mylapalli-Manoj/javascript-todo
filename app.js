let taskInput = document.querySelector("#inp");
let addButton = document.querySelector("#addtask");
let taskList = document.querySelector("#taskslist");

taskInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

addButton.addEventListener("click", addTask);

taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
       
        event.target.parentElement.remove();
    }
    if (event.target.tagName === "SPAN") {
       
        event.target.classList.toggle("completed");
    }
});

function addTask() {
    if (taskInput.value.trim() === "") return;

    let newTask = document.createElement("li");

 
    let taskText = document.createElement("span");
    taskText.innerText = taskInput.value;
    newTask.appendChild(taskText);

  
    let del = document.createElement("button");
    del.innerText = "Delete";
    newTask.appendChild(del);

    taskList.appendChild(newTask);

    taskInput.value = "";
}