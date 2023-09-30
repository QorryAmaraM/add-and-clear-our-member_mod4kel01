import React, { useState } from 'react';
import './App.css';

function App() {
  const [memberName, setMemberName] = useState('');
  const [members, setMembers] = useState([]);

  const handleNameChange = (e) => {
    setMemberName(e.target.value);
  };

  const handleSave = () => {
    if (memberName.trim() !== '') {
      setMembers([...members, memberName]);
      setMemberName('');
    }
  };

  const handleClear = () => {
    setMembers([]);
  };

  return (
    <div className="app">
      <h1>Add and Clear Our Members </h1>
      <h1>Kelompok 01</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Masukin namanye"
          value={memberName}
          onChange={handleNameChange}
        />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleClear}>Clear</button>
      <div className="member-list">
        <h2>Members:</h2>
        <ol>
          {members.map((member, index) => (
            <li key={index}> {member}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
