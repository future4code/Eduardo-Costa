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
border: 1pt solid black;
margin: 3px;
border-radius: 3px;
background-color: rgb(0,0,0, .2);
display: flex;
flex-direction: row;
text-align: left;
img {
    width: 100px;
    border-radius: 4px;
}
`
const DivCats = styled.div`
background-color: rgb(0, 0, 255, 0.1);
padding: 5px;
margin: 5px;
border-radius: 4px;
`
const Pmenor = styled.p`
font-style: italic;
font-size: smaller;
`
const Perdeu = styled.p`
background-color: red;
padding: 20px;
font-weight: bold;
`
const Ganhou = styled.p`
background-color: green;
padding: 20px;
font-weight: bold;
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
            indexCat: "",
            ganhadorUser: "",
            ganhadorBot: ""
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
            this.geraVencedor()
        }

        geraVencedor = () => {
            const valorUser = this.props.valorSelecionado
            const valorBot = this.state.valorSelecUser
            console.log(valorUser)
            console.log(valorBot)
            if (valorUser < valorBot ) {
                this.setState({ganhadorUser: true})
            } else {
                this.setState({ganhadorBot: false})
            }

        }
    render() {
        const userGanhou = (
            <Ganhou>Parabéns! Você ganhou!</Ganhou>
        )
        const botGanhou = (
            <Perdeu>Dessa vez você perdeu! Mais sorte na próxima!</Perdeu>
        )

        const listagem = (
            <div>
                <DetalhaLat>
                <div>
                    <img src={this.state.dadosDeput.foto}/>
                    <p>Nome: {this.state.dadosDeput.nome} - {this.state.dadosDeput.partido}/{this.state.dadosDeput.uf}</p>
                    <p>E-mail: {this.state.dadosDeput.email}</p>
                    <p>Telefone: {this.state.dadosDeput.tel}</p>
                </div>
                <div>
                    <ListaGastos>
                        {this.state.gastosDepSelec.map((item, key) =>
                        <DivCats key={key} id={key} onClick={this.atualizarSelecaoCatEValor}>Categoria: {item.categoria} - R$ <strong>{item.gasto.toFixed(2).toString().replace(".",",")}</strong></DivCats>
                        )}
                    </ListaGastos>
                </div>
                </DetalhaLat>
                <div>
                    <p>Você selecionou a categoria <strong>{this.props.categoriaSelecionada}</strong></p>
                    <p>Seu deputado gastou R$ <strong>{this.props.valorSelecionado.toFixed(2).toString().replace(".",",")}</strong> nessa categoria</p>
                    <p>O deputado escolhido pelo sistema gastou R$ <strong>{this.state.valorSelecUser}</strong> nessa categoria</p>
                    {this.state.ganhadorUser ? userGanhou : ""}
                    {this.state.ganhadorBot ? botGanhou : ""}
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