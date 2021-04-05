//import useState hook to create menu collapse state
import React, { useState } from 'react'

// redux
import { useDispatch } from 'react-redux'
import { partTextFilter, fullTextFilter } from '../reducers/requestReducer'

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar'

// import react bootstrap
import { Form, Button, Row, Container, Col, InputGroup } from 'react-bootstrap'

//import icons from react icons
import { FaList, FaRegHeart } from 'react-icons/fa'
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from 'react-icons/fi'
import { RiPencilLine } from 'react-icons/ri'
import { BiCog } from 'react-icons/bi'

//import sidebar css from react-pro-sidebar module and our custom css
import 'react-pro-sidebar/dist/css/styles.css'
import '../style/Sidebar.css'

const DescriptionFilter = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(text)
    dispatch(partTextFilter({ tag: 'description', text: text.toLowerCase() }))
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row className="align-items-center">
        <Col xs="auto">
          <Form.Label>Search</Form.Label>
          <InputGroup>
            <Form.Control
              placeholder="Search..."
              onChange={({ target }) => setText(target.value)}
            />
            <InputGroup.Append>
              <Button type="submit">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Form.Row>
    </Form>
  )
}

const SelectFilter = ({ label, name, optionValues }) => {
  // const [text, setText] = useState(optionValues[0])

  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    // setText(event.target.value)
    console.log(event.target.value)
    dispatch(
      fullTextFilter({ tag: name, text: event.target.value.toLowerCase() }),
    )
  }
  return (
    <Form>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" onChange={handleChange}>
        {optionValues.map((optionValue) => (
          <option key={optionValue} value={optionValue}>
            {optionValue}
          </option>
        ))}
      </Form.Control>
    </Form>
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
          name="requestType"
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

export const Sidebar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
  }

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? 'Logo' : 'Big Logo'}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem>
                <DescriptionFilter />
              </MenuItem>
              <MenuItem>
                <SelectFilter
                  label="Request Types"
                  name="requestType"
                  optionValues={['Audit', 'Maintenance']}
                />
              </MenuItem>
              <MenuItem>
                <SelectFilter
                  label="Priority"
                  name="priority"
                  optionValues={['High', 'Medium', 'Low']}
                />
              </MenuItem>
              <MenuItem>
                <SelectFilter
                  label="Status"
                  name="status"
                  optionValues={['Open', 'Closed']}
                />
              </MenuItem>

              <MenuItem active={true} icon={<FiHome />}>
                Home
              </MenuItem>
              <MenuItem icon={<FaList />}>Category</MenuItem>
              <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  )
}
