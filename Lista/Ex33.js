function concatena(vetorInteiro, vetorString, vetorDouble){
    let frase = ''
    frase = frase.concat(vetorInteiro, vetorString, vetorDouble)
    return frase
}

let vetorInteiro =[1, 3, 5, 9]
let vetorString = ['HAAH', 'HEHE']
let vetorDouble = [1.5, 9.8, 10.15]
console.log(concatena(vetorInteiro, vetorString, vetorDouble))
