import React, { useContext } from 'react';
import AppContext from '../../Contex/AppContex';
import { Navbar, Container, Nav, NavDropdown, Form } from 'react-bootstrap'

function Header() {
  const { categories } = useContext(AppContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
          <Form.Select aria-label="Default select example">
            {categories.map((category, index) => (
              <option key={index}>{category.name}</option>
            ))}
          </Form.Select>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
