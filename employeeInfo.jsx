import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState([])

  useEffect(() => {
    const fetData = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      setData(data);
    };
    fetData();
  }, []);

  const itemSelect = (args) => {
    setName(args)
  };

  const employeelist = () => {
    return data.map((employee,index) => (
      <span onClick={()=>itemSelect(employee)}>{employee.firstName}</span>
    ))
  };

  return (
    <>
    <form>
      <label>Enter name</label>
      <input></input>
      <label>last name</label>
      <input></input>
      </form>
      <div>
        <header className="header">Employee List</header>
        <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', width: '200px', height: "200px", border: "2px solid black" }}>
          {employeelist()}
        </div>
      </div>
      <div>
        <header className="header">Employee Info</header>
        <div style={{ width: '200px', height: "200px", border: "2px solid black" }}>
          <span>{name.firstName}</span>
          <img src={name.imageUrl} style={{height: '100px', width: '100px'}}></img>
        </div>
      </div>
    </>
  );
}

export default App;
