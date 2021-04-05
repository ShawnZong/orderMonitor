import React from 'react'
import { bubble as Menu } from 'react-burger-menu'
import { decorator as reduxBurgerMenu } from 'redux-burger-menu'
import '../style/ReduxSidebar.css'

export const Sidebar = reduxBurgerMenu(Menu)

export const TestMenu = () => {
  return (
    <Sidebar
      customBurgerIcon={false}
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
    >
      <a id="home" className="menu-item">
        Home
      </a>
      <a id="about" className="menu-item">
        About
      </a>
      <a id="contact" className="menu-item">
        Contact
      </a>
    </Sidebar>
  )
}
