const inputs = document.getElementsByTagName('input')
let task = inputs[0]
const div = document.querySelector('div')
let tasks = []
inputs[1].addEventListener("click", (event) => {
    event.preventDefault();
    if (task.value.trim().length > 0) {
        tasks.push(task.value)
        task.value = ""
    }

    console.log(tasks)
    let p = document.createElement('p')

    tasks.forEach((item) => {
        p.innerHTML = `${item} <span class="delete"> x </span>`
    })

    div.appendChild(p)
})

div.addEventListener("click", (event) => {
    console.log(event.target.parentElement);
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove()


    }
})


// seral936@gmail.com