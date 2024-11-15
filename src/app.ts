const addTastBtn = document.getElementById("add-task-btn") as HTMLButtonElement;
const inputElement = document.getElementById("new-task") as HTMLInputElement;
const todoList = document.getElementById("todo-list") as HTMLUListElement;

//déclaration d'un tableau
let tasks : string[] = [];

//fonction pour ajouter un nouveau tache
function addTask(): void {
    const task: string = inputElement.value.trim();
    
    if (task !== ""){
        tasks.push(task);
        inputElement.value = "";
        renderTasks();
    }
}

//fonction pour afficher les taches
function renderTasks(): void{
    todoList.innerHTML = ""; //vider la liste
    tasks.forEach((task, index) =>{
        const li = document.createElement("li") as HTMLLIElement;
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
        li.textContent=task;

        //créer un bouton delete
        const deleteBtn = document.createElement("button") as HTMLButtonElement;
        deleteBtn.classList.add("btn", "btn-danger", "btn-sm");
        deleteBtn.textContent = "Delete"
        deleteBtn.onclick = () => deleteTask(index)
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    })

}
// function pour supprimer un task
function deleteTask(index: number): void{
    tasks.splice(index, 1);
    renderTasks()
}
addTastBtn.addEventListener('click', addTask)
inputElement.addEventListener("keypress", (event) => {
    if (event.key === "Enter" ){
        addTask()
    }
})