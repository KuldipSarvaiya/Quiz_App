import React from 'react'
import { useParams, Link } from 'react-router-dom'
// import {Confetti} from 'react-confetti'

function Result() {

    const { ans } = useParams()

    return (
        <div className='result-div'>
            <div>
                Congratulations &#127881;<br />
                {
                    ans === '0' ? <p> You Got an Egg &#129370; <br /> Try Next Time</p>
                        : <p>Very Good &#128079; - You Scored <big>{ans}</big> Points</p>
                }</div>

            <br />
            <h1>{ans}/10</h1>
            <br />

            <Link to="/" replace={true} style={{
                textDecoration: "none"
            }}>
                <div className='new-quiz'>
                    Profile
                </div>
            </Link>
            <br />
            <Link to="/quiz" replace={true} style={{
                textDecoration: "none"
            }}>
                <div className='new-quiz'>
                    Play Again
                </div>
            </Link>
        </div>
    )
}

export default Result