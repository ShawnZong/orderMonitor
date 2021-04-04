import React, { useState } from 'react'
import SlidingPanel from 'react-sliding-side-panel'

// import react bootstrap
import { Form, Button } from 'react-bootstrap'

// formik
import { Formik, useField, Field } from 'formik'
import * as yup from 'yup'

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
  const handleSignup = async (values) => {
    console.log('hi')
    console.log(values)
    // event.preventDefault()
    // try {
    //   await signupService.signUp({
    //     username: values.username,
    //     name: values.nickname,
    //     password: values.password,
    //   })
    //   dispatch(resetNotification())
    //   props.onHide()
    // } catch (e) {
    //   props.onHide()
    //   dispatch(setNotification('username exists', 'danger', 5))
    // }
  }

  const schema = yup.object({
    requestName: yup.string().required(),
    requestType: yup.string(),
    description: yup.string(),
    priorty: yup.string(),
  })
  // const test = { hi: 'a' }
  return (
    <div>
      <h5>CREATE NEW SERVICE REQUEST</h5>
      <Formik
        validationSchema={schema}
        onSubmit={handleSignup}
        initialValues={{
          requestName: 'sdfdsf',
          requestType: 'Audit',
          description: '',
          priorty: 'High',
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
              name="priorty"
              optionValues={['High', 'Medium', 'Low']}
            />

            <Button variant="primary" type="submit" block>
              SEND
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export const FormPanel = () => {
  const [openPanel, setOpenPanel] = useState(false)
  return (
    <div>
      <div>
        <Button onClick={() => setOpenPanel(true)} variant="outline-info">
          Open
        </Button>
      </div>
      <SlidingPanel type={'right'} isOpen={openPanel} size={50}>
        <div>
          <RequestForm />
          <Button onClick={() => setOpenPanel(false)} block>
            CANCEL
          </Button>
        </div>
      </SlidingPanel>
    </div>
  )
}
