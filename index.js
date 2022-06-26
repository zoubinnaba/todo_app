let todos = []

const inputEl = document.getElementById("input-el");

const addTask = document.getElementById("addTask-btn");

const listOfTodo = document.getElementById("liste-of-todos");

const createTodo = () => {
    let todo = inputEl.value
    todos.push(todo)
    inputEl.value = ""
    console.log(todo)
    return listOfTodo.innerHTML += `<li class="todo-el">${todo}</li>`
}

addTask.addEventListener('click', function() {
    createTodo()
})
