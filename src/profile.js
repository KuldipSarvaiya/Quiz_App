import React from 'react'
import { Context } from './context'
import { Link, Outlet } from 'react-router-dom' 

function Profile() {
    
    const { Data } = React.useContext(Context)

    // React.useEffect(()=>{
    //     window.location.reload()
    // },[])
      
    return (
        <div className="profile-main">
            <br />
            <div style={{
                display: "flex",
                gap: "20px",
                flexDirectoin: "row"
            }}>
                <img src={Data.photo} alt="ProfilePicture" className='profile-picture' />
                <h2 className='my-name'>{Data.name} <br/> #winnig {Math.round((Data.obtPoints * 100) / Data.ttlPoints)}<small>%</small></h2>
            </div>
            <div style={{
                paddingLeft:"20px"
            }}>
                <h3>
                    Questoins Attempted  - {Data.ttlPoints}
                </h3>
                <h3>
                    Obtained Points - {Data.obtPoints}
                </h3> 
            </div>
            <Link to='/quiz' style={{
                textDecoration: "none" ,
                width:"fit-content"
            }}>
                <div className='new-quiz'>
                    Start New Quiz
                </div>
            </Link> 
            <br/>
            <Link to='/about' style={{
                textDecoration: "none" ,
                width:"fit-content"
            }}>
                <div className='new-quiz'>
                    About
                </div>
            </Link> 
            <br/>
            <Outlet/>
        </div>
    )
}

export default Profile