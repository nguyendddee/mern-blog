import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/avatar1.jpg'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className="">
                    <img src={Logo} alt=""/>
                </Link>
            </div>
            <ul>
                <li><Link to="/profile">Ernest Achiever</Link></li>
                <li><Link to="/create">Create Post</Link></li>
                <li><Link to="/authors">Authors</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
            <button className="nav__toggle-btn">
                <AiOutlineClose/>
            </button>
        </nav>
    )
}

export default Header
