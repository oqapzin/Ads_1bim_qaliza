function Password() {
    var passwordType = document.getElementById("password")
    if (passwordType["type"] == "password"){
        document.getElementById("password").type = "text"
        document.getElementById("eye").src = "./assets/style/images/login/eye-off.png";
    }else if (passwordType["type"] == "text"){
        document.getElementById("password").type = "password"
        document.getElementById("eye").src = "./assets/style/images/login/eye.png";
    }
};

function Login() {
    var email = document.querySelector("#email")
    var password = document.querySelector("#password")

    if (email["value"] == "email@gmail.com" && password["value"] == "1234567") {
        alert("Cadastro correto! Bem-vindo.")
        document.getElementById("formInfo").action = "qaconstrucao.html";
    } else {
        alert("Cadastro incorreto.")
    }
};