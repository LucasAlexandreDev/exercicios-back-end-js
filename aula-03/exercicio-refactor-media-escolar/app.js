/*************************************************************************** 

* Objetivo: Criar uma aplicação que realiza calculos de média ponterada utilizando funções para modularizar o código
* Dev: Lucas Alexandre da Silva
* Data: 11/02/26
* Versão: 1.0

****************************************************************************/

// Importe da biblioteca de entrada de dados
const readline = require('readline')

// criando objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

// import da biblioteca de calculos escolares
const calculos = require('../modulo/calculos')

// Entrada de dados do nome do Aluno(a) 
entradaDeDados.question('Digite o nome do aluno: ', function (nome) {

    let nomeAluno = nome

    // Entrada de dados da nota1
    entradaDeDados.question('Digite a nota1: ', function (valor1) {

        let nota1 = valor1

        // Entrada de dados da nota2
        entradaDeDados.question('Digite a nota2: ', function (valor2) {

            let nota2 = valor2

            // Entrada de dados da nota3
            entradaDeDados.question('digite a nota3: ', function (valor3) {

                let nota3 = valor3

                // Entrada de dados da nota4
                entradaDeDados.question('Digite a nota4: ', function (valor4) {

                    let nota4 = valor4

                    // chamo a função calcularMediaPonterada e passo os argumentos para ela
                    let media = calculos.calcularMediaPonterada(nota1, nota2, nota3, nota4)

                    if(media){
                        console.log(`----------------------------------\nALUNO: ${nomeAluno} \nMÉDIA FINAL: ${media})}----------------------------------`)
                    }else{
                        console.log('ERRO: Não foi possivel processar o calculo de média. Verifique os campos novamente')
                        entradaDeDados.close()
                    }
                })
            })
        })
    })
})