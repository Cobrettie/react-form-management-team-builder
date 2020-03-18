import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  // border: 1px solid #373737;
  border-radius: 5px;
  width: 30%;
  margin: 0 auto;
  background-color: #fafafa;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const FormHeader = styled.h2`
  color: #373737;
`;

const Label = styled.label`
  font-size: 20px;
`;

const Input = styled.input`
  margin: 20px 0 0 20px;
  border-radius: 5px;
`;

const Button = styled.button`
  margin: 20px 0;
  font-size: 20px;
  border-radius: 5px;
`;

function Form(props) {
  const [user, setUser] = useState({ name: '', email: '', role: ''});

  function handleChange(event) {
    setUser({...user, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTeamMember({...user, id: Date.now()})
    setUser({name: '', email: '', role: ''})
  }

  console.log(user)

  return (
    <div>
      <FormHeader>Register</FormHeader>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit}>
          <Label>
            Name:
            <Input 
              type='text'
              name='name'
              value={user.name}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Email:
            <Input 
              type='email'
              name='email'
              value={user.email}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Role:
            <Input 
              type='text'
              name='role'
              value={user.role}
              onChange={handleChange}
            />
          </Label>
          <Button type='submit'>Submit</Button>
        </StyledForm>
      </FormContainer>
    </div>
  )
}

export default Form;