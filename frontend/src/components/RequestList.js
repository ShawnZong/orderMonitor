import React, { useState } from 'react'
import { Row, Col, Container, InputGroup, Button, Form } from 'react-bootstrap'
import { FormPanel } from './RequestForm'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { selectPage } from '../reducers/requestReducer'

// react table
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

// style
import '../style/Custom.css'

const RequestTable = () => {
  const requests = useSelector((state) => state.requests)

  const dateFormatter = (cell) => {
    return (
      <span>
        {new Date(cell).toLocaleString('en-GB', {
          timeZone: 'UTC',
        })}
      </span>
    )
  }

  const columns = [
    {
      dataField: 'created',
      text: 'Created',
      formatter: dateFormatter,
      sort: true,
    },
    { dataField: 'requestname', text: 'Request Name' },
    { dataField: 'requesttype', text: 'Request Type' },
    { dataField: 'id', text: 'ID' },
    { dataField: 'description', text: 'Description' },
    { dataField: 'priority', text: 'Priority' },
    { dataField: 'status', text: 'Status' },
  ]

  if (!requests) {
    return null
  }

  return (
    <BootstrapTable
      bootstrap4
      keyField="id"
      data={requests}
      columns={columns}
    />
  )
}
const PageList = () => {
  const [page, setPage] = useState(1)

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(selectPage(page))
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Page</InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control
            defaultValue="1"
            type="number"
            onChange={({ target }) => setPage(target.value)}
          />

          <InputGroup.Append>
            <Button type="submit">Go</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Row>
    </Form>
  )
}
export const RequestList = () => {
  return (
    <Container fluid>
      <Row
        style={{
          background: '#cdedfb',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        <Col>
          <h4> Service Requests</h4>
        </Col>
        <Col className="rightAlign">
          <FormPanel />
        </Col>
      </Row>
      <main id="page-wrap">
        <Row>
          <RequestTable />
        </Row>
        <Row style={{ justifyContent: 'center', paddingBottom: '30px' }}>
          <PageList />
        </Row>
      </main>
    </Container>
  )
}
