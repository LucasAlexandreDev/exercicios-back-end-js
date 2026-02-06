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
entradaDeDados.question('Digite o nome do(a) cliente : ', function(nome){
    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto :', function(produto){
        let nomeProduto = produto
    
        entradaDeDados.question('Digite o valor da compra :', function(capitalInicial){
            // Converte o valor do produto de string para número
            let c = Number(capitalInicial)

            entradaDeDados.question('Digite a taxa de juros :', function(taxajuros){
                // Converte a taxa de juros de string para número
                let i = Number(taxajuros)

                entradaDeDados.question('Digite o período do tempo de parcelamento (1) meses ou (2) anos : ', function(periodo){
                    // Converte o perído de parcelamento de string para número
                    let tempo = Number(periodo)

                    entradaDeDados.question('Digite o tempo de parcelamento :', function(meses){
                        // Converte os meses de parcelamento de string para número
                        let n = Number(meses)

                    // validação da entrada de dados 
                        if (nomeCliente == '' || nomeProduto == ''){
                            console.log('Erro: Preencha todos os campos antes de continuar')

                        }else if(!isNaN(nomeCliente)){
                            console.log('Erro: O campo "nome do(a) cliente" não aceita números')

                        }else if(isNaN(c) || isNaN(i) || isNaN(n)){
                            console.log('Erro: Os campos aceitam somente números')

                        }else if(c <= 0 || i <= 0 || n <= 0){
                            console.log('Erro: Os campo não aceitam números menores ou iguais que 0 ')
                            
                        }else if (isNaN(tempo) || tempo != 1 && tempo != 2){
                            console.log('Erro: O campo aceita somente o número 1 (meses) ou número 2 (anos)')

                        }else{

                            // desafio bem legal - tempo de parcelamento por anos
                            if (tempo == 2){
                                n = n * 12
                            }

                            // conversão da taxa de juros percentual pra decimal 
                            i = i / 100

                            // cálculo do juros compostos | ** = potenciação
                            const montante = c*(1 + i)**n

                            let acrescimo = montante - c  

                            // estrutura da saída de dados
                            console.log(`\n******************* Viva Moda *******************\n\nMuito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.\nA compra do produto ${nomeProduto}, tem um valor de: R$ ${c}.\nA sua compra será parcelada em ${n} vezes e o Sr(a) pagará: R$ ${montante.toFixed(2)}.\nnO acréscimo realizado ao valor de: R$ ${c} será de R$ ${acrescimo.toFixed(2)}.\n\nMuito obrigado por escolher a Viva Moda.\n**************************************************`)
                        }

                        // O objeto que finaliza o arquivo
                        entradaDeDados.close()
                    })   
                }) 
            })
        })
    })
})

