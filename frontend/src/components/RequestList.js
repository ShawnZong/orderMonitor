import React, { useState } from 'react'
import { Row, Col, Button, Table } from 'react-bootstrap'
import { FormPanel } from './RequestForm'

// redux
import { useSelector } from 'react-redux'

// react table
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

const RequestTable = () => {
  const requests = useSelector((state) => state.requests)
  console.log(requests)

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
  // const columns = [
  //   { dataField: 'id', text: 'Id', sort: true },
  //   { dataField: 'name', text: 'Name' },
  //   { dataField: 'a', text: 'Animal' },
  //   {
  //     dataField: 'created',
  //     text: 'Created',
  //     formatter: dateFormatter,
  //   },
  // ]

  const tmpdata = [
    { id: 1, name: 'George', a: 'Monkey', created: 1617568348421 },
    { id: 2, name: 'Jeffrey', a: 'Giraffe', created: 1617668348422 },
    { id: 3, name: 'Alice', a: 'Giraffe', created: 1617578348421 },
    { id: 4, name: 'Alice', a: 'Tiger', created: 1617588348421 },
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

  // return (
  //   <Table striped bordered>
  //     <thead>
  //       <tr>
  //         <th>Created</th>
  //         <th>Request Name</th>
  //         <th>Request Type</th>
  //         <th>ID</th>
  //         <th>Description</th>
  //         <th>Priority</th>
  //         <th>Status</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {requests.map((request) => (
  //         <tr key={request.id}>
  //           <td>
  //             {new Date(request.created).toLocaleString('en-GB', {
  //               timeZone: 'UTC',
  //             })}
  //           </td>
  //           <td>{request.requestName}</td>
  //           <td>{request.requestType}</td>
  //           <td>{request.id}</td>
  //           <td>{request.description}</td>
  //           <td>{request.priority}</td>
  //           <td>{request.status}</td>
  //         </tr>
  //       ))}
  //     </tbody>
  //   </Table>
  // )
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
