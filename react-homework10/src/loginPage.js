import React, { useState } from 'react'
import Success from './Success'
import Failure from './Failure'


function Login() {
    
    const user = "User"
    const password = "password"
    const [username, setUserName] = useState("")
    const [pass, setPassword] = useState("")
    const [Login, setLogin] = useState("")
    
    function loginEvent(event) {
        
        event.preventDefault()
        
        if (username === user && pass === password) {
            setLogin(<Success user={user} />)
        } else {
            setLogin(<Failure />)
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
            <input id="password" type='password' placeholder="Password" onChange={login2}></input>
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