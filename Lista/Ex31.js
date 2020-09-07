function encontraNegativo(vetor){
    let negativos = 0
    for(let i = 0; i <= vetor.length; i++){
        if(vetor[i]<0){
            negativos++
        }     
    }

    console.log(`Quantidade de negativos: ${negativos}`)
    
}

let vetor = [0, 90, 51, -55, 19, 20, -37, 30, -501, 38, -100, -1]
encontraNegativo(vetor)