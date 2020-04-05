import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

//PARAMETROS AXIOS
const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";
const tokenAutenticacao = 'EduardoCosta'

//INICIO CSS
const DivCadastro = styled.div`
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    input, button {
        margin-bottom: 10px;
        padding: 5px;
        border-radius: 2px;
        border: 1pt solid #7C7C7C;
    }
}
`
const DivErro = styled.div`
background-color: red;
`
const DivSucesso = styled.div`
background-color: green;
`
//FIM CSS

class Cadastra extends Component {
    constructor(){
        super();
        this.state = {
            inputNome: "",
            inputEmail: "",
            mostraForm: true,
            mostraInformacao: false,
            tipoInfo: "",
            infoMsg: ""
        };
    }
    // INICIO API
    cadastrarUsuario = () => {
        const novoCadastro = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }
        const cadastraUsuario = axios.post(`${baseUrl}/users/createUser`, novoCadastro, {
            headers: {
                "api-token": tokenAutenticacao,
            }
        })
        cadastraUsuario.then(response => {
            this.setState({
                inputNome: "",
                inputEmail: "",
                mostraInformacao: true,
                tipoInfo: "DivSucesso",
                infoMsg: "Usuário cadastrado com sucesso!"
            })
        }).catch(error => {
            this.setState({
                tipoInfo: "erro",
                infoMsg: `DivErro ${error.response.status} - ${error.response.data.message}`,
                mostraInformacao: true,
            })
            console.log(error.response)
            console.log(this.state.tipoInfo)
        })
    }
    // FIM API

    //INICIO FUNCAO
    inputNomeAtualiza = (event) => {this.setState({inputNome: event.target.value})}
    inputEmailAtualiza = (event) => {this.setState({inputEmail: event.target.value})}
    escondeInfo = () => {
        this.setState({
            mostraInformacao: false,
            tipoInfo: "",
            infoMsg: ""
        })
    }
    //FIM FUNCAO

    render() {
        //INICIO RENDERIZACOES
        const formCadastro = (
            <div>
                <label htmlFor="cadastroNome">Nome:</label>
                <input type="text" name="cadastroNome" onChange={this.inputNomeAtualiza} value={this.state.inputNome}></input>
                <label htmlFor="cadastroEmail">E-mail:</label>
                <input type="email" name="cadastroEmail" onChange={this.inputEmailAtualiza} value={this.state.inputEmail}></input>
                <button onClick={this.cadastrarUsuario}>Cadastrar</button>
            </div>
        )
        const informaUsuario = (
            <div onClick={this.escondeInfo}>
                <p>{this.state.infoMsg}</p>
            </div>
        )

        //FIM RENDERIZACOES
        return (
            <DivCadastro>
                {this.state.mostraForm ? formCadastro : ""}
                {this.state.mostraInformacao ? informaUsuario : ""}
            </DivCadastro>
        );
    }
}
export default Cadastra;