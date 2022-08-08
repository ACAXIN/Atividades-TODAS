/*
Atividade 12
Adicione a resposta na linha abaixo de cada exercício
Coloque todo o código do arquivo em uma IIFE.
Em todos os retornos, use o console.log para imprimir o resultado.
*/

/*
1 - Use o operador typeof para verificar o tipo de uma string, um número e um booleano.
*/
(function(){
console.log(typeof "Isabella")
console.log(typeof true)
console.log(typeof 29)

})()


/*
2 - Crie uma função que recebe o argumento `curso` que recebe uma string.
Crie uma variável constante dentro da função chamada `escola` que recebe o valor "Todas as Letras".
Retorne a string concatenada com a variável `escola`. Exemplo: "Curso de JavaScript - Todas as Letras".
Use template strings para o retorno.
*/
(function curso(string){
    const escola = "Todas as Letras";
    console.log(`${string} - ${escola}"`) 
})()

/*
3 - Crie uma função que recebe o argumento `idade` que recebe um número
e retorne uma string dizendo "Minha idade é `idade`". Use template strings para o retorno.
*/
(function idade(valor){
console.log(`Minha idade é  ${valor}` ) 
})()
