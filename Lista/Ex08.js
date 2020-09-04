function checaPontuacao(stringPontuacoes){
    let listaPontos = stringPontuacoes.split(", ")      
    let records = 0
    let pior = 1
    let maior = listaPontos[0]   
    let menor = listaPontos[0]        
    for (let i = 1; i < listaPontos.length; i++){
        if(listaPontos[i] > maior){
            maior = listaPontos[i]
            records++
        }else if(listaPontos[i] < menor){
            menor = listaPontos[i]
            pior = i+1
        }
    }
    return [records, pior]
}

let stringPontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1"
console.log(checaPontuacao(stringPontuacoes))
