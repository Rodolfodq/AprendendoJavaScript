function calculaMedia(codigo, notas){
    let media = Number
    notas.sort((a,b) => a < b ? 1 : -1)
    media = notas[0] * 0.4 + notas[1]*0.3 + notas[2]*0.3
    if(media >= 5){
        return `Aluno ${codigo} aprovado: \n Nota 1: ${notas[0]} \n Nota 2: ${notas[1]} \n Nota 3: ${notas[2]}\n Média: ${media}`
    }else{
        return `Aluno ${codigo} reprovado: \n Nota 1: ${notas[0]} \n Nota 2: ${notas[1]} \n Nota 3: ${notas[2]}\n Média: ${media}`
    }
}


console.log(calculaMedia(150, [5, 6, 7]))
console.log(calculaMedia(155, [3, 5, 8]))
