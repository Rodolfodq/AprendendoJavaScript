function baskara(a, b, c){
    let delta = b * b - 4 * a * c
    if(delta > 0){
        let x1 = (-b + Math.sqrt(delta))/(2*a)
        let x2 = (-b - Math.sqrt(delta))/(2*a)
        return [x1, x2]
    }else if(delta == 0){
        let x1 = (-b)/(2*a)
        return [x1]
    }else{
        return 'Delta é negativo'
    }

}

console.log(baskara(3, 1, 2));