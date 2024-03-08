import React, { useState, useEffect } from "react";
import { getLogin } from "../backend/login";


export default function TestForm(){
   const [password, setPassword] = useState(null);
   const [username, setUsername] = useState(null);

   const handleForm = (event) =>{
    event.preventDefault(); // Prevent No Value forms
    getLogin(username, password)
   }


    return(
        <div>
            <form method={"POST"} onSubmit={() => handleForm()}>
                <input type={"text"} name={"username"} id={"username"} onChange={(pass) => setPassword(pass.target.value)}>
                </input>
                <input type={"text"} name={"password"} id={"password"} onChange={(user) => setUsername(user.target.value)}>
                </input>
                <button type={"submit"}>Submit </button>
            </form>


        </div>

    );
}