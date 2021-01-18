import React, { Component } from 'react';
import Filho from './componentes2/Filho';

class App extends Component {
  state = {
    nome:"João"
  }
  
  Alterar = (novoNome)=>{
    this.setState({
      nome:novoNome
    })
  }
 

  render() {
    return (
      <div>
        <h3>Pai</h3>
        <p>Nome: {this.state.nome}</p>       
        <hr />

        <Filho funcaoAlterar ={this.Alterar} />

      </div>
    );
  }
}

export default App;
