//funcao sem retorno

 function imprimirSoma(a, b){
     console.log(a+b)
 }

 imprimirSoma(2, 3)
 imprimirSoma(2)
 imprimirSoma(2, 13, 34, 4, 5)
 imprimirSoma()

 //funcao com retorno
 function soma(a, b=0){
     return a + b
 }

 console.log(soma(2, 34))
 console.log(soma(2))
