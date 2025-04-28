import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetData = async () => {
      const response = await fetch('/data.json'); // <-- notice /
      const data = await response.json();
      console.log(data);
      setData(data);
    };
    fetData();
  }, []);

  const employeelist = () => {
    return data.map((employee,index) => (
      <span>{employee.firstName}</span>
    ))
  }

  return (
    <>
      <div>
        <header className="header">Employee List</header>
        <div style={{ width: '200px', height: "200px", border: "2px solid black" }}>
          {employeelist()}
        </div>
      </div>
      <div>
        <header className="header">Employee Info</header>
        <div style={{ width: '200px', height: "200px", border: "2px solid black" }}></div>
      </div>
    </>
  );
}

export default App;
