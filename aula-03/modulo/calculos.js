/*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de calculos matemáticos 
* Data: 11/02/26
* Versão: 1.0

****************************************************************************/

// função que retorna a média ponderada
function calcularMediaPonderada(numero1, numero2, numero3, numero4){

    // recebe os valores do argumento e converte eles em números
    let nota1 = Number(numero1)
    let nota2 = Number(numero2)
    let nota3 = Number(numero3)
    let nota4 = Number(numero4)

    // validações de entrada de dados: vazio, menor ou igual a 0, maior que 100 e caracteres
    if(nota1 < 0 || nota1 > 100 || nota2 <0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100 || 
        isNaN(nota1) ||isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
       return false
        
    }else{
        // calculo da média
        let media = (nota1 + nota2 + nota3 + nota4 ) / 4

        return Number(media.toFixed(2))
    }
}

// função que retorna a situação (aprovado, recuperação ou reprovado) de um aluno(a)
function calcularStatusAluno(mediaAluno){

    // recebe o valor do argumento e converte em número
    let media = Number(mediaAluno)
    let status 
    
    // validações de entrada de dados: vazio, menor ou igual a 0 e caracteres
    if(media == '' || media <= 0 || isNaN(media)){
        return false

    }else{
        // validação de status do aluno     
        if(media >= 70){
            status = 'APROVADO'

        }else if(media >= 50 && media < 70){
           status = 'RECUPERAÇÃO'

        }else{
            status = 'REPROVADO'
        }

        return status
    }   
}

// deixa as funções globais - podendo ser acessadas de qualquer arquivo 
module.exports = {
    calcularMediaPonderada,
    calcularStatusAluno
}