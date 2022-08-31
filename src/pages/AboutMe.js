import React from 'react'
import "./aboutme.css"
import Container from 'react-bootstrap/esm/Container'
function AboutMe() {
  return (
    
    <div style={{backgroundColor:'rgb(82,67,172)'}}>
        <Container >
            <div className='secondpart'>
                <div className='firstdiv2'>
                   <p>ABOUT ME</p>
                   <h2>Let's get to know me!</h2>
                   
                   <p style={{marginTop:'40px'}}>Hi, my name is <span style={{textDecoration:'underline',fontSize :'1.2rem'}}>Eugeniu Barbos</span> . I love to solve the problem and implement idea with design and code. Interest to explore different styles of design and follow the design and technology trends for frontend development.

                    </p>
                 </div>
             <div className='seconddiv2'>
                     <h2 style={{marginTop:'35px'}}>Stay In Touch</h2>
                     <p style={{marginBottom:'35px'}}>Reach me by following some of my social media</p>
                        
                         <a style={{marginRight:'35px'}} href='https://www.linkedin.com/in/eugeniubarbos/'>
                             <i class="bi bisocial bi-linkedin" ></i>
                             </a>
                             <a  href='https://github.com/peewwie'>
                             <i class="bi bisocial bi-github" ></i>
                             </a>
                            
                </div>
            </div>
        </Container>
    </div>
      

  )
}

export default AboutMe