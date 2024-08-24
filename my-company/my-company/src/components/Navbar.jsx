import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
<nav>
    <ul>
    <li><link to="/Home">Home</link></li>
    <li><link to="/About">About</link></li>
    <li><link to="/Contact">Contact</link></li>
    <li><link to="/Services">Services</link></li>
    </ul>
</nav>
);
}

export default Navbar