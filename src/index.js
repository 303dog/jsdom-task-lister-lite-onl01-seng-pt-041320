document.addEventListener("DOMContentLoaded", function(){



  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(){
    event.preventDefault()
    const input = document.getElementById("new-task-description")
    const value = input.value
    const li = document.createElement("li")
    li.innerText = value
    const ul = document.getElementById("tasks")
    ul.append(li)
    input.value = ""
  })
  

});