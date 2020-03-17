import React, {useState} from 'react';

const Form = (props) => {
  const [user, setUser] = useState({ name: '', email: '', role: ''});

  const handleChange = event => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    setUser({name: '', email: '', role: ''})
  }

  console.log(user)

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input 
            type='text'
            name='name'
            value={user.name}
            onChange={event => {handleChange(event)}}
          />
        </label>
        <label>
          Email:
          <input 
            type='email'
            name='email'
            value={user.email}
            onChange={event => {handleChange(event)}}
          />
        </label>
        <label>
          Role:
          <input 
            type='text'
            name='role'
            value={user.role}
            onChange={event => {handleChange(event)}}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;