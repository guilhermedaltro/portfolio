
import Footer from './Components/Footer';
import Links from './Components/Link';
import Apresentacao from './Components/Apresentacao';
import React from 'react';
import Cartao from './Components/Card';
import './Components/Card.css';
import './App.css';

function App() {
  return (
    
    <div className='divPai'>
     <Links/>;
     <Apresentacao/>
    
      <div className='cards'>
      <Cartao titulo="POKEDEX" button="POKEDEX" link="https://pokedex2-five.vercel.app/" img="https://th.bing.com/th/id/R.f09fe0fe0d17cf51b087077c4f342cda?rik=s5AT7XRH%2bwc9Dg&riu=http%3a%2f%2fpm1.aminoapps.com%2f6314%2f67248b708c022a1b4a5cefda3a9afb74d27efc4d_00.jpg&ehk=X3ll%2bNA0yL%2fon0HnI0qhChFvE6gToFA0dh55i2vwbUI%3d&risl=&pid=ImgRaw&r=0"/>
      <Cartao titulo="LISTA" button="LISTA DE ALUNOS" link="https://github.com/guilhermedaltro/lista-alunos" img="https://static.vecteezy.com/system/resources/previews/026/153/948/non_2x/cartoon-to-do-list-icon-in-comic-style-checklist-task-list-sign-illustration-pictogram-reminder-business-splash-effect-concept-vector.jpg"/>
      <Cartao titulo="ATLETAS" button="PESQUISA DE ATLETAS" link="https://pesquisa-atletas-c7hs.vercel.app/" img="https://cdn.kikinote.net/gallery/kikinote/56eaa844458efc8be89ca2928d28b3d2.jpeg"/>
      </div>
      <Footer/>
    </div>
  
  );


}

export default App;
