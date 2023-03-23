import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { usuarios } from "../../data/Usuarios";

export function Perfil() {

    let id = useParams().id;

    const usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id);
    });

    return (
        <div className="perfil-usuario">
            <h2>{usuario.nome}</h2>
            <span>{usuario.idade} anos</span>
            <br />
            <span>{usuario.email}</span>
            <br />
            <Button variant="dark"><Link to={'/usuarios'}>Usuários</Link></Button>
        </div>
    );
}


