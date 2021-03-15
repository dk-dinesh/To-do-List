import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
function Todo(props){
  return(
        <div className='input-data'>
          <button className='cancel' onClick={()=>{
              props.onSelect(props.id);
          }}>X</button>
          <p>{props.text}</p>
        </div>);
};

export default Todo;