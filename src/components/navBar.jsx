import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const user = this.state.user;
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? 'collapse navbar-collapse'
      : 'collapse navbar-collapse show';
    const classTwo = collapsed
      ? 'navbar-toggler navbar-toggler-right collapsed'
      : 'navbar-toggler navbar-toggler-right';
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          VideoR
        </Link>
        <button
          onClick={this.toggleNavbar}
          className={`${classTwo}`}
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className={`${classOne}`} id='navbarNav'>
          <div className='navbar-nav'>
            <NavLink className='nav-item nav-link' to='/movies'>
              Movies <span className='sr-only'>(current)</span>
            </NavLink>
            {/* <NavLink className='nav-item nav-link' to='/customers'>
            Customers
          </NavLink>
          <NavLink className='nav-item nav-link' to='/rentals'>
            Rentals
          </NavLink> */}
            {!user && (
              <React.Fragment>
                <NavLink className='nav-item nav-link' to='/login'>
                  Login
                </NavLink>
                <NavLink className='nav-item nav-link' to='/register'>
                  Register
                </NavLink>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <NavLink className='nav-item nav-link' to='/profile'>
                  {user.name}
                </NavLink>
                <NavLink className='nav-item nav-link' to='/logout'>
                  Logout
                </NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
