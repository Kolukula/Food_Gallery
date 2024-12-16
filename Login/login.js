
const loginBtn = document.getElementById("btn1")

loginBtn.addEventListener("click", () => {

    let nameStorage = localStorage.getItem("name")
    console.log(nameStorage)
    let pswdStorage = localStorage.getItem("pswd")
    console.log(pswdStorage)
    let inputUserName = document.getElementById("userName").value
    let inputUserPswd = document.getElementById("userPswd").value
    if(nameStorage == inputUserName && pswdStorage == inputUserPswd){
        alert("Ayyo sir meera randi...!!!!!!!!!!!!!!")
            window.open("../Home/home.html")
    }
    else {
        alert("Password tappu raa...!!!!!")
    }
})