# Tradução entre alfabetos

Talvez você não saiba, mas o alfabeto dos alienígenas é composto por números, em vez de letras. E cada galáxia tem seu alfabeto. Por exemplo, na galáxia Andrômeda, o alfabeto é composto pelos números [10, 20, 43, 55, 1, 90], enquanto o da Via Láctea é [22, 32, 44, 80, 9, 3]. Apesar de diferentes, os alfabetos de todas as galáxias têm a mesma quantidade de números (6 no exemplo acima), e cada número num alfabeto corresponde ao número de mesmo índice no outro alfabeto (o 10 de Andrômeda corresponde ao 22 da Via Láctea; o 20, ao 32; etc.)

Isso gera problemas de comunicação, porque uma mensagem escrita num alfabeto precisa ser traduzida para outro alfabeto. Uma mensagem é uma lista de números de um dado alfabeto. Por exemplo, uma mensagem escrita no alfabeto de Andrômeda poderia ser [55, 1, 1, 10, 20, 10, 43, 43, 55]. Para que os alienígenas da Via Láctea a entendam, essa mensagem precisa ter seus números traduzidos ao alfabeto da Via Láctea, tornando-se [80, 9, 9, 22, 32, 22, 44, 44, 80].

Escreva uma função alienTranslate(alf1, alf2, msg), que recebe como entrada 3 argumentos:

alf1, correspondente ao alfabeto da galáxia 1, é uma lista de números inteiros não-negativos distintos
alf2, correspondente ao alfabeto da galáxia 2, é uma lista de números inteiros não-negativos distintos com o mesmo tamanho de alf1
msg, correspondente a uma mensagem escrita com o alfabeto da galáxia 1, é uma lista de inteiros não-negativos não necessariamente distintos. Todos esses inteiros garantidamente fazem parte do alfabeto da galáxia 1.
Sua função deve retornar uma lista de inteiros não-negativos, que corresponde à tradução da mensagem para o alfabeto da galáxia 2. Considerando m o tamanho de cada alfabeto e n o tamanho da mensagem, a tecnologia atual dos ETs permite fazer essa tradução em tempo de pior caso O(m * n). Mostre a eles que nós terráqueos podemos fazer melhor !