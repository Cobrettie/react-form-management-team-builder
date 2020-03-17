import React, { useState } from 'react';
import Form from './Components/Form';
import './App.css';

// { name: '', email: '', role: ''}

const App = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form />
    </div>
  );
}

export default App;
