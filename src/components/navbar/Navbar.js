import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import ShowGoerLogo from  "../../ShowGoerLogo.png"

export const NavBar = (props) => {
    return (
<>
        <Navbar bg="dark" variant="dark" fixed="top">
        <Container className="navbar">
          <Link className="navbar-brand" href="../../ShowGoerLogo.png" to="/"></Link>
        {/* <li className="nav-item-img">
                        <Link className="nav-link" to="/"><img src={ShowGoerLogo} alt="ShowGoer" /></Link>
                    </li> */}
        <Nav className="me-auto">
          <Nav.Link href="/myshows">My Shows</Nav.Link>
          <Nav.Link href="/findshows">Find Shows</Nav.Link>
       
        <Nav className="justify-content-end" activeKey="/home">
            {/* <Nav.Item>
          <Nav.Link href="/register">Register</Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
          <Nav.Link href="/login">Log In</Nav.Link>
          </Nav.Item>
          </Nav>
        </Nav>
        </Container>
      </Navbar>
      </>

    )
} 