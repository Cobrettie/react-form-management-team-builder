import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import styled from 'styled-components';

const StyledNav = styled.nav`
  border-bottom: 1px solid #373737;
  // margin: 30px 0 20px;
  display: flex;
  align-items: center;
`;

const NavItem = styled.p`
  font-size: 20px;
  padding: 10px 20px;
  color: dodgerblue;
  text-decoration: none;
`;

function Nav() {
  return (
    <div>
      <StyledNav>
        <Link to='/'><NavItem>Register</NavItem></Link>
        <Link to='members'><NavItem>Team Members</NavItem></Link>
      </StyledNav>
    </div>
  )
}

export default Nav;