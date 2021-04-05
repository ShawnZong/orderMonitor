// react
import React, { useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { initRequests } from './reducers/requestReducer'

// components
import { Menu } from './components/Menu'
import { Sidebar, FilterBar } from './components/Sidebar'
import { RequestList } from './components/RequestList'
import { Notification } from './components/Notification'
import { TestMenu } from './components/ReduxSidebar'
// import { slide as TestMenu } from 'react-burger-menu'
import Dock from 'react-dock'
// style
import { Container, Row, Col } from 'react-bootstrap'
import './style/ReduxSidebar.css'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initRequests())
  }, [])
  // const requests = useSelector((state) => state)

  // console.log(requests)

  // return (
  //   <div id="App">
  //     <TestMenu pageWrapId={'page-wrap'} outerContainerId={'App'}>
  //       <a className="menu-item" href="/">
  //         Home
  //       </a>
  //       <a className="menu-item" href="/about">
  //         About
  //       </a>

  //       <a className="menu-item" href="/services">
  //         Services
  //       </a>
  //       <a className="menu-item" href="/contact">
  //         Contact us
  //       </a>
  //     </TestMenu>
  //     <div id="page-wrap">
  //       <h1>Click to show menu</h1>
  //     </div>
  //   </div>
  // )
  return (
    <Container fluid>
      <Notification />
      <Menu />
      <Row>
        <Col xs="3">
          <FilterBar />
        </Col>
        <Col xs="9">
          <RequestList />
        </Col>
      </Row>
    </Container>
  )
  // <div className="container">
  //   <Menu />
  //   <p>hi</p>
  // </div>
}

export default App
