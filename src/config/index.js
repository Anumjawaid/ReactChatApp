import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyBfUibX0t0KmSlyqDWgsnjvr_l67wC6ICY",
    authDomain: "reactchatappbyaj.firebaseapp.com",
    databaseURL: "https://reactchatappbyaj.firebaseio.com",
    projectId: "reactchatappbyaj",
    storageBucket: "reactchatappbyaj.appspot.com",
    messagingSenderId: "301645684467",
    appId: "1:301645684467:web:c21e2f30d555a996786186",
    measurementId: "G-8PY08KX9YQ"
  };
firebase.initializeApp(firebaseConfig);
  
  export default firebase;