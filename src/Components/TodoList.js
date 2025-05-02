import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
//====
import Todo from './Todo';
// other
import { v4 as uuidv4 } from 'uuid';
import { useState,useContext,useEffect } from 'react';
import { TodosContext } from '../context/TodoContext';



export default function TodoList(){


    function AddClick(){
        const newTodo={
            id:uuidv4(),
            title:title,
            body:"",
            isCompleed:false
        };

            if(title!==""){
                setTodo([...todo,newTodo])
                localStorage.setItem("todos",JSON.stringify([...todo,newTodo]))
                setTitle("")
            }
    }

    function todoSetType(e){
        setTodoType(e.target.value)
    }


    // ============

    const {todo,setTodo}=useContext(TodosContext)

    const [title,setTitle]=useState("")

    const [todoType,setTodoType]=useState("all")

    const completedTodo=todo.filter((t)=>{
        return t.isCompleed
    })
    const notCompletedTodo=todo.filter((t)=>{
        return !t.isCompleed
    })

    let toDoRener=todo

    if (todoType==="completed") {
        toDoRener=completedTodo
    }else if(todoType==="notCompleted"){
        toDoRener=notCompletedTodo
    }
    const todos=toDoRener.map((t)=>{
        return <Todo key={t.id} td={t} />
    })




    useEffect(()=>{
        console.log("****K****H****")
        const storageTodo=JSON.parse(localStorage.getItem("todos"))??[]
        setTodo(storageTodo)
    },[setTodo])

    return(
        <>

        <Card sx={{ minWidth: 600 }}>
            {Date()}
            <CardContent>
                <Typography gutterBottom sx={{  fontSize: 20 }}>My todo list</Typography>
                <hr/>
            

                <center>
                    <ToggleButtonGroup value={todoType} variant="contained" aria-label="Basic button group" style={{background:"lightblue"}} onChange={todoSetType}>
                        <ToggleButton value="all">All</ToggleButton>
                        <ToggleButton value="completed">Completed</ToggleButton>
                        <ToggleButton value="notCompleted">Not Completed</ToggleButton>
                    </ToggleButtonGroup>
                </center>

                {/* ========== */}

                <div>
                    {todos}
                </div>
                hhh
                

                <Grid container marginTop="20px" >

                    <Grid
                        xs={8}
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                        width="60%"
                    >
                        <TextField style={{width:"100%"}} id="outlined-basic" label="todo title" variant="outlined" value={title} onChange={(event)=>{setTitle(event.target.value)}}/> 
                    </Grid>
                    
                    <Grid
                        xs={4}
                        display="flex"
                        justifyContent="space-around"
                        alignItems="center"
                        width="40%"
                    >
                        <Button style={{width:"100%",height:"100%"}} variant="contained" onClick={()=>{AddClick()}}>Add</Button>
                    </Grid>

                </Grid>


            </CardContent>
        </Card>
        </>
    );
}

