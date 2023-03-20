import {useState} from "react";
import "./CadastroPessoas.css";

export function CadastroPessoas() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [salario, setSalario] = useState('');
    const [listaPessoas, setListaPessoas] = useState([]);

    function adicionarPessoa() {
        const novaPessoa = {
            nome: nome,
            email: email,
            cpf: cpf,
            salario: salario,
    };

    // listaPessoas.push(novaPessoa);
    const novoArray = [...listaPessoas, novaPessoa];
    // isto não ListaFuncionario
    // o array tem que ser "novo"/"diferente"
    setListaPessoas(novoArray);

    function removerPessoa(objeto) {
        const novoArray = listaPessoas.filter((elemento) =>
        elemento !== objeto);
        setListaPessoas(novoArray);
    };

        return (
                <div className="cadastro-pessoas">
                    <input
                        type="text"
                        placeholder="Nome"
                        onChange={(evento) => setNome(evento.target.value)}
                        value={nome}
                    />
                    <br />
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(evento) => setEmail(evento.target.value)}
                        value={email}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="cpf"
                        onChange={(evento) => setCpf(evento.target.value)}
                        value={cpf}
                    />
                    <br />
                    <input
                        type="number"
                        placeholder="salario"
                        onChange={(evento) => setSalario(evento.target.value)}
                        value={salario}
                    />
                    <br />

                    <button onClick={adicionarPessoa}>Adicionar</button>
                    <hr />
                    <table>
                        <thead className="tabela-pessoas">
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>CPF</th>
                                <th>Salário</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaPessoas.map((elemento, index) => {
                                return (
                                    <tr key={index}>
                                    <td>{elemento.nome}</td>
                                    <td>{elemento.email}</td>
                                    <td>{elemento.cpf}</td>
                                    <td>{elemento.salario}</td>
                                    <td>
                                        <button onClick={() => removerPessoa(elemento)}>
                                        Remover
                                        </button>
                                    </td>
                                    </tr>
                            );
                            })}
                        </tbody>
                    </table>
                </div>
            );
    }
}