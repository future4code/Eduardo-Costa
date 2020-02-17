import React from 'react';
import './App.css';
import Postagem from './components/Postagem/Postagem';
import styled from 'styled-components'
import addIconPlus from './images/addplus.svg'
import addIconX from './images/addx.svg'


class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          arrayDePosts:  [
          {nomeUser: "Nome do usuário", imgUser: "https://image.flaticon.com/icons/svg/145/145843.svg", imgPost: "https://img.estadao.com.br/resources/jpg/7/9/1567461089497.jpg"}, 
          ],
        addPost: false,
        addIcon: addIconPlus
      }
  }

  mostraForm = (mostra) => {
    if (mostra) {
        return (
            <div className="container-comentario">
                <input type="text" id="autor" placeholder="Nome do Autor"/>
                <input type="text" id="fotoautor" placeholder="Foto do autor"/>
                <input type="text" id="postagem" placeholder="Foto da postagem"/>
                <button onClick={this.atualizaArrayDePosts}>Comentar</button>
            </div>
        )
    }
}
addPost = () => {
  this.setState({
      addPost: true,
      addIcon: addIconX,
  })
}

atualizaArrayDePosts = () => {
  const arrayDePostsCopia = [...this.state.arrayDePosts]
  const novoPostAutor = document.getElementById('autor').value
  const novoPostFotoAutor = document.getElementById('fotoautor').value
  const novoPostPostagem = document.getElementById('postagem').value
  arrayDePostsCopia.push({nomeUser: novoPostAutor, imgUser: novoPostFotoAutor, imgPost: novoPostPostagem})
  
  this.setState({
    arrayDePosts: arrayDePostsCopia,
    addPost: false,
    addIcon: addIconPlus,
  })
}


render() {
  return (
    <div className="App">
      <img onClick={this.addPost} src={this.state.addIcon} />
      {this.mostraForm(this.state.addPost)}
      {this.state.arrayDePosts.map(elemento => {
        return (
          <Postagem 
            key={this.state.arrayDePosts.indexOf(elemento)} 
            imgUser={elemento.imgUser} 
            nomeUser={elemento.nomeUser}
            imgPost={elemento.imgPost}
          />
        )
      })}
    </div>
  );
}
}

export default App;