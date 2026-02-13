/*************************************************************************** 

* Objetivo: Criar um sistema para calcular as principais operações matemáticas: Soma, Subtração, Divisão e múltiplicação.
* Dev: Lucas Alexandre da Silva
* Data: 13/02/26
* Versão: 1.0

****************************************************************************/

// importe da biblioteca de entrada de dados
const readline = require('readline')

// import da biblioteca de calculos das operações
const calculo = require('./modulo/calculos')

// import da biblioteca de validações de dados
const validacao = require('./modulo/validacoesDados')

// cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// entrada de dados
entradaDeDados.question('Informe qual operação matemática deseja para realizar o cálculo:', function(operacaoMatematica){
    let operacao = operacaoMatematica

    entradaDeDados.question('Insira o primeiro número:', function (numero1){
        let n1 = numero1

        entradaDeDados.question('Insira o segundo número: ', function (numero2){
            let n2 = numero2

            // primeiro chamamos a validação de entrada > retorna pro app.js > chama o calculo.js > retorna pro app.js

            // let soma = calculo.operacaoSoma(n1, n2)
            //let subtracao = calculo.operacaoSubtracao(n1, n2)
            //let divisao = calculo.operacaoDivisao(n1, n2)
            
            //console.log(divisao)
        })
    })
})




