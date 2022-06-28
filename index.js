let todos = []

const inputEl = document.getElementById("input-el")

const addTask = document.getElementById("addTask-btn")

const listOfTodo = document.getElementById("liste-of-todos")

const completeBtn = document.getElementById("complete-btn")

const todoEl = document.getElementById("todo-el")

const renderTodo = (todo) => {
    let todoItems = ''
    for(let i = 0; i < todo.length; i++) {
        //todos[i] = todos.push(todo)
        todoItems += `
            <li class="todo-el" id="todo-el">
                ${todo[i]}
                <button id='complete-btn'>Complete Task</button>
            </li>
            `
        //console.log(todos.push(todos[i]))
    }
    listOfTodo.innerHTML = todoItems
}

addTask.addEventListener('click', function() {
    todos.push(inputEl.value)
    inputEl.value = ""
    renderTodo(todos)
})


completeBtn.addEventListener('click', function() {
    console.log("complete")
    //todoEl.style.textDecoration = overline
})