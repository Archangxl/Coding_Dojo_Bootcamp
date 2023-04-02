
import './App.css';
import React from 'react';
import Button from './components/button';
import State from './components/state';
import UserForm from './components/form';
import ConditionalUserForm from './components/conditional-rendering';
import TestDom from './components/testingDom';
import Promises from './components/Promises';

function App() {
    return (
        <div className=" m-5 d-flex justify-content-center">
            <h1>Hello</h1>
            <button className="btn border border-dark">Click Me</button>
        </div>
    );
}

export default App;
