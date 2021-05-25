import React from 'react'
import '../Intro/intro.css'
import Typical from 'react-typical'
import Zoom from 'react-reveal/Zoom';

const Intro = () => {
    // npm install --save react-typical typing library
    return (
        <div className="intro-content" id="intro">
            <div className="flex-row intro-content">
                <div className="flex-1">
                    <div className="my-pic">
                        <Zoom>
                            <img src="assets/img/my-pic.jpg" alt="Rakesh Shrestha" width="100%" height="100%" />
                        </Zoom>   
                    </div>
                </div>

                <div className="flex-1 my-intro">
                    <div className="intro">
                        <h3>Hello, Its me</h3>
                        <h1>RAKESH SHRESTHA</h1>
                        <h4>I am a <span className="designation"><Typical
                        steps={['Software Developer', 1000, 'Web Developer', 1000, 'Electrician', 1000]}
                        loop={Infinity}
                        wrapper="p"
                    /></span></h4>
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default Intro
