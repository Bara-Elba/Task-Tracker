import { useState } from "react"

const AddTask = () => {
  return (


    
    <form className="add-from">
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task"></input>    
        </div>
        <div className="form-control">
            <label>Date</label>
            <input type="text" placeholder="Date & Time"></input>    
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox"></input>    
        </div>
        
        <input type="submet" value='Save Task' className="btn btn-block"/>      
    </form>
  )
}

export default AddTask
