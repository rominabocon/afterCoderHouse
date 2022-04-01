import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import CardWidget from '../CardWidget/CardWidget'

function NavBar() {
  return (
    <>
    <Navbar bg="dark">
        <Container>
        <Navbar.Brand>MiTiendita</Navbar.Brand>
        </Container>
        <CardWidget/>
    </Navbar>
    
    </>
  )
}

export default NavBar