import React from 'react'
import './App.css';
import { useState } from 'react'
import Child from '.Child'

function App(props) {

  const [user, setUser] = useState({ name: 'TOM', address: ' 123 Easy Street' }) // returned value = [state, setState]


  const handleClick = () => {
    alert('test')
    console.log(user)

    setUser({ ...user, 
      name: 'JERRY' 
    })    
  }

  // this.state.name
  // this.state --> user
  // user.name

  return (
    <div className="App" onClick={handleClick}>
      <br /><br /><br />

      Name: {user.name}
      <br />
      Address: {user.address}

      <br></br><br></br>
      <Child name={user.name} user={user} setUser={setUser} />
    </div>
  );
}

export default App;