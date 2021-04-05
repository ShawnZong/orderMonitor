import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

// style
import '../style/Custom.css'

export const Menu = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand>
        <img
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          width="60"
          height="30"
        />
      </Navbar.Brand>
      <Navbar.Brand>Service Center</Navbar.Brand>
      <Nav className="ml-auto navText">
        <span className="material-icons" style={{ paddingRight: '10px' }}>
          face
        </span>
        Username
      </Nav>
    </Navbar>
  )
}
