    let i = {
    nome:document.getElementById("nome"),    
    endereço:document.getElementById("endereço"),
    tel:document.getElementById("tel"),
    foto:document.getElementById("foto"),
    email:document.getElementById("email"),
    senha:document.getElementById("senha"),
    res:document.getElementById("resp"),
    cadastro:document.getElementById("cadastro"),
    radsex:document.getElementsByName("sexo"),
}

let valores = []
let sexo = ""
i.cadastro.addEventListener("click", function(){
    if (i.nome.value.length == 0 || i.endereço.value.length == 0 || i.tel.value.length == 0 || i.email.value.length == 0 || i.senha.value.length == 0) {
        window.alert("erro")
    } else {
       if (i.radsex[0].checked) {
        window.alert("homem")
        sexo = "homem"
       } else if(i.radsex[1].checked) {
        window.alert("mulher")
        sexo ="mulher"
       }else if (i.radsex[2].checked){
        window.alert("outro")
        sexo = "Outro"
       }
       valores = [i.nome.value , i.endereço.value , i.tel.value , i.email.value , i.senha.value , sexo]

       i.res.innerHTML = valores

       localStorage.setItem(valores)
    }
})