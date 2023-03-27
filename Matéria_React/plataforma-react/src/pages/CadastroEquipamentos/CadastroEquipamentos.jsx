import { useForm } from "react-hook-form";
import './CadastroEquipamentos.css';


export function CadastroEquipamentos() {

    const {register, handleSubmit, formState:{ errors } } = useForm();

    function onSubmitEquipamento(data) {
        console.log(data)
        let mensagem = `
        Marca/Modelo: ${data.marcaemodelo}
        Numero de serie: ${data.numeroserie}
        descricao: ${data.descricao}
        entrada: ${data.entrada}
        previsao: ${data.previsao}
        status: ${data.status}
        `;
        alert(mensagem);

    }
           

    return (
        <div className="cadastroequipamentos">
            <h1>Cadastro de Equipamento</h1>
            <form onSubmit={handleSubmit(onSubmitEquipamento)} noValidate>

                {/* marca e modelo */}
                <label htmlFor="marcaemodelo">Marca e Modelo</label><br />
                <input type="text" id="marcaemodelo" {...register("marcaemodelo", {required: true, maxLength: 255})}/><br />
                {errors.marcaemodelo && <span className="invalid">Digite marca e modelo válido!</span>}<br /><br />

                 {/* numero de serie */}
                <label htmlFor="numeroserie">Numero de Série</label><br />
                <input type="number" id="numeroserie" {...register("numeroserie", {required: true, maxLength: 255})}/><br />
                {errors.numeroserie && <span className="invalid">Digite o número de série!</span>}<br /><br />

                 {/* descrição do problema */}
                <label htmlFor="descricao">Descrição</label><br />
                <textarea type="text" id="descricao" placeholder="Digite aqui..."{...register("descricao", {required: true, maxLength: 255})}/><br />
                {errors.descricao && <span className="invalid">Descreva o problema!</span>}<br /><br />

                {/* Data de entrada */}
                <label htmlFor="entrada">Data de Entrada</label><br />
                <input type="date" id="entrada" {...register("entrada", {required: true})}/><br />
                {errors.entrada && <span className="invalid">Selecione a data de entrada!</span>}<br /><br />

                 {/* previsão de entrega */}
                <label htmlFor="previsao">Previsão de entrega:</label><br />
                <input type="date" id="previsao" {...register("previsao", {required: true})}/><br />
                {errors.previsao && <span className="invalid">Selecione a data de previsão da entrega!</span>}<br /><br />

                {/* status */}
                <label htmlFor="status">Status</label><br />
                <select {...register("status", {required: true})}><br />
                    <option value="recebido">Recebido</option>
                    <option value="fazendo">Fazendo</option>
                    <option value="concluído">Concluído</option>
                    <option value="entregue">Entregue</option>
                </select> <br />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

/*
Criado página de cadastro com form e teg's variadas, como select e data.

Neste exercício tive que fazer calculos entre datas
Criar um select

*/