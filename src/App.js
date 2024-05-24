import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";



function App() {


  const [tasks, setTasks] = useState(
    [
        {
            id : 1,
            text: 'text1',
            day : 'jan 1',
            reminder:true,
    
        },{
            id : 2,
            text: 'text2',
            day : 'feb 2',
            reminder:false,
        },{
            id : 3,
            text: 'text3',
            day : 'mar 3',
            reminder:true,
        }
    ]
)




  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> (task.id !== id)))
  }
  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, reminder:!task.reminder} : task
    ))
  }

  return (
    <div className="container">
      <Header />
      <AddTask/>
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'Nothing to show yet'}
    </div>
  ); 
}

export default App;
