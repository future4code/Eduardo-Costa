import React, { Component } from 'react';
import styled from 'styled-components';
import Deputados from './components/deputados/Deputados'

const WrapperStart = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
text-align: center;
background-color: rgb(0,0,0, .3);
`
const WrapperPagInicio = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
text-align: center;
button {
  padding: 5px;
}
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostraInicio: true,
      mostraTelaSelecao: false
    }
  }

  btnStart = () => {
    {this.setState({
      mostraInicio: false,
      mostraTelaSelecao: true
    })}
  }

  render() {

    const pagInicio = (
      <WrapperPagInicio>
        <h5>Como funciona?</h5>
        <p>Passo 1: Na próxima tela você deve escolher um deputado, e então uma categoria de despesa</p>
        <p>Passo 2: O sistema vai escolher outro deputado para competir com o seu escolhido</p>
        <p>Passo 3: Então fazemos a comparação do valor das despesas informadas na categoria pelos 2 deputados, e o que gastou menos ganha a rodada</p>
        <button onClick={this.btnStart}>Iniciar</button>


        <h5>Todas as informações utilizadas estão sendo capturadas do sistema "Dados abertos" da câmara dos deputados.</h5>
      </WrapperPagInicio>
    )
    const pagSelecao = (
      <div>
        <Deputados/>
      </div>
    )
    return (
    <WrapperStart className="App">
      <h1>Super Trunfo de despesas dos Deputados</h1>
      {this.state.mostraInicio ? pagInicio : ""}
      {this.state.mostraTelaSelecao ? pagSelecao : ""}
    </WrapperStart>
    );
  }
}
export default App;