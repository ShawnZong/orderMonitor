// react
import React, { useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { initRequests } from './reducers/requestReducer'

// components
import { Menu } from './components/Menu'
import { Sidebar } from './components/Sidebar'
import { RequestList } from './components/RequestList'
import { Notification } from './components/Notification'

// style
import { Container, Row, Col } from 'react-bootstrap'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initRequests())
  }, [])
  // const requests = useSelector((state) => state)

  // console.log(requests)

  return (
    <Container fluid>
      <Notification />
      <Menu />
      <Row>
        <Col xs="3">
          <Sidebar />
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
