import { createContext,useContext,useReducer } from "react";
import reducer from '../reducers/todosReducer';

export const TodosContext=createContext([])

export const TodoProvider=({children})=>{
    const [todo,dispatch]=useReducer(reducer,[])
    return(
        <TodosContext.Provider value={{todo,dispatch}} >
            {children}
        </TodosContext.Provider>
    )
}

export const useTodo=()=>{
    return useContext(TodosContext)
}
