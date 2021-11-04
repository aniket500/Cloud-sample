let firebaseConfig = {
    // Enter your firebase credentials
apiKey: "AIzaSyC7kLBLiQK9V-texUdq0N0OQ6ikJeGZh4c",
  authDomain: "cloudia-49a2a.firebaseapp.com",
  projectId: "cloudia-49a2a",
  storageBucket: "cloudia-49a2a.appspot.com",
  messagingSenderId: "465113473884",
  appId: "1:465113473884:web:c6f71e9f741afd20f2d799",
  measurementId: "G-BSDDPH38XT"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();