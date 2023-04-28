import { Link } from "react-router-dom";
import logo from "../../../assets/react.svg";
import "./styles.css"
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../../services/firebaseConfig";
import { useAuthState } from 'react-firebase-hooks/auth';


export function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    
    if (loading) {
        return <p>Carregando...</p>;
    }
    
    if (user) {
        return (
            <div>
                <p>Usuário Cadastrado: {user.user.email}</p>
            </div>
        );
    }
    
    function handleSignOut(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className="container">
            <header className="header">
                <img src={logo} alt="reactIcone" />
                <span>Entre com suas informações de cadastro</span>
            </header>
            <form >
                <div className="inputContainer">
                    <label htmlFor="email" > E-nail</label>
                    <input type="text" name="email" id="email" placeholder="johndoe@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="inputContainer">
                    <label htmlFor="password" > Password</label>
                    <input type="password" name="password" id="password" placeholder="**********" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button className="button" onClick={handleSignOut}>
                    Cadastrar <img src="#" alt="" />
                </button>
                <div className="footer">
                    <p>Não possui uma conta?</p>
                    <a href="#">Criar uma conta</a>
                </div>
            </form>
        </div>
    );
    ;

}