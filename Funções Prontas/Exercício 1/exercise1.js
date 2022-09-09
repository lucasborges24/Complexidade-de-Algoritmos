function maiorQue(x, lst){
    const numerosMaiorQueParam = lst.filter(item => item >= x);
    console.log(numerosMaiorQueParam);
    return numerosMaiorQueParam
}

function complexidadeDeTempo(){
    return "linear"
}

// teste
maiorQue(15, [ 10, 16, 9, 15, 2, 20])
maiorQue(0, [5, 4, -2, 4, 2, -6, 3])
maiorQue(30, [3, 4, 2, 5, 23, 5])