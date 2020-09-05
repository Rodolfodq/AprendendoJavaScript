function fatorial(numero){
    let acumula = Number(1)
    for(let i = numero; i > 1; i--){
        acumula *= i    
    }
    return acumula
}

console.log(fatorial(6))
console.log(fatorial(9))
console.log(fatorial(10))
console.log(fatorial(5))
console.log(fatorial(0))

