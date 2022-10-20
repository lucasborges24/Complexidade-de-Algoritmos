# Inferior mais próximo

Tim possuí diversas réguas com escalas diferentes, para cada régua ele faz uma medida, e deseja saber qual é o traço da régua que é mais próximo e é menor ou igual à medida que ele está aferindo.

Por exemplo, numa régua em Centímetros existem os traços: [0, 5, 10, 15, 20], se ele medir algo de 12cm com essa régua o traço escolhido como referência deve ser o de 10cm.

Em outra régua, para usar em quadro brancos, ele tem as seguintes medidas [0, 20, 40, 60, 80], logo uma figura com 25cm de lado deve possuir como traço de referência dessa régua, o traço de 20cm.



Crie uma função que em complexidade O(log n) consiga encontrar, o valor do menor traço existente na régua, abaixo ou igual ao valor procurado.

Caso não existam traços na régua, sua função deve retornar -1. Caso nenhum traço da régua seja menor ou igual ao valor procurado, também retorne -1.

Restrições: Sua função não pode acessar nenhum método do vetor de entrada. Só pode acessar list[i] para qualquer número i, e list.length