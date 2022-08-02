import React from 'react'
import './tasck.css'
const Tasks = ({elp:{Title,Date,isdone}}) => {
  return (

    <div style={{display:"flex" ,justifyContent:"space-evenly"}}>

        <h1 className={isdone ? "completed":null} >{Title} </h1>
        <p>{Date}</p>
      <div>
      <button>X</button><button>Edit</button>
      {/* <input type="checkbox" name="" id="" /> */}
      </div>
    </div>
  )
}

export default Tasks
