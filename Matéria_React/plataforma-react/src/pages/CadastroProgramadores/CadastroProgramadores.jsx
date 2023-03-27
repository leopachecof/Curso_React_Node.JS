import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./CadastroProgramadores.css";

export function CadastroProgramadores() {

    const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const {register, handleSubmit, formState:{ errors} } = useForm();

    function onSubmitProgramadores(data) {
        let mensagem = `
        Nome Completo: ${data.nome}
        End: ${data.end}
        Tel: ${data.tel}
        UF: ${data.estado}
        Cidade: ${data.cidade}
        Áreas de interesse: ${data.areas}
        Nível de experiência: ${data.exper}
        Portifólio: ${data.port}
        Habilidades técnicas: ${data.habilidades}
        Formação acadêmica: ${data.forma}

        `;
       alert(mensagem);
    }

    return (
        <div>
            <h1>Cadastro de Programadores</h1>
            <form onSubmit={handleSubmit(onSubmitProgramadores)} noValidate>

            <Form.Group className="m-3">
                <Form.Label htmlFor="tipo">E-mail</Form.Label><br />
                <Form.Control {...register("email", {required: true, pattern: patternEmail})} /><br />
                {errors. email && <span className="invalid">Digite o nome completo!</span>}
            </Form.Group>
            
            <Form.Group className="m-3">
                <Form.Label htmlFor="tipo">E-mail</Form.Label><br />
                <Form.Control {...register("email", {required: true, pattern: patternEmail})} /><br />
                {errors. email && <span className="invalid">Digite um e-mail válido!</span>}
            </Form.Group>
            
            <Form.Group className="m-3">
                <Form.Label htmlFor="tipo">E-mail</Form.Label><br />
                <Form.Control {...register("email", {required: true, pattern: patternEmail})} /><br />
                {errors. email && <span className="invalid">Digite um e-mail válido!</span>}
            </Form.Group>
            
            <Form.Group className="m-3">
                <Form.Label htmlFor="tipo">E-mail</Form.Label><br />
                <Form.Control {...register("email", {required: true, pattern: patternEmail})} /><br />
                {errors. email && <span className="invalid">Digite um e-mail válido!</span>}
            </Form.Group>

                <button type="submit">Cadastrar</button><br />

            </form>
        </div>


    );
}