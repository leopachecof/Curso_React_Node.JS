import { Button, Container, Form } from "react-bootstrap";
import "./Login.css"

export function Login() {
    return (
      
        <div className="fundo">
            <div className="login">
                <form action="" className="arealogin">
                    
                    <span>Email</span><br />
                    <input className="campo" type="email" placeholder="Digite seu e-mail..." /><br /><br />             
                    <span>Senha</span><br />
                    <input className="campo" type="password" placeholder="Digite sua senha..." /><br /><br />
                    
                    <button className="btnsenha">Senha</button>
                </form>






  
            </div>
        </div>
     
    );
}
