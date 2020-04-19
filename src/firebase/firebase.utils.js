import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyAZlPSR6GNoPFNo1krkMiOUQ9jZyMSz4og",
    authDomain: "experimental-react.firebaseapp.com",
    databaseURL: "https://experimental-react.firebaseio.com",
    projectId: "experimental-react",
    storageBucket: "experimental-react.appspot.com",
    messagingSenderId: "233530471284",
    appId: "1:233530471284:web:a1ef48292e0078e5e97221",
    measurementId: "G-F11R53FQXR"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if ( !userAuth ) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('error creating user ', error.message);
        }
    }

    return userRef;
    
}

firebase.initializeApp(config);



export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;