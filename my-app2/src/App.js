import React, { Component } from 'react';
import Navegacao from './componentes/Navegacao';
import Home from './componentes/Home';
import Contatos from './componentes/Contatos';
import Servicos from './componentes/Servicos';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navegacao />

                    <Route path="/"><Home /></Route>
                    <Route path="/servicos"><Servicos /></Route>
                     <Route path="/contatos"><Contatos /></Route>
                </div>
            </Router>
        )
    }
}





export default App;
