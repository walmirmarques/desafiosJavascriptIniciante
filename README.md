Desafio de 40 exercícios de javascript (Iniciantes), proposto pelo https://github.com/gabrieldarezzo .

Link do Desafio: https://github.com/gabrieldarezzo/helpjs-ravi#alterar-um-atributo-do-html

40 - Exercicios em JavaScript (JS)
OLÁ INTERNET!!!

Tive a ideia de bolar uma lista de exercicios para quem tem interesse em aprender JavaScript.
São todos exercicios simples, focando em quem gostaria de iniciar porém está meio perdido.
Uma das vantagens de se começar a programar pelo JavaScript seria a premissa que todos tem um Browser/Navegador e um editor disponível.

Eu utilizo o VS-Code, é rapido é simples é barato é de graça. Com varios plugins para turbinar ele.
Just.... DO IT:

    (1) Faça uma mensagem de 'Olá Mundo'.... Exemplo: 'Olá Mundo'
    (2) Faça essa mensagem em um arquivo javascript externo e chame ela... (Importado)
    (3) Faça uma saída de soma de 2 inteiros, ex: alert(2 + 2) - Somar dois Inteiros
    (4) No HTML Crie:

1 - Campo/Input do tipo text para preencher o nome completo.
1 - Botão com o texto: 'Exibir Nome' e ao clicar neste botão é exibido um alert com o valor do campo nome completo, ex: ' O Nome Completo é: "xxxx". '

Monitorando-Click
Exibir o nome ao clicar

    (5) exiba a quantidade de letras que possuem o texto inserido ao clicar no botão

Exemplos de entrada e saida:
'Gabriel' // 7
'Daniel' // 6
'Ronaldo' // 6
'Dennis Ritchie' // 14 (Espaço conta)

    (6) No seu HTML exiba a imagem de uma lampada, ao clicar em cima da lampada, troque o src dela para a lampada que está acessa.

//SRC da Lampada (apagada)  
https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true  

//SRC da Lampada (acessa)  
https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true

... - Alterar-Src de Img

    (7) Agora que você já sabe utilizar o evento 'click', aprenda a usar o 'mouseover', ao passar o mouse em cima da 'lampada.jpg' altere ela para 'lampada-on.jpg' (Exemplo abaixo).
    (7a) Faça 2 campos no HTML chamados: 'Nome', 'Sobrenome' e um botão 'Saudação'; ao clicar no botão exibir um alert: 'Olá {NOME} {SOBRENOME}'
    (8) Crie um campo texto parar preencher um CPF <input maxlength="11" id="cpf" />, e exiba ao lado com pontuação conforme preencher
    (9) Preencha um CPF com pontuação <input maxlength="14" id="cpfPoint" /> e no campo ao lado exiba sem pontuação.
    (10) No HTML Crie:

2 x - Campo/Input do tipo text. (id=soma1, id=soma2)
1 x - Botão (id=btn-soma)
1 x - Campo (id=resultado-soma)

