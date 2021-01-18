import React, { Component } from 'react';

class Idade extends Component {
    render() {
        return (
            <div>
                <p>Nome:{this.props.nome}</p>
                <p>Apelido:{this.props.apelido}</p>
                Idade: 48 anos              
            </div>
        );
    }
}

export default Idade;