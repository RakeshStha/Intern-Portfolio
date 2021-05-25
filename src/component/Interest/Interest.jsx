import React from 'react'
import '../Interest/interest.css';

const Interest = () => {
    return (
        <div className="interest-container">
            <div className="interest-content">
                    <h1 className="skill-head">INTERESTS</h1>
                    <div className="flex skills">
                        <div>
                            <h2>Coding/Programming</h2>
                        </div>
                        <div>
                            <h2>Photography</h2>
                        </div>
                    </div><br></br>
                    <div className="flex skills">
                        <div>
                            <h2>Web Design and Development</h2>
                        </div>
                        <div>
                            <h2>Sports: Basketball, Football, etc.</h2>
                        </div>
                    </div>
            </div> 
        </div>
    )
}

export default Interest
