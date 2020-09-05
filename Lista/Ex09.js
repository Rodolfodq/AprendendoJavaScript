function atribuiNota(nota){
    let notaArredondada = arredonda(nota)
    if(notaArredondada >= 40){
        return `Aluno aprovado com nota ${notaArredondada}`
    }else{
        return `Aluno reprovado com nota ${notaArredondada}`
    }
    

}

function arredonda(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    }else{
        return nota
    }
}

console.log(atribuiNota(84))
console.log(atribuiNota(38))
console.log(atribuiNota(24))
console.log(atribuiNota(42))
