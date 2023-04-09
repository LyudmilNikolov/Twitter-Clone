import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJs7WWize9qd4Bk09OSzAv-2rf-fVhu4I",
    authDomain: "twitter-clone-3ad92.firebaseapp.com",
    projectId: "twitter-clone-3ad92",
    storageBucket: "twitter-clone-3ad92.appspot.com",
    messagingSenderId: "235366606870",
    appId: "1:235366606870:web:d1f9349fe5a1d4ff67ad37"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;