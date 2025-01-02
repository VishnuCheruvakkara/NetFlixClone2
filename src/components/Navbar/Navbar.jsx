import React,{useRef,useEffect} from 'react'
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import profile_icon from '../../assets/profile-icon-netflix.jpg'
import {logout} from '../../firebase/firebase'

function Navbar() {
    const navRef = useRef();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add('nav-dark')
            } else {
                navRef.current.classList.remove('nav-dark')
            }
        })
    },[])
    return (
        <div className="navbar" ref={navRef}>
            <div className="navbar-left">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="" />
                <ul>
                    <li>Home</li>
                    <li>TV Show</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by languages</li>
                </ul>
            </div>
            <div className="navbar-right">
                <FaSearch className='icons' />
                <p>Children</p>
                <FaRegBell className='icons' />
                <div className="navbar-profile">
                    <img src={profile_icon} className="profile" alt="" />
                    <IoMdArrowDropdown className="arrow" />
                    <div onClick={()=>{logout()}} className="dropdown">Sign out</div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
