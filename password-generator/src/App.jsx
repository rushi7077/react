import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(charAllowed) str += "!@#$%^&*()_+{}|:<>?";
    if(numberAllowed) str+= "0123456789";

    for (let i = 0; i<length;i++){
      let char = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length,numberAllowed,charAllowed,setPassword])

  const passwordRef = useRef(null);
  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
    <div className='flex flex-wrap justify-center items-center min-h-screen bg-green-200'>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 
      my-8 text-orange-500 bg-gray-600 '>
        <h1 className='text-white text-center my-3 pt-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 my-2  bg-amber-50'
          placeholder='Password'
          readOnly
          ref={passwordRef} />

          <button className='bg-blue-500 text-white outline-none py-1 my-2 
          shrink-0 px-3' onClick={()=>{
            copyPasswordToClipboard();
          }}>copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center justify-center gap-x-1 pb-2'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1 pb-2'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              onChange={()=>{
                setNumberAllowed((prev)=> !prev)
              }}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1 pb-2'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              onChange={()=>{
                setCharAllowed((prev)=> !prev)
              }}
            />
            <label>Characters</label>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App
