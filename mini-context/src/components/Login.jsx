import React, { useContext, useState } from 'react'
import userContext from '../context/UserContext'

function Login() {

    
    const [UserName,setUserName] = useState('')
    const [Password,setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const handleSubmit= (e) =>{
        e.preventDefault();
        setUser({UserName,Password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={UserName} onChange={(e) => setUserName(e.target.value)} 
        placeholder='username' />
        <input type="text"
        value={Password} onChange={(e) => setPassword(e.target.value)} 
        placeholder='password' />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )

}

export default Login