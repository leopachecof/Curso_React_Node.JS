import { useForm } from "react-hook-form";

export function Pokemon() {

    const { register, handleSubmit } = useForm();

    function onSubmitPokemon(data) {
        console.log(data);

    }

    return (
        <div className="pokemon">
            <h1>Cadastro Pokemon</h1>
            <form onSubmit={handleSubmit(onSubmitPokemon)} noValidate>
                <label htmlFor="nome">Nome</label><br />
                <input type="text" id="nome" {...register("nome")} /><br />

                <label htmlFor="tipo">Tipo</label><br />
                <input type="text" id="tipo" {...register("tipo")} /><br />

                <label htmlFor="tipo">Altura</label><br />
                <input type="number" id="altura" {...register("altura")} /><br />

                <label htmlFor="tipo">Peso</label><br />
                <input type="number" id="peso" {...register("peso")} /><br /><br />

                <button type="submit">Cadastrar</button><br />
            </form>
        </div>
    );

}