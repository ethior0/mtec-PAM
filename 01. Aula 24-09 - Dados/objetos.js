// Objeto

var aluno1 = {
    matricula: 7627364,
    nome: 'Danilo Ferreira',
    curso: 'Bootcamp Front End',
    ativo: true
};

var aluno2 = {
    matricula: 5673203,
    nome: 'David Alexandre Souza do Nascimento',
    curso: 'Desenvolvimento de Sistemas',
    ativo: true
};

var aluno3 = {
    matricula: 1490643,
    nome: 'Thiago Moreira',
    curso: 'Desenvolvimento de Sistemas',
    ativo: true
};

aluno1.dataNascimento = '03/07/1985';
aluno2.dataNascimento = '03/03/2008';
aluno3.dataNascimento = '18/07/2007';

console.log(aluno1.nome);
console.log(aluno1.dataNascimento);

console.log(aluno2);
console.log(aluno2.dataNascimento);

console.log(aluno3);
console.log(aluno3.dataNascimento);


delete aluno1.dataNascimento;
delete aluno2.dataNascimento;
delete aluno3.dataNascimento;

// Undefined e null

var x;
var y = null;

// Arrays

var frutas = ['Banana', 'Laranja', 'Maçã'];