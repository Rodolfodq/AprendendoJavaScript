function tipoTriangulo(ladoA, ladoB, ladoC){
    if(ladoA === ladoB && ladoB === ladoC){
        return 'Triangulo Equilátero'
    }
    else if((ladoA === ladoB && ladoC != ladoA) || (ladoA === ladoC && ladoB != ladoA) || (ladoB === ladoC && ladoA != ladoB)){
        return 'Triangulo Isóceles'
    }
    else if(!(ladoA == ladoB == ladoC)){
        return 'Triangulo Escaleno'
    }
    else{
        return 'Valor inválido'
    }
}


console.log(tipoTriangulo(3, 4, 5))
