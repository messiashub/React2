import React from 'react';
import App from '../App';
import Nome from './Nome';
import Sobrenome from './Sobrenome'
// 1 importar o react 

// 2 criar o componente
class Identificacao extends React.Component{
    render(){
        return(
            <div>
                <Nome/>
                <Sobrenome/>
            </div>
        )
    }
}

// 3 exportar o componente
export default Identificacao;