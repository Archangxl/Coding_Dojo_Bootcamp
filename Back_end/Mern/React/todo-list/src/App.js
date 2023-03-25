import './CSS/style.css'
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import React, {useState} from 'react';
import './CSS/style.css'

function App() {

  const [appReceivingFormTaskArrary, setAppReceivingFormTaskArray] = useState([]);

  return (
    <>
      <header className="flex">
        <h1>Checklist</h1>
      </header>

      <main>
        <div className="flex">
          <Form tansferTaskArray={ appReceivingFormTaskArrary } setTransferTaskArray={ setAppReceivingFormTaskArray } />
        </div>
        <div className="flex">
          <Display displayCompRecievingTaskArrayFromApp={ appReceivingFormTaskArrary } setDisplayCompRecievingTaskArrayFromApp={ setAppReceivingFormTaskArray } />
        </div>
      </main>
    </>
  );
}

export default App;
