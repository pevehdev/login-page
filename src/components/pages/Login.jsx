import {Link} from "react-router-dom";
import logo from "../../assets/react.svg";
import "../../global.css"

export default function Login(){
    return <div className="container">
        <header className="header">
            <img src={logo} alt="reactIcone" />
            <span>Entre com suas credenciais</span>
        </header>
        <form >
            <div className="inputContainer">
                <label htmlFor="email" > E-nail</label>
                <input type="text" name="email" id="email" placeholder="johndoe@gmail.com" />
            </div>

            <div className="inputContainer">
                <label htmlFor="password" > Password</label>
                <input type="password" name="password" id="password" placeholder="**********" />
            </div>

            <a href="#"> Esqueceu sua senha?</a>
            <button className="button">
                Se conectar <img src="#" alt="" />
            </button>
            <div className="footer">
            <p>Não possui uma conta?</p>
            <a href="#">Criar uma conta</a>
            </div>
        </form>
    </div>

    
}