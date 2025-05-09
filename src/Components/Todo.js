import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// =================

import { useModal } from '../context/ModalContext';
import { useTodo } from '../context/TodoContext';
// =================



export default function Todo({td,ClickOpenDeleteM,ClickOpenEditeM}){

    // const {todo,setTodo}=useContext(TodosContext)
    const {showModal}=useModal()
    const htodo=useTodo()

    // ================================
        function clickCheck(){

            htodo.dispatch({type:"chack",pyload:{td:td}})
            showModal("the todo has updeat")
            
        }
            
            function handleClickOpenDeleteM(){
                ClickOpenDeleteM(td)
            };

            function handleClickOpenEditeM(){
                ClickOpenEditeM(td)
            };
    // ================================
        return(
            <>  
                <Card  style={{background:"lightgreen",margin:"5px"}}>
                    <CardContent style={{marginBottom:"1px"}}>
                        <Grid container spacing={2}>

                            <Grid size={8} >
                            <Typography variant="h3" gutterBottom>{td.title}</Typography>
                            <Typography variant="h5" gutterBottom>{td.body}</Typography>
                                
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