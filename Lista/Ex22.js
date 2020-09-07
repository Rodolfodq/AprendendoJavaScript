function anuidade(mes, valor){
    if(mes > 0 && mes < 13){
        let tax = 0.05  
        atraso = mes - 1  
        return (valor * ((1+tax) ** atraso)).toFixed(2)
    }else{
        return 'Mes inválido'
    }
    
}

console.log(anuidade(1, 100))
console.log(anuidade(2, 100))
console.log(anuidade(3, 100))
console.log(anuidade(4, 100))
console.log(anuidade(5, 100))
