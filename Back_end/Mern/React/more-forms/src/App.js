import './App.css';
import React, {useState} from 'react';


function App() {

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const firstNameValidation = (e) => {
    setFirstName(e.target.value);
    if (firstName.length < 2) {
      return setFirstNameError("First Name must be at least 2 characters!");
    } else {
      return setFirstNameError("");
    }
  }

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const lastNameValidation = (e) => {
    setLastName(e.target.value);
    if (lastName.length < 2) {
      return setLastNameError("Last Name must be at least 2 characters!");
    } else {
      return setLastNameError("");
    }
  }

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const emailValidation = (e) => {
    setEmail(e.target.value);
    if (email.length < 2) {
      return setEmailError("Email must be at least 2 charaters!");
    } else {
      return setEmailError("");
    }
  }

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const passwordValidation = (e) => {
    setPassword(e.target.value);
    if (password.length < 2) {
      setPasswordError("Password must be at leaset 2 characters!");
    } else {
        return setPasswordError("");
    }
  }

  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const confirmValidation = (e) => {
    console.log(password)
    setConfirm(e.target.value);
    if (password !== confirm) {
      return setConfirmError("Passwords must match!");
    } else {
      return setConfirmError("");
    }
  }


  return (
    <div className="App">
      <form>
        <div>
          <label>First Name: </label>
          <input type="text" onChange={ firstNameValidation } value={firstName} />
          { firstNameError ? <p><b>{firstNameError}</b></p> : null }
        </div>

        <div>
          <label>Last Name: </label>
          <input type="text" onChange={ lastNameValidation } value={lastName} />
          { lastNameError ? <p><b>{lastNameError}</b></p> : null }
        </div>

        <div>
          <label>Email: </label>
          <input type="text" onChange={ emailValidation } value={email} />
          { emailError ? <p><b>{emailError}</b></p> : null }
        </div>

        <div>
          <label>Password: </label>
          <input type="password" onChange={ passwordValidation } value={password} />
          { passwordError ? <p><b>{passwordError}</b></p> : null }
        </div>

        <div>
        { confirmError ? <p><b>{confirmError}</b></p> : null }
          <label>Confirm Password: </label>
          <input type="password" onChange={ confirmValidation } value={confirm} />
        </div>

      </form>
    </div>
  );
}

export default App;
