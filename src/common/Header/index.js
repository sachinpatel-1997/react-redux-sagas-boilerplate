import React from 'react'
import PropTypes from 'prop-types'
import {Navbar} from 'react-bootstrap'


const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    </Navbar>
  )
}

Header.propTypes = {
  showBackground: PropTypes.bool
}

export default Header
