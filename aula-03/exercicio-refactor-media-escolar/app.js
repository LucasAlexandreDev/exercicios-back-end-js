/*************************************************************************** 

* Objetivo: Criar uma aplicação que realiza calculos de média ponterada utilizando funções para modularizar o código
* Dev: Lucas Alexandre da Silva
* Data: 11/02/26
* Versão: 1.0

****************************************************************************/

// Importe da biblioteca de entrada de dados
const readline = require('readline')

// import da biblioteca de calculos escolares
const calculos = require('../modulo/calculos')

// import da biblioteca de validações textuais
const validacao = require('../modulo/validacoesDados')

// criando objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

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

                    // chamo a função calcularMediaPonderada e passo as notas como argumentos
                    let media = calculos.calcularMediaPonderada(nota1, nota2, nota3, nota4)

                    // chamo a função calcularStatusAluno e passo a média como argumento
                    let status = calculos.calcularStatusAluno(media)

                    // chamo a função validarNome e passo o nome como argumento
                    let nome = validacao.validarNome(nomeAluno)

                    // validação para verificar se o cálculo da média e o nome são válidos
                    if(media && nome){
                        console.log(`\n************************* BOTETIM ************************\n\nAluno(a): ${nome}\nMédia Final: ${media}\nStatus De Aprovação: ${status}\n\n*************************** - ***************************`)
                        
                    }else{
                        console.log('\nERRO: Não foi possivel processar o calculo de média. Verifique os campos novamente')
                        entradaDeDados.close()
                    }
                })
            })
        })
    })
})