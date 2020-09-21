import firebase from 'firebase/app';
import 'firebade/firestore';
import 'firebase/auth';

const config = {
  
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
