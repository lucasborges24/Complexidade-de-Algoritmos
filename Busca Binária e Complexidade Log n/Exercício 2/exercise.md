# Lista com Repetidos

Zac estava na escola, e como estava sozinho no recreio, decidiu que ia fazer uma análise das escadas do colégio. Ele percebeu que nem sempre as escadas subiam de maneira constante. Por exemplo a escada que levava para a sala da coordenação tinha apenas 5 degraus, a escada que subia do primeiro para o segundo andar tinha 20 degraus, mas no meio possui um degrau longo onde precisamos dar alguns passos antes de subir ao próximo, ja a escada que levava das salas de aula para o pátio do recreio, era formada de quatro pares de degraus, um curto e um longo. Ele descreveu essas escadas da seguinte forma:

Escada Coordenação: [1, 2, 3, 4, 5]
Escada 1°-2° andar: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
Escada para o pátio: [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8]
No caso da escada do 1°-2° andar, como ele tinha que dar três passos no décimo "degrau", antes de subir ao próximo nível, o número 10 aparece três vezes na descrição dessa escada. Assim como os 2 passos para subir/descer os degraus longos da escada do pátio.

Agora ele quer usar uma busca para percorrer essa array, e descobrir a posição de um número específico no array. Caso o número procurado apareça mais de uma vez no array, ou seja, caso seja um "degrau longo", deve retornar o índice da primeira aparição do valor na array.

Se o valor não aparecer no array, sua função deve retornar -1.



Ex:



lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11, 12, 13, 14, 15] , target = 2 => Deve retornar 1
lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11, 12, 13, 14, 15] , target = 10 => Deve retornar 9
lst = [1, 2, 2, 3, 4, 4, 5, 6, 6, 5, 7, 7], target = 7 => Deve retornar 10
lst = [1, 2, 2, 3, 4, 4, 5, 6, 6, 5, 7, 7], target = 8 => Deve retornar -1


Restrições: Sua função não pode acessar nenhum método do vetor de entrada. Só pode acessar wordList[i] para qualquer número i, e wordList.length