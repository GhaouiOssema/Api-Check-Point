import React from 'react'
import{Navbar}from 'react-bootstrap';
import "./NavBar.css"

const NavBar = () => {
     
    return (
    <div >
        <Navbar style={{height:70}} >
                <h2 className="navHeader">
                    <span>User Information</span> 
                </h2>
        </Navbar>
    </div>
    )
}

export default NavBar
