import { useState } from "react"

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  // const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);

  const onSubmit = (e) => {
    e.preventDefault()
    if(!text){
      alert('please add a task')
      return
    }
    onAdd({text, day, reminder})
    
    setText('')
    setDay('')
    setReminder(false)
  }
  return (


    // const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab])

    <form className="add-from" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            ></input>    
        </div>
        <div className="form-control">
            <label>Date</label>
            <input type="text" placeholder="Date & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            ></input>    
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
            ></input>    
        </div>
        
        <input type="submit" value='Save Taskkkk' className="btn btn-block"/>      
    </form>
    
  )
}

export default AddTask
