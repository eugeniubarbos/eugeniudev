import React from 'react'
import "./projects.css"
import {data} from "../data/certifications"
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'


function Projects() {


  return (
      <div className='certdiv'>
        <div className='projdiv'>Projects</div>
        <Container className='certdivmain'>
          
        {data.map((item)=>{
            return(
            <div className='card'>
                <div><img className='imgdiv' src={item.img}/></div>
                <p style={{fontSize:'1.4rem'}} className='mar'>{item.title}</p>
                <p className='mar'>{item.description}</p>
                <div className='divbut'>

                <Button className='githubbutton' style={{marginTop:"10px",width:"100px"}} href={item.github} target="_blank" > <i class="bi violet bi-github" ></i> Github</Button>
                </div>
            </div>)
        })}
        <div className='allprojects'>
          <p>View all my projects on <a href='https://github.com/peewwie/' className='claruswaylink' target="_blank" >Github</a></p>
          <hr/>
        </div>

        <div className='interestedtoworkdiv'>
          <h2 >Interested to work with me?</h2>
          <div className='buttondiv'>

          <button className='downloadnbutton'> <i  class="bi bi-download download" ></i> Download CV</button>
          <button className='emailmebutton'> <i class="bi bi-envelope-fill email "></i> Email Me </button>
          </div>
        </div>
        </Container>
       

        </div>
        
  )
}

export default Projects