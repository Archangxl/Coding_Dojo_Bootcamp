import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person lastName={"Doe"} firstName={"Jane"} age={45} hairColor={"Black"} />
      <Person lastName={"Smith"} firstName={"John"} age={88} hairColor={"Brown"} />
    </div>
  );
}

export default App;
