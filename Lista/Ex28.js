function paresImpares(vetor){
    let pares = 0
    let impares = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2){
            impares++
        }else{
            pares++
        }
    }
    console.log(`Pares: ${pares} \nImpares: ${impares}`)
     
}

let vetor = [1, 90, 51, 55, 9, 20, 37, 30, 501, 38, 0]
paresImpares(vetor)
