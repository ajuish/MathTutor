import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react'

function Profile() {

  const navigate = useNavigate()
  
  const [userEmail, setUserEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [errors, setErrors] = useState("")

  const currentUser = sessionStorage.getItem("user_id")

  useEffect(() => {
    if (currentUser == null) {
     navigate("/login")
    } 
  },[currentUser, navigate])

  function updateEmail(e) {
    e.preventDefault()
    if (userEmail)
        if (userEmail === confirmEmail)
            fetch(`/users/${currentUser}`, {
            method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: userEmail})
                    // , password: userPassword, password_confirmation: confirmPw })
                })
                .then(r => {
                    if (r.ok) {
                        r.json()
                        .then(data => console.log(data))
                        .then(window.location.reload())
                    
                    }
                    else {
                        setErrors("Invalid Email")

                    }
                })
    }

    function updatePassword(e) {
        e.preventDefault()

            fetch(`/users/${currentUser}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ password: userPassword, password_confirmation: confirmPw })
            })
                .then(r => {
                    if (r.ok) {
                        r.json()
                        .then(data => console.log(data))
                        .then(window.location.reload())
                    }
                    else {
                        setErrors("Passwords don't match")
                    }
                })
        }
    
    function deleteAccount(){
        fetch(`users/${currentUser}`,{
            method: 'DELETE'
        })
        .then(resp=>resp.json())
        .then(navigate('/'))
        .then(sessionStorage.clear())
        .then(window.location.reload())
    }

  return (
    <div>
    <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
    {/* <Card.Group className='ui centered grid'> */}
        {/* <Card> */}
        <Form size='large'>
            <Segment stacked>
            <Header as='h2' color='blue' textAlign='center'>
                Update E-mail Address
            </Header>
            <Form.Input 
                fluid 
                icon='user' 
                iconPosition='left' 
                placeholder='Change E-mail address' 
                onChange={(e) => setUserEmail(e.target.value)}
            />
            <Form.Input 
                fluid 
                icon='user' 
                iconPosition='left' 
                placeholder='Confirm E-mail' 
                onChange={(e) => setConfirmEmail(e.target.value)}
            />
            <Button color='blue' fluid size='large' onClick={updateEmail}>
                Update Email Address
            </Button>
            </Segment>
        </Form>
        {/* </Card> */}
        {/* <Card> */}
        <br></br>
            <Form size='large'>
                <Segment stacked>
                <Header as='h2' color='blue' textAlign='center'>
                    Update Password
                </Header>
                    <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='New Password'
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
                    placeholder="Confirm New Password"
                />

                <Button color='blue' fluid size='large' onClick={updatePassword}>
                    Update Password
                </Button>
                </Segment>
            </Form>
            <br></br>
            <Form size='large'>
                <Segment stacked>
                <Header as='h2' color='red' textAlign='center'>
                    Delete Account
                </Header>
                <Button color='red' fluid size='large' onClick={deleteAccount}>
                    Delete Account
                </Button>
                </Segment>
            </Form>
        {/* </Card> */}
      {/* </Card.Group> */}
    </Grid.Column>
   </Grid>
    </div>
  )
}

export default Profile