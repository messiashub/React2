import React from 'react';
import { Link} from 'react-router-dom';


const Navegacao = ()=>{
    return(
        <div>
            <Link to="/">Home</Link>|
            <Link to="/servicos">Serviços</Link>|
            <Link to="/contatos">Contato</Link>
        </div>
    )
}






export default Navegacao;