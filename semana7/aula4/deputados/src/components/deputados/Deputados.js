import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import Detalhes from '../Detalhes/Detalhes'

const baseURL = "https://dadosabertos.camara.leg.br/api/v2";

const WrapperStart = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`
const Wrapperdetails = styled.div`
display: flex;
flex-direction: row;
text-align: center;
justify-content: center;
`

class Deputados extends Component {
    constructor(props) {
    super(props)
    this.state = {
        listaDeputados: [],
        mostraDetalhes: false,
        deputSelecionadoUser: "",
        deputSelecionadoBot: "",
        mostraLoadingDeput: true,
        inputDeputado: ""
    }
    }

    componentDidMount(){
        this.carregaListaDeputados();
        }

    carregaListaDeputados = async () => {
        const response = await axios.get(`${baseURL}/deputados`);
        this.setState({ listaDeputados: response.data.dados, mostraLoadingDeput: false })
        this.geraAdversario()

        console.log(response.data)
    }

    selecionarDeput = () => {
        let idDoDeput = this.encontrarIdPeloNome(this.state.inputDeputado)
            this.setState({
            mostraDetalhes: true,
            deputSelecionadoUser: idDoDeput,
        })
    }
    encontrarIdPeloNome = (nomeSelecionado) => {
        let arr = this.state.listaDeputados
        for(var i=0; i<arr.length; i++) {
        if(arr[i].nome === nomeSelecionado) {
            return arr[i].id
        }
    }
    }
    geraAdversario = () => {
        let gerado = (Math.floor(Math.random() * 511)+1)
        this.setState({
            deputSelecionadoBot: gerado
        })
        let gerado2 = this.state.listaDeputados[this.state.deputSelecionadoBot].id
        this.setState({
            deputSelecionadoBot: gerado2
        })
    }

    gravaDeput = (event) => {
        console.log(event.target.value)
            this.setState({
                inputDeputado: event.target.value,
        })
    }

    render() {
        const listagem = (
            <div>
                <label htmlFor="listaDeput">Selecione seu deputado:</label>
                <input type="text" name="listaDeput" list="deput" onChange={this.gravaDeput}></input>
                <button onClick={this.selecionarDeput}>Pesquisa</button>
                    <datalist id="deput">
                        {this.state.listaDeputados.map((item, key) =>
                        <option key={key} label={item.id} value={item.nome} />
                        )}
                    </datalist>
            </div>
        )
        const detalhaDeput = (
            <div>
                <Detalhes
                idRecebido={this.state.deputSelecionadoUser}
                idGerado={this.state.deputSelecionadoBot}
                />
            </div>
        )
        const loadingDeput = (
            <div>
                <h3>Carregando listagem de deputados...</h3>
            </div>
        )
        return (
            <WrapperStart>
                <Wrapperdetails>
                    <div>
                        {this.state.mostraLoadingDeput ? loadingDeput : listagem}
                        {this.state.mostraDetalhes ? detalhaDeput :""}
                    </div>
                </Wrapperdetails>
            </WrapperStart>
        );
    }
}

export default Deputados;