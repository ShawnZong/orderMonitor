import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FormPanel } from './RequestForm'

// redux
import { useSelector } from 'react-redux'

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
    { dataField: 'requestName', text: 'Request Name' },
    { dataField: 'requestType', text: 'Request Type' },
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
          <h4>Service Requests</h4>
        </Col>
        <Col className="rightAlign">
          <FormPanel />
        </Col>
      </Row>
      <Row>
        <RequestTable />
      </Row>
    </Container>
  )
}
