import axios from "axios";
import { useState } from "react";
import '../../App.css'

export default function Updating() {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [userId, setUserId] = useState("");

    let json = JSON.stringify({id:id, title:title, body:body, userId:userId})

    function handleSubmit(event) {
        console.log(json)
        event.preventDefault();

        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, json) 
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(`Erro no update ${error}`)
        })

    }


    return (
        <div className="App">
            <div>
            <h1>Atualize seu Usuario</h1>
                <form onSubmit={handleSubmit}>
                    <p><input
                        className="inputs"
                        type="text"
                        placeholder="Id"
                        value={id}
                        onChange={(event) => { setId(event.target.value) }}
                    /></p>
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
                    onChange={(event)=>{setUserId(event.target.value)}}
                    /></p>
                    <br/>
                    <button style={{fontSize:"larger"}} type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}