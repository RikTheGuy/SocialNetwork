import React from 'react'
import {Navbar, Nav, Container, Form, FormControl, Dropdown} from 'react-bootstrap'


const Header = () => {
    return (
        <>
  <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home"><h1>Quora</h1></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home" title="Home"><h1><i class="fa fa-home" aria-hidden="true"></i></h1></Nav.Link>
      <Nav.Link href="#following" title="Following"><h1><i class="fa fa-address-card" aria-hidden="true"></i></h1></Nav.Link>
      <Nav.Link href="#answer" title="Answer"><h1><i class="fa fa-pencil" aria-hidden="true"></i></h1></Nav.Link>
      <Nav.Link href="#spaces" title="Spaces"><h1><i class="fa fa-users" aria-hidden="true"></i></h1></Nav.Link>
      <Nav.Link href="#notifications" title="Notifications"><h1><i class="fa fa-bell" aria-hidden="true"></i></h1></Nav.Link>


    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      
    </Form>
    <Nav.Link href="#profile" title="profile"><h1><i class="fas fa-user-circle"></i></h1></Nav.Link>
    <Dropdown  >
  <Dropdown.Toggle  id="dropdown-basic" toggle-class="rounded-circle px-2">
    <h1><i class="fas fa-user-circle"></i></h1>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

    </Container>
  </Navbar>
 
</>
    )
}

export default Header
