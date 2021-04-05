import React, { useState, useEffect } from 'react'

// db
import requestService from '../services/requests'

// import react bootstrap
import { Form, Button, Container } from 'react-bootstrap'

// formik
import { Formik, useField, Field } from 'formik'
import * as yup from 'yup'

// components
import {
  resetNotification,
  setNotification,
} from '../reducers/notificationReducer'
import { Sidebar } from '../components/ReduxSidebar'

// redux
import { useDispatch } from 'react-redux'
import { addRequest } from '../reducers/requestReducer'
import { action as toggleMenu } from 'redux-burger-menu'

// id
import { v4 as uuidv4 } from 'uuid'

// style
import '../style/Custom.css'

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...props} {...field} isInvalid={!!meta.error} />

      <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
    </Form.Group>
  )
}

const SelectField = ({ label, optionValues, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" {...props} {...field} isInvalid={!!meta.error}>
        {optionValues.map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}
          </option>
        ))}
      </Form.Control>

      <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>
    </Form.Group>
  )
}
const RequestForm = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetNotification()), []
  })

  const handleSignup = async (values) => {
    event.preventDefault()
    try {
      const response = await requestService.postNew({
        ...values,
        created: Date.now(),
        id: uuidv4(),
        status: 'Open',
      })
      dispatch(setNotification('Request created succesfully', 'success', 2))
      dispatch(addRequest(response))
    } catch (e) {
      dispatch(setNotification('Server unavailable', 'danger', 2))
    }
  }

  const schema = yup.object({
    requestName: yup.string().required(),
    requestType: yup.string().required(),
    description: yup.string().required().max(255),
    priority: yup.string().required(),
  })
  return (
    <Container fluid style={{ textAlign: 'left', color: 'white' }}>
      <h5>CREATE NEW SERVICE REQUEST</h5>
      <Formik
        validationSchema={schema}
        onSubmit={handleSignup}
        initialValues={{
          requestName: 'name',
          requestType: 'Audit',
          description: 'description',
          priority: 'High',
        }}
      >
        {({ handleSubmit }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <TextInput
              label="Request Name"
              name="requestName"
              type="text"
              placeholder="Type"
            />
            <SelectField
              label="Request Type"
              name="requestType"
              optionValues={['Audit', 'Maintenance']}
            />
            <TextInput
              label="Description"
              name="description"
              type="text"
              placeholder="Type"
            />
            <SelectField
              label="Priority"
              name="priority"
              optionValues={['High', 'Medium', 'Low']}
            />

            <Button variant="primary" type="submit" block>
              SEND
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export const FormPanel = () => {
  const dispatch = useDispatch()

  return (
    <Container fluid>
      <Sidebar right customBurgerIcon={false} noOverlay width={'38%'}>
        <RequestForm />
      </Sidebar>
      <Button onClick={() => dispatch(toggleMenu(true))} variant="success">
        NEW SERVICE REQUEST
      </Button>
    </Container>
  )
}
