const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function AlunosAprovados(alunos, media) {
    let aprovados = [];
    
    for (let index = 0; index < alunos.length; index++) {

        let { nota, nome } = alunos[index];

        if (nota >= media) {
            aprovados.push(nome)
        }
    }
    return aprovados
}

console.log(AlunosAprovados(alunos, 6))
