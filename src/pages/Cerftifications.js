import React from 'react'
import "./certifications.css"
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
function Cerftifications() {
  return (
      <div className='certpage'>
          <Container>
            <div>
                <h2 style={{textAlign:"center",paddingTop:"100px",fontSize:"3rem"}}>Cerftifications</h2>
                <p style={{textAlign:"center", padding:"40px"}}>These are the certificates of the training I have attended.</p>
            </div>
            
            <div className='cards2'>
                <div className='card2'>
                    <img className='imgdiv' src=""/>
                    <p className='pcert'>Front End Development</p>
                    <p className='claruswayP'>By <a target="_blank" href='https://clarusway.com' className='claruswaylink'>Clarusway</a></p>
                    <div className='divbutton2'>

                    <Button target="_blank" href='' className=' credentialsbutton'> View Credentials</Button>
                    </div>
                </div>  


                <div className='card2'>
                    <img className='imgdiv' src=""/>
                    <p className='pcert'>React Certificate</p>
                    <p className='claruswayP'>By <a target="_blank" href='https://clarusway.com' className='claruswaylink'>Clarusway</a></p>
                    <div className='divbutton2'>

                    <Button target="_blank" href='' className=' credentialsbutton'> View Credentials</Button>
                    </div>
                </div>


                <div className='card2'>
                    <img className='imgdiv' src=""/>
                    <p className='pcert'>Javascript Certificate</p>
                    <p className='claruswayP'>By <a target="_blank" href='https://clarusway.com' className='claruswaylink'>Clarusway</a></p>
                    <div className='divbutton2'>

                    <Button target="_blank" href='' className=' credentialsbutton'> View Credentials</Button>
                    </div>
                </div>
                <div className='card2'>
                    <img className='imgdiv' src=""/>
                    <p className='pcert'>HTML and CSS Certificate</p>
                    <p className='claruswayP'>By <a target="_blank" href='https://clarusway.com' className='claruswaylink'>Clarusway</a></p>
                    <div className='divbutton2'>

                    <Button target="_blank" href='' className='credentialsbutton'>  <i class="bi bi-box-arrow-up-right"></i> View Credentials</Button>
                    </div>
                </div>
            </div>
          </Container>
      </div>
  )
}

export default Cerftifications