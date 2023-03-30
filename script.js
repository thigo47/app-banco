let saldoconta = document.getElementById("saldoconta")
let quantosacar = document.getElementById("quantosacar")
let quantodepositar = document.getElementById("quantodepositar")
let pdohistorico = document.getElementById("historico")

let his = []

let saldo = 1000;
let saldoeuro = saldo.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
saldoconta.innerHTML+= saldoeuro

let qtsacar = document.getElementById("saque")
let snum = document.getElementById("numtxt")
let qtdeposito = document.getElementById("qtdeposito")
///////////////////////////////////////////////////////
let novadivdep = document.createElement("div")
let novadiv = document.createElement("div") // cria a div apenas uma vez
let novadivdeposito = document.createElement("div")

function sacar(params) {
    if (saldo == 0) {
        window.alert("Seu saldo não é o suficiente")
    } else {
        if (!qtsacar) {
            let saque = document.createElement("p")
            saque.id = "saque"
            saque.innerHTML = "Quanto voce deseja sacar "
            quantosacar.appendChild(saque)

            qtsacar = document.getElementById("saque")

            let num = document.createElement("input")
            num.type = "number"
            num.classList.add ("numtxt")
            num.id ="numtxt"
            
            qtsacar.appendChild(num)

            snum = document.getElementById("numtxt")

            let saqueagr = document.createElement("button")
            saqueagr.classList.add ("botoesdinamicos")
            saqueagr.innerHTML = "Saque agora"

            saqueagr.onclick = ()=>{
                if (snum.value.length == 0) {
                    window.alert("Digite o valor desejado")
                } else if(snum.value > saldo) {
                    window.alert("Valor invalido , Valor maior que saldo em conta")
                } else if(snum.value == 0) {
                    window.alert("valor invalido")
                }else{
                    novadiv.innerHTML += `Você sacou ${snum.value} €`
                    novadiv.id = "vocesacou"

                    quantosacar.appendChild(novadiv)

                    
                    saldo -= snum.value
                    saldoconta.innerHTML = `${saldo.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}`
                    his.push(`Valor Sacado ${snum.value} .<br>`)
                }
            }
            saque.appendChild(saqueagr)
        }
    }
}
//aparentemente saque esta completo

//fazere um historico de saque com for

function depositar(params) {
    

        if (!qtdeposito) {
            qtdeposito = document.createElement("p")
            qtdeposito.id = "qtdeposito"
        qtdeposito.innerHTML = `Quando voce deseja Depositar`

        quantodepositar.appendChild(qtdeposito)

        let numd = document.createElement("input")
        numd.type = "number"
        numd.id = "numdep"
        numd.classList.add ("numtxt")

        qtdeposito.appendChild(numd)

         let depositeagr = document.createElement("button")
         depositeagr.classList.add ("botoesdinamicos")
         depositeagr.id = "depositeagrid"
         depositeagr.innerHTML = "Depositar"

         let np = document.getElementById("numdep")

            {
            depositeagr.onclick = ()=>{
                if (np.value == 0) {
                    window.alert("Valor invalido")
                 }else if ( np.value.length == 0){
                    window.alert("Valor invalido , por favor insira um valor valido")
                 }else{saldo =  saldo + Number(np.value)
                    saldoconta.innerHTML = `${saldo.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}`
    
                   novadivdeposito.innerHTML = `Você depositou ${np.value} €`
    
                    his.push(`Valor depositado ${np.value} <br>`)
    
                   qtdeposito.appendChild(novadivdeposito)
                 }
                    }
                    qtdeposito.appendChild(depositeagr) 
                          
         }         
        }
}

//     Por enquanto a principal parte esta pronta

//historico em menu

function teste(params) {

    if (his.length == 0 ) {
        window.alert("sem historico")
    }else{
        let testes = document.getElementById("testes")
    
        let testemenu = document.createElement("ul")
        testemenu.id = "lista"
    
        testes.appendChild(testemenu)
        
        let item = document.createElement("li")
        item.id  = "itemlista"
        item.innerHTML=his
    
        lista.appendChild(item)
        
    }
      
}
let botaoclicado = false
let trocaemoji = document.getElementById("esconder")
let minhaimg = document.getElementById("minhaimg") 
function esconder() {    
   
    if (botaoclicado) {
        saldoconta.innerHTML= `${saldoeuro}`
        botaoclicado = false
        minhaimg.src ="midia/Imagens/eye.opn.png"
    }else{
        minhaimg.src ="midia/Imagens/eyes.close.png"
        saldoconta.innerHTML = "******"
        botaoclicado = true
    }
}