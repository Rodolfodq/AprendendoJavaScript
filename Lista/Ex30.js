function encontraMaior(vetor){
    let maior = vetor[0]
    let menor = vetor[0]
    for(let i = 1; i < vetor.length; i++){
        if(vetor[i]>maior){
            maior = vetor[i]
        }else if(vetor[i] < menor){
            menor = vetor[i]
        }        
    }

    console.log(`Maior: ${maior}\nMenor: ${menor}`)
    
}

let vetor = [0, 90, 51, 55, 19, 20, 37, 30, 501, 38, 100, -1]
encontraMaior(vetor)