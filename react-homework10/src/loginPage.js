import React, { useState } from 'react'
import GreenLight from './greenlight'
import TrapDoor from './trapdoor'


function Login() {
    
    const user = "User"
    const password = "Password"

  
    const [username, setUserName] = useState("")
    const [pass, setPassword] = useState("")

    
    const [Login, setLogin] = useState("")



    function loginEvent(event) {
        
        event.preventDefault()
        
        if (username === user && pass === password) {
            setLogin(<GreenLight user={user} />)
        } else {
            setLogin(<TrapDoor />)
        }
    }
    
    const login1 = (event) => setUserName(event.target.value)
    const login2 = (event) => setPassword(event.target.value)

    return (

        <div >

            <form onSubmit={loginEvent}>
        
                <div>
                    <label>
        <input id="username" type='text' placeholder="User Name" onChange={login1}></input>
                    </label>
                </div>

                <label>
            <input id="password" type='passowrd' placeholder="Password" onChange={login2}></input>
                </label>

                <div>
                    <button>Sign In</button>
                </div>

                <div>{Login}</div>
            </form>
        </div>
    )
}
export default Login;