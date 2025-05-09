import { createContext,useState,useContext } from "react";
import Modal from "../Components/Modal";


let ModalContext=createContext()

export const ModalProvider=({children})=>{

    const [open, setOpen] = useState({show:false,massag:""});

    function showModal(massag){
        setOpen({show:true,massag:massag})

        setTimeout(() => {
            setOpen({...open,show:false})
            }, 2000);
    }

    return(
        <ModalContext.Provider value={{showModal}}>
            <Modal open={open}/>  
            {children}
        </ModalContext.Provider>
    )
}

export const useModal=()=>{
    return useContext(ModalContext)
}