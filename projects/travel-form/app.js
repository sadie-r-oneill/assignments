const form = document.travelForm
const diet = []

form.addEventListener("submit",function(e){
    e.preventDefault()

const firstName = form.firstName.value
const lastName = form.lastName.value
const age = form.age.value
const gender = form.gender.value
const places = form.places.value
const diet = form.diet.value

window.alert("\nFirst Name:" + firstName + "\nLast Name:" + lastName + "\nAge:" + age + "\nGender:" + gender + "\nLocation:" + places + "\nDietary Restrictions" + diet)
  
})
    