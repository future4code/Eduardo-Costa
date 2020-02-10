import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="cabecalho-conteiner">
        <a href="index.html">
            <header className="logo">
                <h1>FutureTube
                    <p className="autor">Eduardo Costa</p>
                </h1>
            </header>
        </a>
        <header className="busca">
            <input type="search" value=" Busca"></input>
        </header>
    </header>
    <div className="conteiner">
        <nav className="menu">
            <ul>
                <a href="index.html">
                    <li> Inicio</li>
                </a>
                <a href="">
                    <li> Em alta</li>
                </a>
                <a href="">
                    <li> Inscrições</li>
                </a>
                <a href="">
                    <li> Originais</li>
                </a>
                <a href="">
                    <li> Bibliotecas</li>
                </a>
                <a href="">
                    <li> Histórico</li>
                </a>
            </ul>
        </nav>
        <article>
            <div className="itens">
                <a href="play-1.html">
                    <div className="itens-main">
                        <div className="itens-main-titulo">
                            <p className="titulo-video">Titulo do video 1</p>
                        </div>
                        <div className="itens-main-conteudo">
                        <img src={require("./img/1.PNG")} alt=""></img>
                        </div>
                    </div>
                </a>
                <a href="play-2.html">
                    <div className="itens-main">
                        <div className="itens-main-titulo">
                            <p className="titulo-video">Titulo do video 2</p>
                        </div>
                        <div className="itens-main-conteudo">
                        <img src={require("./img/2.PNG")} alt=""></img>
                        </div>
                    </div>
                </a>
                <a href="play-3.html">
                    <div className="itens-main">
                        <div className="itens-main-titulo">
                            <p className="titulo-video">Titulo do video 3</p>
                        </div>
                        <div className="itens-main-conteudo">
                        <img src={require("./img/3.PNG")} alt=""></img>
                        </div>
                    </div>
                </a>
                <a href="play-4.html">
                    <div className="itens-main">
                        <div className="itens-main-titulo">
                            <p className="titulo-video">Titulo do video 4</p>
                        </div>
                        <div className="itens-main-conteudo">
                        <img src={require("./img/4.PNG")} alt=""></img>
                        </div>
                    </div>
                </a>
                <a href="play-5.html">
                    <div className="itens-main">
                        <div className="itens-main-titulo">
                            <p className="titulo-video">Titulo do video 5</p>
                        </div>
                        <div className="itens-main-conteudo">
                        <img src={require("./img/5.PNG")} alt=""></img>
                        </div>
                    </div>
                </a>
                <a href="play-6.html">
                    <div className="itens-main">
                        <div className="itens-main-titulo">
                            <p className="titulo-video">Titulo do video 6</p>
                        </div>
                        <div className="itens-main-conteudo">
                        <img src={require("./img/6.PNG")} alt=""></img>
                        </div>
                    </div>
                </a>
                <a href="play-7.html">
                    <div className="itens-main">
                        <div className="itens-main-titulo">
                            <p className="titulo-video">Titulo do video 7</p>
                        </div>
                        <div className="itens-main-conteudo">
                        <img src={require("./img/7.PNG")} alt=""></img>
                        </div>
                    </div>
                </a>
                <a href="play-8.html">
                    <div className="itens-main">
                        <div className="itens-main-titulo">
                            <p className="titulo-video">Titulo do video 8</p>
                        </div>
                        <div className="itens-main-conteudo">
                        <img src={require("./img/8.PNG")} alt=""></img>
                        </div>
                    </div>
                </a>
                <a href="play-9.html">
                    <div className="itens-main">
                        <div className="itens-main-titulo">
                            <p className="titulo-video">Titulo do video 9</p>
                        </div>
                        <div className="itens-main-conteudo">
                        <img src={require("./img/9.PNG")} alt=""></img>
                        </div>
                    </div>
                </a>
                <a href="play-10.html">
                    <div className="itens-main">
                        <div className="itens-main-titulo">
                            <p className="titulo-video">Titulo do video 10</p>
                        </div>
                        <div className="itens-main-conteudo">
                        <img src={require("./img/10.PNG")} alt=""></img>
                        </div>
                    </div>
                </a>
            </div>
        </article>

    </div>

    <footer>
        <p>Copyright 2020. Todos os direitos reservados.</p>
    </footer>
    </div>
  );
}

export default App;
