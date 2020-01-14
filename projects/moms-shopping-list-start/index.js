
  addTodo.addEventListener('submit', (e) =>{
      e.preventDefault()
      console.log('hit')
      const li = document.createElement('li')
      const div = document.createElement('div')
      const buttE = document.createElement('button')
      const buttX = document.createElement('button')
      div.textContent = addTodo.title.value
      div.className = 'title'
      buttE.type = 'submit'
      buttE.textContent = 'edit'
      buttX.type = "click"
      buttX.textContent ='x'
      
      buttX.addEventListener('click', (e) =>{
          e.preventDefault()
         list.removeChild(li)
          li.removeChild(div)
          li.removeChild(buttE)
          li.removeChild(buttX)
    
      })
      list.appendChild(li)
      li.appendChild(div)
      li.appendChild(buttE)
      li.appendChild(buttX)
  })