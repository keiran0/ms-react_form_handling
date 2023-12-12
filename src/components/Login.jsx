import { useRef, useState } from 'react';

import Input from './Input';

export default function Login() {

    const [emailIsInvalid, setEmailIsInvalid] = useState(false)

    const email = useRef();
    const password = useRef();

    function handleSubmit(e) {
        e.preventDefault()
        const enteredEmail = email.current.value
        const enteredPassword = password.current.value

        const emailIsValid = enteredEmail.includes('@')

        if (!emailIsValid) {
            setEmailIsInvalid(true);
            return; //return if the email is not valid. For example, if a HTTP request is sent below this block, returning early will prevent that block from ever executing.
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <Input label="Email" id="email" type="email" name="email" onBlur={()=>handleInputBlur("email")} onChange={(event)=>handleInputChange('email', event.target.value)} value={enteredValues.email}/>
                <Input label="Password" id="password" type="password" name="password" onBlur={()=>handleInputBlur("password")} onChange={(event)=>handleInputChange('password', event.target.value)} value={enteredValues.password}/>
      
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
