import React from 'react';
import ItemTarefa from './components/ItemTarefa/ItemTarefa';
import styled from 'styled-components'

const DivPrincipal = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
background-color: lightgray;
`
const DivMeio = styled.div`
margin: 10px;
border-radius: 10px;
display: flex;
flex-direction: column;
`
const BtnVermelho = styled.button`
background-color: #ff4040;
padding: 5px;
`
const BtnAzul = styled.button`
background-color: #40b9ff;
padding: 5px;
`
const Inputs = styled.input`
height: 20px;
`
class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        tarefas: [],
        inputTitulo: "",
        inputTituloEdicao: "",
        mostraAbertas: true,
        mostraFechadas: true,
        mostraTodas: true,
        mostraDados: true,
        mostraEdicao: true,
        ultimoIndexClicado: "",
        filtroSelect: "",
        mostraTodasSelect: "",
        mostraAbertasSelect: "",
        mostraFechadasSelect: "",
      }
  }

  
  componentDidMount() {
    const dadosArmazenadosString = localStorage.getItem("stateDeTarefas");
    const novoEstado = JSON.parse(dadosArmazenadosString);
    this.setState(novoEstado);
    this.setState({
      mostraTodasSelect: true,
      mostraAbertasSelect: false,
      mostraFechadasSelect: false,
    })
    }
  componentDidUpdate() {
    const limpaStorage = "";
    localStorage.setItem("stateDeTarefas", limpaStorage);
    const estadoComoString = JSON.stringify(this.state);
    localStorage.setItem("stateDeTarefas", estadoComoString);
    } 

  inputTituloTarefa = event => {
    this.setState({ inputTitulo: event.target.value });
  };
  inputTituloTarefaEdicao = event => {
    this.setState({ inputTituloEdicao: event.target.value });
  };
  inputTituloPesquisa = event => {
    this.setState({ inputtituloParaPesquisa: event.target.value });
  };

  adicionaNovaTarefa = event => {
    const arrayDeTarefasCopia = [...this.state.tarefas]
    const novaTarefaTitulo = this.state.inputTitulo
    arrayDeTarefasCopia.push({id: Date.now(), titulo: novaTarefaTitulo, concluida: false})
    this.setState({
      tarefas: arrayDeTarefasCopia,
      inputTitulo: "",
    })
  };
  editarTarefaBtn = () => {
    const arrayDeTarefasCopia = [...this.state.tarefas]
    const tituloNovo = this.state.inputTituloEdicao
    const indexDaTarefaEditada = this.state.ultimoIndexClicado
    arrayDeTarefasCopia[indexDaTarefaEditada].titulo = tituloNovo
    this.setState({
      tarefas: arrayDeTarefasCopia,
      inputTituloEdicao: "",
      ultimoIndexClicado: "",
    })
  };

  removerTarefaBtn = () => {
    const arrayDeTarefasCopia = [...this.state.tarefas]
    const indexDaTarefaRemover = this.state.ultimoIndexClicado
    const tituloNovo = this.state.inputTituloEdicao
    const remover = arrayDeTarefasCopia.splice(indexDaTarefaRemover, 1)
    if (window.confirm(`Tem certeza que deseja remover a tarefa: "${tituloNovo}"`)) {
      this.setState({
        tarefas: arrayDeTarefasCopia,
        inputTituloEdicao: "",
        ultimoIndexClicado: "",
      })
    } else {
      alert(`OK, ação cancelada`)
    }
  };

  removerTodasTarefasBtn = () => {
    const arrayDeTarefasCopia = []
    if (window.confirm(`Tem certeza que deseja remover todas as tarefas?`)) {
      this.setState({
        tarefas: arrayDeTarefasCopia,
        inputTituloEdicao: "",
        ultimoIndexClicado: "",
      })
    } else {
      alert(`OK, ação cancelada`)
    }
  };

	concluirTarefa = (idDaTarefa) => {
    function pesquisaIndice (idDaTarefa) {
      for(var i=0; i<arrayDeTarefasCopia.length; i++) {
        if(arrayDeTarefasCopia[i].id === idDaTarefa) {
            return i
        }}}
    const arrayDeTarefasCopia = [...this.state.tarefas]
    let indiceDaTarefa = pesquisaIndice(idDaTarefa)
    arrayDeTarefasCopia[indiceDaTarefa].concluida = !arrayDeTarefasCopia[indiceDaTarefa].concluida
    let tituloDaTarefa = arrayDeTarefasCopia[indiceDaTarefa].titulo
    this.setState({
      tarefas: arrayDeTarefasCopia,
      ultimoIndexClicado: indiceDaTarefa,
      inputTituloEdicao: tituloDaTarefa,
    })
      }
  
	filtrarPeloSelect = (event) => {
    console.log(`recebi: "${event.target.value}"`)
    if(event.target.value === "completas") {
      this.setState({
        mostraTodasSelect: false,
        mostraAbertasSelect: false,
        mostraFechadasSelect: true,
      })
    } else if(event.target.value === "abertas") {
      this.setState({
        mostraTodasSelect: false,
        mostraAbertasSelect: true,
        mostraFechadasSelect: false,
      })
    } else {
      if(event.target.value === "") {
        this.setState({
          mostraTodasSelect: true,
          mostraAbertasSelect: false,
          mostraFechadasSelect: false,
        })
      }
    }
      }

  render() {
    const arrayDeTarefasCopia = [...this.state.tarefas]
    const tarefasAbertas = arrayDeTarefasCopia.filter((concluida) => {
      return concluida.concluida === false
    })
    const tarefasFechadas = arrayDeTarefasCopia.filter((concluida) => {
      return concluida.concluida === true
    })
    const mostrarTarefasAbertas = (
      <div>
      {tarefasAbertas.map(elemento => {
        return (
          <ItemTarefa 
            key={tarefasAbertas.indexOf(elemento)}
            id={elemento.id} 
            titulo={elemento.titulo}
            concluida={elemento.concluida}
            aoClicarConcluir={this.concluirTarefa}
        />)
    })}
    </div>
    )
    const mostrarTarefasFechadas = (
      <div>
      {tarefasFechadas.map(elemento => {
        return (
          <ItemTarefa 
            key={tarefasFechadas.indexOf(elemento)}
            id={elemento.id} 
            titulo={elemento.titulo}
            concluida={elemento.concluida}
            aoClicarConcluir={this.concluirTarefa}
        />)
    })}
    </div>
    )
    const mostrarTodas = (
      <div>
      {arrayDeTarefasCopia.map(elemento => {
        return (
          <ItemTarefa 
            key={arrayDeTarefasCopia.indexOf(elemento)}
            id={elemento.id} 
            titulo={elemento.titulo}
            concluida={elemento.concluida}
            aoClicarConcluir={this.concluirTarefa}
        />)
    })}
    </div>
    )
    const inserirDadosTarefas = (
      <div>
            <h2>Adicionar tarefa</h2>
            <Inputs type="text" onChange={this.inputTituloTarefa} value={this.state.inputTitulo} />
            <BtnAzul onClick={this.adicionaNovaTarefa} >Adicionar</BtnAzul>
            <h2>Filtrar lista principal</h2>
            <select onChange={this.filtrarPeloSelect}>
              <option value="">Todas</option>
              <option value="completas">Completas</option>
              <option value="abertas">Abertas</option>
            </select>
    </div>
    )
    const edicaoDadosTarefas = (
      <div>
            <h2>Edição de tarefa</h2>
            <Inputs type="text" onChange={this.inputTituloTarefaEdicao} value={this.state.inputTituloEdicao} />
            <BtnAzul onClick={this.editarTarefaBtn} >Salvar/Sair da edição</BtnAzul>
            <BtnVermelho onClick={this.removerTarefaBtn} >Remover tarefa</BtnVermelho>
            <BtnVermelho onClick={this.removerTodasTarefasBtn} >Limpar lista de tarefas</BtnVermelho>
    </div>
    )
    return (
        <DivPrincipal>
          <DivMeio>
          <DivMeio>
          {this.state.mostraDados ? inserirDadosTarefas : ""}
          </DivMeio>
          <DivMeio>
          {this.state.mostraEdicao ? edicaoDadosTarefas : ""}
          </DivMeio>
          </DivMeio>
          <DivMeio>
            <h2>Lista de tarefas</h2>
            {this.state.mostraTodasSelect ? mostrarTodas : ""}
            {this.state.mostraAbertasSelect ? mostrarTarefasAbertas : ""}
            {this.state.mostraFechadasSelect ? mostrarTarefasFechadas : ""}
          </DivMeio>
          <DivMeio>
          <DivMeio>
          <hr></hr>
            <h2>Tarefas Abertas</h2>
            {this.state.mostraAbertas ? mostrarTarefasAbertas : ""}
          </DivMeio>
          <DivMeio>
            <hr></hr>
            <h2>Tarefas Concluidas</h2>
            {this.state.mostraFechadas ? mostrarTarefasFechadas : ""}
          </DivMeio>
          </DivMeio>
        </DivPrincipal>
    );
  }
  }
  
  export default App;
