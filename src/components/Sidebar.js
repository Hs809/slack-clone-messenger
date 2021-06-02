import React,{ useContext } from 'react'
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebaritems} from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import db from '../Firebase';
import {useHistory} from 'react-router-dom';
import ThemeContext from '../context/ThemeContext'
import AppTheme from '../Color'

function Sidebar({rooms}) {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    const history = useHistory();

    const goToChannel = (id) => {
        if(id){
            history.push(`/room/${id}`)
        }
    }

    const addChannel = () => {
        const promptName = prompt("Enter channel name");
        if(promptName){
            db.collection('rooms').add({
                name:promptName
            })
        }

    }
    
    return (
        <Container style = {{
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
        }}>
            <WorkSpaceContainer>
                <Name style={{
                    color:`${currentTheme.textColor}`
                }}>
                    HiteshProgrammer
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkSpaceContainer>
            <MainChannels >
                {
                    sidebaritems.map(item => (
                        <MainChannelItem style={{
                            color:`${currentTheme.textColor}`
                        }}>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer >
                <NewChannelContainer style={{
                    color:`${currentTheme.textColor}`
                }}>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={addChannel}/>

                </NewChannelContainer>
                <ChannelLists style={{
                    color:`${currentTheme.textColor}`
                }}>
                    {
                        rooms.map(item => (
                            <Channel onClick={() => goToChannel(item.id)}>
                                # {item.name}
                            </Channel>
                        ))
                    }
                    
                </ChannelLists>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar
const Container = styled.div`
    

`
const WorkSpaceContainer = styled.div`
    color:white;
    height:64px;
    display:flex;
    align-items:center;
    padding-left:19px;
    justify-content:space-between;
    border-bottom:1px solid #532753;
    

`
const Name = styled.div`
@media(max-width:768px){
    margin-right:5px;
} 
`

const NewMessage = styled.div`
    width:36px;
    height:36px;
    background:white;
    border-radius:50%;
    color:#3F0E40;
    fill:#3F0E40;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:20px;
    cursor:pointer;

`
const MainChannels = styled.div`
    padding-top:20px;
`
const MainChannelItem = styled.div`
    color:rgb(188,171,188);
    display:grid;
    grid-template-columns:15% auto;
    height:28px;
    align-items:center;
    padding-left:19px;
    cursor:pointer;
    transition:0.5s;
    :hover{
        background:#12B0E8;
        transition:0.5s;
        transform: scale(1.008072);
    }
    
`
const ChannelsContainer = styled.div`
    color:rgb(188,171,188);
    margin-top:10px;
`
const NewChannelContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:28px;
    padding-left:19px;
    padding-right:19px;
   
`
const ChannelLists = styled.div`

`
const Channel = styled.div`
    height:28px;
    display:flex;
    align-items:center;
    padding-left:19px;
    cursor:pointer;
    transition:0.5s;
    :hover{
        background:#12B0E8;
        transition:0.5s;
        transform: scale(1.008072);
    }
`