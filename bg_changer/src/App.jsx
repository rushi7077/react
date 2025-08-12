import { useState } from 'react'



function App() {

  const [color, setColor] = useState("olive")



  return (
    
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}} >
      <div className='fixed flex flex-wrap bottom-10 justify-center inset-x-2 px-2'>
        <div className='flex flex-wrap gap-2 bg-white px-2 py-2 rounded-full'>
          <button className='rounded-full px-3 py-1 text-white
          border border-black' style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>red</button>
          <button className='rounded-full px-3 py-1 text-white
          border border-black' style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>blue</button>
          <button className='rounded-full px-3 py-1 text-white
          border border-black' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>green</button>
          <button className='rounded-full px-3 py-1
          border border-black' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>yellow</button>
          <button className='rounded-full px-3 py-1 text-white
          border border-black' style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>purple</button>
          <button className='rounded-full px-3 py-1 text-white
          border border-black' style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>black</button>
          <button className='rounded-full px-3 py-1 text-white
          border border-black' style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>orange</button>
          <button className='rounded-full px-3 py-1
          border border-black' style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>white</button>
          <button className='rounded-full px-3 py-1
          border border-black' style={{backgroundColor:"lavender"}} onClick={()=>setColor("lavender")}>lavender</button>
          <button className='rounded-full px-3 py-1 text-white
          border border-black' style={{backgroundColor:"maroon"}} onClick={()=>setColor("maroon")}>maroon</button>
       </div>
      </div>
    </div>

  );
}

export default App
