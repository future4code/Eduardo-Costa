import React, { Component } from 'react';
import Cadastra from './components/Cadastra/Cadastra';
import Lista from './components/Lista/Lista';


class App extends Component {
  constructor() {
    super();
    this.state = {
      mostraCadastro: true,
      mostraListaUsuarios: true
    }
  }

  render() {
    const cadastrarUsuario = (
    <Cadastra>

    </Cadastra>
    )

    const listarUsuarios = (
    <Lista>

    </Lista>
    )
    return (
    <div className="App">
    {this.state.mostraCadastro ? cadastrarUsuario : ""}
    {this.state.mostraListaUsuarios ? listarUsuarios : ""}
    </div>
    );
  }
}
export default App;