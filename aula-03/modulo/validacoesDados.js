 /*************************************************************************** 

* Objetivo: Arquivo responsável pelas funções de validação e verificação de dados de entrada da aplicação.
* Dev: Lucas Alexandre da Silva
* Data: 11/02/26
* Versão: 1.0

****************************************************************************/

// função que retorna a validação do nome do usuário
function validarNome(nomeUsuario){
    
    // remove espaços no início e no final
    let nome = nomeUsuario.trim()

    // cria um padrão (regex) que permite somente letras e espaços no nome
    const regex = /^[A-Za-zÀ-ÿ\s]+$/

    //  validação de entrada de dados: vazia e caracteres inválidos
    if (nome == '' || !regex.test(nome)){
        return false

    }else{
        return nome
    }
}

module.exports = {
  validarNome
}