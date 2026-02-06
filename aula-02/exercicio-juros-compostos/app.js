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
            // Converte o valor do produto de string para número
            let valorCompra = Number(valor)

            entradaDeDados.question('Digite a taxa de juros:', function(juros){
                // Converte a taxa de juros de string para número
                let taxaJuros = Number(juros)

                entradaDeDados.question('Digite o período do tempo de parcelamento:\n(1) meses\n(2) anos', function(periodo){
                    // Converte o perído de parcelamento de string para número
                    let tempo = Number(periodo)

                    entradaDeDados.question('Digite o tempo de parcelamento:', function(meses){
                        // Converte os meses de parcelamento de string para número
                        let parcela = Number(meses)

                    // validação da entrada de dados 
                    if (nomeCliente == '' || nomeProduto == ''){
                        console.log('Erro: Preencha todos os campos antes de continuar')

                    }else if(!isNaN(nomeCliente)){
                        console.log('Erro: O campo "nome do(a) cliente" não aceita números')

                    }else if(isNaN(valorCompra) || isNaN(taxaJuros) || isNaN(parcela)){
                        console.log('Erro: Os campos aceitam somente números')

                    }else if(valorCompra <= 0 || taxaJuros <= 0 || parcela <= 0){
                        console.log('Erro: Os campo não aceitam números menores ou iguais que 0 ')
                        
                    }else if (isNaN(tempo) || tempo != 1 && tempo != 2){
                        console.log('Erro: O campo aceita somente o número 1 (meses) ou número 2 (anos)')

                    }else{

                        // desafio bem legal - tempo de parcela por anos
                        if (tempo === 2){
                            parcela = parcela * 12
                            taxaJuros = taxaJuros / 12
                        }

                        taxaJuros = taxaJuros / 100

                        let c = valorCompra
                        let i = taxaJuros
                        let n = parcela

                        // cálculo do juros compostos | ** = potenciação
                        const montante = c*(1 + i)**n

                        let acrescimo = montante - valorCompra  

                        // estrutura da saída de dados
                        console.log(`\n******************* Viva Moda *******************\nMuito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.\nA compra do produto ${nomeProduto}, tem um valor de: R$ ${valorCompra}.\nA sua compra será parcelada em ${parcela} vezes e o Sr(a) pagará: R$ ${montante.toFixed(2)}.\nO acréscimo realizado ao valor de: R$ ${valorCompra} será de R$ ${acrescimo.toFixed(2)}.\n\nMuito obrigado por escolher a Viva Moda.\n*******************************************************`)
                    }
                    })   
                }) 
            })
        })
    })
})
