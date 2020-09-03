function jurosSimples(capIni, taxJ, temAp){
    return `Juros Simples: R$` + (capIni + capIni * taxJ * temAp).toFixed(2)
}

function jurosComposto(capIni, taxJ, temAp){
    return `Juros Composto: R$`+ (capIni * (1+taxJ) ** temAp).toFixed(2)
}

console.log(jurosSimples(1000, 0.2, 3))
console.log(jurosComposto(1000, 0.2, 3))
