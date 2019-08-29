import React from 'react';
import { Nav, Navbar , Container , Button} from 'react-bootstrap';

class Menu extends React.Component{

    render(){
        return(
            <Navbar bg="light" expand="lg" className="shadow">
                <Container>
                    <Navbar.Brand href="#home">Blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: '0' }}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                        <Nav.Link href="#link">Ultimos posts</Nav.Link>
                        <Nav.Link href="#home">Categorias</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                        <Nav.Link href="#link">
                            <Button variant="outline-success">
                                Iniciar Sesion
                            </Button>
                        </Nav.Link>    
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Menu;