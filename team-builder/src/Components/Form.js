import React, {useState} from 'react';

const Form = (props) => {
  const [user, setUser] = useState({ name: '', email: '', role: ''});

  const handleChange = event => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.addTeamMember({...user, id: Date.now()})
    setUser({name: '', email: '', role: ''})
  }

  console.log(user)

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type='text'
            name='name'
            value={user.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input 
            type='email'
            name='email'
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <input 
            type='text'
            name='role'
            value={user.role}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Form;