let saldoconta = document.getElementById("saldoconta")
let quantosacar = document.getElementById("quantosacar")

let saldo = 1000;
saldoconta.innerHTML+= saldo

let qtsacar = document.getElementById("saque")
let snum = document.getElementById("numtxt")
let novadiv = document.createElement("div") // cria a div apenas uma vez

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
                } else {
                    novadiv.innerHTML = `Você sacou ${snum.value}` // atualiza o valor da div
                    quantosacar.appendChild(novadiv)

                    let novosaldosaque = saldo - snum.value
                    saldo = novosaldosaque
                    saldoconta.innerHTML = `Saldo da conta : ${novosaldosaque}`
                }
            }
            saque.appendChild(saqueagr)
        }
    }
}
//aparentemente saldo esta completo