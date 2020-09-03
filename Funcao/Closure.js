//Closure é o escopo criado quando uma função é declarada
//Este escopo permita a função acessar e manipular variaveis externas à função

//Contexto lexico

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro()
}

const minhaFuncao = fora()
console.log(minhaFuncao)