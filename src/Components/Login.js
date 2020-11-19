import React,{ useState } from "react";;
import { axiosHelper } from "../Utilities/axiosHelper";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function clickHandler(){

        const method = 'post';
        const url = 'localhost:8000/v1/oauth/token';
        const data = { email, password };

        axiosHelper(method, url, data)
    }

    return (
        <>
            <div class="form-group">
                <label for="InputEmail1">Email address</label>
                <input onChange={ e => setEmail(e.target.value) } value={ email } type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div class="form-group">
                <label for="InputPassword1">Password</label>
                <input onChange={ e => setPassword(e.target.value) } value={ password } type="password" class="form-control" id="InputPassword1" placeholder="Password" />
            </div>
            <button onClick={ clickHandler } class="btn btn-primary">Submit</button>
        </>
    )
}

export default Login;