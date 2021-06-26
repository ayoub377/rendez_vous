import app from 'firebase/app'
import 'firebase/auth';

const configuration={
    apiKey: "AIzaSyD_q_lmSWh1-PhI3Sly-eB1tc49BW1P4K8",
    authDomain: "priserendezvous-55c91.firebaseapp.com",
    projectId: "priserendezvous-55c91",
    storageBucket: "priserendezvous-55c91.appspot.com",
    messagingSenderId: "356882389805",
    appId: "1:356882389805:web:0775c787a929ca0def91a4"
};

    class Firebase{

    constructor() {
        app.initializeApp(configuration)
        this.auth= app.auth();
    }

    signupuser = (email,password)=>
    this.auth.createUserWithEmailAndPassword(email,password);

    loginuser = (email,password)=> {
        this.auth.signInWithEmailAndPassword(email, password);
    }

    signout= ()=>{this.auth.signOut()};

    }

    export default Firebase;