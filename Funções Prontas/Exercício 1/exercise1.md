Crie uma função chamada `maiorQue(x, lst)`, que recebe dois parâmetros, o primeiro é um número e o segundo é uma lista de números. A partir do número recebido como entrada, sua função deve atravessar a lista de entrada e retornar uma array que contenha todos os números maiores ou iguais a `x`, encontrados em `lst`. Caso não existam números maiores ou iguais a `x`, deve retornar uma array vazia.

Sua implementação deve utilizar uma High Order Function (map, filter, reduce, forEach)



Em seguida, faça com que a função complexidadeDeTempo() retorne corretamente a string que representa a complexidade de tempo desse algoritmo, sendo uma dentre as seguintes strings: "constante", "linear", "quadratica".



Ex:



x = 15, lst = [ 10, 16, 9, 15, 2, 20] => Deve retornar [16, 15, 20]
x = 0, lst = [5, 4, -2, 4, 2, -6, 3] => Deve retornar [5, 4, 4, 2, 3]
x = 30, lst = [3, 4, 2, 5, 23, 5] => Deve retornar [ ]