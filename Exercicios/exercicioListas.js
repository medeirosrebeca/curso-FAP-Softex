/* Você deve criar três listas em JavaScript:
1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.
Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. 
Ao terminar, imprima novamente todas as informações das três listas*/

const guardarNomes = ['Rebeca', 'Wagner', 'Rafaela', 'Rubens', 'Conceição', 'Zé', 'Rosa', 'Andrea', 'Walter', 'Italo'];

const guardarIdades = ['33', '32', '36', '60', '63', '38', '64', '55', '61', '30'];

const guardarCores = ['Verde', 'Azul', 'Violeta', 'Amarelo', 'Lilas', 'Preto', 'Vermelho', 'Roxo', 'Branco', 'Laranja'];

console.log(guardarNomes);
console.log(guardarIdades);
console.log(guardarCores);

guardarCores[5] = 'Marrom'; //Alterando a cor 'Preto'.
guardarIdades[8] = '59'; //Alterando a idade '61'.

console.log(guardarNomes);
console.log(guardarIdades);
console.log(guardarCores);