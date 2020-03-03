import React, { Component } from 'react';
import axios from 'axios';

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";
const tokenAutenticacao = 'EduardoCosta'


class Lista extends Component {
    constructor(){
        super();
        this.state = {
            listaDeUsuarios: [],
            mostraLista: true,
            mostraVoltar: true
        };
    }
    componentDidMount(){
        this.retornarUsuarios()
    }
    // INICIO API
    retornarUsuarios = () => {
        const listaUsuarios = axios.get(`${baseUrl}/users/getAllUsers`, {
            headers: {
                "api-token": tokenAutenticacao,
            }
        })
        listaUsuarios.then(response => {
            {this.setState({listaDeUsuarios: response.data.result})}
        }).catch(error => {
            console.log(error.response.data.message)
        })
    }
    apagarUsuarios = (idDoUsuario) => {
        const apagaUsuarios = axios.delete(`${baseUrl}/users/deleteUser?id=${idDoUsuario}`, {
            headers: {
                "api-token": tokenAutenticacao,
            }
        })
        apagaUsuarios.then(response => {
            this.retornarUsuarios()
        }).catch(error => {
            alert(`Erro ${error.response.status} - ${error.response.data.message}`)
        })
    }

    // FIM API

    render() {
        //INICIO RENDERIZACAO
        const lista = (
            <div>
                <ul>
                    { this.state.listaDeUsuarios.map((x) => (
                    <li key={x.id} >
                        {x.name}
                        <button onClick={() => this.apagarUsuarios(x.id)}>Deletar</button>
                        </li>
                    )) }
                </ul>
            </div>
        )
        const voltarBtn = (
            <div>
                Voltar para pagina inicial
            </div>
        )
        //FIM RENDERIZACAO
        return (
            <div>
                {this.state.mostraVoltar ? voltarBtn : ""}
                {this.state.mostraLista ? lista : ""}
            </div>
        );
    }
}
export default Lista;