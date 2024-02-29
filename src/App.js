import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [x , setx] = useState([])

  const inputRef = useRef()

  const add = () => {
      const value = inputRef.current.value
      const newData = {completed : false , value} 
      setx([...x , newData])

      inputRef.current.value = ""
  }

  const itemDone = (index) =>{
     const newx = [...x]

     newx[index].completed =  !newx[index].completed

     setx(newx)
  }

  
  const toDelete = (index) => {
     const newx = [...x]

     newx.splice(index, 1)

     setx(newx)
  }

  return (
    <>
    <h1 className='name '> Al Salam Intarnational Hospital </h1>
    <div className="App">     
      
      <div className='list'>
         <h2>patients Booking </h2>
          <ul>
               {
                  x.map(({value , completed} , index ) => {
                    return <div className='div10'> 
                      <li className={completed ? "diffstyle" : ""} onClick={ () => itemDone(index)} >{value}</li>

                    <span onClick={() => toDelete(index)} >X</span>
                    </div>
                  })
               }
          </ul>
</div>
<div>
<input  ref={inputRef}  placeholder='Enter the patients Booking' />

          <button onClick={add} >Add</button>

</div>
          
    </div>
    </>
  );
}

export default App;

