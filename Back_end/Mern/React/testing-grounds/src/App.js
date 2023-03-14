
import './App.css';
import React from 'react';
import Button from './components/button';
import State from './components/state';
import UserForm from './components/form';
import ConditionalUserForm from './components/conditional-rendering';

function App() {
  return (
    <div className="App">
        <State />
        <Button />
        <UserForm />
        <ConditionalUserForm />
    </div>
  );
}

export default App;
