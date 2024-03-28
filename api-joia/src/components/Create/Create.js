import axios from "axios";
import { useState } from "react";
import '../../App.css'

export default function CreateUser() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setId] = useState("");

    let json = JSON.stringify({title:title, body:body, userId:userId})

    function handleSubmit(event) {
        console.log(json)
        event.preventDefault();

        axios.post("https://jsonplaceholder.typicode.com/posts", json) 
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

                <form onSubmit={handleSubmit}>
                    <h1>Crie seu Usuario</h1>
                    <p><input
                        className="inputs"
                        type="text"
                        placeholder="Titulo"
                        value={title}
                        onChange={(event) => { setTitle(event.target.value) }}
                    /></p>
                
                    <p><input
                    className="inputs"
                        type="text"
                        placeholder="Corpo"
                        value={body}
                        onChange={(event) => { setBody(event.target.value) }}
                    /></p>
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