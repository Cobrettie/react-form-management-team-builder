import React from 'react';

const TeamMembers = props => {
  console.log(props)
  return (
    <div>
      <h2>Team Members</h2>
      {props.teamMembers.map(member => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  )
}

export default TeamMembers;