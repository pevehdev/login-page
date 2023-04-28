import {Link} from "react-router-dom";
import logo from "../../../assets/react.svg";
import "./styles.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../services/firebaseConfig";


export function Login(){
        
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [
          createUserWithEmailAndPassword,
          user,
          loading,
          error,
        ] = useCreateUserWithEmailAndPassword(auth);

        function handleSignIn(e){
            e.preventDefault();
            useCreateUserWithEmailAndPassword(email, password)
        }

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
                Entrar <img src="#" alt="" />
            </button>
            <div className="footer">
            <p>Não possui uma conta?</p>
            <Link to='/register'>Criar uma conta</Link>
            </div>
        </form>
    </div>

    
}