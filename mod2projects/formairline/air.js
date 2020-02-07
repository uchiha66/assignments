const form = document.flight

form.addEventListener("submit", (event) => {
    event.preventDefault()
   
    const firstN = form.first.value
    const lastn = form.last.value
    const agge = form.age.value
    const Genn = form.gender.value
    const city = form.cities.value
    const foo = form.foods.value
    form.first.value = ""
    form.last.value = ""
    form.age.value = ""
    
    
    // const h1 = document.createElement('h1')
    
    // h1.textContent = firstN + " " + lastn + " " +agge
    // h1.textContent = `${firstN} ${lastn} ${agge}`
    window.alert(`First Name: ${firstN}\n Last Name: ${lastn}\n Age: ${agge}\n Gender: ${Genn}\n City: ${city}
 Meal: ${foo}`)

    
    document.getElementsByTagName("body")[0].append(h1)
})

