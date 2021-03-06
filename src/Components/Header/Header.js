import React, { useContext } from 'react';
import AppContext from '../../Contex/AppContex';
import { Navbar, Container, Nav, Form } from 'react-bootstrap'

function Header() {
  const { categories, setSelectCategory, setProduct } = useContext(AppContext);

  function setCategory({target}) {
    const { value } = target;
    setProduct('');
    setSelectCategory(value);
  }
  

  return (
    <span style={{ width: '100%', height: '50px' }}>
      <Navbar bg="light" expand="lg">
        <Container fluid style={{ backgroundColor: '#ffc108', height: '50px' }}>
          <Navbar.Brand href="#">Shopping Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              
            </Nav>
            <Form className="d-flex">
            <Form.Select aria-label="Default select example" onClick={setCategory}>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>{category.name}</option>
              ))}
            </Form.Select>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </span>
  )
}

export default Header;
