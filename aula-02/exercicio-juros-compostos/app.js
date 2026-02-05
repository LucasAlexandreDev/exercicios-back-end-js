/*************************************************************************** 

* Objetivo: Desenvolver uma aplicação de cálculo de juros compostos de uma venda parcelada
* Empresa: Viva Moda
* Dev: Lucas Alexandre da Silva
* Data: 04/02/26 - quarta-feira
* Versão: 1.0

****************************************************************************/

// import da biblioteca 'readline' pra possuir a entrada de dados 
const readline = require('readline')

// objeto que armazena a entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// entrada de dados
entradaDeDados.question('Digite o nome do(a) cliente: ', function(nome){
    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto:', function(produto){
        let nomeProduto = produto
    
        entradaDeDados.question('Digite o valor da compra:', function(valor){
            let valorCompra = valor

            entradaDeDados.question('Digite a taxa de juros:', function(juros){
                let taxaJuros = juros

                entradaDeDados.question('Digite o tempo de parcelamento em meses:', function(meses){
                    let parcelaMeses = meses

                    // validação da entrada de dados 
                    if (nomeCliente == '' || nomeProduto == '' || valorCompra == '' || taxaJuros == '' || parcelaMeses == ''){
                        console.log('Erro: Preencha todos os campos antes de continuar')

                    }else if(!isNaN(nomeCliente)){
                        console.log('Erro: O campo "nome do(a) cliente" não aceita números')

                    }else if(isNaN(valorCompra) || isNaN(taxaJuros) || isNaN(parcelaMeses)){
                        console.log('Erro: Os campos aceitam somente números')

                    }else if(valorCompra <= 0 || taxaJuros <= 0 || parcelaMeses <= 0){
                        console.log('Erro: Os campo não aceitam números menores ou iguais que 0 ')
                    }
                })
            })
        })
    })
})