import React from 'react'
import '../Intro/intro.css'

const Intro = () => {
    return (
        <div className="intro-content">
            <div className="flex-row intro-content">
                <div className="flex-1">
                    <div className="my-pic">
                            <img src="assets/img/my-pic.jpg" alt="Rakesh Shrestha" width="100%" height="100%" />
                    </div>
                </div>

                <div className="flex-1 my-intro">
                    <div className="intro">
                        <h3>Hello, Its me</h3>
                        <h1>RAKESH SHRESTHA</h1>
                        <h4>I am a <span className="designation">Software Developer</span>.</h4>
                    </div>
                </div>
            </div>
        </div>
            
    )
}

export default Intro
