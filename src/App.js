import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import db from './Firebase';
import {useEffect,useState} from 'react';
import {auth,provider} from './Firebase';
import SelectChannel from './components/SelectChannel';
import ThemeContext from './context/ThemeContext'

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const themeHook = useState("light");
  const [rooms,setRooms] = useState([]);


  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  const getChannels = () => {
    const newBaseRef = db.collection('rooms').onSnapshot((snap) => {
      setRooms(snap.docs.map((doc) => {
        return {id:doc.id, name:doc.data().name, }
      })
      
      )
    })

  }
  useEffect(() => { 
    getChannels()
  
  },[]);

  

  


  return (
    <div className="App">
      
      <Router>
        {
          !user ?
          <Login  setUser = {setUser}/>
          :
          <ThemeContext.Provider value = {themeHook}>
            
          
              <Container>
                <Header signOut={signOut}  user={user}/>
                <Main>
                  <Sidebar rooms={rooms} />
                  <Switch>
                    <Route path ="/room/:channelId">
                      <Chat user={user} />
                    </Route>
                    <Route path="/">
                      <SelectChannel />
                    </Route>
                  </Switch>
                  </Main>
              </Container>
          </ThemeContext.Provider>
        } 
      </Router>
       
    </div>
  );
}

export default App;

const Container = styled.div`
  width:100%;
  height:100vh;
  display:grid;
  grid-template-rows:38px minmax(0,1fr);
`

const Main = styled.div`
  display:grid;
  grid-template-columns:260px auto;

`