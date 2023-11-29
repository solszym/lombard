import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCwa0iiRFSNyP-28FuQ4peNFc9famu2L7c",
  authDomain: "testlombard-7916e.firebaseapp.com",
  projectId: "testlombard-7916e",
  storageBucket: "testlombard-7916e.appspot.com",
  messagingSenderId: "772053374488",
  appId: "1:772053374488:web:225e2c3f8c4246afc9d56d"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
getFirestore(firebaseApp);
getAuth(firebaseApp);
