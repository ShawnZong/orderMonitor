import React from 'react'
import { useSelector } from 'react-redux'
import { Modal, Button, Alert } from 'react-bootstrap'

const Notification = () => {
  const notification = useSelector((state) => state.notification)
  if (notification === null) {
    return null
  }
  let show = true
  const handleClose = () => (show = false)
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Notification</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant={notification.color}>{notification.message}</Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export { Notification }
