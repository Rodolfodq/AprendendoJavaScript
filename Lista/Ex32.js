function calculaMedia(vetor){
    let somatorio = 0
    for(let i = 0; i < vetor.length; i++){       
        somatorio += vetor[i]   
    }

    console.log(`Media: ${(somatorio/vetor.length).toFixed(2)}`)
    
}

let vetor = [0, 90, 51, -55, 19, 20, -37, 30, 501, 38, -100, -1]
calculaMedia(vetor)