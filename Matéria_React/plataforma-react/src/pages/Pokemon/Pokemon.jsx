import { useForm } from "react-hook-form";
import "./Pokemon.css"

export function Pokemon() {
    //Expressão regular
    const patternEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const { register, handleSubmit, formState:{ errors } } = useForm();

    function onSubmitPokemon(data) {
        console.log(data);

    }

    return (
        <div className="pokemon">
            <h1>Cadastro Pokemon</h1>
            <form onSubmit={handleSubmit(onSubmitPokemon)} noValidate>
                <label htmlFor="nome">Nome</label><br />
                <input type="text" id="nome" {...register("nome", {required: true, maxLength: 255})} /><br />
                {errors.nome && <span className="invalid">Digite um nome válido!</span>}<br /><br />

                <label htmlFor="tipo">Tipo</label><br />
                <input type="text" id="tipo" {...register("tipo", {required: true, maxLength: 255})} /><br />
                {errors.tipo && <span className="invalid">Digite um tipo válido!</span>}<br /><br />

                <label htmlFor="tipo">Altura</label><br />
                <input type="number" id="altura" {...register("altura", {required: true, min: 0})} /><br />
                {errors.altura && <span className="invalid">Digite um altura válido!</span>}<br /><br />

                <label htmlFor="tipo">E-mail</label><br />
                <input type="email" id="email" {...register("email", {required: true, pattern: patternEmail})} /><br />
                {errors. email && <span className="invalid">Digite um e-mail válido!</span>}<br /><br />
                

                <button type="submit">Cadastrar</button><br />
            </form>
        </div>
    );
    
}

/*
commit
Neste formulário aprendemos sobre validação dos dados e inclusive validação de e-mail que necessita de um expressão regular


*/





// ACIMA FAREMOS EM CIMA DESTE O ESTUDO DE VALIDAÇÃO:
// funcção inicial
// return (
//     <div className="pokemon">
//         <h1>Cadastro Pokemon</h1>
//         <form onSubmit={handleSubmit(onSubmitPokemon)} noValidate>
//             <label htmlFor="nome">Nome</label><br />
//             <input type="text" id="nome" {...register("nome")} /><br />

//             <label htmlFor="tipo">Tipo</label><br />
//             <input type="text" id="tipo" {...register("tipo")} /><br />

//             <label htmlFor="tipo">Altura</label><br />
//             <input type="number" id="altura" {...register("altura")} /><br />

//             <label htmlFor="tipo">Peso</label><br />
//             <input type="number" id="peso" {...register("peso")} /><br /><br />

//             <button type="submit">Cadastrar</button><br />
//         </form>
//     </div>
// );