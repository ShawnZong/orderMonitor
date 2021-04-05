import React from 'react'
import { stack as Menu } from 'react-burger-menu'
import { decorator as reduxBurgerMenu } from 'redux-burger-menu'
import '../style/ReduxSidebar.css'

export const Sidebar = reduxBurgerMenu(Menu)
// export const FormSidebar = reduxBurgerMenu(Menu, 'secondary')

export const TestMenu = () => {
  return (
    <Sidebar customBurgerIcon={false}>
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
