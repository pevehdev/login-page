import {Link} from "react-router-dom"
export default function Home(){
    return(
        <>
        
        <Link to="/">
            <button className="botao" type="submit">Ir para tela de login</button>
        </Link>
        </>
    );
}