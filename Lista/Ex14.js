function escolheFruta(fruta){
    switch(fruta){
        case 'Maça':
            return 'Não vendemos esta fruta aqui.'
        case 'Kiwi':
            return 'Estamos com escessez de Kiwis'
        case 'Melancia':
            return 'Aqui está, são 3 reais o quilo.'
        default:
            return 'Opção inválida'
    }
}

console.log(escolheFruta('Maça'))
console.log(escolheFruta('Kiwi'))
console.log(escolheFruta('Melancia'))
console.log(escolheFruta('Uva'))
