document.addEventListener("DOMContentLoaded", () => {
  
  //Labels
  const formLabel = document.querySelector('form')
  const taskListLabel = document.querySelector('#tasks')
  

  //Event Listeners
  formLabel.addEventListener("submit", addTask(taskListLabel))

});

  //Functions
  const addTask = ulLabel => {
    function submitHandler(e) {  
      e.preventDefault()
     // debugger
      let liTag = document.createElement("li")
      liTag.innerText= e.target.taskName.value
      ulLabel.append(liTag)
      e.target.reset() 
    } 
    return submitHandler;  
  }
      

