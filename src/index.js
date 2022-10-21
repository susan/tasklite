document.addEventListener("DOMContentLoaded", () => {
  // your code here
 
  const newTask = document.querySelector('#new-task-description');
  const newPriority = document.querySelector('#new-task-priority');
  const formLabel = document.querySelector('form')
  const h2Label = document.querySelector('#unsorted')
  const h2SortedLabel = document.querySelector('#sorted')
  const sortButton= document.querySelector('#sort')
  
  const storeTasksObj = {}
  //console.log(h2Label)

  formLabel.addEventListener("submit", (e) => {
    e.preventDefault()
    storeTasksObj[newPriority.value] = newTask.value
    console.log(storeTasksObj)
      let olNew = document.createElement('ol')
      olNew.dataset.priority = newPriority.value
      olNew.innerText = `${newPriority.value}. ${newTask.value}`
      
      olNew.className = "red";
      let buttonNew = document.createElement('button')
      buttonNew.innerText = 'Delete'
      buttonNew.dataset.value= newPriority.value

     let menuLabel = document.createElement('form')
     menuLabel.innerHTML='<select id=color><option value="red">red</option><option value="green">green</option>'
                           
      if (olNew.innerText) {
        olNew.append(buttonNew, menuLabel)
       h2Label.append(olNew)
    //ulNew.append(buttonNew)                     
    //h2Label.append(ulNew)
       newTask.value = ""  
      }
  });

  h2Label.addEventListener("click", (e) => {
    e.preventDefault()
      if (e.target.innerText === 'Delete'){
        let pair = e.target.dataset.value
       delete storeTasksObj[pair]
        e.target.parentNode.innerText=""
      }
      
    })

sortButton.addEventListener('click', () => {
  h2SortedLabel.innerText=""
  let sortedTasksArray = Object.entries(storeTasksObj).sort((a,b) => b[1]-a[1])
  console.log(sortedTasksArray) 
  sortedTasksArray.forEach( (task) => {
    let h4New = document.createElement('h4')
    h4New.innerText = task[1]
    h2SortedLabel.append(h4New)
    })
  })    

  

  h2Label.addEventListener("change", (e) => {
    e.preventDefault()
    let newColor = e.target.value
    let ulLabel = e.target.parentNode.parentNode  
    ulLabel.style.color = newColor
   })   

});
