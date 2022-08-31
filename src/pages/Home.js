import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import "./home.css"
import portrait from "../data/5243AC.jpg"
function Home() {
  return (
    <div className='home1'id='home'>

<Container>
    
    <div className='part1' >
        <div className='firstdiv1'>

            <p style={{fontSize:'2rem',color: 'rgb(129,140,248)'}}>Hi There👋, I'm</p>
            <h1 style={{fontSize:'4rem'}}>Eugeniu Barbos</h1>
            <h2 style={{textDecoration:'underline',textDecorationColor:'rgb(82,67,172)'}}>Front-End Developer</h2>
            <p>I am a programmer based in Washington D.C. United States. And I have been working as a front end developer for around 1 year .  </p>
            <button>Wanna Talk?</button>
            
        </div>
        <div className='seconddiv1'>
            <img className='imgportrait' src={portrait}/>
        </div>
    </div>
</Container>
    </div>
  )
}

export default Home