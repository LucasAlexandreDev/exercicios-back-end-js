 /*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de validação e verificação de dados de entrada da aplicação.
* Dev: Lucas Alexandre da Silva
* Data: 13/02/26
* Versão: 1.0

****************************************************************************/

// função que válida a entrada de dados: operacaoMatematica
function operacaoUsuario(respostaUsuario){
    let operacao = respostaUsuario

    if(operacao == '' || isNaN(operacao) || operacao != 'adição' || operacao != 'subtração' || operacao != 'divisão' || operacao != 'múltiplicação'){
        return false
    }else{
        return operacao
    }
}

// função que converte a operacaoMatematica para Number
function conversaoDados(operacao){
    let operacao = operacaoUsuario(operacao)
    let conversao

    if(operacao == 'adição'){
        conversao == 1
        return conversao

    }else if(operacao == 'subtração'){
        conversao == 2
        return conversao

    }else if(operacao == 'divisão'){
        conversao == 3
        return conversao

    }else if(operacao == 'múltiplicação'){
        conversao == 4
        return conversao

    }else{
        return false
    }
}

// função que válida a entrada de dados: numero1 e numero2     
function numeroValido(numero1, numero2){
    let n1 = Number(numero1)
    let n2 = Number(numero2)

    if(n1 == '' || n2 == '' || isNaN(n1) || isNaN(n2)){
        return false 

    }else{
       
    }
}
