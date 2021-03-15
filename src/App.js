import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Task'

function App() {
  const [event,setevent]=useState("");
  const [item,setitem]=useState([]);
  const changer=(change)=>{
    setevent(change.target.value);
  };
  const AddTask=()=>{
    setitem((oldvalue)=>{
      return [...oldvalue,event];
    });
    setevent("");
  };
  const deletetask=(id)=>{
    console.log('deleted')
    setitem((oldvalue)=>{
      return oldvalue.filter((cvalue,index)=>{
        return id!==index;
      // delete oldvalue[index];
      })
    });
  };
  return (
    <div className="main-pad">
      <h1>To-do-List</h1>
      <div className='input-data'>
        <input type='text' name='task' placeholder='Add a Task' value={event} onChange={changer}></input>
        <button onClick={AddTask}>+</button>
      </div> 
        {item.map((itvalue,index)=>{
          return (<Todo
            text={itvalue}
            key={index}
            id={index}
            onSelect={deletetask}
            />
        );})}
    </div>
  );
}

export default App;
