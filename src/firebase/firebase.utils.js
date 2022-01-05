import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBTZeKM6VpxFsQPHKcV0mtgsra-Q3XcmEc",
    authDomain: "crwn-db-d6e87.firebaseapp.com",
    projectId: "crwn-db-d6e87",
    storageBucket: "crwn-db-d6e87.appspot.com",
    messagingSenderId: "772516199871",
    appId: "1:772516199871:web:4b0d88b6640b51e181f50a",
    measurementId: "G-QNFVMQ5STM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;