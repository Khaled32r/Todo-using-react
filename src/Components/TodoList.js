import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// =================
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// ===========================================
import Todo from './Todo';
// other
import { useState,useEffect,useMemo } from 'react';

import { useTodo } from '../context/TodoContext';
import { useModal } from '../context/ModalContext';
// import reducer from '../reducers/todosReducer';
//=============================================================


export default function TodoList(){
 // hoks

    // ===reducer===
    // const [todo,dispatch]=useReducer(reducer,[])

    // ===states===
    const {todo,dispatch}=useTodo()

    const {showModal}=useModal()  //it is costum hoks!!

    const [title,setTitle]=useState("")

    const [td,setTd]=useState({})

    const [todoType,setTodoType]=useState("all")

    const [open1, setOpen1] = useState(false);

    const [open, setOpen] = useState(false);

    // ===effect===
    useEffect(()=>{
        dispatch({type:"get"})
    },[dispatch])

    // ===memo===
    const completedTodo= useMemo(()=>{
        return todo.filter((t)=>{
            return t.isCompleed})
        },[todo])
        
        const notCompletedTodo=useMemo(()=>{
            return todo.filter((t)=>{
                return !t.isCompleed})
            },[todo])
            
            let toDoRener=todo
            if (todoType==="completed") {
                toDoRener=completedTodo
            }else if(todoType==="notCompleted"){
                toDoRener=notCompletedTodo
            }            
            
    // ==============================
    function AddClick(){
        if(title!==""){
            dispatch({type:"added",pyload:{title}})
            setTitle("")
            showModal("the todo has added")
        }
    }
    
    function deleteTodo(){
        dispatch({type:"delete",pyload:{td}})
        setOpen1(false)
        showModal("the todo has delted")
    }
    
    function ediite(){
        dispatch({type:"edite",pyload:{td}})
        handleCloseEditeM()
        showModal("the todo has edited")
        
    }
    
    function todoSetType(e){
        setTodoType(e.target.value)
    }

    // =============
    function handleCloseDeleteM(){
        setOpen1(false);
    };

    function handleClickOpenDeleteM(td){
        setTd(td)
        setOpen1(true);
    };
   // =============
    function handleCloseEditeM(){
        setOpen(false);
        
    };
    function ClickOpenEditeM(tds){
        setOpen(true);
        setTd(tds)
    };
// ==============================

    const todos=toDoRener.map((t)=>{
        return <Todo key={t.id} td={t} ClickOpenDeleteM={handleClickOpenDeleteM} ClickOpenEditeM={ClickOpenEditeM} />
    })

    return(
        <>

                {/* delete modal */}
                    <Dialog
                        open={open1}
                        onClose={handleCloseDeleteM}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        >
        
                        <DialogTitle id="alert-dialog-title">
                        {"Are you suir?"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you wont to delete that?
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleCloseDeleteM}>Close</Button>
                        <Button onClick={deleteTodo} autoFocus>
                            Agree
                        </Button>
                        </DialogActions>
                    </Dialog>
                {/*== delete modal== */}

                {/* edite modal */}
                    <Dialog
                        open={open}
                        onClose={handleCloseEditeM}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        >
                        <DialogTitle id="alert-dialog-title">
                        {"what this edites ?"}
                        </DialogTitle>
                        <DialogContent>
                        <TextField autoFocus margin="dense" id="name" fullWidth variant="standard" label="title" value={td.title} onChange={(event)=>{setTd({...td,title:event.target.value})}}/>
                        <TextField autoFocus margin="dense" id="name" fullWidth variant="standard" label="description" value={td.body} onChange={(event)=>{setTd({...td,body:event.target.value})}} />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleCloseEditeM}>Close</Button>
                        <Button onClick={ediite} autoFocus>
                            Updeat
                        </Button>
                        </DialogActions>
                    </Dialog>
                {/* edite modal */}

            <Card sx={{ minWidth: 600 }}>

                

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

