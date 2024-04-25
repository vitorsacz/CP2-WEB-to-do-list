'use client';

import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage: React.FC = () =>{


    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleLogin = () => {
        if (username === 'admin' && password === 'admin'){
            localStorage.setItem("isLoggedIn", "true")
            localStorage.setItem("error", "0")
            router.push("/todolist");
        
        }else{
            
            const erro = localStorage.getItem( "error" );

            if(!erro || erro != '0'){
                localStorage.setItem('error', '1');
            }

        }
    } 

    return(
        <>
            <h1> Login</h1>

            <form action="">
                <label>Usuário: 
                    <input type="text" placeholder="Usuário" value={ username } onChange={ (e) => setUsername(e.target.value)}/><br/>
                </label>

                <br />

                <label>Senha: 
                    <input type="password" placeholder="Senha" value={ password } onChange={ (e) => setPassword(e.target.value)}/><br/>
                </label>

                <br />

                <button onClick={ handleLogin}>Login</button>
                <br />
                { error && <span>{ error }</span>}
                <br />

            </form>
        </>
    )
}

export default LoginPage;