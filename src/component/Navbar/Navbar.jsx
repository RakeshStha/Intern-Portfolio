import React from 'react'
import '../Navbar/navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="logos">
                    <div className="logo">
                        <img src="assets/img/logo.png" alt="Logo" height="100%" width="100%"/>    
                    </div>
                </div>          
                <div className="flex-row navlink">
                    <div >Home</div>
                    <div >Education</div>
                    <div >Skills</div>
                    <div >Experiences</div>
                    <div >Intrests</div>
                </div> 
            </nav>
        </div>
    )
}

export default Navbar
