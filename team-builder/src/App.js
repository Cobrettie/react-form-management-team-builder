import React, { useState } from 'react';
import Form from './Components/Form';
import './App.css';

// { name: '', email: '', role: ''}

const App = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'Cobrettie',
      email: 'test@yahoo.com',
      role: 'engineer'
    }
  ]);

  const addTeamMember = newTeamMember => {
    console.log('adding member', newTeamMember);
    setTeamMembers([...teamMembers, newTeamMember])
  }

  return (
    console.log(teamMembers),
    <div className="App">
      <h1>Team Builder</h1>
      <Form addTeamMember={addTeamMember} />
    </div>
  );
}

export default App;
