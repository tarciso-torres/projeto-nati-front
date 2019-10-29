import React from 'react';

const ListaAluno = ({alunos}) => {
    console.log(alunos)
    return (
        <div className = 'ui container'>
            <table className="ui red table">
            <thead>
                <tr><th>Nome</th>
                <th>Matricula</th>
                <th>Ano de Admissão</th>
                <th>Sexo</th>
            </tr></thead><tbody>
                {alunos.map((aluno) => (
                    <tr>
                    <td>{aluno.dadosPessoais.nome}</td>
                    <td>{aluno.dadosPessoais.matricula}</td>
                    <td>{aluno.dadosPessoais.anoAdmissao}</td>
                    <td>{aluno.dadosPessoais.sexo}</td>
                    </tr>
                ))}
                
            </tbody>
            </table>
        </div>
    );
}

export default ListaAluno;