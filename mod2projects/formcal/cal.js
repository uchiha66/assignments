const form = document.add


form.addEventListener("submit", function(event){
    event.preventDefault()
    
    const firstad = form.added1.value
    const secondad = form.added2.value
    form.added1.value = ""
    form.added2.value = ""
   
    const h1 = document.createElement('h1')
    
    h1.textContent = +firstad + +secondad
    
    document.getElementsByTagName("body")[0].append(h1)
})

    const form2 = document.subt
    
    form2.addEventListener("submit", function(event){
        event.preventDefault()

    const subnum = form2.subtracted.value
    const subnum2 = form2.subtracted2.value
    form2.subtracted.value = ""
    form2.subtracted2.value = ""
   
    const h2 = document.createElement('h1')
    
    h2.textContent = +subnum - +subnum2
    
    document.getElementsByTagName("body")[0].append(h2)
    console.log(h2)
})
    const form3 = document.multiply


form3.addEventListener("submit", function(event){
    event.preventDefault()
    
    const mul1 = form3.multiplyed.value
    const mul2 = form3.multip2.value
    form3.multiplyed.value = ""
    form3.multip2.value = ""
    
    
    const h3 = document.createElement('h1')
    
    h3.textContent = +mul1 * +mul2
    
    document.getElementsByTagName("body")[0].append(h3)
})