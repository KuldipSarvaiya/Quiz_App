import React from 'react'
import { Context } from './context'
import { useNavigate } from 'react-router-dom'

function Quiz() {

    const [queBtn, setQueBtn] = React.useState(false)
    const { Dispatch } = React.useContext(Context)
    const navigate = useNavigate()
    const data = React.useRef()
    const URL = React.useRef('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    const total = React.useRef([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    //fetching questions
    React.useEffect(() => {
        fetch(URL.current)
            .then(async (res) => { return await res.json() })
            .then(async (res) => {
                data.current = await res.results
            })
            .catch(() => { window.location.reload() })

        // console.log("Fetching in useEffect Hook")
    }, [])

    //to check if the answer is correct or not on every click
    function handleSelect(e) {
        const no = parseInt(e.target.name)
        const value = e.target.value

        if (data.current.at(no).correct_answer === value) {
            total.current[no] = 1
        }
        else {
            total.current[no] = -0.25
        }

        // console.log(total.current)
    }

    //for submitting total points and navigating to result with points
    function handleSubmit() {
        const no1 = total.current.reduce((a, b) => a + b)
        Dispatch({ type: "addPoints", obtain: no1 })
        navigate(`/result/${no1}`, { replace: true })
    }

    //collection of que html
    function Questions() {

        const once = data.current
        // console.log(once)
        // console.log("once")
        const collection = once ? once.map((ques, index) => {

            //this is for setting options in random order 
            let opt = Math.floor(Math.random() * 10)
            while (opt > 2) {
                opt = Math.floor(Math.random() * 10)
            } 
            // console.log(opt)

            return <div key={index} className='que-div'>
                <h3>{index + 1} | {ques.question}</h3>
                <div className='option-div' >

                    {opt === 0 ?
                        <label>
                            <input type="radio" name={index} value={ques.correct_answer} onClick={(e) => handleSelect(e)} />
                            {ques.correct_answer}
                        </label>
                        :
                        <label>
                            <input type="radio" name={index} value={ques.incorrect_answers[opt]} onClick={(e) => handleSelect(e)} />
                            {ques.incorrect_answers[opt]}
                        </label>
                    }

                    {opt === 1 ?
                        <label>
                            <input type="radio" name={index} value={ques.correct_answer} onClick={(e) => handleSelect(e)} />
                            {ques.correct_answer}
                        </label>
                        :
                        <label>
                            <input type="radio" name={index} value={ques.incorrect_answers[opt]} onClick={(e) => handleSelect(e)} />
                            {ques.incorrect_answers[opt]}
                        </label>
                    }

                    {opt === 2 ?
                        <label>
                            <input type="radio" name={index} value={ques.correct_answer} onClick={(e) => handleSelect(e)} />
                            {ques.correct_answer}
                        </label>
                        :
                        <label>
                            <input type="radio" name={index} value={ques.incorrect_answers[opt]} onClick={(e) => handleSelect(e)} />
                            {ques.incorrect_answers[opt]}
                        </label>
                    }

                    {opt === 3 ?
                        <label>
                            <input type="radio" name={index} value={ques.correct_answer} onClick={(e) => handleSelect(e)} />
                            {ques.correct_answer}
                        </label>
                        :
                        <label>
                            <input type="radio" name={index} value={ques.incorrect_answers[opt]} onClick={(e) => handleSelect(e)} />
                            {ques.incorrect_answers[opt]}
                        </label>
                    }

                </div>
            </div>
        }) : <div> can not fetch Questions , please check connection and reload page</div>

        return collection
    }

    function SetQue() {
        return (
            <div className='set-que'>
                {/* <div className='que-level'>
                    <label>
                        <input type="radio" name="level"  />
                        Easy
                    </label>
                    <label>
                        <input type="radio" name="level" />
                        Medium
                    </label>
                    <label>
                        <input type="radio" name="level" />
                        Hard
                    </label>
                </div> 
                <br /> 
                <select className="que-type">
                    <option value="0">Any Category</option>
                    <option value="1">Sports</option>
                    <option value="2">Geography</option>
                    <option value="3">History</option>
                    <option value="4">Politics</option>
                    <option value="5">Art</option>
                    <option value="6">Celebrities</option>
                    <option value="7">Animals</option>
                    <option value="8">Vehicles</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Mythology</option>
                    <option value="11">Science &amp; Nature</option>
                    <option value="12">Science: Computers</option>
                    <option value="13">Science: Mathematics</option>
                    <option value="14">Science: Gadgets</option>
                    <option value="15">Entertainment: Books</option>
                    <option value="16">Entertainment: Film</option>
                    <option value="17">Entertainment: Music</option>
                    <option value="18">Entertainment: Musicals &amp; Theatres</option>
                    <option value="19">Entertainment: Television</option>
                    <option value="20">Entertainment: Video Games</option>
                    <option value="21">Entertainment: Board Games</option>
                    <option value="22">Entertainment: Comics</option>
                    <option value="23">Entertainment: Japanese Anime &amp; Manga</option>
                    <option value="24">Entertainment: Cartoon &amp; Animations</option>
                </select> */}

                <h1>Note:._</h1>
                <ul>
                    <li>This is MCQ Type Question.</li>
                    <li>1 Point per Correct Answer</li>
                    <li>0 Point for No Answer</li>
                    <li>0.25 Will Be Deducted per Wrong Answer</li>
                    <li>You can See Your Points at Profile Page</li>
                </ul>

                <br />

                <button onClick={() => {
                    setQueBtn(prev => !prev)
                }} className='que-btn'>
                    Display Questions
                </button>
                <br />

                <div>
                    *if you cannot get Questions, Please check your internet connection
                </div>
            </div>
        )
    }

    return (
        <>
            {
                queBtn ?
                    <div className='all-que-div'>
                        <Questions />
                        <br />
                        {data.current && <button className="Check-Ans" onClick={() => handleSubmit()} >SUBMIT</button>}
                    </div>
                    : <SetQue />
            }
        </>
    )
}

export default Quiz

//     < div className = 'option-div' >

// <label>
//     <input type="radio" name={index} value={ques.correct_answer} onClick={(e) => handleSelect(e)} />
//     {ques.correct_answer}
// </label>

// <label>
//     <input type="radio" name={index} value={ques.incorrect_answers[0]} onClick={(e) => handleSelect(e)} />
//     {ques.incorrect_answers[0]}
// </label>

// <label>
//     <input type="radio" name={index} value={ques.incorrect_answers[1]} onClick={(e) => handleSelect(e)} />
//     {ques.incorrect_answers[1]}
// </label>

// <label>
//     <input type="radio" name={index} value={ques.incorrect_answers[2]} onClick={(e) => handleSelect(e)} />
//     {ques.incorrect_answers[2]}
// </label>

// </div >