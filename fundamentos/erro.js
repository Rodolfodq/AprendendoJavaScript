function tratarErroELancar(erro){
    //throw new Error('....')
    //throw false
    throw{
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function impimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('Final')
    }
    
}

const obj = {nome: 'Roberto'}
impimirNomeGritado(obj)


