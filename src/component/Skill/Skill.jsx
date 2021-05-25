import React from 'react'
import '../Skill/skill.css'

const Skill = () => {
    return (
        <div className="skill-container">
            <div className="skill-content">
                <h1 className="skill-head">SKILLS</h1>
                <div className="flex-col">
                    <div className="flex-1 mt-10">
                        <div className="flex skills">
                            <div>
                                <h2>Computer</h2>
                                <div className="flex">
                                    <img src="assets/img/word.png" alt="" />
                                    <img src="assets/img/powerpoint.png" alt="" />
                                    <img src="assets/img/excel.png" alt="" />
                                    <img src="assets/img/project.png" alt="" />
                                </div>
                                <p></p>
                            </div>
                            <div>
                                <h2>UI/UX Design</h2>
                                <div className="flex">
                                    <img src="assets/img/photoshop.png" alt="" />
                                    <img src="assets/img/figma.png" alt="" />
                                    <img src="assets/img/adobexd.png" alt="" />
                                    <img src="assets/img/adobexd.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 mt-10">
                        <div className="flex skills">
                                <div>
                                    <h2>Frontend</h2>
                                    <div className="flex">
                                        <img src="assets/img/html.png" alt="" />
                                        <img src="assets/img/css.png" alt="" />
                                        <img src="assets/img/js.png" alt="" />
                                        <img src="assets/img/react.png" alt="" />
                                    </div>
                                    <img src="assets/img/bootstrap.png" alt="" />
                                </div>
                                <div>
                                    <h2>Backend</h2>
                                    <div className="flex">
                                        <img src="assets/img/php.png" alt="" />
                                        <img src="assets/img/django.png" alt="" />
                                        <img src="assets/img/asp.png" alt="" />
                                        <img src="assets/img/node.png" alt="" />
                                    </div>
                                    <img src="assets/img/npm.png" alt="" />
                                    <img src="assets/img/git.png" alt="" />
                                    <img src="assets/img/github.png" alt="" />
                                </div>
                            </div>
                    </div>
                    <div className="flex-1 mt-10">
                        <div className="flex skills">
                                <div>
                                    <h2>Database</h2>
                                    <div className="flex">
                                        <img src="assets/img/postgresql.png" alt="" />
                                        <img src="assets/img/mongodb.png" alt="" />
                                        <img src="assets/img/mysql.png" alt="" />
                                        <img src="assets/img/sqlserver.png" alt="" />
                                    </div>
                                </div>
                                
                            </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Skill
