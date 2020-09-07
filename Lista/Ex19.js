function calculaPreco(codigo, qntd){
    switch(codigo){
        case 100:
            return 'Cachorro Quente: R$' + (qntd * 3).toFixed(2)
        case 200:
            return 'Hambúrguer Simples: R$' + (qntd * 4).toFixed(2)
        case 300:
            return 'Cheeseburguer: R$' + (qntd * 5.5).toFixed(2)
        case 400:
            return 'Bauru: R$' + (qntd * 7.5).toFixed(2)
        case 500:
            return 'Refrigerante: R$' + (qntd * 3.5).toFixed(2) 
        case 600:
            return 'Suco: R$' + (qntd * 2.8).toFixed(2) 
        default:
            return 'Pedido inválido'
    }
}

console.log(calculaPreco(100, 5))
console.log(calculaPreco(200, 2))
console.log(calculaPreco(300, 3))
console.log(calculaPreco(400, 6))
console.log(calculaPreco(1000, 5))
