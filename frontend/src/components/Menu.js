import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export const Menu = () => {
  return (
    <Navbar bg="primary" variant="light">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          width="60"
          height="30"
          className="d-inline-block align-top"
        />
        Service Center
      </Navbar.Brand>
      <Nav className="ml-auto">Username</Nav>
    </Navbar>
  )
}
