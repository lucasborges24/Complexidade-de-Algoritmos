# Tetragramas

Um tetragrama é uma sequência (ordenada) de 4 letras maiúsculas do Alfabeto Latino. Por exemplo "ACED", "ZEGA", "GAZE" são três tetragramas distintos.

Sua função modaTetragrama(str) recebe como entrada uma string de Letras Latinas Maiúsculas. Ela deve determinar qual tetragrama aparece o maior número de vezes. Atenção: tetragramas podem se sobrepor (por exemplo, a string "ZBCDEF" tem 3 tetragramas: ZBCD, BCDE, CDEF). Se houver empate, retorne o tetragrama que é "maior" em ordem alfabética (no exemplo, seria ZBCD). Caso a string de entrada tenha menos de 4 elementos, retorne a string vazia

Ex:

str = "AAAABBBBAAAA" => Deve retornar "AAAA" porque aparece 2 vezes
str = "AAAAABBBB" => Deve retornar "AAAA" porque aparece 2 vezes
str = "AAAAZZZZ" => Deve retornar ZZZZ porque todos os 5 possíveis tetragramas aparecem 1 vez, e este é o "maior" em ordem alfabética
str = "ABC" => Deve retornar "" porque não há caracteres suficiente para formar nenhum tetragrama