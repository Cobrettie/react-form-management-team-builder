import React from 'react';
import './TeamMembers.css';

function TeamMembers(props) {
  console.log(props)
  return (
    <div>
      <h2 className='mainHeading'>Current Team Members</h2>
      <div className='memberCardsContainer'>
        {props.teamMembers.map(member => (
          <div key={member.id} className='memberCard'>
            <p className='memberInfo'>Name: {member.name}</p>
            <p className='memberInfo'>Email: {member.email}</p>
            <p className='memberInfo'>Role: {member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamMembers;