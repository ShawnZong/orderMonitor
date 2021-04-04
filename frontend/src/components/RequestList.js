import React, { useState } from 'react'
import { Row, Col, Button, Table } from 'react-bootstrap'
import { FormPanel } from './RequestForm'

// redux
import { useSelector } from 'react-redux'

const RequestTable = () => {
  const requests = useSelector((state) => state)
  console.log(requests)

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Created</th>
          <th>Request Name</th>
          <th>Request Type</th>
          <th>ID</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((request) => (
          <tr key={request.id}>
            <td>{request.created}</td>
            <td>{request.requestName}</td>
            <td>{request.requestType}</td>
            <td>{request.id}</td>
            <td>{request.description}</td>
            <td>{request.priority}</td>
            <td>{request.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

// const RequestRow=()=>{

// }
export const RequestList = () => {
  return (
    <div>
      <Row>
        <Col className="mr-auto">Service Requests</Col>
        <Col className="ml-auto">
          <FormPanel />
        </Col>
      </Row>
      <Row>
        <RequestTable />
      </Row>
    </div>
  )
}
