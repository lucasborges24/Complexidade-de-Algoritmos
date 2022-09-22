# Enzo e os sufixos

Enzo tem uma array a, essa array é composta por n inteiros a1, a2, a3, ..., an. Como Enzo não consegue ficar de bobeira fazendo nada, ele decide que vai fazer um estudo dessa array.

Para cada número ai ele quer saber quantos números distintos existem nas posições i, i+1, i+2, ..., n.

Resumindo, ele quer descobrir em um complexidade de tempo de pior caso linear em relação a entrada, quantos números distintos existem dentre os números a direita de ai, incluindo ai.

Entrada:

Sua função vai receber uma lista de entrada com n inteiros a1, a2, ..., an (1 <= ai <= 105).
Saída:

Sua função deve retornar uma lista com a resposta para cada número ai


Exemplo:

nArray = [1, 2, 3, 4, 1, 2, 3, 4, 100, 99] => Deve retornar [6, 6, 6, 6, 6, 5, 4, 3, 2, 1]
nArray = [1, 2, 3, 4, 100, 99] => Deve retornar [6, 5, 4, 3, 2, 1]