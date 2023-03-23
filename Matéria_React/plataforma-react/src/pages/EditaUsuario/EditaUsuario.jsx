import { Button } from "react-bootstrap";
import { usuarios } from "../../data/Usuarios";
import { useNavigate, useParams } from "react-router-dom";


export function EditaUsuario() {

    //useParams é uma função que retorna um objeto
    //este objeto contém os párãmetros passados pela rota

    let params = useParams();
    let id = params.id;
    console.log(id)

    // ou
    // let id = useParams().id;

    const usuario = usuarios.find(usuario => { 
        return usuario.id === parseInt(id); // retorna um valor booleano que satisfaz a pesquisa // find é a busca
    });

    let navigate = useNavigate();
    
    function editar() {
        //✅Capturar as informações do formulário
        //✅Validar os dados de entrada
        //✅Modificar as informações no banco de dados
        navigate("/usuarios")
    }



    return (
        <div className="edita-usuario">
            <h2>{usuario.nome}</h2>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade} anos</span>
            <br />

            <Button onClick={editar} variant="dark">Editar</Button>
        </div>
    );
}