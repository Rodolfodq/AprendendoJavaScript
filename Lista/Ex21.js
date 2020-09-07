function calculaPlano(idade){
    let valorPlano = Number(100)
    if(idade<10){
        valorPlano += 80
    }else if(idade >= 10 && idade <= 30){
        valorPlano += 50
    }else if(idade > 30 && idade <= 60){
        valorPlano += 95
    }else if(idade > 60){
        valorPlano += 130
    }

    return valorPlano
}

console.log(calculaPlano(11))
console.log(calculaPlano(05))
console.log(calculaPlano(90))
console.log(calculaPlano(100))
console.log(calculaPlano(50))

