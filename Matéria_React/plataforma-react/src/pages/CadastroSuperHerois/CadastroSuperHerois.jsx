import { useForm } from "react-hook-form";


export function CadastroSuperHerois() {

    const { register, handleSubmit } = useForm();

    function onSubmitHeroi(data) {
        console.log(data);
        alert(`Super-heroi ${data.nome.toUpperCase()} cadastrado com sucesso!\nSeu poder é ${data.poder} e sua fraqueza é o ${data.fraqueza}.\nTudo isso começou quando ele ${data.historia}!`);
    }

    return (
        <div className="superheroi">
            <h1>Cadastro Super-herois</h1>
            <form onSubmit={handleSubmit(onSubmitHeroi)} noValidate>
                <label htmlFor="nome">Nome do Herói</label><br />
                <input type="text" id="nome" {...register("nome")}/><br/>

                <label htmlFor="poder">Poder</label><br/>
                <input type="text" id="poder" {...register("poder")}/><br/>

                <label htmlFor="fraqueza">Fraqueza</label><br />
                <input type="text" id="fraqueza" {...register("fraqueza")}/><br/>

                <label htmlFor="historia">História</label><br/>
                <textarea type="text" id="historia" placeholder="Mordido por..."{...register("historia")}/><br/><br />

                <button type="submit" >Para o alto e avante!</button>
            </form>

        </div>
    );
}

/*
commit:
Neste desafio foi criado uma página "CadatrarSuperHerois" com um form utilizando: onSubimit/ handleSubmit/ register/ useForm/ react-hook-form/ utilização de rotas

*/