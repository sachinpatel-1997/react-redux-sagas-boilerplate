import React from 'react'
import PropTypes from 'prop-types'
import {Navbar} from 'react-bootstrap'
import logo from '../../assets/images/logo.png'
import history from 'utils/history'


const Header = (props) => {
  return (
    <Navbar bg="dark" expand="lg">
      <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="30%" height="20%" />
    </a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#" onClick={() => history.push('/sqllab')}>SQL Editor <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/erd">ERD</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Query Builder</a>
        </li>
      </ul>
    </div>
</nav>
    </Navbar>
  )
}

Header.propTypes = {
  showBackground: PropTypes.bool
}

export default Header
