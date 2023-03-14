import React, { useState } from  'react';
    
const  ConditionalUserForm = (props) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState();
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = {username, email, password};
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");

        setHasBeenSubmitted(true);
    };

    const handleUsername = (e) => {
        setUsername(e.target.value);
        if (username.length < 1) {
            setUsernameError("Username is required");
        } else if (username.length < 3) {
            setUsernameError("Username must be more than 3 characters long!");
        } else {
            setUsernameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value) ;
        if (email.length < 1) {
            setEmailError("Email is required");
        } else if ( email.length < 3) {
            setEmailError("Email must be more than 8 characters long!");
        } else {
            setEmailError("");
        }
    }

    const handlePassowrd = (e) => {
        setPassword(e.target.value);
        if (password.length < 1) {
            setPasswordError("Password is required");
        } else if (password.length < 8) {
            setPasswordError("Password must be more than 8 characters long!");
        } else {
            setPasswordError("");
        }
    }
    
    return(
        <form onSubmit={ createUser }>
            { hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form!</h3>
            }

            <div>
                { usernameError ? <p>{ usernameError }</p> : null }
                <label>Username: </label> 
                <input type="text" onChange={ handleUsername } value={username} />
            </div>
            <div>
                { emailError ? <p>{ emailError }</p> : null }
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } value={email}/>
            </div>
            <div>
                { passwordError ? <p>{passwordError}</p> : null }
                <label>Password: </label>
                <input type="text" onChange={ handlePassowrd } value={password} />
            </div>
            { usernameError ? <input type="submit" value="Create User" disabled /> : <input type="submit" value="Create User" />
            }
        </form>
    );
};
    
export default ConditionalUserForm;
