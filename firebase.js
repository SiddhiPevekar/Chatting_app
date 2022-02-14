import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyCBYxvGDtHnvfysjWz388Nq_duWUjOSOq0",
    authDomain: "whatsapp-clone-7bbf6.firebaseapp.com",
    projectId: "whatsapp-clone-7bbf6",
    storageBucket: "whatsapp-clone-7bbf6.appspot.com",
    messagingSenderId: "1075164849847",
    appId: "1:1075164849847:web:abf1bbc42909da7cc54f32"
  };

const  app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = db.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };