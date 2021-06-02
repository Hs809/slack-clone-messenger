import React, { useContext } from 'react'
import styled from 'styled-components';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ThemeContext from '../context/ThemeContext'
import AppTheme from '../Color'

function Header({user, signOut}) {
    const theme =  useContext(ThemeContext)[0]
    const currentTheme = AppTheme[theme]
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    return (
        <Container style = {{
            backgroundColor: `${currentTheme.backgroundColor}`
        }}>
            <button
            style = {{
                border: "none",
                padding: "7px 15px",
                cursor: "pointer",
                backgroundColor: "#23C4ED",
                position: "absolute",
                left: "10px",
                color: `${currentTheme.backgroundColor}`,
                borderRadius: "5px",
                   


            

            }}
               onClick = {() => {setThemeMode(themeMode === "light" ? "dark" : "light");}}
            >{themeMode === "light" ? "Dark Theme" : "Light Theme"}</button>
            <Main>
                <AccessAlarmIcon style={{
                    color:`${currentTheme.textColor}`
                }} />
                <SearchContainer>
                    <Search >
                        <input type="text" placeholder="Search..."/>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon  style={{
                    color:`${currentTheme.textColor}`
                }}/>

            </Main>
            <UserContainer>
                <Name style={{
                    color:`${currentTheme.textColor}`
                }}>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo} />
                </UserImage>
            </UserContainer>

        </Container>
    )
}

export default Header

const Container = styled.div`
    display:flex;
    background:#0B173B;
    color:white;
    align-items:center;
    justify-content:center;
    position:relative;
    z-index:10;
    box-shadow:0 1px 0 0 rgb(255 255 255 / 10%);
    
`
const UserContainer = styled.div`
    display:flex;
    align-items:center;
    padding-right:16px;
    position:absolute;
    right:0;
   

`

const Main = styled.div`
    display:flex;
    margin-right:16px;
    margin-left:16px;
`
const SearchContainer = styled.div`
    min-width:400px;
    margin-left:16px;
    margin-right:16px;
   
`
const Search = styled.div`
    width:100%;
    box-shadow:inset 0 0 0 1px rgb(104 74 104);
    border-radius:6px;
    display:flex;
    align-items:center;

    input{
        background:transparent;
        border:none;
        padding-left:8px;
        padding-right:8px;
        padding-top:4px;
        padding-bottom:4px;
        color:white;
    }
    input:focus{
        outline:none;
    }
`
const Name = styled.div`
    padding-right:16px;

`
const UserImage = styled.div`
    width:28px;
    height:28px;
    border:2px solid white;
    border-radius:3px;
    img{
        width:100%;
    }
    cursor:pointer;
`