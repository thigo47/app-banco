let saldoconta = document.getElementById("saldoconta")
let quantosacar = document.getElementById("quantosacar")
let quantodepositar = document.getElementById("quantodepositar")

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
            num.id = "numtxt"
            
            qtsacar.appendChild(num)

            snum = document.getElementById("numtxt")

            let saqueagr = document.createElement("button")
            saqueagr.innerHTML = "Saque agora"

            saqueagr.onclick = ()=>{
                if (snum.value.length == 0) {
                    window.alert("Digite o valor desejado")
                } else if(snum.value > saldo) {
                    window.alert("Valor invalido , Valor maior que saldo em conta")
                } else if(snum.value == 0) {
                    window.alert("valor invalido")
                }else{
                    novadiv.innerHTML += `Você sacou ${snum.value} € <br>` // atualiza o valor da div
                    quantosacar.appendChild(novadiv)

                    
                    saldo -= snum.value
                    saldoconta.innerHTML = `Saldo da conta : ${saldo.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}`
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
        qtdeposito.innerHTML = `Quando voce deseja Depositar `

        quantodepositar.appendChild(qtdeposito)

        let numd = document.createElement("input")
        numd.type = "number"
        numd.id = "numdep"

        qtdeposito.appendChild(numd)

         let depositeagr = document.createElement("button")
         depositeagr.innerHTML = "Depositar"

         let np = document.getElementById("numdep")

         if (np == 0) {
            window.alert("Valor invalido")
         }else if ( np.length == 0){
            window.alert("Valor invalido , por favor insira um valor valido")
         }else{
            depositeagr.onclick = ()=>{
                saldo =  saldo + Number(np.value)
                saldoconta.innerHTML = `Saldo da conta : ${saldo.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}`

               novadivdeposito.innerHTML = `Você depositou ${np.value} €`

                his.push(`Valor depositado${np.value}`)

                window.alert(his)

               qtdeposito.appendChild(novadivdeposito)
             }
             qtdeposito.appendChild(depositeagr)           
         }         
        }
}

function historico() {
    
}