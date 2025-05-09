import { v4 as uuidv4 } from 'uuid';


export default function reducer(currentTodos,action){

    switch (action.type) {

        case "added":{
            const newTodo={
                id:uuidv4(),
                title:action.pyload.title,
                body:"",
                isCompleed:false
            };
            const upTodo=[...currentTodos,newTodo]
                    localStorage.setItem("todos",JSON.stringify(upTodo))
                    return upTodo ;
        }

        case "delete":{
            const updeated=currentTodos.filter((t)=>{
                return  t.id!==action.pyload.td.id
                })
                localStorage.setItem("todos",JSON.stringify(updeated))
                return updeated;
        }

        case "edite":{
            const updeated=currentTodos.map((t)=>{
                if (t.id===action.pyload.td.id) {
                    return {...t,title:action.pyload.td.title,body:action.pyload.td.body}
                }else{return t}
            })
            localStorage.setItem("todos",JSON.stringify(updeated))
            return updeated
        }

        case "get":{
            console.log("**useEffect**")
            const storageTodo=JSON.parse(localStorage.getItem("todos"))??[]
            return storageTodo;
        }

        case  "chack":{
            const updeated=currentTodos.map((t)=>{
                if (t.id===action.pyload.td.id) {
                    const upt={...t,isCompleed:!t.isCompleed}
                    return upt

                }
                return t;
            })
            
            localStorage.setItem("todos",JSON.stringify(updeated))
            return updeated;
        }



        default:throw Error("unknown Action");
    }

}