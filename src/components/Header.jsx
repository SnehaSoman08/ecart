import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import {useSelector} from 'react-redux'



function Header() {
    const wishlist = useSelector((state)=>state.wishlistReducer)
    const cart = useSelector((state)=>state.cartReducer)
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><Link to={'/'} style={{ textDecoration: "none", fontSize: "30px", color: "black" }}>
                        <i class="fa-solid fa-truck fa-beat me-2"></i>
                        E-cart
                    </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link ><Link to={'/wishlist'} style={{ textDecoration: "none", fontSize: "30px", color: "black" }}>
                                <i class="fa-solid fa-heart fa-beat me-2"></i>
                                Wishlist
                                <Badge className='rounded ms-2 bg-success'>{wishlist.length}</Badge>
                            </Link></Nav.Link>
                            <Nav.Link ><Link to={'/cart'} style={{ textDecoration: "none", fontSize: "30px", color: "black" }}>
                                <i class="fa-solid fa-cart-shopping fa-beat me-2"></i>
                                Cart
                                <Badge className='rounded ms-2 bg-success'>{cart.length}</Badge>
                            </Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header