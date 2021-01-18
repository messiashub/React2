import React, { Component } from 'react';
import Filho from './componentes2/Filho';

class App extends Component {
  state = {
    nome: "João",
  }

  Alterar = () => {
    this.setState({
      nome: "Joaquim"
    })
  }

  render() {
    return (
      <div>
        <h3>Pai</h3>
        <button onClick={this.Alterar}>Alterar</button>
        <hr />

        <Filho nome={this.state.nome} />

      </div>
    );
  }
}

export default App;
