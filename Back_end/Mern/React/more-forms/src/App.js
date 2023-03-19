import './App.css';
import React, {useState} from 'react';


function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const creatUser = (e) => {
    e.preventDefault();

    const newUser = {firstName, lastName, email, password, confirm};
    console.log(newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirm("");
    
  }


  return (
    <div className="App">
      <form onSubmit={ creatUser }>
        <div>
          {firstName.length < 2 && firstName.length > 0 ? <p><b>First Name must be more than 2 characters!</b></p> : null}
          <label>First Name: </label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
        </div>

        <div>
          {lastName.length < 2 && lastName.length > 0 ? <p><b>Last Name must be more than 2 characters!</b></p> : null}
          <label>Last Name: </label>
          <input type="text" onChange={ (e) => setLastName(e.target.value) } value={lastName} />
        </div>

        <div>
          {email.length < 2 && email.length > 0 ? <p><b>Email must be more than 2 characters!</b></p> : null}
          <label>Email: </label>
          <input type="text" onChange={ (e) => setEmail(e.target.value) } value={email} />
        </div>

        <div>
          {password.length < 8 && password.length > 0 ? <p><b>Password must be more than 8 characters!</b></p> : null}
          <label>Password: </label>
          <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password} />
        </div>
        <div>
          {confirm !== password  ? <p><b>Passwords must match!</b></p> : null}
          <label>Confirm Password: </label>
          <input type="password" onChange={(e) => setConfirm(e.target.value)} value={confirm} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
