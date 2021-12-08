import {initializeApp} from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseApp={
    apiKey: "AIzaSyDl2BsHoI-r5uajqk9Mc9bmtZlaIQylH2Q",
    authDomain: "list-342a0.firebaseapp.com",
    databaseURL: "https://list-342a0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "list-342a0",
    storageBucket: "list-342a0.appspot.com",
    messagingSenderId: "317463230499",
    appId: "1:317463230499:web:667e4a0d78ee8d463ad996"
};

const app =initializeApp(firebaseApp);
export const db=getFirestore(app);


