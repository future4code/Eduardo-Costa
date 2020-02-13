import React from 'react';
import './App.css';
import  BigCard from './Components/BigCard/BigCard'
import  PageSection from './Components/PageSection/PageSection'
import SmallCard from './Components/SmallCard/Smallcard';
import ImgBtn from './Components/ImgBtn/ImgBtn';

function App() {
  return (
    <div className="App">
      <PageSection titulo="Dados Pessoais">
        <BigCard nome="Astrodev" imagem="https://ca.slack-edge.com/TLAVDH7C2-UQ3PFH9ED-cbd89e6bf2e2-512" texto="Oi, eu sou o Astrodev. Sou o chefe dos alunos da Future4. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho a eles."/>
        <SmallCard nome="Email: " imagem={require("../src/icons/mail.svg")} texto="future4code@gmail.com"/>
        <SmallCard nome="Endereço:" imagem={require("../src/icons/home-2.svg")} texto="Rua do futuro, 4"/>
        <ImgBtn texto="Ver mais" imagem={require("../src/icons/chevron-down.svg")}/>
      </PageSection>
      <PageSection titulo="Experiências profissionais">
        <BigCard nome="Future4" imagem={require("../src/icons/f4.PNG")} texto="Formando desenvolvedores para o futuro"/>
        <BigCard nome="Outsmart" imagem={require("../src/icons/outsmart.png")} texto="Criando apps incríveis para grandes clientes"/>
        </PageSection>
      <PageSection titulo="Minhas redes sociais">
        <ImgBtn texto="Facebook" imagem={require("../src/icons/facebook-square.svg")}/>
      </PageSection>
      <PageSection titulo="Autor">
        <BigCard nome="Eduardo Costa" imagem="https://ca.slack-edge.com/TLAVDH7C2-UQ3PFH9ED-cbd89e6bf2e2-512" texto="Olá! Meu nome é Eduardo, sou aluno de Web Full Stack da Future4 e estamos aprendendo no momento os fundamentos de React."/>
        <SmallCard nome="Email: " imagem={require("../src/icons/mail.svg")} texto="edujcosta@hotmail.com"/>
        <SmallCard nome="Contato:" imagem={require("../src/icons/whatsapp.svg")} texto="(11) 94975-4067"/>
        <ImgBtn texto="GitHub" imagem={require("../src/icons/github.png")} link="https://github.com/future4code/Eduardo-Costa"/> 
      </PageSection>
    </div>
  );
}

export default App;
