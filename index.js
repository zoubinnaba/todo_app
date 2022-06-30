let todos = []

const inputEl = document.getElementById("input-el")

const addTask = document.getElementById("addTask-btn")

const listOfTodo = document.getElementById("liste-of-todos")

//const completeBtn = document.getElementById("complete-btn")

const todoEl = document.getElementsByClassName("todo-el")

const renderTodo = (todo) => {
    let todoItems = ''
    for(let i = 0; i < todo.length; i++) {
        //todos[i] = todos.push(todo)
        todoItems += `
            <li class="todo-el" id="todo-el-${i}">
                ${todo[i]}
                <button class="complete-btn" id="complete-btn-${i}" onClick="onCompleteTask()">
                    Complete Task
                </button>
            </li>
            `
        //console.log(todos.push(todos[i]))
    }
    listOfTodo.innerHTML = todoItems
}

console.log(todoEl)

addTask.addEventListener('click', function() {
    todos.push(inputEl.value)
    inputEl.value = ""
    renderTodo(todos)
})

/**
completeBtn.addEventListener('click', function() {
    console.log("complete")
    //
})
 */
const onCompleteTask = () => {
    //todoEl.style = "color:#090;border:1px solid #aaa;text-align:center;"
    for(i = 0; i < todoEl.length; i++) {
        todoEl[i].style = "text-decoration:line-through; color:red;"
    }
    console.log("Click")
}