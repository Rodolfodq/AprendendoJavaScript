verificaDiv = (valor) => {
    if(!(valor % 3)){
        return true
    }else{
        return false
    }
}

console.log(verificaDiv(30))
console.log(verificaDiv(99))
console.log(verificaDiv(25))
