import React from 'react'
import styled from 'styled-components';
import db from '../Firebase'
import AddIcon from '@material-ui/icons/Add';

function SelectChannel() {

    const addChannel = () => {
        const promptName = prompt("Enter channel name");
        if(promptName){
            db.collection('rooms').add({
                name:promptName
            })
        }

    }

    return (
        <Container>
            <h1>Welcome to my Slack Clone - choose or create a channel to your left</h1>
            <AddI onClick={addChannel}/>
        </Container>
    )
}

export default SelectChannel;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-image: url(/images/image.svg);
    background-size:cover;
    background-repeat:no-repeat;
    background-position: center;
    h1{
        font-size:20px;
        font-weight:400;
        
    }
`;

const AddI = styled(AddIcon)`
    font-size: 50px;
    margin-top: 19px;
    color: white;
`
