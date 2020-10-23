import React, {useState,useEffect} from 'react'
import logo from './assets/logo.png'
import avatar from './assets/avatar.png'
import './Navbar.css'

const Navbar = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true)
            }
            else {
                setShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`navbar ${show && "navbar__black"}`}>
            <img
                className="navbar__logo"
                src={logo}
                alt="Netflix Logo" />
            
            <img
                className="navbar__avatar"
                src={avatar}
                alt="Profile Avatar" /> 
        </div>
    )
}

export default Navbar
