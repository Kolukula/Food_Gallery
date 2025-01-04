let submitBtn = document.getElementById("btn")
let name = document.getElementById("name")
let email = document.getElementById("email")
let pswd = document.getElementById("pswd")
// let nameError = document.getElementById("nameError")
// let nameError = document.getElementById("emailError")
// let nameError = document.getElementById("pswdError")

submitBtn.addEventListener("click", (e) => {
    let regName=/^[a-zA-z]{3,}$/
    let regEmail=/^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,}$/
    let regPswd=/^[a-zA-Z!@#$%^&*]{8,15}$/

    e.preventDefault()
    const nameValue = name.value
    const emailValue = email.value
    const pswdValue = pswd.value
    localStorage.setItem("name", nameValue)
    localStorage.setItem("email", emailValue)
    localStorage.setItem("pswd", pswdValue)
    alert("Signup Success")
  
    window.location.href = "../Login/login.html"
   
})