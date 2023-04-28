import { Link } from "react-router-dom";
import logo from "../../../assets/react.svg";
import "./styles.css";
import { auth } from "../../../services/firebaseConfig";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    function handleSignIn(e) {
        e.preventDefault();
      signInWithEmailAndPassword(email, password)
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    
    if (loading) {
        return <p>Carreganndo...</p>;
    }
    
    if (user) {
        return (
            <div>
                <p>Usuário Logado: {user.user.email}</p>
            </div>
        );
    }

    return (
        <div className="container">
            <header className="header">
                <img src={logo} alt="reactIcone" />
                <span>Entre com suas credenciais</span>
            </header>
            <form >
                <div className="inputContainer">
                    <label htmlFor="email" > E-nail</label>
                    <input type="text" name="email" id="email" placeholder="johndoe@gmail.com"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="inputContainer">
                    <label htmlFor="password" > Password</label>
                    <input type="password" name="password" id="password" placeholder="**********" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <a href="#"> Esqueceu sua senha?</a>
                <button className="button" onClick={handleSignIn}>
                    Entrar <img src="#" alt="" />
                </button>
                <div className="footer">
                    <p>Não possui uma conta?</p>
                    <Link to='/register'>Criar uma conta</Link>
                </div>
            </form>
        </div>)




}