import React, {useState} from 'react';
import Form from './components/form';
import Display from './components/display';

function App() {
  const [arrayTransferred, setArrayTransferred] = useState([]);

  return (
    <>
      <Form transferingArray={ arrayTransferred } setTransferingArray={ setArrayTransferred }/>
      <Display receivedArray={arrayTransferred} />
    </>
  )
}

export default App;
