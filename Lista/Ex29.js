function calculaIntervalo(vetor){
    let dentro = 0
    let fora = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i]<=20){
            dentro++
        }else{
            fora++
        }
    }
    return `Dentro do intervalo: ${dentro}\nFora do intervalo: ${fora}`
}

let vetor = [1, 90, 51, 55, 19, 20, 37, 30, 501, 38, 0]
console.log(calculaIntervalo(vetor))
