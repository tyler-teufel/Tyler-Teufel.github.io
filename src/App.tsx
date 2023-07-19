import './App.css'
import {Header} from './components/header.tsx'
import jquery from 'jquery'


function App() {
  
  


  return (
    <>
      <Header>
       <h1>Portfolio</h1> 
        </Header>
      
      <div>
        
       </div> 
       
       
       <input className='name' type="text" placeholder="Enter your name" />
      <button>Submit</button>

      <p className="read-the-docs">
        Enter your name to be added to the list!
      </p>
    </>
  )
}

export default App
