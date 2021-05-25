import React from 'react'
import '../Education/education.css'

const Education = () => {
    return (
        <div className="education-container">
            
            <div className="flex-col education-content">
                <div className="flex-1 center">
                    <h1>EDUCATION</h1>
                </div>
                <div className="flex-1">
                    <div className="space-around">
                        <div>
                            <h1>ASIA PACIFIC UNIVERSITY, MALAYSIA</h1>
                            <h3 className="field">Bachelor of Science in Information Technology</h3>
                            <h3 className="clz">Lord Buddha Education Foundation Campus, Kathmandu, Nepal</h3>
                        </div>
                        <div >
                            <h1>2018-PRESENT</h1>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="space-around">
                        <div>
                            <h1>HIGHER SECONDARY EDUCATION BOARD, NEPAL</h1>
                            <h3 className="field">+12 Science (Computer Science)</h3>
                            <h3 className="clz">Pinnacle Academy College, Lalitpur, Nepal</h3>
                        </div>
                        <div >
                            <h1>2016-2018</h1>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="space-around">
                        <div>
                            <h1>NATIONAL EXAMINATION BOARD, NEPAL</h1>
                            <h3 className="field">S.L.C.</h3>
                            <h3 className="clz">Hill Top Higher Secondary School, Lalitpur, Nepal</h3>
                        </div>
                        <div >
                            <h1>2004-2015</h1>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Education
