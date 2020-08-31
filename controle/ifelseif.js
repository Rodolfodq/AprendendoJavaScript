Number.prototype.entre = function(incio, fim){
    return this >= incio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de honras!')
    }else if(nota.entre(7, 8.99)){
        console.log('Aprovado!')        
    }else if(nota.entre(4, 6.99)){
        console.log('Recuperação!')        
    }else if(nota.entre(0, 3.99)){
        console.log('Reprovado!')        
    }else{
        console.log('Nota inválida!')        
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(3)
imprimirResultado(11)
imprimirResultado(-1)