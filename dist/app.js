var addTastBtn = document.getElementById("add-task-btn");
var inputElement = document.getElementById("new-task");
var todoList = document.getElementById("todo-list");
//déclaration d'un tableau
var tasks = [];
//fonction pour ajouter un nouveau tache
function addTask() {
    var task = inputElement.value.trim();
    if (task !== "") {
        tasks.push(task);
        inputElement.value = "";
        renderTasks();
    }
}
//fonction pour afficher les taches
function renderTasks() {
    todoList.innerHTML = ""; //vider la liste
    tasks.forEach(function (task, index) {
        var li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        li.textContent = task;
        //créer un bouton delete
        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "btn-danger", "btn-sm");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () { return deleteTask(index); };
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}
// function pour supprimer un task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
addTastBtn.addEventListener('click', addTask);
inputElement.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
