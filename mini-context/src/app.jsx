import { useState } from 'preact/hooks'
import './app.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <UserContextProvider>
        <h2>React with chai</h2>
        <Login/>
        <Profile/>
     </UserContextProvider>
    </>
  )
}
