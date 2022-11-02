# Conta aparições

Jon está fazendo um índice sobre uma postagem, e precisa conseguir contar algumas palavras chaves que aparecem nessa postagem, para isso ele copiou todas as palavras em uma lista e organizou a lista em ordem alfabética, e agora precisa fazer uma busca pelas palavras que ele deseja contar.

Como Jon é um entusiasta de computação ele gostaria de resolver esse problema da busca numa complexidade de tempo menor que linear. Você consegue ajudar Jon?

Você receberá um vetor de entrada contendo palavras em ordem alfabética (a mesma palavra poderá aparecer mais de uma vez) e uma palavra a ser buscada no vetor. Sua função deverá retornar quantas vezes essa palavra aparece no vetor (poderá ser 0).

Ex:

wordList = ['abelha', 'alvo', 'alvo', 'árvore', 'colméia', 'colméia', 'colméia', "da",...], word = "árvore" => Deve retornar 1
wordList = ['abelha', 'alvo', 'alvo', 'árvore', 'colméia', 'colméia', 'colméia', "da",...], word = "colméia" => Deve retornar 3
wordList = ['abelha', 'alvo', 'alvo', 'árvore', 'colméia', 'colméia', 'colméia', "da",...], word = "água" => Deve retornar 0
Restrições: Sua função não pode acessar nenhum método do vetor de entrada. Só pode acessar wordList[i] para qualquer número i, e wordList.length
