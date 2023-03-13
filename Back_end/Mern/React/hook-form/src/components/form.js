import React, {useState} from 'react';

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const createForm = (e) => {

        e.preventDefault();

        const userCreation = {firstName, lastName, email, password, confirm};
        console.log(userCreation);
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirm("")
    }

    return (
        <>
            <form onSubmit={ createForm }>
                <div>
                    <label>First Name</label>
                    <input type="text" onChange={ (e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" onChange={ (e) => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" onChange={ (e) => setConfirm(e.target.value)} value={confirm} />
                </div>
                <input type="submit" value="Create Form" />
            </form>

            <div>
                <p></p>
            </div>
        </>
    );
};

export default HookForm;