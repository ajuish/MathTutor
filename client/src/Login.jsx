import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")

    const currentUser = sessionStorage.getItem("user_id")

    useEffect(() => {
      if (currentUser) {
       navigate("/topics")
      } 
    },[currentUser, navigate])

    // function handleSignup() {
    //   navigate("/signup")
    // }

    function handleLogIn(e) {
        e.preventDefault()
        fetch('/login',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => window.sessionStorage.setItem("user_id", data.id))
                .then(() => navigate("/topics"))
                .then(window.location.reload())
            }
            else {
                setErrors("Invalid email or password")
            }
        })
    }

  return (
    <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
      <Form size='large'>
        <Segment stacked>
      <Header as='h2' color='blue' textAlign='center'>
        Log-in to your account
      </Header>
          <Form.Input 
            fluid 
            icon='user' 
            iconPosition='left' 
            placeholder='E-mail address' 
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button color='blue' fluid size='large' onClick={handleLogIn}>
            Login
          </Button>
        </Segment>
      </Form>
      <Message 
        onClick={()=>navigate('/signup')} 
        className="ui submit button"
        >
        Don't have an account? Sign Up
      </Message>
      <h3 className="error">{errors}</h3>
    </Grid.Column>
  </Grid>
  )
}

export default Login