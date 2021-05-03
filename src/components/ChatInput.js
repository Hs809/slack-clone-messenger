import React, {useState}     from 'react'
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import CallIcon from '@material-ui/icons/Call';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function ChatInput({sendMessage}) {
    const [input,setInput] = useState('');

    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input)
        setInput("")
    }
    


    return (
        <Container>
            <InputContainer>
                <form >
                    <Input>
                    <input onChange= {(e) => setInput(e.target.value)} id = "inputvalue" value={input} type="text" placeholder="Message"/>
                    </Input>
                    <ButtonContainer>
                        <EditButtons>
                            <FlashIcon onClick={(e)=> {  document.getElementById("inputvalue").style = "font-weight:300;"}} />
                            <FormatBIcon onClick={()=> {  document.getElementById("inputvalue").style = "font-weight:bold; "}} />
                            <FormatIIcon onClick={()=> {  document.getElementById("inputvalue").style = "font-style:italic;"}} />
                            <Strike  />
                            <Codeicon />
                            <Linkicon />
                            <FormatListO />
                            <FormatListB />

                        </EditButtons>
                        <MoreEditButton>
                            <Arrow />
                            <Call />
                            <Sentiment />
                            <Attach />

                            <SendButton type= "submit" onClick={send}>
                                <Send />
                            </SendButton>
                        </MoreEditButton>
                        
                        
                    </ButtonContainer>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding:0px 20px 24px 20px;
    border-radius:10px;
    width:80%;
    box-shadow: 0px 15px 30px 34px #e6e6e6;
    margin-bottom:10px;
    margin-left:50px;
    
`
const InputContainer = styled.div`
    border:none;
    background:#fff;
    height:80px;
    box-shadow::
    form{
        
        align-items:center;
        justify-content:space-between; 
    }
`
const Input = styled.div`
    border-bottom:2px solid rgb(97,96,97);
    input{
        flex:1;
        border:none;
        font-size:20px;
        padding-left:19px;
        padding-top:10px;
        padding-bottom:10px;
        background:#fff;
        width:90%;
    }
    input:focus{
        outline:none;
    }
`;
const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    background:#fff;
`;
const SendButton = styled.button`  
    background:#007a5a;
    border-radius:2px;
    width:32px;
    height:32px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:5px;
    cursor:pointer;
    transition:0.3s;
    border:none;
    .MuiSvgIcon-root{
        width:18px;
    }
    :hover{
        background:#148567;
        transition:0.3s;
    }
`
const Send = styled(SendIcon)`
    color:#D9D9D9;

`
const FlashIcon = styled(FlashOnOutlinedIcon)`
    margin:5px;
    border-radius:5px;
    transition:0.3s;
    :hover{
        background:#5374F8;
        transition:0.3s;
    }
`
const FormatBIcon = styled(FormatBoldIcon)`
    margin:5px;
    border-radius:5px;
    transition:0.3s;
    :hover{
        background:#5374F8;
        transition:0.3s;
    }
`
const FormatIIcon = styled(FormatItalicIcon)`
    margin:5px;
    border-radius:5px;
    transition:0.3s;
    :hover{
        background:#5374F8;
        transition:0.3s;
    }
    :active{
        background:#5374F8;
    }
`
const Strike = styled(StrikethroughSIcon)`
    margin:5px;
    border-radius:5px;
    transition:0.3s;
    :hover{
        background:#5374F8;
        transition:0.3s;
    }
`
const Codeicon = styled(CodeIcon)`
    margin:5px;
    border-radius:5px;
    transition:0.3s;
    :hover{
        background:#5374F8;
        transition:0.3s;
    }
`
const Linkicon = styled(LinkIcon)`
    margin:5px;
    border-radius:5px;
    transition:0.3s;
    :hover{
        background:#5374F8;
        transition:0.3s;
    }
`
const FormatListO = styled(FormatListNumberedIcon)`
    margin:5px;
    border-radius:5px;
    transition:0.3s;
    :hover{
        background:#5374F8;
        transition:0.3s;
    }
`
const FormatListB = styled(FormatListBulletedIcon)`
    margin:5px;
    border-radius:5px;
    transition:0.3s;
    :hover{
        background:#5374F8;
        transition:0.3s;
    }
`


const Arrow = styled(ArrowDropDownCircleIcon)`
    margin:5px;
    border-radius:5px;
    transition:0.3s;
    :hover{
        background:#5874E8;
        transition:0.3s;
    }
`
const Call = styled(CallIcon)`
    margin:5px;
    border-radius:5px;
    transition:0.3s;
    :hover{
        background:#5874E8;
        transition:0.3s;
    }
`
const Sentiment = styled(SentimentVerySatisfiedIcon)`
    margin:5px;
    border-radius:5px;
    transition:0.3s;
    :hover{
        background:#5874E8;
        transition:0.3s;
    }
`
const Attach = styled(AttachFileIcon)`
    margin:5px;
    border-radius:5px;
    transition:0.3s;
    :hover{
        background:#5874E8;
        transition:0.3s;
    }
`



const EditButtons = styled.div``;
const MoreEditButton = styled.div`
    display:flex;
    align-items:center;
`;
