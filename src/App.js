import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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
            reminder:true,
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
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
