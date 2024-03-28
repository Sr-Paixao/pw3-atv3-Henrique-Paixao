import axios from "axios";
import { useState, useEffect } from "react";
import '../../App.css'

export default function Getting() {
    const [userId, setId] = useState("");


    function handleSubmit(event) {
        event.preventDefault();

        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`) 
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(`erro na criação do usuario: ${error}`)
        })
    }


    return (
        <div className="App">
            <div>
            <h1>Procure seu usuario</h1>
                <form onSubmit={handleSubmit}>
                    
                    <p><input
                    className="inputs"
                    type="number"
                    placeholder="Id Usuario"
                    value={userId}
                    onChange={(event)=>{setId(event.target.value)}}
                    /></p>
                    <br/>
                    <button style={{fontSize:"larger"}} type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}