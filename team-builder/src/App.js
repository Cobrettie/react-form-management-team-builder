import React, { useState } from 'react';
import Form from './Components/Form';
import TeamMembers from './Components/TeamMembers/TeamMembers';
import './App.css';
import styled from 'styled-components';

const MainHeading = styled.h2`
  font-size: 32px;
  color: #373737;
`;

// { name: '', email: '', role: ''}

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: Date.now(),
      name: 'Cobrettie',
      email: 'test@yahoo.com',
      role: 'engineer'
    }
  ]);

  function addTeamMember(newTeamMember) {
    console.log('adding member', newTeamMember);
    setTeamMembers([...teamMembers, newTeamMember])
  }

  return (
    console.log(teamMembers),
    <div className="App">
      <MainHeading>Team Builder Application</MainHeading>
      <Form addTeamMember={addTeamMember} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
