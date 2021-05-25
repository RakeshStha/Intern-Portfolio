import React from 'react'
import '../Navbar/navbar.css'
import Spin from 'react-reveal/Spin';

const Navbar = () => {
    // let button = document.querySelector(".hamburger");
    // let navlist = document.querySelector(".navlink");
 

    // button.addEventListener("click", () => {
    // navlist.classList.toggle("show");
    // });
    function showClick(){
        document.getElementById("navlink").classList.toggle("show");
    }
    return (
            <nav className="navbar">
                <div className="logos">
                    <div className="logo">
                        <Spin>
                        <img src="assets/img/logo.png" alt="Logo" height="100%" width="100%"/>    
                        </Spin>
                    </div>
                    <div className="hamburger" onClick={showClick}>
                        <img src="assets/img/hamburger.png" alt="" height="100%" width="100%" />
                    </div>
                </div>          
                <div className="flex-row navlink" id="navlink">
                    <div >Home</div>
                    <div >Education</div>
                    <div >Skills</div>
                    <div >Experiences</div>
                    <div >Interests</div>
                </div> 
            </nav>

    )
}

export default Navbar
