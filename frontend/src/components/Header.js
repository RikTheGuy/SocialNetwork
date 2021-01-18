import React from 'react'
import {Navbar, Nav, Container, Button, Dropdown, Form, FormControl} from 'react-bootstrap'


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
     <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      
    </Form> 
    
    <Dropdown  >
  <Dropdown.Toggle  id="dropdown-basic" toggle-class="rounded-circle px-2" variant="light">
    <i class="fas fa-user-circle fa-2x "></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1"><i class="fas fa-user-circle fa-2x"></i> </Dropdown.Item>
    <Dropdown.Item href="#/action-2">USER NAME <i class="fas fa-angle-right" ></i></Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action-3">Message</Dropdown.Item>
    <Dropdown.Item href="#/action-4">Create Ad</Dropdown.Item>
    <Dropdown.Item href="#/action-5">Stats</Dropdown.Item>
    <Dropdown.Item href="#/action-6">Your Content</Dropdown.Item>
    <Dropdown.Item href="#/action-7">Bookmarks</Dropdown.Item>
    <Dropdown.Item href="#/action-8">Drafts</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action-9">Settings</Dropdown.Item>
    <Dropdown.Item href="#/action-10">Languages</Dropdown.Item>
    <Dropdown.Item href="#/action-11">Help</Dropdown.Item>
    <Dropdown.Item href="#/action-12">Logout</Dropdown.Item>



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
