import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

//PARAMETROS AXIOS
const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";
const tokenAutenticacao = 'EduardoCosta'

//INICIO CSS
const DivLista = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 100%;
margin-top: 5px;
div{
    width: auto;
    margin: 5px;
}
`
const DivListaDeUsuarios = styled.div`
border: 1pt solid black;
padding: 0;
border-radius: 3px;
display: flex;
flex-direction: column;
align-items: center;
h4 {
    background-color: rgba(66, 122, 161, .3);
    width: 100%;
    margin: 0;
    text-align: center;
    padding: 5px 0 5px 0;
}
ul {
    list-style: none;
    width: 80%;
};
ul > li {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    border: 1pt solid lightgray;
    cursor: pointer;
}
ul > li:nth-child(even) {
    background-color: rgba(103, 148, 54, .1);
}
ul > li:nth-child(odd) {
    background-color: rgba(103, 148, 54, .2);
}
ul > li:hover {
    background-color: rgba(103, 148, 54, .5);
    font-weight: bold;
}
`
const DivBusca = styled.div`
border: 1pt solid black;
border-radius: 3px;
display: flex;
flex-direction: column;
h4 {
    background-color: rgba(66, 122, 161, .3);
    width: 100%;
    margin: 0;
    text-align: center;
    padding: 5px 0 5px 0;
    cursor: pointer;
}
div:nth-child(2) {
    display: flex;
    flex-direction: column;
    width: 60%;
}
`
const DivDetalhes = styled.div`
border: 1pt solid black;
border-radius: 3px;
h4 {
    background-color: rgba(66, 122, 161, .3);
    width: 100%;
    margin: 0;
    text-align: center;
    padding: 5px 0 5px 0;
    cursor: pointer;
}
`
const DivLupa = styled.div`
display: flex;
justify-content: flex-end;
h4 {
    background-color: rgba(66, 122, 161, .3);
    margin: 0;
    text-align: center;
    padding: 5px;
    border-radius: 3px;
    font-style: italic;
    cursor: pointer;
}
`
//FIM CSS

class Lista extends Component {
    constructor(){
        super();
        this.state = {
            listaDeUsuarios: [],
            mostraLista: true,
            mostraVoltar: false,
            mostraDetalhes: false,
            mostraEdicao: false,
            detalheDoUsuario: [],
            inputNomeEdicao: "",
            inputEmailEdicao: "",
            inputBusca: "",
            idEmEdicao: "",
            mostraBusca: false,
            resultadoPesquisa: [],
            selectValue: "name",
            loading: false
        };
    }
    componentDidMount(){
        this.retornarUsuarios()
    }
    // INICIO API
    retornarUsuarios = () => {
        {this.setState({loading: true})}
        const listaUsuarios = axios.get(`${baseUrl}/users/getAllUsers`, {
            headers: {
                "api-token": tokenAutenticacao,
            }
        })
        listaUsuarios.then(response => {
            const resultadoCru = response.data.result;
            const resultadoOrdenado = resultadoCru.sort((a,b) => {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)})
            {this.setState({listaDeUsuarios: resultadoOrdenado, loading: false})}
            }).catch(error => {
            console.log(error.response.data.message)
            if (error.response.data.message === "Users not found."){
                this.setState({
                    listaDeUsuarios: [],
                    loading: false
                })
            }
        })
    }
    apagarUsuarios = (idDoUsuario, nomeDoUsuario) => {
        if (window.confirm(`Tem certeza que deseja apagar o usuario: ${nomeDoUsuario}`)) {
            const apagaUsuarios = axios.delete(`${baseUrl}/users/deleteUser?id=${idDoUsuario}`, {
                headers: {
                    "api-token": tokenAutenticacao,
                }
            })
            apagaUsuarios.then(response => {
                this.retornarUsuarios()
                alert(`Usuario ${nomeDoUsuario} apagado com sucesso`)
            }).catch(error => {
                alert(`Erro ${error.response.status} - ${error.response.data.message}`)
            })
        } else {
            alert("ok, ação cancelada com sucesso.")
        }
    }
    detalharUsuario = (idDoUsuario) => {
        const detalheUsuario = axios.get(`${baseUrl}/users/getUser/${idDoUsuario}`, {
            headers: {
                "api-token": tokenAutenticacao,
            }
        })
        detalheUsuario.then(response => {
            {this.setState({detalheDoUsuario: response.data.result, idEmEdicao: idDoUsuario, mostraDetalhes: true})}
        }).catch(error => {
            console.log(error.response)
        })
    }
    editarUsuario = () => {
        const novosDados = {
            user: {
                id: this.state.idEmEdicao,
                name: this.state.inputNomeEdicao,
                email: this.state.inputEmailEdicao
            }
        }
        const editaUsuario = axios.put(`${baseUrl}/users/editUser`, novosDados, {
            headers: {
                "api-token": tokenAutenticacao,
                "Content-Type": "application/json",
            }
        })
        editaUsuario.then(response => {
            this.setState({
                mostraEdicao: false,
                inputNomeEdicao: "",
                inputEmailEdicao: ""
            })
            this.detalharUsuario(this.state.idEmEdicao)
            this.retornarUsuarios()
        }).catch(error => {
            this.setState({
                mostraEdicao: false,
            })
            console.log(error.response.data.message)
            console.log(error.response)
            console.log(novosDados.id)
            console.log(novosDados.name)
            console.log(novosDados.email)
        })
    }
    pesquisarUsuario = () => {
        const termo = this.state.inputBusca
        const tipo = this.state.selectValue
        const pesquisaUsuario = axios.get(`${baseUrl}/users/searchUsers?${tipo}=${termo}`, {
            headers: {
                "api-token": tokenAutenticacao,
            }
        })
        pesquisaUsuario.then(response => {
            {this.setState({resultadoPesquisa: response.data.result})}
            console.log(response.config.url)
            console.log(response)
            if (response.data.result.length === 0) {
                window.alert("Sua busca não encontrou resultados exatos")
            }
        }).catch(error => {
            console.log(error.response.data.message)
            console.log(error.response)
        })
    }
    // FIM API
    
    // INICIO FUNCAO
    inputNomeAtualiza = (event) => {this.setState({inputNomeEdicao: event.target.value})}
    inputEmailAtualiza = (event) => {this.setState({inputEmailEdicao: event.target.value})}
    inputPesquisaUsuario = (event) => {this.setState({inputBusca: event.target.value})}
    vervalor = (event) => {this.setState({selectValue: event.target.value})}
    // FIM FUNCAO

    render() {
        //INICIO RENDERIZACAO
        const lista = (
            <DivListaDeUsuarios>
                {this.state.listaDeUsuarios.length === 0 ? <h4>Sem usuários cadastrados</h4>: <h4>Usuários cadastrados:</h4>}
                <ul>
                    { this.state.listaDeUsuarios.map((x) => (
                    <li key={x.id} onClick={() => this.detalharUsuario(x.id)}>
                        {x.name}
                        <button onClick={() => this.apagarUsuarios(x.id, x.name)}>Deletar</button>
                        </li>
                    )) }
                </ul>
            </DivListaDeUsuarios>
        )
        const detalhesUsuario = (
            <DivDetalhes>
                {this.state.mostraEdicao ? <h4>Edição do usuário:</h4> : <h4>Detalhes do usuário:</h4>}
                {this.state.mostraEdicao ? <input type="text" onChange={this.inputNomeAtualiza} value={this.state.inputNomeEdicao}></input> : <p>Nome: <strong>{this.state.detalheDoUsuario.name}</strong></p>}
                {this.state.mostraEdicao ? <input type="text" onChange={this.inputEmailAtualiza} value={this.state.inputEmailEdicao}></input> : <p>Email: <strong>{this.state.detalheDoUsuario.email}</strong></p>}
                {this.state.mostraEdicao ?
                <button onClick={() => this.editarUsuario()}>Salvar</button>
                :
                <div>
                    <button onClick={() => this.setState({
                        mostraEdicao: true, 
                        inputNomeEdicao: this.state.detalheDoUsuario.name,
                        inputEmailEdicao: this.state.detalheDoUsuario.email,
                        })}>Alterar</button>
                    <button onClick={() => this.apagarUsuarios(this.state.detalheDoUsuario.id, this.state.detalheDoUsuario.name)}>Deletar</button>
                    <button onClick={() => this.setState({mostraDetalhes: false})}>Fechar detalhe</button>
                </div>
                }
            </DivDetalhes>
        )
        const buscar = (
            <DivBusca>
                <h4>Pesquisa de usuários</h4>
                <div>
                    <label htmlFor="buscax">Digite o termo exato:</label>
                    <select id="select" onChange={this.vervalor}>
                        <option value="name">Nome</option>
                        <option value="email">E-mail</option>
                    </select>
                    <input type="text" name="buscax" list="data" onChange={this.inputPesquisaUsuario} value={this.state.inputBusca}></input>
                    <datalist id="data">
                        {this.state.listaDeUsuarios.map((item, key) =>
                        <option key={key} value={item.name} />
                        )}
                    </datalist>
                </div>
                <div>
                    <button onClick={this.pesquisarUsuario}>Pesquisar</button>
                    <button onClick={() => this.setState({mostraBusca: false, resultadoPesquisa: [], inputBusca: ""})}>Cancelar pesquisa</button>
                </div>
            </DivBusca>
        )
        const buscarLupa = (
            <DivLupa>
                <h4 id="x" onClick={() => this.setState({mostraBusca: true})}>Pesquisar um usuário</h4>
            </DivLupa>
        )
        const resultadoBusca = (
            <DivListaDeUsuarios>
                {this.state.resultadoPesquisa.length === 0 ? "": <h4>Usuário encontrado:</h4>}
                <ul>
                    { this.state.resultadoPesquisa.map((x) => (
                    <li key={x.id} onClick={() => this.detalharUsuario(x.id)}>
                        {x.name}
                        <button onClick={() => this.apagarUsuarios(x.id, x.name)}>Deletar</button>
                        </li>
                    )) }
                </ul>
            </DivListaDeUsuarios>
        )
        const loadingMsg = (
            <p>Carregando lista...</p>
        )
        //FIM RENDERIZACAO
        return (
            <DivLista>
                <div>
                    {this.state.loading ? loadingMsg : ""}
                    {this.state.resultadoPesquisa.length >0 ? resultadoBusca : lista}
                </div>
                <div>
                    {this.state.mostraBusca ? buscar : buscarLupa}
                    {this.state.mostraDetalhes ? detalhesUsuario : ""}
                </div>                
            </DivLista>
        );
    }
}
export default Lista;