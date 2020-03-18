import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
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
    <div className="App">
      <Nav />
      <MainHeading>Team Builder Application</MainHeading>
      {/* <Form addTeamMember={addTeamMember} /> */}
      {/* <TeamMembers teamMembers={teamMembers} /> */}

      <Route 
        exact path='/'  
        render={() => <Form addTeamMember={addTeamMember} />}
      />
      <Route
        exact path='teammembers'
        render={() => <TeamMembers teamMembers={teamMembers} />}
      />
    </div>
  );
}

export default App;
