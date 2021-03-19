// For Firebase JS SDK v7.20.0 and later, measurementId is optionalim
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAqUkn5v8zTPZ2nnemu9f7IGScKYOtG0P4",
  authDomain: "clone-fd425.firebaseapp.com",
  databaseURL: "https://clone-fd425.firebaseio.com",
  projectId: "clone-fd425",
  storageBucket: "clone-fd425.appspot.com",
  messagingSenderId: "235623740432",
  appId: "1:235623740432:web:26d1ac9d0120f7c8df8695",
  measurementId: "G-MTZ3CYCXX6",
};

//initialize the firebaseApp
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };