import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

function Signup() {

  const navigate = useNavigate()
  
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("")

  const currentUser = sessionStorage.getItem("user_id")

  useEffect(() => {
    if (currentUser) {
     navigate("/topics")
    } 
  },[currentUser, navigate])

  function signupClick(e) {
    e.preventDefault()
    fetch('/signup', {
      method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: userEmail, password: userPassword, password_confirmation: confirmPw })
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => window.sessionStorage.setItem("user_id", data.id))
                .then(() => navigate("/topics"))
                .then(window.location.reload())
            }
            else {
                console.log("invalid")

            }
        })
    }

  return (
    <>
    <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
      <Form size='large'>
        <Segment stacked>
      <Header as='h2' color='blue' textAlign='center'>
        Signup for an account
      </Header>
          <Form.Input 
            fluid 
            icon='user' 
            iconPosition='left' 
            placeholder='E-mail address' 
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={(e) => setUserPassword(e.target.value)}
          />
           <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            onChange={(e) => setConfirmPw(e.target.value)}
            type="password"
            name="confirmPW"
            placeholder="Confirm Password"
          />

          <Button color='blue' fluid size='large' onClick={signupClick}>
            Login
          </Button>
        </Segment>
      </Form>
      <Message 
        onClick={()=>navigate('/login')} 
        className="ui submit button"
      >
        Already have an account? Login
      </Message>
    </Grid.Column>
  </Grid>
    </>
  );
}

export default Signup;
