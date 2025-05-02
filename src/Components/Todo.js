import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext,useState } from 'react';
import { TodosContext } from '../context/TodoContext';
import TextField from '@mui/material/TextField';

export default function Todo({td}){

const {todo,setTodo}=useContext(TodosContext)

const [open1, setOpen1] = useState(false);

const [open, setOpen] = useState(false);
const [updeat, setUpdeat] = useState({title:td.title,body:td.body});
// ================================
    function clickCheck(){
        const updeated=todo.map((t)=>{
            if (t.id===td.id) {
            // t.isCompleed==false?t.isCompleed=true:t.isCompleed=false
            t.isCompleed=!t.isCompleed
        }
        return t;
    })
    setTodo(updeated)
    localStorage.setItem("todos",JSON.stringify(updeated))
    }
    
    function deleteTodo(){
            const updeated=todo.filter((t)=>{
                if (t.id===td.id) {
                return false
            }else{
                return true
            }
            
        })
        setTodo(updeated)
        localStorage.setItem("todos",JSON.stringify(updeated))
    }

    function handleClickOpenDeleteM(){
        setOpen1(true);
    };

    function handleCloseDeleteM(){
        setOpen1(false);
    };
    
    function handleClickOpenEditeM(){
        setOpen(true);
    };

    function handleCloseEditeM(){
        setOpen(false);
        setUpdeat({})
    };

    function ediite(){
        const updeated=todo.map((t)=>{
            if (t.id===td.id) {
                return {...t,title:updeat.title,body:updeat.body}
            }else{return t}
    })
        setTodo(updeated)
        localStorage.setItem("todos",JSON.stringify(updeated))

        handleCloseEditeM()
    }

// ================================
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
                <TextField autoFocus margin="dense" id="name" fullWidth variant="standard" label="title" value={updeat.title} onChange={(event)=>{setUpdeat({...updeat,title:event.target.value})}}/>
                <TextField autoFocus margin="dense" id="name" fullWidth variant="standard" label="description" value={updeat.body} onChange={(event)=>{setUpdeat({...updeat,body:event.target.value})}} />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleCloseEditeM}>Close</Button>
                <Button onClick={ediite} autoFocus>
                    Updeat
                </Button>
                </DialogActions>
            </Dialog>
        {/* edite modal */}


        <Card  style={{background:"lightgreen",margin:"5px"}}>
            <CardContent style={{marginBottom:"1px"}}>
                <Grid container spacing={2}>

                    <Grid size={8} height="100px">
                        <h4>{td.title}</h4>
                        <p>{td.body}</p>
                    </Grid>

                    <Grid size={4}>
                        <IconButton color="primary" onClick={clickCheck}>
                                <CheckCircleIcon sx={{color:`${td.isCompleed?"green":"red"}`}}  />
                        </IconButton>

                        <IconButton color="secondary" onClick={handleClickOpenEditeM}>
                                <EditIcon  />
                        </IconButton>

                        <IconButton aria-label="delete" onClick={handleClickOpenDeleteM}>
                                <DeleteIcon />
                        </IconButton>
                    </Grid>

                </Grid>
            </CardContent>
        </Card>
        </>
    );
}