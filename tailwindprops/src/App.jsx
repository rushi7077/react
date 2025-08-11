
import './App.css';
import Card from '../components/card';

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-3 pb-1'>Tailwind</h1>
      <Card name="Rahul" category="Web Developer"/>
      <Card name="Ram" category="Data Engineer"/>
      <Card name="Shyam" />
    </>
  )
}

export default App
