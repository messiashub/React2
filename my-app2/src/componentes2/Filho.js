import React, { Component } from 'react';

class Filho extends Component {
    render() {
        return (
            <div>
                <h3>Filho</h3>
                <p>Nome: {this.props.nome}</p>
                
            </div>
        );
    }
}

export default Filho;
