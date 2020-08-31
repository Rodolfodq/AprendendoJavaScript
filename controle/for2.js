const notas = [5.4, 5.6, 7.8, 9.8]

for( let i in notas){
    console.log(i, notas[i])
    
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 20,
    peso: 65
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
    
}

