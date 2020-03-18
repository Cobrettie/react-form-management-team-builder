import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <p>Nav Menu</p>
      <Link to='/'>Register</Link>
      <Link to='teammembers'>Team Members</Link>
    </div>
  )
}

export default Nav;