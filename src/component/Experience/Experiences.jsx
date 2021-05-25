import React from 'react'
import '../Experience/experiences.css'
import Zoom from 'react-reveal/Zoom';

const Experiences = () => {
    return (
        <div className="experiences-container" id="experience">
            <div className="experiences-container">
                <h1 className="skill-head">EXPERIENCES</h1>
                <ul>
                    <Zoom>
                        <li>
                            I am currently working as a React Developer Intern at Prisma Softs limited.
                        </li>
                    </Zoom> 
                    <Zoom>
                        <li>
                            I haved worked as a freelancer JR. Web Developer for about 1 year on online platform i.e. UpWork, Freelancer, etc.
                        </li>
                    </Zoom>     
                    <Zoom>
                        <li>
                            Designed and developed a full portfolio website of <a href="https://www.maharjanrojan.com.np">Mr. Rojan Maharjan</a>.
                        </li>
                    </Zoom>
                    <Zoom>
                        <li>
                            Develop UI desktop application "Online Product Management System Software" using JAVA programming language.
                        </li>
                    </Zoom>  
                </ul>
            </div> 
        </div>
    )
}

export default Experiences
