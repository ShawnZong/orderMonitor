//import useState hook to create menu collapse state
import React, { useState } from 'react'

// redux
import { useDispatch } from 'react-redux'
import { partTextFilter, fullTextFilter } from '../reducers/requestReducer'

// import react bootstrap
import { Form, Button, Row, Container, Col, InputGroup } from 'react-bootstrap'

const DescriptionFilter = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(text)
    dispatch(partTextFilter({ tag: 'description', text: text.toLowerCase() }))
  }
  return (
    <Container fluid>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Label>Search</Form.Label>
          <InputGroup>
            <Form.Control
              placeholder="Search..."
              onChange={({ target }) => setText(target.value)}
            />
            <InputGroup.Append>
              <Button
                type="submit"
                style={{ paddingTop: '0px', paddingBottom: '0px' }}
              >
                <span className="material-icons md-18">search</span>
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Row>
      </Form>
    </Container>
  )
}

const SelectFilter = ({ label, name, optionValues }) => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    // console.log(event.target.value)
    dispatch(
      fullTextFilter({ tag: name, text: event.target.value.toLowerCase() }),
    )
  }
  return (
    <Container fluid>
      <Form>
        <Form.Row>
          <Form.Label>{label}</Form.Label>
          <Form.Control as="select" onChange={handleChange}>
            <option value="">...</option>
            {optionValues.map((optionValue) => (
              <option key={optionValue} value={optionValue}>
                {optionValue}
              </option>
            ))}
          </Form.Control>
        </Form.Row>
      </Form>
    </Container>
  )
}

export const FilterBar = () => {
  return (
    <Container fluid>
      <Row>
        <DescriptionFilter />
      </Row>
      <Row>
        <SelectFilter
          label="Request Types"
          name="requesttype"
          optionValues={['Audit', 'Maintenance']}
        />
      </Row>
      <Row>
        <SelectFilter
          label="Priority"
          name="priority"
          optionValues={['High', 'Medium', 'Low']}
        />
      </Row>
      <Row>
        <SelectFilter
          label="Status"
          name="status"
          optionValues={['Open', 'Closed']}
        />
      </Row>
    </Container>
  )
}
