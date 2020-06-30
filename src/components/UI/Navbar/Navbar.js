import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const navbar = (props) => {
    return (
        <ul className="Navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/private-page">Private Page</Link></li>
        </ul>
    )
}

export default navbar;
