import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Modal({open}) {

    return (
        <div>
            <Snackbar open={open.show} autoHideDuration={5000} >
                <Alert
        
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
                >
                {open.massag}
                </Alert>
            </Snackbar>
        </div>
    );
}