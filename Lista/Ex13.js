function verificaUtil(dia){
    switch(dia){
        case 1: case 7:
            return 'Fim de semana'            
        case 2: case 3: case 4: case 5: case 6:
            return 'Dia útil'            
        default:
            return 'Dia inválido'            
    }

}

console.log(verificaUtil(1))
console.log(verificaUtil(7))
console.log(verificaUtil(3))
console.log(verificaUtil(10))
console.log(verificaUtil(-1))
