import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";
const tokenAutenticacao = 'EduardoCosta'


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
                tipoInfo: "sucesso",
                infoMsg: "Usuário cadastrado com sucesso!"
            })
        }).catch(error => {
            console.log(error.response)
            this.setState({
                tipoInfo: "erro",
                infoMsg: `Erro ${error.response.status} - ${error.response.data.message}`,
                mostraInformacao: true,
            })
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
            <div>
                {this.state.mostraForm ? formCadastro : ""}
                {this.state.mostraInformacao ? informaUsuario : ""}
            </div>
        );
    }
}
export default Cadastra;