import React from 'react'
import { useLocalStorage } from 'react-use'

export const Context = React.createContext()

function ContextProvider(props) {

    const [UserName, setUserName] = useLocalStorage("username")
    const [Password, setPassword] = useLocalStorage("password")
    const [totalPoints, setTotalPoints] = useLocalStorage("totalPoints")
    const [obtPoints, setObtPoints] = useLocalStorage("obtPoints")

    const intialState = {
        name: 'kuldip sarvaiya',
        password: 'kuldip sarvaiya',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh84ijhsHQSr8Gja6aK0VexQvLXiaKUONzOfVwhR-JWOfFTk8rfYG7Pmp9WjhGdMXB3bs&usqp=CAU',
        ttlPoints: totalPoints?totalPoints: 0,
        obtPoints: obtPoints?obtPoints:0 
    }

    function Reducer(currState, action) { 
        switch (action.type) {
            case "addPoints":
                return {
                    ...currState,
                    ttlPoints: 10 + currState.ttlPoints,
                    obtPoints: action.obtain + currState.obtPoints
                }
            case "login":
                return {
                    ...currState,
                    name: action.username,
                    password:  action.password,
                    ttlPoints: action.ttlPoints,
                    obtPoints: action.obtPoints
                }
            default:
                console.log("no Changis in reducer function")
        }
    }

    const [data, Dispatch] = React.useReducer(Reducer, intialState) 

    React.useEffect(() => {

        setTotalPoints(data.ttlPoints)
        setObtPoints(data.obtPoints) 

    }, [data])

    React.useEffect(() => {

        if (UserName && Password) {
            Dispatch({ type: "login", username: UserName, password: Password, ttlPoints: totalPoints, obtPoints: obtPoints })
        }
        else {
            setUserName(prompt("Enter Your Name._"))
            setPassword(prompt("Create Password._"))
            setTotalPoints(0)
            setObtPoints(0)
            Dispatch({ type: "login", username: UserName, password: Password, ttlPoints: 0, obtPoints: 0 })
            window.location.reload()
        }

    }, [])

    return (
        <Context.Provider value={{ Data: data, Dispatch: (a) => Dispatch(a) }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider

///////////////////////////////////////////////////////////////

// {
//     "response_code": 0,
//     "results":

// [{
//         "category": "Celebrities",
//         "type": "multiple",
//         "difficulty": "easy",
//         "question": "Named after a character he played in a 1969 film, what is the name of the ski resort in Utah that Robert Redford bought in 1968?",
//         "correct_answer": "Sundance",
//         "incorrect_answers": ["Woodward", "Turner", "Booker"]
//     }, {
//         "category": "Science & Nature",
//         "type": "multiple", "difficulty": "easy",
//         "question": "What is the powerhouse of the cell?",
//         "correct_answer": "Mitochondria",
//         "incorrect_answers": ["Ribosome", "Redbull", "Nucleus"]
//     }
//      ...que
// ] }