# Código Alienígena

obs: este exercício não é de implementação de código, é um quiz múltipla escolha. Você deve implementar a função responder para que ela retorne a soma dos números de todas as afirmativas corretas. Note que os números das afirmativas aumentam em potência de 2: 1, 2, 4, 8 etc.



Um alienígena escreveu a função ET(lst) (veja o código), que recebe uma lista de números e retorna alguma coisa (que não sabemos ainda e temos que decifrar). Considerando que n é o tamanho da lista, realizamos algumas afirmativas:



Afimativa 01: O loop while só termina quando a variável i ficar grande o bastante, mas não há garantia de que toda iteração do loop incremente essa variável (porque o i++ está dentro de um else). Então o loop pode rodar indefinidamente em alguns casos (loop infinito).



Afimativa 02: A função do javascript indexOf(x) retorna o primeiro índice em que x é encontrado no vetor, ou -1 caso esse elemento não exista no vetor.



Afirmativa 04: A linha if (lst.indexOf(lst[i]) !== i) testa se um elemento já apareceu antes no vetor.



Afirmativa 08: A linha if (lst.indexOf(lst[i]) !== i) realiza um teste em tempo O(1).



Afirmativa 16: A linha if (lst.indexOf(lst[i]) !== i) realiza um teste em tempo O(n).



Afirmativa 32: A linha lst.splice(i, 1); executa em tempo O(1) porque só remove 1 elemento da lista.



Afirmativa 64: A linha lst.splice(i, 1); executa em tempo O(n) porque remove vários elementos da lista de uma só vez.



Afirmativa 128: A linha lst.splice(i, 1); executa em tempo O(n).



Afirmativa 256: A função ET(lst) tem complexidade de tempo O(n).



Afirmativa 512: A função ET(lst) tem complexidade de tempo O(n²).



Afirmativa 1024: A função ET(lst) tem complexidade de tempo O(n³).



Afirmativa 2048: Se lst=[1,2,3,4,4], então ET(lst) retorna [1,2,3].



Afirmativa 4096: Se lst=[1,2,3,4,4], então ET(lst) retorna [1,2,3,4].