import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <br />
            <hr/>
            <h3><center>ABOUT</center></h3>
            <div>
                <li>Version - 0.1</li>
                <li>This is a Beta version</li>
                <li>You will be treated to an amazing exlierience very soon.</li>
                <li>You can select Difficulty Level and Category of Que. very soon</li>
                <li>You can also Upload Your Profile Picture and can store data on Server</li>
            </div>
            <Link to='/' style={{
                textDecoration: "none" 
            }}>
                <div className='close-about'>
                    Close
                </div>
            </Link>
        </div>
    )
}

export default About