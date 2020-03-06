import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import Comparacao from '../Comparacao/Comparacao'

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

class Detalhes extends Component {
    constructor(props) {
    super(props);
    this.state = {
        mostraInicio: true,
        despesasDeput: [],
        dadosDeput: [],
        mostraLoadingDetalhes: true,
        mostraLoadingDespesas: true,
        gastosDepSelec: [],
        catSelecUser: "",
        valorSelecUser: "",
        mostraComparacao: false
    }
    }

    componentDidMount(){
        this.carregaDespesasDeputado();
        this.carregaDetalhesDeputado();
        }

    carregaDespesasDeputado = async () => {
        const response = await axios.get(`${baseURL}/deputados/${this.props.idRecebido}/despesas`);
        this.setState({ despesasDeput: response.data.dados, mostraLoadingDespesas: false })
        this.somaCategorias(this.state.despesasDeput)

    }
    carregaDetalhesDeputado = async () => {
        const response = await axios.get(`${baseURL}/deputados/${this.props.idRecebido}`);
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
                item.tipoDespesa === categorias[i])
                //Soma os valores ja filtrados
                let valorGeral = objFiltrado.reduce((acumulador, atual) => {
                    return acumulador + atual.valorLiquido
                }, 0)
                arrayParaState.push({categoria: catNome, gasto: valorGeral})
        }
        this.setState({gastosDepSelec: arrayParaState})
    }

    atualizarSelecaoCatEValor = (event) => {
        const nomeCat = this.state.gastosDepSelec[event.target.id].categoria
        const gastoCat = this.state.gastosDepSelec[event.target.id].gasto
        console.log(event.target.id)
        console.log(event.target.id)
        this.setState({
            catSelecUser: nomeCat,
            valorSelecUser: gastoCat,
            mostraComparacao: true
        })
    }
    render() {
        const loadingDespesa = (
            <div>
                <h3>Carregando detalhes das despesas do deputado selecionado...</h3>
            </div>
        )
        const detalhamento = (
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
                    <h5>Selecione uma categoria de gastos:</h5>
                    <p>Para que você vença o jogo, o valor do gasto da categoria escolhida tem que ser menor na comparação com a mesma categoria do deputado que o sistema vai escolher</p>
                    {this.state.mostraLoadingDespesas ? loadingDespesa : "" }
                    <ListaGastos>
                        {this.state.gastosDepSelec.map((item, key) =>
                        <div key={key} id={key} onClick={this.atualizarSelecaoCatEValor}>Categoria: {item.categoria} - R$ {item.gasto.toFixed(2).toString().replace(".",",")}</div>
                        )}
                    </ListaGastos>
                </div>
            </DetalhaLat>
        )
        const loadingDetalhes = (
            <div>
                <h3>Carregando detalhes do deputado selecionado...</h3>
            </div>
        )
        const pagCompara = (
            <div>
                <Comparacao
                deputadoGerado={this.props.idGerado}
                categoriaSelecionada={this.state.catSelecUser}
                valorSelecionado={this.state.valorSelecUser}
                />
            </div>
        )
        return (
            <div>
                {this.state.mostraLoadingDetalhes ? loadingDetalhes : detalhamento}
                {this.state.mostraComparacao ?  pagCompara : ""}
            </div>
        );
    }
}

export default Detalhes;