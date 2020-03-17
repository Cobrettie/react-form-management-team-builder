import React, { useState } from 'react';
import Form from './Components/Form';
import TeamMembers from './Components/TeamMembers';
import './App.css';

// { name: '', email: '', role: ''}

const App = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: Date.now(),
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
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
