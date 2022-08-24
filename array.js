const { endianness } = require("os")

//define uma variavel do tipo array
const listaNomes = ['joao', 'maria','roberto']
const listaProdutos = ['teclado', 'preto', 50.00,10]
const listaAlunos = ['leonardo', 'japa', 'pedro', 'Enzo', 'Nicolas', 'Larissa']
const listaDisciplinas = ['programacao front-end','programacao back-end', 'banco de dados', 'desenvolvimento mobile' ]
//exibindo todos os dados de um array
console.log(listaNomes)
console.log(listaProdutos)
//verificando o tipo de dados de cada elemento array
console.log(typeof(listaProdutos))
//exibindo o tipo de doados e cada elemento array
console.log(typeof(listaProdutos[3]))
//exibe valores de cada elemento do array
console.log('O produto e: '+listaProdutos[0])
console.log('A cor do produto e: '+listaProdutos[1])

//Exibe a qntde de elementos de um array
console.log('quantidade de itens e:' + listaProdutos.length)
//extraindo valores do array com estrutura de repeticao
let qntde = listaAlunos
let cont = 0
// exemplo utilizando o while
while(cont < qntde){
    console.log('O aluno da truma DS2M e: '+ listaAlunos[cont])
    cont+=1
}

// exemplo utilizando o for 
for (let cont = 0; cont< qntde; cont++) {
    console.log('O aluno da turma DS2M e:'+ listaAlunos[cont])
}

// exemplo utilizando ForEach

listaAlunos.forEach(function(item, cont){
    console.log ('aluno da turma DS2M e '+item)
})

// adicionando novos elemnetos na array
listaAlunos.push('Arthur');
console.log(listaAlunos)
// removendo o ultimo item da lista
listaAlunos.pop();

//adicionando elementos no array no inicio
listaAlunos.unshift('Enzo')
console.log(listaAlunos)

//removendo um elemento do inicio do array
listaAlunos.shift

//pesquisando valores em um array e retornando o seu indice 
   // se retornar -1, significa que nao foi encintrado o item 

let indice = listaAlunos.indexOf('leonardo')
console.log(indice)   
// cria uma copia do array em uma nova variavel que sera o array 
const listaNovaalunos = listaAlunos.slice()
console.log(listaNovaalunos)
//removendo elementos a partir de um indice
// somente o item escolhido
listaAlunos.splice(0,indice, 1)
//remove todos os itens a partir do escolhido
listaAlunos.splice(indice)

//colocar a array alunos dentro da array disciplinas
listaNovaalunos.push(listaDisciplinas)
//lista o array principal e todos os sub array existentes
console.log(listaNovaalunos)
//exibe o primeiro elemnto do arry contido dentro da linha 4 do
//array principal
console.log(listaNovaalunos[7][0])
//exemplo de como buscar um elemento de um array que esta dentro 
//de outro array
console.log(listaNovaalunos[7].indexOf('banco de dados'))