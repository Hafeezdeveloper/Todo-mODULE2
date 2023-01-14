// import logo from './logo.svg';
// import avvvv from './mode1.mjs'
// import Navbar from './components/Navbar';
import React,{ useState } from 'react';
import './App.css';

function App() {
  const [txt,setTxt] = useState("")
  const [array,setArrayList] = useState([])
  
  const addBtn= () =>{
    setArrayList([
      ...array, 
      {value:txt}
    ])
    setTxt("")
  }

  const delBtn = (ind) =>{
      const arraCpy = [...array]
      const arrayFilt = arraCpy.filter( (data , i ) =>{ 
        if(ind !== i){
          return{
            ...data
          }
        }
      })
        // console.log(data)
      //   if(i !== ind){
      //     return {
      //       ...data,
      //     }
      //   }                                
      // })
      setArrayList(arrayFilt)
  }

  return (    
    <>
    
    <div style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
      <input style={{width:"50%",height:'50px',fontSize:'20px'}} type="text" value={txt} onChange={(e) => setTxt(e.target.value)} name="" id="" />
      <button style={{backgroundColor:"red",color:"white"}} onClick={addBtn}>Add</button>    
    </div>
    <div>
      <ul style={{margin:'10px 320px'}}>
        {array.map( (data , ind) =>{
          // console.log(data)
          return(
            <li key={ind}> <h3>{data.value}</h3> <button >edit</button> <button onClick={() =>delBtn(ind)}>del</button></li>
          )
        })}
      </ul>
    </div>
    </>
      );
}

export default App;
