import React from 'react'
import styled from 'styled-components'
import {auth,provider} from '../Firebase'

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const newUser ={
                name:result.user.displayName,
                photo:result.user.photoURL,
            }
            localStorage.setItem('user',JSON.stringify(newUser))
            props.setUser(newUser)

        })
        .catch((error) => {
            alert(error.message)
        })

    }
    

    return (
        <Container>
            <Content>
                <SlackImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnewcastlebeach.org%2Fimages%2Fslack-logo-transparent-9.png&f=1&nofb=1" />
                <h1>Sign In Slack</h1>
                <SignInButton onClick={() => signIn()} >
                    Sign in 
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width:100%;
    height:100vh;
    background:#f8f8f8;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Content = styled.div`
    background:white;
    padding:100px;
    border-radius:5px;
    box-shadow:0 1px 3px rgb(0 0 0 /12%), 0 1px 2px rgb(0 0 0 /24%);
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const SlackImg = styled.img`
    width:300px;

`
const SignInButton = styled.button`
    margin-top:50px;
    background-color:#0a8d48;
    color:white;
    border:none;
    height:40px;
    border-radius:5px;
    cursor:pointer;
    font-size:15px;
    padding:10px 30px;

`;