
import Titulo from './components/Titulo'
import Perguntas from './components/Perguntas'
import React, { Component } from 'react';
import './App.css';

import img_p1 from "./components/perg1.jpg"
import img_p2 from "./components/perg2.jpg"
import img_p3 from "./components/perg3.jpg"
import img_p4 from "./components/perg4.jpg"
import img_p5 from "./components/perg5.jpg"
import VLibras from "@djpfs/react-vlibras"


const name = "Pedro Henrique Cavalhieri Contessoto";

const imgs = [img_p1,img_p2,img_p3,img_p4,img_p5]

const resp_1 = ['Me considero um jovem com metas de tornar-me um profissional voltado à área de ciber-segurança. ',
                'Acerca de minha vida pessoal, passei por diversas mudanças de cidades que possibilitaram amadurecimento, ',
                'capacidade de adaptação  e facilidade com relações interpessoais.']
const resp_2 = ['Acredito no potencial daqueles que batalham por seus objetivos, e levo isso como uma das minha ideologias de vida, ',
                'na qual opto por como supracitado, adaptar-me a diferentes cenários, ',
                'conhecer diferentes contextos e jamais me manter em um patamar de estagnação. ']
const resp_3 = ['Tenho como aspiração a evolução tanto profissional acerca do desenvolvimento de minhas capacidades, ',
                'com entusiasmo e dinamismo, quanto também evoluir no âmbito pessoal, através da percepção do reconhecimento do ',
                'meu esforço por parte dos meus colegas de equipe e pares, além de obter a realização pessoal de compreender que cheguei onde sempre quis estar.']
const resp_4 = ['Considero que a curto prazo meu propósito seja concluir com eficiência minha formação acadêmica e a partir disso evoluir ',
                'cada vez mais enquanto profissional. Visando, como anteriormente citado, a realização de objetivos profissionais e pessoais. ',
                'Para além disso em virtude do caráter dinâmico da minha personalidade, viso nunca ficar parado, mas sim, continuar trocando metas de curto, ',
                'médio e longo prazo com o objetivo de estar em constante evolução e crescimento. ']
const resp_5 = ['Estou buscando através de encontrar oportunidades nas quais eu possa aplicar todo entusiasmo que possuo para aprender e aprimorar meus conhecimentos, ',
                'construindo bons contatos e relações ao longo do processo. Considerando a oportunidade que a empresa demonstra através de inúmeras conquistas, ',
                'tal qual atingir o patamar de unicórnio , vejo a possibilidade de contribuir positivamente o que me for solicitado, sempre com dinamismo e colaboração. ',
                'Tenho alguns contatos que já trabalham no ambiente da empresa e através do feedback que são trazidos até mim, percebo que, ',
                'uma vez que os considero ótimos profissionais comprometidos com os objetivos da empresa, ',
                'percebo que posso também me encaixar no perfil exigido e ofertar com o máximo de excelência tudo que me for proposto considerando a existência dessa possibilidade.']

const per_and_resp = {'Quem sou eu ?':[resp_1, imgs[0]],'No que eu acredito ?':[resp_2, imgs[1]],'Qual a minha aspiração ?':[resp_3, imgs[2]],'Qual o meu propósito ?':[resp_4, imgs[3]],'Como estou buscando meu propósito e aspiração através dessa oportunidade ?':[resp_5, imgs[4]]}

const renderList =  Object.entries(per_and_resp).map( ([key, value]) => 
                      <Perguntas pergunta={key} respostas={value[0]} foto={value[1]}></Perguntas>
              )

class App extends Component {
  render() {
    return (
      <div className='App'>
        <VLibras />
        <div className="App-header">
          <div className="title">
              <Titulo name={name}></Titulo>
          </div>
          <div className="perguntas">
            {renderList}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

