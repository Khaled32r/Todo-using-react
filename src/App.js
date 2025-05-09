import TodoList from "./Components/TodoList";
// import { useState } from "react";
import './App.css';
import { createTheme,ThemeProvider } from "@mui/material";
// import { v4 as uuidv4 } from 'uuid';
import { TodoProvider } from "./context/TodoContext";
import { ModalProvider } from "./context/ModalContext";

const theme =createTheme({
    typography:{
        fontFamily:["IBM"]
    }
})
function App() {

        // const defTodo=[
        //     {id:uuidv4(), title:"read book",body:"math",isCompleed:false},
        //     {id:uuidv4(),title:"read book",body:"math",isCompleed:false},
        // ];

        // const [todo,setTodo]=useState(defTodo)
        



    return (
        <ThemeProvider theme={theme}>
            <ModalProvider >
                <div className="App-header">
                <TodoProvider>
                    <TodoList/>
                </TodoProvider>
                </div>
            </ModalProvider>
        </ThemeProvider>
    );
    }

export default App;
