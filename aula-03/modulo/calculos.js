function calcularMediaPonterada(numero1, numero2, numero3, numero4){

    // recebe os números encaminhados
    let nota1 = Number(numero1)
    let nota2 = Number(numero2)
    let nota3 = Number(numero3)
    let nota4 = Number(numero4)

    // validações de entrada de dados: vazio, menor ou igual a 0, maior que 100 e caracter
    if(numero1 < 0 || numero1 > 100 || numero2 <0 || numero2 > 100 || numero3 < 0 || numero3 > 100 || numero4 < 0 || numero4 > 100 || isNaN(numero1) ||isNaN(numero2) || isNaN(numero3) || isNaN(numero4)){
       return false
        
    }else{
        // calculo da média
        let media = nota1 + nota2 + nota3 + nota4 / 4

        return Number(media.toFixed(2))
    }
}

module.exports = {
    calcularMediaPonterada,
    calcularStatusAluno
}

function calcularStatusAluno(){

}