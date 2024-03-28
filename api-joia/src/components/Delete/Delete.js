import axios from "axios";
import { useState } from "react";
import '../../App.css'


//Nao sei se esse funcionou ou nao 

export default function Delete() {
    const [deletei, setDeletei] = useState("");


    function handleSubmit(event) {
        event.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/posts/${deletei}`) 
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(`erro no delete: ${error}`)
        })
    }


    return (
        <div className="App">
            <div>

                <form onSubmit={handleSubmit}>
                <h1>Delete seu Usuario</h1>
                    <p><input
                    className="inputs"
                    type="number"
                    placeholder="id a ser deletado"
                    value={deletei}
                    onChange={(event)=>{setDeletei(event.target.value)}}
                    /></p>
                    <br/>
                    <button style={{fontSize:"larger"}} type="submit">Enviar</button>
                </form>
                
            </div>
        </div>
    );
}