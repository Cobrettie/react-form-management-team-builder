import React from 'react';

const TeamMembers = props => {
  console.log(props)
  return (
    <div>
      <h2>Team Members</h2>
      {props.teamMembers.map(member => (
        <div key={member.id} className='member-card'>
          <p>Name: {member.name}</p>
          <p>Email: {member.email}</p>
          <p>Role: {member.role}</p>
        </div>
      ))}
    </div>
  )
}

export default TeamMembers;