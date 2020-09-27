import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class NavbarMain extends React.Component {
  render() {
    return (
      <div className="navMain">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Wicked Bikes</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Models</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
      </Navbar>
    </div>
    )
  }
}

export default NavbarMain;
