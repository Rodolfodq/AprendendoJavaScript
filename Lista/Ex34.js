function comparaString(string1, string2){
    let str1 = string1.toLowerCase()
    let str2 = string2.toLowerCase()
    let contain = true
    for(let i = 0; i<str1.length; i++){
        for(let j = 0; j<str2.length; j++){                      
            if(str1[i] === str2[j]){
                contain = true
                break                              
            }else{
                contain = false                              
            }
        }
        if(!contain){
            return contain
        }
    }
    return contain

}

console.log(comparaString('Batatinha','Ahntiab'))
