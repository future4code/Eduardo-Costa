import React, { Component } from 'react';
import Cadastra from './components/Cadastra/Cadastra';
import Lista from './components/Lista/Lista';
import styled from 'styled-components'

//INICIO CSS
const DivPai = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(235, 242, 250, 1);
color: #1D1E18;
width: 100vw;
height: 100vh;
h1, h3 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  }
`;
const DivInicio = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
background-color: rgba(66, 122, 161, 1);
div {
  background-color:  rgba(103, 148, 54, .5);
  color: rgba(235, 242, 250, 1);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: 1pt solid rgba(235, 242, 250, 1);
  width: 35%;
  height: 35%;
  align-self: center;
}
div:hover {
  opacity: 90%;
}
div > h3 {
  align-self: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  height: 0.01%;
}
`;
const DivMax = styled.div`
max-width: 900px;
width: 100%;
margin: 0 auto;
`
// FIM CSS


class App extends Component {
  constructor() {
    super();
    this.state = {
      mostraInicio: true,
      mostraCadastro: false,
      mostraListaUsuarios: false
    }
  }

  // INICIO FUNCAO

  // FIM FUNCAO

  render() {
    const inicio = (
      <DivInicio>
        <div onClick={() => this.setState({mostraCadastro: true, mostraListaUsuarios: false})}><h3>Cadastrar novo usuário</h3></div>
        <div onClick={() => this.setState({mostraCadastro: false, mostraListaUsuarios: true})}><h3>Listar usuários cadastrados</h3></div>
      </DivInicio>
    )
    const cadastrarUsuario = (
      <Cadastra/>
    )
    const listarUsuarios = (
      <Lista/>
      )
    const msgInicial = (
      <div>
        <h1>Sistema de cadastro de usuários</h1>
        <h3>Selecione uma opção acima para iniciar</h3>
      </div>
      )
    return (
    <DivPai className="App">
      <DivMax>
        {this.state.mostraInicio ? inicio : ""}
        {this.state.mostraCadastro ? cadastrarUsuario : ""}
        {this.state.mostraListaUsuarios ? listarUsuarios : ""}
        {this.state.mostraListaUsuarios || this.state.mostraCadastro === true ? "" : msgInicial}
      </DivMax>
    </DivPai>
    );
  }
}
export default App;