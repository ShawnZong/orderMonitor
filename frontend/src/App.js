// react
import React, { useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { initRequests } from './reducers/requestReducer'

// components
import { Menu } from './components/Menu'
import { FilterBar } from './components/Sidebar'
import { RequestList } from './components/RequestList'
import { Notification } from './components/Notification'

// style
import { Container, Row, Col } from 'react-bootstrap'
import './style/ReduxSidebar.css'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initRequests())
  }, [])

  return (
    <div>
      <Notification />
      <Menu />

      <Row className="align-self-stretch" id="outer-container">
        <Col
          xs="3"
          style={{ color: 'white', background: '#6f748a', minHeight: '100vh' }}
        >
          <FilterBar />
        </Col>
        <Col
          xs="9"
          style={{
            paddingLeft: '0px',
            paddingRight: '0px',
            minHeight: '100vh',
          }}
        >
          <RequestList />
        </Col>
      </Row>
    </div>
  )
}

export default App
