const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)
delete produto.nome
delete produto.preco
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    },],

    calculaValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Avenida Gigante'

console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calculaValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)




