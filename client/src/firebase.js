import firebase from 'firebase'

// Initialize Firebase
const config = {
  // apiKey: "AIzaSyC2rf7NT_vVD9E7-CFAPAsLExJG0IPGxf8",
  // authDomain: "trove-app.firebaseapp.com",
  // databaseURL: "https://trove-app.firebaseio.com",
  // projectId: "trove-app",
  // storageBucket: "trove-app.appspot.com",
  // messagingSenderId: "50556960736"
  apiKey: "AIzaSyBk9XOyCP38nIH6gfdnOUN2lFB_wHD1EHI",
  authDomain: "troveplusplus.firebaseapp.com",
  databaseURL: "https://troveplusplus.firebaseio.com",
  projectId: "troveplusplus",
  storageBucket: "",
  messagingSenderId: "118710711934"
}; 

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;