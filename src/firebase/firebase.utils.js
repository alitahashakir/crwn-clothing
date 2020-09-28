import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD3F_dg2uJpoDA250qdSY3Q3okBjBpBEW4",
    authDomain: "crwn-db-ac6bf.firebaseapp.com",
    databaseURL: "https://crwn-db-ac6bf.firebaseio.com",
    projectId: "crwn-db-ac6bf",
    storageBucket: "crwn-db-ac6bf.appspot.com",
    messagingSenderId: "793669411702",
    appId: "1:793669411702:web:411289bf30623d92871057",
    measurementId: "G-XFCSMRYENX"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;