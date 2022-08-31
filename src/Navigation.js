import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState,useEffect} from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import  Button  from 'react-bootstrap/Button';


        //   <Dropdown>
        //   <Dropdown.Toggle variant="success">
        //   <i class="bi bi-list"></i>
        //   <i class="bi bi-x-lg"></i>
        //   </Dropdown.Toggle>
    
        //   <Dropdown.Menu>
        //     <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
        //     <Dropdown.Item href="#/action-2">Portfolio</Dropdown.Item>
        //     <Dropdown.Item href="#/action-3">Services</Dropdown.Item>
        //   </Dropdown.Menu>
        // </Dropdown>

function Navigation() {
  const [navState,setNavState] = useState(true)
  const [navState2,setNavState2] = useState(true)

  var x = window.matchMedia("(max-width: 1024px)")
  x.addListener(myFunction)
  
  function myFunction(x) {
    if (navState) { 
      setNavState(false)
    } else {
      setNavState(true)
    }
  }

  


  const handleClick = ()=>{
    setNavState2(!navState2)
  }

  return (
    <div className='navbardiv'>

  
    <Navbar variant="dark" >
      
        <Container className='cont'>
          <Navbar.Brand className='brand navlink' href="/">Eugeniu</Navbar.Brand>
          {navState?<Nav className="me-right">
            <Nav.Link className='navlink' href="#home">Home</Nav.Link>
            <Nav.Link className='navlink' href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className='navlink' href="#services">Services</Nav.Link>
          </Nav> :
<>
        <button className='xbutton' onClick={handleClick}>
          {navState2?<i class="bi binav bi-list"></i>:<i class="bi binav bi-x-lg"></i>}
        </button >
        {!navState2?<div className='dropDownmenu'>
            <Nav.Link className='navlink' href="/">Home</Nav.Link>
            <Nav.Link className='navlink' href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link className='navlink' href="/services">Services</Nav.Link>
        </div>:''}
</>
          
        }
          
        </Container>
      </Navbar>
    
        </div>


  )
}

export default Navigation