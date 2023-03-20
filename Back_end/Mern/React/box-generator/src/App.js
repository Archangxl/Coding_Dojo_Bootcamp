import React, {useState} from 'react';


function App() {
  const [color, setColor] = useState("");
  const [box, setBox] = useState();
  const inputs = [];
  const display = [];
  const onCreate = (e) => {
    e.preventDefault();

    inputs.push(color);
    setColor("");
    
    return (
      <div>
      {
        inputs.map((item) => setBox(<div style={{
          background: item,
          display: 'flex',
          height: '50px',
          width: '50px'
        }}></div>)
        )
      }
      </div>
    );
  } 

  return (
    <div>

      <form onSubmit={ onCreate }>
        <div>
          <label>Color: </label>
          <input type="text" onChange={ (e) => setColor(e.target.value) } value={color}/>
          <button>Add</button>
        </div>
      </form>
      {box}

    </div>
  );
}

export default App;
