/*
Atividade 13
Adicione a resposta na linha abaixo de cada exercício
Coloque todo o código do arquivo em uma IIFE.
Em todos os retornos, use o console.log para imprimir o resultado.
Use métodos de array e use let e const para variáveis.
*/

/*
1 - Declare uma variável que contenha um array com 5 nomes de cidades em strings.
Imprima o tamanho desse array.
*/

var CidadesCentrOeste = ['Brasilia', 'Goiania', 'Cuiabá', 'Campo Grande']
console.log(CidadesCentrOeste.lenght);


/*
2 - Declare uma variável que contenha um array com 5 nomes de países em strings.
Adicione um país no começo do array.
Adicione um país no fim do array.
Imprima esse array.
*/
var PaisesSulAmerica = ['Brasil','Uruguai','Peru','Bolivia','Argentina']
var adicionar = PaisesSulAmerica.unshift('Paraguai')
var adicionar = PaisesSulAmerica.push('Colombia')

console.log(PaisesSulAmerica);

/*
3 - Declare uma variável que contenha um array com 5 nomes de livros em strings.
Remova um item no começo do array.
Remova um item no fim do array.
Imprima esse array.
*/
let ChimamandaNgozi = ['Sejamos todos feministas','No seu Pescoço','Hibisco Roxo','Americanah','Meio Sol Amarelo']
var primeiro = ChimamandaNgozi.shift()
var ultimo = ChimamandaNgozi.pop()

console.log(ChimamandaNgozi)

/*
4 - Declare uma variável que contenha um array com 5 números entre 10 e 99.
Coloque em um novo array 3 desses números.
Imprima esse novo array.
*/
var NumerosAleatorios = [10,23,44,59,65]
var NovoArray = []


/* 
5 - Declare uma variável que contenha um array com 5 vogais em strings.
Coloque esse array ao contrário e una todas essas letras em uma string.
Imprima em um console.log.
*/
var Vogais = ['A','E','I','O','U']
Vogais.reverse()
Vogais.concat()