Caso esteja preenchido um valor númerico nos dois campos(id=soma1, id=soma2), 
O resultado da soma devera aparecer no campo (id=resultado-soma) ao clicar no botão (id=btn-soma).

    (12) Faça um comentário de uma linha no JavaScript no exercicio anterior
    (12.a) Crie dois botões no HTML chamados: 'Verde', ,'Vermelho'. ao clicar neles, o style="background-color: {COR-SELECIONADA}" vai ser alterado dinamicamente Alterar-Style de uma div
    (13) Faça um comentário de varias linhas no JavaScript no exercicio anterior do CPF.
    (14) Crie uma div vazia cujo o id dela é 'resultado' Insira via JavaScript assim que a tela carregar o seguinte texto: 'Esse texto foi inserido pelo JavaScript...' 'Exemplo de "window.onload"'
    (15) Agora crie um botão que ao ser clicado faça a mesma ação do exercício anterior.
    (16) Crie uma função que recebe 2 parâmetros e retorna a soma deles. (e utilize no exercicio 10)
    (17) Crie uma função que recebe 2 parâmetros e retorna a soma deles, porem caso seja passado um parâmetro vazio ela retorne zero.
    (18) Exiba o 'resto' da seguinte divisão: (5 / 2)
    (19) Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro inteiro.
    (20) Crie uma função que recebe 2 parâmetros e retorna a multiplicação deles.
    (21) Crie uma função que calcula 5% de desconto retornando o valor do desconto.
    (22) Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
    (23) Dentro da div com o id 'resultado', escreva 1x ('Repetição'). @dica 'innerHTML', el.innerHTML = 'Repetição';
    (24) Dentro da div com o id 'resultado', escreva 2x ('Repetição').
    (25) Dentro da div com o id 'resultado', escreva 20x ('Repetição'). (use o 'for' pelo amor de deus)
    (26) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com forEach)
    (27) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com while)
    (28) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com while)
    (29) Dentro da div com o id 'resultado', escreva os números de 0 ~ 10 (escolha uma das opções acima)
    (30) Dentro da div com o id 'resultado', escreva os números pares até 20... (ex 2,4,6...20)
    (31) Ok... chega de for(), mentira / #SQN... Exiba a tabuada do 1 até o 10 (for dentro de for?) (caso você escreva de forma manual.. eu vou te bater HSUAHASHUAS)

0 x 0 = 0
0 x 1 = 0
0 x 2 = 0
...
10 x 9 = 90
10 x 10 = 100

(Dica, pesquise um pouco de CSS para melhorar a visualização do resultado.)

    (32) Crie uma função que informa se tem os caracteres 'dota' no parâmetro informado.

Ex: 'Dota é melhor que LOL' (verdadeiro)
Ex: 'Lol é melhor que CS' (falso) / e Falso na vida real tmb.

    (33) Exiba aleatoriamente um número pelo alert()
    (34) Agora faça um botão que ao clicar nele informa se a pessoa acertou o número.
    (35) Exiba a data atual pelo JavaScript no seguinte formato: dia/mês/Ano
    (36) Exiba o próximo mês (dinamicamente obviamente)

Just.... DO IT ARRAYS:

Entenda sobre arrays: https://pt.wikipedia.org/wiki/Arranjo_(computa%C3%A7%C3%A3o) ou https://en.wikipedia.org/wiki/Array_data_type

    (37.a) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
    E Exiba a quantidade/comprimento que ele tem com a função .length

    (37.b) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
    E exiba um a um com alert() - De preferencia para laços de repetição (for, forEach, while, do{}while)

    (37.c) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
    E exiba um a um com alert() - De preferencia para funções com callbacks, Ex:(map, reduce, filter)

map, reduce, filter

Leia mais sobre como trabalhar com arrays: https://tableless.com.br/lidando-com-arrays-em-javascript/

    (37.e) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
    Adicione os 3 Deuses: ('Loki', 'Odin', 'Frey') com a função push()

    (37.f) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
    Adicione os 3 Deuses: ('Loki', 'Odin', 'Frey') com a função .length

    (37.g) Crie o seguinte array: var numbers = [5, 7, 1, 8, 9]
    E exiba de forma crescente @dica: .sort
    @dica2: http://pt.stackoverflow.com/questions/9900/como-ordenar-um-array-por-valores

    (37.h) Crie o seguinte array: var numbers = [5, 7, 1, 8, 9]
    E exiba de forma decrescente.

    (38) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']
    E exiba todos os nomes, dentro do html: <ul id="nomes"></ul>

    (39) Crie um campo texto no html que armazena o conteúdo em um array sempre que você clicar no botão, e apresente em uma lista(ul)

    (40) Crie um campo texto no html que armazena o conteúdo em um array sempre que você clicar no botão, e apresente em uma lista(ul) destacando os números pares

    (41) Crie um contador como o abaixo:

Contador
Challenge Accepted

    (42)

Challenge Accepted Meme

Com as imagens abaixo: Animação Urso

Crie uma animação, onde a imagem se troca entre 1,2 e 3, e mova o bloco para a direita, dando entender que o urso está 'andando'. Urso Animado

@Dica: Já deixei cortado cada uma com ( 32px x 32px )

  https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png
  https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png
  https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png
