import TodoList from "./Components/TodoList";
import { useState } from "react";
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { TodosContext } from "./context/TodoContext";

function App() {

      const defTodo=[
          {id:uuidv4(), title:"read book",body:"math",isCompleed:false},
          {id:uuidv4(),title:"read book",body:"math",isCompleed:false},
      ];
  
      const [todo,setTodo]=useState(defTodo)


  return (
    <div className="App-header">
      <TodosContext.Provider value={{todo,setTodo}}>
        <TodoList/>
      </TodosContext.Provider>
    </div>
  );
}

export default App;
