# Encontre a palavra

Crie uma função chamada findIndexInverted(wordList, word) que recebe uma lista de palavras em ordem alfabética, mas de trás para frente, e deve retornar a o índice da palavra sendo procurada, em um complexidade O(log n). Caso sua função não encontre a palavra na lista passada como entrada, ela deve retornar -1.

Ex:

worldList = ['Zico', 'zebra', 'sapato', 'guerra', 'faca', 'dado', 'balão', 'água'], word = "dado" => Deve retornar 5
worldList = ['Zico', 'zebra', 'sapato', 'guerra', 'faca', 'dado', 'balão', 'água'], word = "casa" => Deve retornar -1
Restrições: Sua função não pode acessar nenhum método do vetor de entrada. Só pode acessar wordList[i] para qualquer número i, e wordList.length