// arrays.js

// TODO: Crie um array com 5 nomes
const nomes = ['Gabriel', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];

// TODO: Crie um array com 5 idades
const idades = [17, 22, 15, 30, 19];

-//Aqui você criou dois arrays simples:
-//nomes: contém 5 nomes (strings).
-//idades: contém 5 números, representando a idade de cada pessoa.

// TODO: Função para exibir todos os nomes
function exibirNomes() {
    console.log('=== LISTA DE NOMES ===');
    // Use forEach para exibir cada nome
    nomes.forEach(nome => {
        console.log(nome);
    });
}

-//forEach é um método que executa uma função para cada elemento do array.
-//Aqui, para cada nome do array nomes, ele imprime o nome no console.

// TODO: Função para encontrar pessoas maiores de idade
function maioresDeIdade() {
    console.log('=== MAIORES DE IDADE ===');
    // Use filter para filtrar idades >= 18
    const maiores = idades.filter(idade => idade >= 18);
    console.log(maiores);
}

// TODO: Função para calcular média das idades
function mediaIdades() {
    // Use reduce para somar todas as idades
    const soma = idades.reduce((acc, idade) => acc + idade, 0);
    // Calcule a média
    const media = soma / idades.length;
    console.log(`Média das idades: ${media}`);
}

// TODO: Execute todas as funções
exibirNomes();
maioresDeIdade();
mediaIdades();
