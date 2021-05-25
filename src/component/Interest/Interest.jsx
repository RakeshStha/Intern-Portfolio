import React from 'react'
import '../Interest/interest.css';
import Fade from 'react-reveal/Fade';

const Interest = () => {
    return (
        <div className="interest-container" id="interest">
            <div className="interest-container">
                    <h1 className="skill-head">INTERESTS</h1>
                    <div className="flex skills">
                        <Fade left big>
                            <div className="animate">
                                <h2>Coding/Programming</h2>
                            </div>
                        </Fade>
                        <Fade right big>
                            <div className="animate">
                                <h2>Photography</h2>
                            </div>
                        </Fade>
                    </div><br></br>
                    <div className="flex skills">
                        <Fade left big>
                            <div className="animate">
                                <h2>Web Design</h2>
                            </div>
                        </Fade>
                        <Fade right big>
                            <div className="animate">
                                <h2>Web Development</h2>
                            </div>
                        </Fade>
                    </div>
            </div> 
        </div>
    )
}

export default Interest
