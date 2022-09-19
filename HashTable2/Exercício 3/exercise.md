# Anagramas

Anagramas são uma permutação entre elementos de um conjunto. No caso de palavras, dizemos que duas palavras são anagramas, quando podemos reordenar as letras de uma para formar a outra. Por exemplo "roma" é um anagrama de "amor", "opta" é um anagrama de "topa" que é um anagrama de "pato" e por assim vai.

Sua tarefa é escrever um algoritmo com complexidade O(n) que recebe duas strings e consegue verificar se essas strings são anagramas. Cada string será composta somente por letra a-z minúsculas. As duas strings poderão não ter o mesmo tamanho. Considere que duas strings vazias são anagramas uma da outra.

Sua função deve retornar true caso as strings sejam anagramas, ou false em caso contrário.

Ex:

str1 = "silent", str2 = "listen" => Deve retornar true
str1 = "arte", str2 = "reta" => Deve retornar true
str1 = "caso" str2 = "vaso" => Deve retornar false