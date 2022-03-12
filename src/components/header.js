import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Container, Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle, menuLinks }) => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {menuLinks.map(link => (
            <Nav.Link
              style={{
                textDecoration: "none",
              }}
              href={link.link}
            >
              {link.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
