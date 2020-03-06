import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'

const baseURL = "https://dadosabertos.camara.leg.br/api/v2";

const ListaGastos = styled.div`
display: flex;
flex-direction: column;
text-align: left;
`
const DetalhaLat = styled.div`
display: flex;
flex-direction: row;
text-align: left;
img {
    width: 100px;
}
`

class Comparacao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            despesasDeput: [],
            dadosDeput: [],
            mostraLoadingDetalhes: true,
            gastosDepSelec: [],
            catSelecUser: "",
            valorSelecUser: "",
            mostraComparacao: false,
            indexCat: ""
        }
        }
    
        componentDidMount(){
            this.carregaDespesasDeputado();
            this.carregaDetalhesDeputado();
            }
    
        carregaDespesasDeputado = async () => {
            const response = await axios.get(`${baseURL}/deputados/${this.props.deputadoGerado}/despesas`);
            this.setState({ despesasDeput: response.data.dados })
            this.somaCategorias(this.state.despesasDeput)
            this.atualizarSelecaoCatEValor()
    
        }
        carregaDetalhesDeputado = async () => {
            const response = await axios.get(`${baseURL}/deputados/${this.props.deputadoGerado}`);
            const detalhes = {
                nome: response.data.dados.ultimoStatus.nome,
                foto: response.data.dados.ultimoStatus.urlFoto,
                partido: response.data.dados.ultimoStatus.siglaPartido,
                uf: response.data.dados.ultimoStatus.siglaUf,
                email: response.data.dados.ultimoStatus.email,
                tel: response.data.dados.ultimoStatus.gabinete.telefone
            }
            this.setState({ dadosDeput: detalhes, mostraLoadingDetalhes: false })
        }
        somaCategorias = (obj) => {
            //gera categoria de despesas
            let categorias = []
            for(var i=0; i<obj.length; i++) {
                let termoTeste = obj[i].tipoDespesa
                if (categorias.indexOf(termoTeste) === -1) {
                    categorias.push(termoTeste)
                }
            }
            //filtra as despesas por categoria
            let arrayParaState = [];
            for(var i=0; i<categorias.length; i++) {
                const catNome = categorias[i];
                const objFiltrado = obj.filter(item => 
                    item.tipoDespesa === this.props.categoriaSelecionada)
                    //Soma os valores ja filtrados
                    let valorGeral = objFiltrado.reduce((acumulador, atual) => {
                        return acumulador + atual.valorLiquido
                    }, 0)
                    arrayParaState.push({categoria: catNome, gasto: valorGeral})
            }
            this.setState({gastosDepSelec: arrayParaState})
        }
    
        atualizarSelecaoCatEValor = (event) => {
            const nomeCat = this.props.categoriaSelecionada
            let gastoCat = this.state.gastosDepSelec[0].gasto
            this.setState({
                catSelecUser: nomeCat,
                valorSelecUser: gastoCat,
                mostraComparacao: true
            })
        }
    render() {
        const userGanhou = (
            <p>Parabéns! Você ganhou!</p>
        )
        const botGanhou = (
            <p>Dessa vez você perdeu! Mais sorte na próxima!</p>
        )

        const listagem = (
            <div>
                <DetalhaLat>
                <div>
                    <img src={this.state.dadosDeput.foto}/>
                    <p>Nome: {this.state.dadosDeput.nome}</p>
                    <p>Partido: {this.state.dadosDeput.partido}</p>
                    <p>Deputado por (UF): {this.state.dadosDeput.uf}</p>
                    <p>E-mail: {this.state.dadosDeput.email}</p>
                    <p>Telefone: {this.state.dadosDeput.tel}</p>
                </div>
                <div>
                    <ListaGastos>
                        {this.state.gastosDepSelec.map((item, key) =>
                        <div key={key} id={key} onClick={this.atualizarSelecaoCatEValor}>Categoria: {item.categoria} - R$ {item.gasto.toFixed(2).toString().replace(".",",")}</div>
                        )}
                    </ListaGastos>
                </div>
                </DetalhaLat>
                <div>
                    <p>Você selecionou a categoria {this.props.categoriaSelecionada}</p>
                    <p>Seu deputado gastou {this.props.valorSelecionado} nessa categoria</p>
                    <p>O deputado escolhido pelo sistema gastou {this.state.valorSelecUser} nessa categoria</p>
                    {this.state.valorSelecUser > this.props.valorSelecionado ? userGanhou : botGanhou}
                </div>
            </div>
        )

        return (
            <div>
                {listagem}
            </div>
        );
    }
}

export default Comparacao;