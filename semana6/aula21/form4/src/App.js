import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        mostraEtapa1: true,
        mostraEtapa2: false,
        mostraEtapa3: false,
        mostraEtapa4: false,
        respNome: "",
        respIdade: "",
        respEmail: "",
        respEnsino: "",
        respEnsinoT: "",
        respCurso: "",
        respUnidade: "",
        respNTermino: "",
        respCursoComplementar: "",
        respCursoComplementarT: "",
        mostraValidacaoNome: false,
        mostraValidacaoIdade: false,
        mostraValidacaoEmail: false,
        mostraValidacaoEnsino: false,
        mostraValidacaoCurso: false,
        mostraValidacaoUnidade: false,
        mostraValidacaoNTermino: false,
        mostraValidacaoCursoComplementar: false,
      }
  }
  btnEtapa1 = () => {
    let respNome = document.getElementById("nome").value
    let respIdade = document.getElementById("idade").value
    let respEmail = document.getElementById("email").value
    let respEnsino = document.getElementById("escolaridade").value
    let respEnsinoX = document.getElementById("escolaridade")
    let respEnsinoT = respEnsinoX.options[respEnsinoX.selectedIndex].text
    let mostraEtapa2 = false
    let mostraEtapa3 = false
    console.log(respNome,respIdade,respEmail,respEnsino)
    console.log(this.state)
    if ((respNome == "") || (respIdade == "") || (respEmail == "") || (respEnsino == 0)) {
      console.log("vazio")
      if(respNome == "") {
        this.setState({
          mostraValidacaoNome: true,
        })
      }
      if(respIdade == "") {
        this.setState({
          mostraValidacaoIdade: true,
        })
      }
      if(respEmail == "") {
        this.setState({
          mostraValidacaoEmail: true,
        })
      }
      if(respEnsino == "") {
        this.setState({
          mostraValidacaoEnsino: true,
        })
      }
      alert("Você precisa preencher todos os campos")
    } else {
      console.log("outra")
      if (respEnsino == 1) {
        mostraEtapa2 = false
        mostraEtapa3 = true
      } else if (respEnsino == 2){
        mostraEtapa2 = true
        mostraEtapa3 = false
      }
      this.setState({
        mostraEtapa1: false,
        mostraEtapa2: mostraEtapa2,
        mostraEtapa3: mostraEtapa3,
        mostraEtapa4: false,
        respNome: respNome,
        respIdade: respIdade,
        respEmail: respEmail,
        respEnsino: respEnsino,
        respEnsinoT: respEnsinoT
      })
    }
  }
  btnEtapa2 = () => {
    console.log(this.state)
    let respCurso = document.getElementById("curso").value
    let respUnidade = document.getElementById("unidade").value
    if ((respCurso != "") && (respUnidade != "")) {
      this.setState({
        mostraEtapa1: false,
        mostraEtapa2: false,
        mostraEtapa3: false,
        mostraEtapa4: true,
        respCurso: respCurso,
        respUnidade: respUnidade
      })
    } else {
      if(respCurso == "") {
        this.setState({
          mostraValidacaoCurso: true,
        })
      }
      if(respUnidade == "") {
        this.setState({
          mostraValidacaoUnidade: true,
        })
      }
      alert("Você precisa preencher todos os campos")
    }
  }

  btnEtapa3 = () => {
    console.log(this.state)
    let respNTermino = document.getElementById("ntermino").value
    let respCursoComplementar = document.getElementById("cursocompl").value
    let respCursoComplementarX = document.getElementById("cursocompl")
    let respCursoComplementarT = respCursoComplementarX.options[respCursoComplementarX.selectedIndex].text
  
    if ((respNTermino != "") && (respCursoComplementar != "")) {
      this.setState({
        mostraEtapa1: false,
        mostraEtapa2: false,
        mostraEtapa3: false,
        mostraEtapa4: true,
        respNTermino: respNTermino,
        respCursoComplementar: respCursoComplementar,
        respCursoComplementarT: respCursoComplementarT
      })
    } else {
      if(respNTermino == "") {
        this.setState({
          mostraValidacaoNTermino: true,
        })
      }
      if(respCursoComplementar == "") {
        this.setState({
          mostraValidacaoCursoComplementar: true,
        })
      }
      alert("Você precisa preencher todos os campos")
    }
  }

  render() {
    const codEtapa1 = (
      <div id="etapa1">
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <label for="nome">Qual o seu nome?</label>
        <label className="obrigatorio">{this.state.mostraValidacaoNome ? "*Obrigatório" : ""}</label>
        <input type="text" className="textBox" id="nome" required></input>
        <label for="idade">Qual sua idade?</label>
        <label className="obrigatorio">{this.state.mostraValidacaoIdade ? "*Obrigatório" : ""}</label>
        <input type="number" className="textBox" id="idade"></input>
        <label for="email">Qual seu e-mail?</label>
        <label className="obrigatorio">{this.state.mostraValidacaoEmail ? "*Obrigatório" : ""}</label>
        <input type="email" className="textBox" id="email"></input>
        <label for="escolaridade">Qual sua escolaridade?</label>
        <label className="obrigatorio">{this.state.mostraValidacaoEnsino ? "*Obrigatório" : ""}</label>
        <select className="textBox" id="escolaridade">
          <option value="">Selecione...</option>
          <option value="1">Ensino médio incompleto</option>
          <option value="1">Ensino médio completo</option>
          <option value="2">Ensino superior incompleto</option>
          <option value="2">Ensino superior completo</option>
        </select>
        <button className="btn" id="btn1" onClick={this.btnEtapa1} >Proxima etapa</button>
      </div>
    )
    const codEtapa2 = (
      <div id="etapa2">
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <label for="curso">Qual o curso?</label>
        <label className="obrigatorio">{this.state.mostraValidacaoCurso ? "*Obrigatório" : ""}</label>
        <input type="text" className="textBox" id="curso"></input>
        <label for="unidade">Qual a unidade de ensino?</label>
        <label className="obrigatorio">{this.state.mostraValidacaoUnidade ? "*Obrigatório" : ""}</label>
        <input type="text" className="textBox" id="unidade"></input>
        <button className="btn" id="btn2" onClick={this.btnEtapa2} >Proxima etapa</button>
      </div>
    )
    const codEtapa3 = (
      <div id="etapa3">
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <label for="ntermino">Por que você não terminou um curso de graduação?</label>
        <label className="obrigatorio">{this.state.mostraValidacaoNTermino ? "*Obrigatório" : ""}</label>
        <input type="text" className="textBox" id="ntermino"></input>
        <label for="cursocompl">Você fez algum curso complementar?</label>
        <label className="obrigatorio">{this.state.mostraValidacaoCursoComplementar ? "*Obrigatório" : ""}</label>
        <select className="textBox" id="cursocompl">
          <option value="">Nenhum</option>
          <option value="1">Curso técnico</option>
          <option value="2">Curso de inglês</option>
        </select>
        <button className="btn" id="btn3" onClick={this.btnEtapa3} >Proxima etapa</button>
      </div>
    )
    const codEtapa4 = (
      <div id="etapa4">
        <h3>O FORMULARIO ACABOU</h3>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </div>
    )

      return(
          <div className="App">
            <div className="conteiner">
            {this.state.mostraEtapa1 ? codEtapa1 : ""}
            {this.state.mostraEtapa2 ? codEtapa2 : ""}
            {this.state.mostraEtapa3 ? codEtapa3 : ""}
            {this.state.mostraEtapa4 ? codEtapa4 : ""}
            </div>
          </div>
      )
  }
}

export default App;