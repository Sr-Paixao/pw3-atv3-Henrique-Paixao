import { useEffect, useState } from "react"
import axios from "axios";
import '../../App.css';

function List(){
    const [users,setUsers] = useState([]);
    
    useEffect(()=>{
        axios.get(
        'https://jsonplaceholder.typicode.com/posts/'
        )
        .then((response)=>{
            setUsers(response.data)
            console.log(response)
        }
        )

        .catch((error)=>{
            console.log(error)
        })
    },[]);

    return(
        <div>
            {
                users.map((user)=>(
                        <div className='cardUser'>
                            <h1> {user.id} </h1>
                            <h3> {user.title} </h3>
                            <p>{user.body}</p>
                        </div>
                    )
                )
            }
        </div>
    );  
}

export default List