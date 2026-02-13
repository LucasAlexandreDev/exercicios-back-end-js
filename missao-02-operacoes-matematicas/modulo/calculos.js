/*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de calculos matemáticos 
* Dev: Lucas Alexandre da Silva
* Data: 13/02/26
* Versão: 1.0

****************************************************************************/

// função que retorna a soma do n1 com n2
function operacaoSoma(numero1, numero2){
    let n1 = Number(numero1)
    let n2 = Number(numero2)
    let soma = n1 + n2

}

// função que retorna a subtração do n1 com o n2
function operacaoSubtracao(numero1, numero2){
    let n1 = Number(numero1)
    let n2 = Number(numero2)
    let subtracao = n1 - n2
}

// função que retorna a divisão do n1 com o n2
function operacaoDivisao(numero1, numero2){
    let n1 = Number(numero1)
    let n2 = Number(numero2)
    let divisao = n1 / n2
}

// função que retorna a multiplicação do n1 com o n2
function operacaoMultiplicacao(numero1, numero2){
    let n1 = Number(numero1)
    let n2 = Number(numero2)
    let multiplicacao = n1 * n2
}


module.exports = {
    operacaoSoma,
    operacaoSubtracao,
    operacaoDivisao
}