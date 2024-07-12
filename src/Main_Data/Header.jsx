import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header(){

    
    return(
    <>
    <div>
        <Navbar expand={false} className="bg-primary mb-3">
            <Container fluid>
                <Navbar.Brand href='/'>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls='offcanvasNavbar-expand-false'/>
                <Navbar.Offcanvas
                id='offcanvasNavbar-expand-false'
                aria-labelledby="offcanvasNavbarLabel-expand-false"
                placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id='offcanvasNavbarLabel-expand-false'>
                            Ben's Media
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className='justify-content-end flex-grow-1 pe-3'>
                        <Nav.Link href="/books">Books</Nav.Link>
                        <Nav.Link href="/movies">Movies</Nav.Link>
                        <Nav.Link href="/games">Games</Nav.Link>

                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            
        </Navbar>
    </div>
    </>
    )
}


export default Header;