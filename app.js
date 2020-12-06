const formSearch = document.querySelector('.form-search')
const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', event => {

    event.preventDefault()

    const descriptionToDo = event.target.add.value.trim()
    if(descriptionToDo.length){
        todosContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${descriptionToDo}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
        `

        event.target.reset()
    }
})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target

    if(Array.from(clickedElement.classList).includes('delete')){
        clickedElement.parentElement.remove()
    }
})

formSearch.search.addEventListener('input', event => {
    const toDos = todosContainer.children
    const valueSearch = event.target.value.trim().toLowerCase()
    
    Array.from(toDos)
        .filter(todo => !todo.textContent.toLowerCase().includes(valueSearch))
        .forEach(todo => {
            todo.classList.add('d-none')
            todo.classList.remove('d-flex')
        })
    
    Array.from(toDos)
        .filter(todo => todo.textContent.toLowerCase().includes(valueSearch))
        .forEach(todo => {
            todo.classList.remove('d-none')
            todo.classList.add('d-flex')
        })

})