let comparaComThis = function(param){
    console.log(this === param)
    
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let compraraComThisArrow = param => console.log(this == param)
compraraComThisArrow(global)
compraraComThisArrow(module.exports)

compraraComThisArrow = compraraComThisArrow.bind(obj)
compraraComThisArrow(obj)
compraraComThisArrow(module.exports)