function calculadora(x, op, y){
    switch((op)){
        case '+': 
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return (x / y).toFixed(2)
        default:
            return 'Operação inválida'        
    }
}

console.log(calculadora(1, '+', 9))
console.log(calculadora(2, '-', 9))
console.log(calculadora(3, '*', 9))
console.log(calculadora(6, '/', 9))
console.log(calculadora(9, 'a', 9))
