import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHXVIXfkDbcmhuABPTS0VX0y8M-F72Lx4",
    authDomain: "slack-messenger-6a320.firebaseapp.com",
    projectId: "slack-messenger-6a320",
    storageBucket: "slack-messenger-6a320.appspot.com",
    messagingSenderId: "223629788583",
    appId: "1:223629788583:web:eeade456714058beb12282"
  };




const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider};
export default db;