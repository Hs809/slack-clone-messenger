import React,{useEffect,useState, useContext} from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import styled from 'styled-components';
import InfoIcon from '@material-ui/icons/Info';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import db from '../Firebase'
import { useParams } from "react-router-dom";
import firebase from 'firebase';


function Chat({user})     {
    // console.log("Name"+user.name);
    // console.log("Photo"+user.photo);

   
    let { channelId } = useParams();
    const [channel,setChannel] = useState();
    const [messages,setMessages] = useState([]);

    const getMessages = () => {
        db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot((snapshot) => {
            let messages = snapshot.docs.map((doc) => doc.data());
            setMessages([...messages]);
        })
    }
   

   const sendMessage = (text) => {
        if(channelId){
            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo,
            }
            console.log(payload);
            db.collection("rooms").doc(channelId).collection('messages').add(payload);
        }
    }

    const getChannel = () => {
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snap) => {
            setChannel(snap.data());
        })
    }
    // console.log(channel.name);
    
    useEffect(() => {
        getChannel();
        getMessages();
    }, [channelId])
    
    return (
        <Container>
            
            <ChatHeaderContainer>
                <ChatHeader1>
                    <Title>
                        <h3> #{channel && channel.name} </h3>
                        <StarBorderIcon />
                    </Title>
                    <TitleDescription>
                        <p>Company-wide announcements and work-based matters</p>
                    </TitleDescription>
                </ChatHeader1>
                <ChatDetail>
                    <div>Details</div>
                        <InfoIcon />
                </ChatDetail>
            </ChatHeaderContainer>
            <MessageContainer>
            {
                    messages.length > 0 &&
                    messages.map((data, index)=>(

                        <ChatMessage
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    ))
             }
            </MessageContainer>
            <ChatInput sendMessage = {sendMessage}/>
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display:grid;
    grid-template-rows:64px auto min-content;
    background:#fff;
    min-height:0;

    
`
const ChatHeaderContainer = styled.div`
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid rgba(83,39,83,.13);
    
`
const ChatHeader1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 19px;
`
const Title = styled.div`
    display:flex;   
`
const TitleDescription = styled.div`
    font-size: 14px;
    color: #b0b0b0;
    margin-top:8px;
`
const ChatDetail = styled.div`
    display:flex;
    align-items:center;
    color:#606060;
    margin-right: 19px;
    div{
        font-size:16px;
        margin-right:19px;
        color:darkgrey;
        font-weight:200;
    }
    
`

const MessageContainer = styled.div`
    display:flex;
    flex-direction:column;
    overflow-y:scroll;
    background-image: url(/images/image2.png);
    background-size:400px;
    background-repeat:no-repeat;
    background-position: center;
`
