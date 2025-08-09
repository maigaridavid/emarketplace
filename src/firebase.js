// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeJJ_GbRzn3f-fqYEY6mCYuOK2-nIuy8w",
  authDomain: "emarketplaceshop.firebaseapp.com",
  projectId: "emarketplaceshop",
  storageBucket: "emarketplaceshop.firebasestorage.app",
  messagingSenderId: "775607436688",
  appId: "1:775607436688:web:35dfbbab4a864a9e059f15",
  measurementId: "G-7MWXQ952V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);