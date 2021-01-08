import React from 'react'
import {Navbar, Nav, Container, Button, Dropdown} from 'react-bootstrap'


const Header = () => {
    return (
        <>
  <Navbar bg="light" variant="light" >
  <Container className="p-0">
    <Navbar.Brand href="#home"><h1>Quora</h1></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home" title="Home" className="Icon_Hover" ><i class="fa fa-home fa-2x" aria-hidden="true"></i></Nav.Link>
      <Nav.Link href="#following" title="Following" className="Icon_Hover"><i class="fa fa-address-card fa-2x" aria-hidden="true"></i></Nav.Link>
      <Nav.Link href="#answer" title="Answer" className="Icon_Hover"><i class="fa fa-edit fa-2x" aria-hidden="true"></i></Nav.Link>
      <Nav.Link href="#spaces" title="Spaces" className="Icon_Hover"><i class="fa fa-users fa-2x" aria-hidden="true"></i></Nav.Link>
      <Nav.Link href="#notifications" title="Notifications" className="Icon_Hover"><i class="fa fa-bell fa-2x" aria-hidden="true"></i></Nav.Link>


    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      
    </Form> */}
    
    <Dropdown  >
  <Dropdown.Toggle  id="dropdown-basic" toggle-class="rounded-circle px-2" variant="light">
    <i class="fas fa-user-circle fa-2x "></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Nav.Link href="languages" title="Languages" className="Icon_Hover" ><i class="fas fa-globe fa-2x"></i></Nav.Link>
<Button variant="danger" className="rounded-circle">Answer</Button>


    </Container>
  </Navbar>
 
</>
    )
}

export default Header
