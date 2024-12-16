let submitBtn = document.getElementById("btn")
let name = document.getElementById("name")
let email = document.getElementById("email")
let pswd = document.getElementById("pswd")
submitBtn.addEventListener("click", (e) => {
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