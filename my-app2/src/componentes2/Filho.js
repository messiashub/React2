import React, { Component } from 'react';

class Filho extends Component {

    Alterar = ()=>{
        // alterar o nome no Pai componente
        this.props.funcaoAlterar('esse é o novo nome');
    }

    render() {
        return (
            <div>
                <h3>Filho</h3> 
                <button onClick={this.Alterar}>Alterar</button>             
            </div>
        );
    }
}

export default Filho;
