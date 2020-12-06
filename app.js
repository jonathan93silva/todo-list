const formSearch = document.querySelector('.form-search')
const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')

const addNewTodo = descriptionToDo => {
    const inputIsNotEmpty = descriptionToDo.length

    if(inputIsNotEmpty){
        insertLiInToDom(descriptionToDo)
        formAddTodo.reset()
    }
}

const insertLiInToDom = descriptionToDo => {
    todosContainer.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center" data-todo='${descriptionToDo}'>
            <span>${descriptionToDo}</span>
            <i class="far fa-trash-alt" data-trash='${descriptionToDo}'></i>
        </li>
    `
}

const search = event => {
    const toDos = todosContainer.children
    const valueSearch = event.target.value.trim().toLowerCase()

    showHideToDos(toDos, valueSearch)
}

const showHideToDos = (toDos, valueSearch) =>{
    const arrayOfToDos = Array.from(toDos)

    arrayOfToDos.forEach(todo => {
        const valueExistInTodo = todo.textContent.toLowerCase().includes(valueSearch)
        if(valueExistInTodo){
            todo.classList.remove('d-none')
            todo.classList.add('d-flex')
        }else{
            todo.classList.add('d-none')
            todo.classList.remove('d-flex')
        }
    })
}

const removeTodo = clickedElement => {
    const trashDataValue = clickedElement.dataset.trash
    const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)

    if(trashDataValue)
        todo.remove()
}

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const descriptionToDo = event.target.add.value
    addNewTodo(descriptionToDo)
})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    removeTodo(clickedElement)
})

formSearch.addEventListener('input', search)
