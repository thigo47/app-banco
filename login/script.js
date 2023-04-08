let res = document.getElementById("resp")
let email = document.getElementById("email")
let senha = document.getElementById("senha")
let login = document.getElementById("login")

 let valores = JSON.parse(localStorage.getItem("valores"))


 login.addEventListener("click", function(){

   


   if (email.value.length == 0 || senha.value.length == 0) {
        window.alert("Escreva email e senha primeiramente")
    } else {

        if (email.value.length < 10){
            window.alert("Email invalido")
    
        } else if(senha.value.length <= 5) {
            window.alert("Senha invalida")

        }else{

            if (valores[3] !== email.value) {
                window.alert("Email nao cadastrado")

            } else if(valores[4] !== senha.value) {
             window.alert("Senha incorreta")
            }else{
                window.alert("entrou")
                window.location.href = "../index.html";
            }
        }


      
    }

 })
