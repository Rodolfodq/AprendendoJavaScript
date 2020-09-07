function reajuste(salario, plano){
    switch(plano){
        case 'A':
            return salario += salario * 0.1
        case 'B':
            return salario += salario * 0.15
        case 'C':
            return salario += salario * 0.2
        default:
            return 'Plano inválido'
    }
}

console.log(reajuste(1500, 'E'))
console.log(reajuste(1500, 'A'))
console.log(reajuste(1500, 'B'))
console.log(reajuste(1500, 'C'))